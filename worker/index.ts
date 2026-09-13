import { EmailMessage } from "cloudflare:email";
import { createMimeMessage, Mailbox } from "mimetext";

interface Env {
  ASSETS: Fetcher;
  CONTACT_EMAIL: SendEmail;
}

const SENDER_ADDRESS = "contact@apexplenitude.com";
const RECIPIENT_ADDRESS = "alphaquerencia@gmail.com";

interface ContactPayload {
  name?: string;
  email?: string;
  channel?: string;
  message?: string;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const channel = (payload.channel ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !channel || !message) {
    return json({ error: "All fields are required." }, 400);
  }

  const msg = createMimeMessage();
  msg.setSender({ name: "Apex Plenitude — Contact Form", addr: SENDER_ADDRESS });
  msg.setRecipient(RECIPIENT_ADDRESS);
  msg.setHeader("Reply-To", new Mailbox(email));
  msg.setSubject(`Contact — ${channel} — ${name}`);
  msg.addMessage({
    contentType: "text/plain",
    data: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Channel: ${channel}`,
      "",
      message,
    ].join("\n"),
  });

  const emailMessage = new EmailMessage(SENDER_ADDRESS, RECIPIENT_ADDRESS, msg.asRaw());

  try {
    await env.CONTACT_EMAIL.send(emailMessage);
  } catch (err) {
    return json(
      { error: err instanceof Error ? err.message : "Failed to send email." },
      502
    );
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
