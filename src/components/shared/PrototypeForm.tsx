// Shared visual-only form shell for the prototype's two conversion pages
// (/schedule-an-appointment and /contact). No backend exists yet — submission
// is a client-side stub (console.log + a friendly inline confirmation) so the
// form *feels* alive in a demo without faking a real integration.
//
// TODO (later pass): wire to a real booking/contact backend — this is
// explicitly flagged in the brief as "no real backend/booking system needed
// yet" for the prototype stage.

'use client'

import { useState, type FormEvent } from 'react'

export type PrototypeFormField = {
  name: string
  label: string
  type: 'text' | 'tel' | 'email' | 'date' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
  required?: boolean
}

type PrototypeFormProps = {
  fields: PrototypeFormField[]
  submitLabel: string
  confirmationMessage: string
}

export default function PrototypeForm({ fields, submitLabel, confirmationMessage }: PrototypeFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    // Prototype stub — no backend wired yet. Replace with a real submission
    // handler (API route / booking integration) before production.
    console.log('[prototype form submission]', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-card p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-shop-amber/15 text-shop-amber-dark flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-xl text-shop-navy mb-2">Thanks — we&rsquo;ve got it.</h3>
        <p className="text-shop-navy/65 text-sm">{confirmationMessage}</p>
        <p className="text-xs text-shop-navy/30 mt-4">[ Prototype only — no message was actually sent ]</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-card p-6 sm:p-8 space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-display font-medium text-shop-navy mb-1.5">
            {field.label}
            {field.required && <span className="text-shop-amber-dark"> *</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              rows={4}
              className="w-full rounded-base border border-shop-navy/15 px-4 py-2.5 text-sm text-shop-navy focus:outline-none focus:ring-2 focus:ring-shop-amber/50 focus:border-shop-amber transition-colors duration-200"
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue=""
              className="w-full rounded-base border border-shop-navy/15 px-4 py-2.5 text-sm text-shop-navy focus:outline-none focus:ring-2 focus:ring-shop-amber/50 focus:border-shop-amber transition-colors duration-200"
            >
              <option value="" disabled>
                {field.placeholder ?? 'Select an option'}
              </option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full rounded-base border border-shop-navy/15 px-4 py-2.5 text-sm text-shop-navy focus:outline-none focus:ring-2 focus:ring-shop-amber/50 focus:border-shop-amber transition-colors duration-200"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full sm:w-auto inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold px-8 py-3.5 rounded-base transition-colors duration-200"
      >
        {submitLabel}
      </button>
      <p className="text-xs text-shop-navy/40">
        This is a prototype form — submissions aren&rsquo;t sent anywhere yet.
      </p>
    </form>
  )
}
