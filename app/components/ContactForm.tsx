"use client";

import { useState, type FormEvent } from "react";

export const STUDIO_EMAIL = "hello@nychvision.studio";

const projectTypes = ["AI Commercial", "Brand Character", "Product Visuals", "Social Content", "Other"];

// No backend in the demo: the form composes an email in the visitor's mail app.
// Swap handleSubmit for a POST to your form endpoint when one exists.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New project — ${data.get("type")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Type: ${data.get("type")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label className="field">
          <span className="label">Name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span className="label">Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <fieldset className="field">
        <legend className="label">Project</legend>
        <div className="chips">
          {projectTypes.map((t, i) => (
            <label key={t} className="chip">
              <input type="radio" name="type" value={t} defaultChecked={i === 0} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span className="label">Idea</span>
        <textarea name="message" rows={3} placeholder="One line is enough to start." />
      </label>
      <div className="form__foot">
        <button type="submit" className="btn btn--primary">
          Send brief
        </button>
        <span className="micro" role="status">
          {sent ? "Opening your mail app…" : "Reply within 48h"}
        </span>
      </div>
    </form>
  );
}
