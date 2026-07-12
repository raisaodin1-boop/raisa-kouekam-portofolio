"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import type { ContactDictionary } from "@/components/contact/types";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";

type ContactFormProps = {
  dict: ContactDictionary["form"];
  errorSummaryLabel: string;
  formAriaLabel: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const inputClassName = (hasError: boolean) =>
  cn(
    "mt-2 w-full rounded-xl border bg-light-gray/50 px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-colors focus-visible:border-primary focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
    hasError ? "border-red-400" : "border-border"
  );

export function ContactForm({ dict, errorSummaryLabel, formAriaLabel }: ContactFormProps) {
  const [state, formspreeSubmit] = useForm(siteConfig.formspreeFormId);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const focusFirstError = (newErrors: FormErrors) => {
    const order = ["name", "email", "subject", "message"] as const;
    const firstKey = order.find((key) => newErrors[key]);
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`#${firstKey}`)?.focus();
    }
  };

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
      focusFirstError(newErrors);
      return;
    }

    setErrors({});
    formspreeSubmit(e);
  };

  const hasErrors = Object.keys(errors).length > 0;
  const hasFormspreeError = state.errors && !state.succeeded;

  if (state.succeeded) {
    return (
      <AnimateIn direction="right" delay={0.15}>
        <div
          className="rounded-2xl border border-accent/20 bg-accent/10 p-6 text-sm text-dark sm:p-8"
          role="status"
          aria-live="polite"
        >
          {dict.success}
        </div>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn direction="right" delay={0.15}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-white p-6 card-shadow sm:p-8"
        noValidate
        aria-label={formAriaLabel}
      >
        <div className="space-y-5">
          {hasErrors && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {errorSummaryLabel}
            </p>
          )}

          {hasFormspreeError && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {dict.submitError}
            </p>
          )}

          <ValidationError
            errors={state.errors}
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark">
              {dict.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              placeholder={dict.namePlaceholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClassName(!!errors.name)}
              disabled={state.submitting}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.name}
              </p>
            )}
            <ValidationError
              prefix=""
              field="name"
              errors={state.errors}
              className="mt-1.5 text-xs text-red-500"
            />
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
              inputMode="email"
              required
              aria-required="true"
              placeholder={dict.emailPlaceholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClassName(!!errors.email)}
              disabled={state.submitting}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.email}
              </p>
            )}
            <ValidationError
              prefix=""
              field="email"
              errors={state.errors}
              className="mt-1.5 text-xs text-red-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark">
              {dict.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="off"
              required
              aria-required="true"
              placeholder={dict.subjectPlaceholder}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={inputClassName(!!errors.subject)}
              disabled={state.submitting}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.subject}
              </p>
            )}
            <ValidationError
              prefix=""
              field="subject"
              errors={state.errors}
              className="mt-1.5 text-xs text-red-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark">
              {dict.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-required="true"
              placeholder={dict.messagePlaceholder}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(inputClassName(!!errors.message), "resize-none")}
              disabled={state.submitting}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.message}
              </p>
            )}
            <ValidationError
              prefix=""
              field="message"
              errors={state.errors}
              className="mt-1.5 text-xs text-red-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl sm:w-auto"
            disabled={state.submitting}
          >
            {state.submitting ? dict.submitting : dict.submit}
          </Button>
        </div>
      </form>
    </AnimateIn>
  );
}
