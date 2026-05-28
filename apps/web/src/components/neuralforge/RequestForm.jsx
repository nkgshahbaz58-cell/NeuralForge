"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const SERVICE_OPTIONS = [
  "AI Automation",
  "AI Chatbot",
  "AI Agent",
  "CRM Automation",
  "AI Website/App",
  "AI Consulting",
];

const BUDGETS = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+"];
const URGENCIES = ["ASAP", "This Month", "1–3 Months", "Just Exploring"];

const INITIAL = {
  fullName: "",
  email: "",
  company: "",
  website: "",
  businessType: "",
  automationGoal: "",
  services: [],
  budget: "",
  urgency: "",
};

export default function RequestForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/ai-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }
      return res.json();
    },
    onSuccess: () => {
      setSuccess(true);
      setValues(INITIAL);
    },
  });

  const update = (k, v) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleService = (svc) => {
    setValues((s) => {
      const has = s.services.includes(svc);
      return {
        ...s,
        services: has
          ? s.services.filter((x) => x !== svc)
          : [...s.services, svc],
      };
    });
  };

  const validate = () => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = "Required";
    if (!values.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Invalid email";
    if (!values.automationGoal.trim())
      e.automationGoal = "Tell us what to automate";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    mutation.mutate(values);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Get Started"
          title="Request your AI solution."
          italicWord="AI"
          description="Tell us what you want to automate, and we'll recommend the best AI system for your business."
        />

        <Reveal delay={120}>
          <div className="relative mx-auto mt-14 max-w-[920px]">
            {/* Outer glow */}
            <div
              aria-hidden
              className="absolute -inset-px -z-10 rounded-[28px] blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.35), transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(56,189,248,0.25), transparent 70%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0C14]/70 p-6 backdrop-blur-2xl shadow-[0_50px_120px_-30px_rgba(99,102,241,0.45)] md:p-10">
              {success ? (
                <SuccessState onReset={() => setSuccess(false)} />
              ) : (
                <form className="grid gap-5" onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      required
                      value={values.fullName}
                      onChange={(v) => update("fullName", v)}
                      error={errors.fullName}
                      placeholder="Alex Morgan"
                    />
                    <Field
                      label="Email Address"
                      type="email"
                      required
                      value={values.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Company / Brand"
                      value={values.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Acme Inc."
                    />
                    <Field
                      label="Website URL"
                      value={values.website}
                      onChange={(v) => update("website", v)}
                      placeholder="https://example.com"
                    />
                  </div>

                  <Field
                    label="Business Type"
                    value={values.businessType}
                    onChange={(v) => update("businessType", v)}
                    placeholder="e.g. SaaS, agency, e-commerce, clinic"
                  />

                  <FieldTextarea
                    label="What do you want to automate?"
                    required
                    value={values.automationGoal}
                    onChange={(v) => update("automationGoal", v)}
                    error={errors.automationGoal}
                    placeholder="Describe the workflow, tools involved, and the outcome you want."
                  />

                  <div>
                    <Label>Services interested in</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {SERVICE_OPTIONS.map((s) => {
                        const active = values.services.includes(s);
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => toggleService(s)}
                            className={`rounded-full border px-3.5 py-2 text-[12.5px] transition-all duration-300 ${
                              active
                                ? "border-white/30 bg-white text-[#06070D]"
                                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Choice
                      label="Budget Range"
                      options={BUDGETS}
                      value={values.budget}
                      onChange={(v) => update("budget", v)}
                    />
                    <Choice
                      label="Project Urgency"
                      options={URGENCIES}
                      value={values.urgency}
                      onChange={(v) => update("urgency", v)}
                    />
                  </div>

                  {mutation.isError ? (
                    <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-200">
                      {mutation.error?.message ||
                        "Something went wrong. Please try again."}
                    </div>
                  ) : null}

                  <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
                    <p className="text-[12px] text-white/40">
                      We'll reply within 1 business day. No spam, ever.
                    </p>
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-medium text-[#06070D] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] disabled:opacity-70"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit AI Request
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <label className="text-[11.5px] uppercase tracking-[0.16em] text-white/45">
      {children}
    </label>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <Label>
        {label}
        {required ? <span className="ml-1 text-violet-300">*</span> : null}
      </Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none backdrop-blur-md transition-colors duration-300 focus:border-white/40 focus:bg-white/[0.05] ${
          error ? "border-red-400/50" : "border-white/10"
        }`}
      />
      {error ? (
        <div className="mt-1.5 text-[11.5px] text-red-300">{error}</div>
      ) : null}
    </div>
  );
}

function FieldTextarea({
  label,
  required,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div>
      <Label>
        {label}
        {required ? <span className="ml-1 text-violet-300">*</span> : null}
      </Label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className={`mt-2 w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none backdrop-blur-md transition-colors duration-300 focus:border-white/40 focus:bg-white/[0.05] ${
          error ? "border-red-400/50" : "border-white/10"
        }`}
      />
      {error ? (
        <div className="mt-1.5 text-[11.5px] text-red-300">{error}</div>
      ) : null}
    </div>
  );
}

function Choice({ label, options, value, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              type="button"
              key={o}
              onClick={() => onChange(o)}
              className={`rounded-xl border px-3 py-2.5 text-[12.5px] transition-all duration-300 ${
                active
                  ? "border-white/30 bg-white/[0.08] text-white"
                  : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/20"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SuccessState({ onReset }) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10">
        <CheckCircle2 size={28} className="text-emerald-300" />
        <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/30 blur-xl" />
      </div>
      <h3 className="mt-6 text-[24px] font-medium tracking-tight text-white md:text-[30px]">
        Request received.
      </h3>
      <p className="mt-3 max-w-[480px] text-[14px] leading-[1.6] text-white/55">
        Your request has been received. NeuralForge AI will contact you soon —
        usually within one business day.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-[13px] text-white/80 transition hover:bg-white/[0.08]"
      >
        Submit another request
      </button>
    </div>
  );
}
