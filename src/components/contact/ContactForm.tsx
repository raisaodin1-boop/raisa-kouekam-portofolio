"use client";

import { Button } from "@/components/ui/Button";
import type { ContactDictionary } from "@/components/contact/types";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useState } from "react";

type ContactFormProps = {
  dict: ContactDictionary["form"];
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const inputClassName = (hasError: boolean) =>
  cn(
    "mt-2 w-full rounded-xl border bg-light-gray/50 px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20",
    hasError ? "border-red-400" : "border-border"
  );

export function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const subject = (formData.get("subject") as string).trim();
    const message = (formData.get("message") as string).trim();

    const newErrors: FormErrors = {};
    if (!name) newErrors.name = dict.nameRequired;
    if (!email) newErrors.email = dict.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = dict.emailInvalid;
    if (!subject) newErrors.subject = dict.subjectRequired;
    if (!message) newErrors.message = dict.messageRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
  };

  return (
    <AnimateIn direction="right" delay={0.15}>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-white p-6 card-shadow sm:p-8"
        noValidate
        aria-label="Contact form"
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark">
              {dict.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={dict.namePlaceholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClassName(!!errors.name)}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark">
              {dict.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={dict.emailPlaceholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClassName(!!errors.email)}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark">
              {dict.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder={dict.subjectPlaceholder}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={inputClassName(!!errors.subject)}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark">
              {dict.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={dict.messagePlaceholder}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(inputClassName(!!errors.message), "resize-none")}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {submitted && (
            <p
              className="rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-dark"
              role="status"
            >
              {dict.success}
            </p>
          )}

          <Button type="submit" className="w-full rounded-xl sm:w-auto">
            {dict.submit}
          </Button>
        </div>
      </form>
    </AnimateIn>
  );
}
