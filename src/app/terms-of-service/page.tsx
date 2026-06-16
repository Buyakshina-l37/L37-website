// Terms of Service page — Figma: 08.01 - Terms of service (9419:7185)
// Content container: w-[900px] centred, gap-[48px] between sections, gap-[14px] within sections
// Typography: title 48px regular #01012f, h3/h4 24px medium #0a0f1a, body 16px regular #3e4554 leading-[1.55]

import Footer from '@/components/layout/Footer'

// ── Shared style constants ─────────────────────────────────────────────────
const BODY: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.55,
  color: '#3e4554',
}

const H4: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 1.3,
  color: '#0a0f1a',
}

// Bullet component — dot + gap-[12px] + text
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span
        style={{
          flexShrink: 0,
          width: 6,
          height: '1.55em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#3e4554',
            flexShrink: 0,
          }}
        />
      </span>
      <p style={BODY}>{children}</p>
    </div>
  )
}

// Section block: optional h4 heading + content with gap-[14px] inside
function Section({ heading, children }: { heading?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
      {heading && <h2 style={H4}>{heading}</h2>}
      {children}
    </div>
  )
}

export default function TermsOfServicePage() {
  return (
    <>
      <main style={{ backgroundColor: '#f5f7fc', paddingTop: 90, paddingBottom: 120 }}>

        {/* Single centred column — title and body share the same 900px container */}
        <div
          style={{
            width: 900,
            margin: '80px auto 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
          }}
        >
          <h1
            style={{
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.48px',
              color: '#01012f',
              marginBottom: 16,
            }}
          >
            Terms of service
          </h1>

          {/* Intro paragraphs — no heading */}
          <Section>
            <p style={BODY}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website located at www.l37.co (the &ldquo;Site&rdquo;), operated by L37 Innovations Inc. (&ldquo;L37&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a Delaware corporation. By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.
            </p>
            <p style={BODY}>
              If you are using the Site on behalf of an organization, you represent that you have authority to bind that organization, and &ldquo;you&rdquo; refers to that organization.
            </p>
          </Section>

          {/* Our services; separate agreements */}
          <Section heading="Our services; separate agreements">
            <p style={BODY}>
              L37 provides Physical AI and Clinical AI solutions for healthcare, pharmaceutical, and life sciences organizations, including digital twin platforms, integration of assistive robots, data and knowledge graph services, agentic AI services, and related consulting (the &ldquo;Services&rdquo;).
            </p>
            <p style={BODY}>
              Descriptions of the Services on the Site are for general information only and do not constitute an offer, warranty, or commitment. Access to and use of the Services is governed exclusively by a separately executed written agreement between L37 and the client — such as a master services agreement, statement of work, data processing agreement, and, where applicable, a business associate agreement. If there is any conflict between these Terms and a written agreement with a client, the written agreement prevails for the Services it covers.
            </p>
          </Section>

          {/* No medical advice */}
          <Section heading="No medical advice">
            <p style={BODY}>
              Content on the Site is provided for informational purposes only and is not medical advice, diagnosis, or treatment. L37 technologies are designed to support — not replace — the judgment of qualified healthcare professionals. Clinical decisions remain the sole responsibility of qualified professionals and the healthcare organizations that employ or engage them.
            </p>
          </Section>

          {/* Eligibility and acceptable use */}
          <Section heading="Eligibility and acceptable use">
            <p style={BODY}>
              The Site is intended for business users aged 18 or older. When using the Site, you agree that you will not engage in any activity that:
            </p>
            <Bullet>Violates applicable laws, rules, or regulations, or infringes the intellectual property, privacy, or other rights of any party;</Bullet>
            <Bullet>Poses or creates a privacy or security risk to any person;</Bullet>
            <Bullet>Interferes with, disrupts, or attempts to gain unauthorized access to the Site, its servers, or connected systems, or circumvents any security or access controls;</Bullet>
            <Bullet>Uses automated means to scrape, harvest, or extract content or data from the Site without our prior written consent;</Bullet>
            <Bullet>Copies, modifies, reverse engineers, or creates derivative works of the Site or its content except as permitted by law;</Bullet>
            <Bullet>Transmits malware or any harmful code, or sends unsolicited commercial communications through the Site;</Bullet>
            <Bullet>Is false, misleading, deceptive, defamatory, obscene, threatening, harassing, or discriminatory;</Bullet>
            <Bullet>In L37&apos;s reasonable judgment, may expose L37 or any third party to harm or liability.</Bullet>
            <p style={BODY}>We may suspend or terminate access to the Site for any violation of these Terms.</p>
          </Section>

          {/* Intellectual property */}
          <Section heading="Intellectual property">
            <p style={BODY}>
              The Site and all content on it — including text, graphics, logos, designs, software, and audiovisual materials — are owned by L37 or its licensors and are protected by intellectual property laws. &ldquo;L37&rdquo; and related marks and logos are trademarks of L37 Innovations Inc. References to third-party names, marks, or technologies are for identification only and do not imply endorsement or affiliation.
            </p>
            <p style={BODY}>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and view the Site for your internal business purposes. No other rights are granted. You may not use any L37 marks without our prior written consent.
            </p>
          </Section>

          {/* Feedback and submissions */}
          <Section heading="Feedback and submissions">
            <p style={BODY}>
              The Site is not intended for the submission of confidential or proprietary information, and you should not submit patient or other sensitive personal data through it. If you provide feedback, ideas, or suggestions about the Site or the Services, you grant L37 a perpetual, irrevocable, worldwide, royalty-free license to use them without restriction or compensation.
            </p>
          </Section>

          {/* Third-party content and links */}
          <Section heading="Third-party content and links">
            <p style={BODY}>
              The Site may reference or link to third-party websites, content, or technologies. L37 does not control and is not responsible for third-party websites or their content, and a link does not imply endorsement. Your use of third-party websites is at your own risk and subject to their terms.
            </p>
          </Section>

          {/* Privacy */}
          <Section heading="Privacy">
            <p style={BODY}>
              Our collection and use of Personal Information in connection with the Site is described in our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </Section>

          {/* Disclaimers */}
          <Section heading="Disclaimers">
            <p style={BODY}>
              THE SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. L37 DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT CONTENT IS ACCURATE, COMPLETE, OR CURRENT. WARRANTIES APPLICABLE TO THE SERVICES, IF ANY, ARE STATED EXCLUSIVELY IN THE APPLICABLE WRITTEN AGREEMENT.
            </p>
          </Section>

          {/* Limitation of liability */}
          <Section heading="Limitation of liability">
            <p style={BODY}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, L37 AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SITE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, L37&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SITE WILL NOT EXCEED ONE HUNDRED US DOLLARS (US$100). LIABILITY RELATING TO THE SERVICES IS GOVERNED EXCLUSIVELY BY THE APPLICABLE WRITTEN AGREEMENT. SOME JURISDICTIONS DO NOT ALLOW CERTAIN EXCLUSIONS OR LIMITATIONS, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU.
            </p>
          </Section>

          {/* Indemnification */}
          <Section heading="Indemnification">
            <p style={BODY}>
              You agree to indemnify, defend, and hold harmless L37 and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or relating to your breach of these Terms or your misuse of the Site.
            </p>
          </Section>

          {/* Regulatory status */}
          <Section heading="Regulatory status">
            <p style={BODY}>
              L37 is a technology provider and systems integrator. Depending on the jurisdiction and intended use, certain solutions may be subject to medical device or other regulatory frameworks. The regulatory status, classification, and conditions of deployment of any solution are addressed in the applicable written agreement and under applicable law. Nothing on the Site shall be construed as a claim of regulatory clearance or approval in any jurisdiction.
            </p>
          </Section>

          {/* Governing law and disputes */}
          <Section heading="Governing law and disputes">
            <p style={BODY}>
              These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms or the Site that cannot be resolved amicably shall be brought exclusively in the state or federal courts located in Delaware, and you consent to their jurisdiction. Where mandatory consumer or local laws in your country of residence grant you additional rights or a different forum, those rights remain unaffected to the extent required by law.
            </p>
          </Section>

          {/* Changes to these Terms */}
          <Section heading="Changes to these Terms">
            <p style={BODY}>
              We may update these Terms from time to time. When we do, we will post the updated version on this page and revise the &ldquo;Date of last revision&rdquo; below. Changes are effective upon posting unless otherwise stated. Your continued use of the Site after posting means the updated Terms apply.
            </p>
          </Section>

          {/* General */}
          <Section heading="General">
            <p style={BODY}>
              These Terms, together with the Privacy Policy, are the entire agreement between you and L37 regarding use of the Site. If any provision is held unenforceable, the remaining provisions remain in effect. Our failure to enforce any provision is not a waiver. You may not assign these Terms without our prior written consent; we may assign them in connection with a merger, acquisition, or sale of assets.
            </p>
          </Section>

          {/* Contact us */}
          <Section heading="Contact us">
            <p style={BODY}>If you have questions about these Terms, contact us at:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <p style={BODY}>L37 Innovations Inc.</p>
              <p style={BODY}>Attention: Legal</p>
              <p style={BODY}>200 Continental Drive, Suite 401,</p>
              <p style={BODY}>Newark, DE 19713, USA</p>
              <p style={BODY}>+1 (740) 272-5256</p>
              <p style={BODY}>
                <a href="mailto:info@l37.co" style={{ color: '#2473f2', textDecoration: 'none' }}>
                  info@l37.co
                </a>
              </p>
            </div>
            <p style={BODY}>
              <em>Date of last revision: June 12, 2026</em>
            </p>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  )
}
