'use client'

import { useState, useRef, useEffect } from 'react'

const HUBSPOT_PORTAL_ID = '48796367'
const HUBSPOT_FORM_ID = '9e292710-121c-493d-a896-3eab828a91fd'

const interests = [
  'Business inquiry',
  'Investment opportunities',
  'Partnership',
  'Media and press relations',
  'Other',
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  interest: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  interest?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name'
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.interest) newErrors.interest = 'Please select a topic'
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstName },
              { name: 'lastname', value: formData.lastName },
              { name: 'email', value: formData.email },
              { name: 'what_are_you_interested_in', value: formData.interest },
              { name: 'message', value: formData.message },
            ],
            context: {
              pageUri: window.location.href,
              pageName: 'Contact Us',
            },
          }),
        }
      )

      if (response.ok) {
        setIsSuccess(true)
      } else {
        const data = await response.json()
        setSubmitError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (isSuccess) {
    return (
      <div
        className="bg-white rounded-[16px] p-[60px] flex flex-col gap-[24px]"
        style={{ boxShadow: '0px 20px 48px -8px rgba(0, 11, 223, 0.06)' }}
      >
        <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base">
          Get in touch with L37
        </h2>
        <p className="font-denim font-normal text-[20px] leading-[1.4] text-[rgba(12,22,41,0.8)]">
          Thank you for your interest! One of our team members will reach out to you soon.
        </p>
      </div>
    )
  }

  const inputClass = (error?: string) =>
    `w-full px-[16px] py-[12px] font-denim font-normal text-[16px] leading-[1.4] text-navy-base bg-white border rounded-[16px] outline-none transition-colors placeholder:text-[rgba(12,22,41,0.4)] focus:border-primary-base ${
      error ? 'border-status-error' : 'border-[rgba(12,22,41,0.2)]'
    }`

  return (
    <div
      className="bg-white rounded-[16px] p-[40px] flex flex-col gap-[24px]"
      style={{ boxShadow: '0px 20px 48px -8px rgba(0, 11, 223, 0.06)' }}
    >

      {/* First + Last name */}
      <div className="flex gap-[32px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-navy-base">
            First Name
          </label>
          <input
            type="text"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
            className={inputClass(errors.firstName)}
          />
          {errors.firstName && (
            <span className="font-denim text-[12px] text-status-error">{errors.firstName}</span>
          )}
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <label className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-navy-base">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
            className={inputClass(errors.lastName)}
          />
          {errors.lastName && (
            <span className="font-denim text-[12px] text-status-error">{errors.lastName}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-[8px]">
        <label className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-navy-base">
          Email
        </label>
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className={inputClass(errors.email)}
        />
        {errors.email && (
          <span className="font-denim text-[12px] text-status-error">{errors.email}</span>
        )}
      </div>

      {/* Dropdown */}
      <div className="flex flex-col gap-[8px]" ref={dropdownRef}>
        <label className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-primary-base">
          What are you interested in?
        </label>
        <div className="relative">
          {/* Тригер */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between px-[24px] bg-white font-denim font-normal text-[16px] leading-[1.4] transition-colors ${
              formData.interest ? 'text-navy-base' : 'text-[rgba(12,22,41,0.4)]'
            }`}
            style={{
              borderRadius: '16px',
              border: errors.interest
                ? '1px solid #BE0000'
                : '1px solid rgba(12, 22, 41, 0.2)',
              height: '56px',
            }}
          >
            <span>{formData.interest || 'Select from the list'}</span>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className={`transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="M4 6L8 10L12 6" stroke="#0C1629" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Список */}
          {isOpen && (
            <div
              className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white z-50 overflow-hidden"
              style={{
                borderRadius: '16px',
                boxShadow: '0px 20px 48px -8px rgba(0, 11, 223, 0.12)',
              }}
            >
              {interests.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, interest: item })
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-[24px] py-[16px] font-denim font-normal text-[16px] leading-[1.4] text-navy-base hover:bg-[rgba(12,22,41,0.03)] transition-colors"
                  style={{
                    borderBottom: index < interests.length - 1
                      ? '1px solid rgba(12, 22, 41, 0.08)'
                      : 'none',
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        {errors.interest && (
          <span className="font-denim text-[12px] text-status-error">{errors.interest}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-[8px]">
        <label className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-navy-base">
          Message
        </label>
        <div className="relative">
          <textarea
            placeholder="Your message"
            rows={5}
            maxLength={1000}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass(errors.message)} resize-none`}
          />
          <span className="absolute bottom-[12px] right-[16px] font-denim text-[12px] text-[rgba(12,22,41,0.4)]">
            {formData.message.length}/1000 Characters
          </span>
        </div>
        {errors.message && (
          <span className="font-denim text-[12px] text-status-error">{errors.message}</span>
        )}
      </div>

      {/* Privacy note */}
      <p className="font-denim font-normal text-[14px] leading-[1.4] text-[rgba(12,22,41,0.6)]">
        By submitting this form, your information will be processed in accordance with our{' '}
        <a href="/privacy-policy" className="underline text-primary-base">Privacy Policy</a>.
      </p>

      {/* Submit error */}
      {submitError && (
        <p className="font-denim text-[14px] text-status-error">{submitError}</p>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-[18px] bg-navy-base text-light-base font-denim font-medium text-[16px] leading-[1.25] text-center rounded-[16px] hover:bg-[#1a2440] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>

    </div>
  )
}
