'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Company',    href: '/company' },
  { label: 'Team',       href: '/team' },
  { label: 'Contact Us', href: '/contact' },
]

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      {/* ── Closed bar ── */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: '64px',
          backgroundColor: '#F5F7FC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
        }}
      >
        <Link href="/" onClick={close}>
          <Image
            src="/images/logo/l37-logo-black.svg"
            alt="L37"
            width={80}
            height={45}
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex' }}
        >
          <Image src="/icons/nav-toggle.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>

      {/* ── Open panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-mobile-panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: '#F5F7FC',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header row */}
            <div
              style={{
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                flexShrink: 0,
              }}
            >
              <Link href="/" onClick={close}>
                <Image
                  src="/images/logo/l37-logo-black.svg"
                  alt="L37"
                  width={80}
                  height={45}
                  priority
                />
              </Link>

              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(10,15,26,0.05)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  flexShrink: 0,
                }}
              >
                <Image src="/icons/nav-сlose.svg" alt="Close" width={16} height={16} />
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ padding: '32px 16px 0' }}>
              {navLinks.map(({ label, href }, i) => (
                <div key={label}>
                  <Link
                    href={href}
                    onClick={close}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      fontFamily: '"Denim TRIAL", sans-serif',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: 1.05,
                      color: 'rgba(10,15,26,0.8)',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
