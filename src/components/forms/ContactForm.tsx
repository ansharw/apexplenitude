"use client";

import { FormEvent, useState } from "react";
import { contactChannels } from "@/content/nav";

const fieldClasses =
  "w-full border-b border-rule-dark-soft bg-transparent py-3 font-sans text-base text-fg placeholder:text-fg-muted/70 focus:border-fg transition-colors duration-300 outline-none disabled:opacity-50";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          channel: data.get("channel"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-serif text-2xl leading-relaxed max-w-md text-fg">
        Thank you. Your message has been received — we will respond in due
        course.
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            disabled={status === "submitting"}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            disabled={status === "submitting"}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="channel" className="sr-only">Channel</label>
          <select
            id="channel"
            name="channel"
            defaultValue=""
            required
            disabled={status === "submitting"}
            className={`${fieldClasses} appearance-none`}
          >
            <option value="" disabled>Channel</option>
            {contactChannels.map((channel) => (
              <option key={channel} value={channel}>{channel}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Message"
            disabled={status === "submitting"}
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="font-sans text-sm tracking-[0.08em] uppercase border-b border-fg pb-1 transition-opacity duration-300 hover:opacity-60 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Submit"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-6 font-sans text-sm text-fg-muted">
          Something went wrong. Please write to us directly at{" "}
          <a href="mailto:institutional@apexplenitude.com" className="underline">
            institutional@apexplenitude.com
          </a>
          .
        </p>
      )}
    </div>
  );
}
