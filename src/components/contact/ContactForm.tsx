"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GitBranch, Mail, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

type ContactFormProps = {
  dict: Dictionary["contact"];
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    const newErrors: FormErrors = {};
    if (!name) newErrors.name = dict.form.nameRequired;
    if (!email) newErrors.email = dict.form.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = dict.form.emailInvalid;
    if (!message) newErrors.message = dict.form.messageRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
  };

  const contactLinks = [
    {
      key: "email" as const,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      label: dict.email,
      value: siteConfig.email,
    },
    {
      key: "github" as const,
      href: siteConfig.github,
      icon: GitBranch,
      label: dict.github,
      value: "GitHub",
    },
    {
      key: "linkedin" as const,
      href: siteConfig.linkedin,
      icon: Share2,
      label: dict.linkedin,
      value: "LinkedIn",
    },
    {
      key: "whatsapp" as const,
      href: siteConfig.whatsapp,
      icon: MessageCircle,
      label: dict.whatsapp,
      value: "WhatsApp",
    },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="space-y-4">
        {contactLinks.map(({ key, href, icon: Icon, label, value }, index) => (
          <motion.a
            key={key}
            href={href}
            target={key !== "email" ? "_blank" : undefined}
            rel={key !== "email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 card-shadow transition-all duration-300 hover:card-shadow-hover hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-dark">{value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-white p-6 card-shadow sm:p-8"
        noValidate
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark">
              {dict.form.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={dict.form.namePlaceholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(
                "mt-2 w-full rounded-xl border bg-light-gray/50 px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20",
                errors.name ? "border-red-400" : "border-border"
              )}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark">
              {dict.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={dict.form.emailPlaceholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(
                "mt-2 w-full rounded-xl border bg-light-gray/50 px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20",
                errors.email ? "border-red-400" : "border-border"
              )}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark">
              {dict.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={dict.form.messagePlaceholder}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(
                "mt-2 w-full resize-none rounded-xl border bg-light-gray/50 px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20",
                errors.message ? "border-red-400" : "border-border"
              )}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {submitted && (
            <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent" role="status">
              {dict.form.success}
            </p>
          )}

          <Button type="submit" className="w-full sm:w-auto">
            {dict.form.submit}
          </Button>
        </div>
      </motion.form>
    </div>
  );
}
