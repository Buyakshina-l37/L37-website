// Privacy Policy page — Figma: 08 - Privacy Policy (9419:6950)
// Content container: w-[900px] centred, gap-[48px] between sections, gap-[14px] within sections
// Typography: title 56px medium, h3 36px regular #0a0f1a, body 16px regular #3e4554 tracking-[0.32px]

import Footer from '@/components/layout/Footer'
import '../legal-pages.css'

// ── Shared style constants ─────────────────────────────────────────────────
const BODY: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '0.32px',
  color: '#3e4554',
}

const H3: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 400,
  lineHeight: 1.15,
  letterSpacing: '-0.36px',
  color: '#141B29',
}

const H4: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 1.25,
  letterSpacing: '-0.24px',
  color: '#141B29',
}

// Bullet point component — matches Figma's SVG dot + gap-[12px] layout
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      {/* Figma bullet dot: 6×16px container with centred 5px circle */}
      <span
        style={{
          flexShrink: 0,
          width: 6,
          height: '1.4em',
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

// Section block: heading + content with gap-[14px] inside, gap-[48px] from siblings
function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
      <h3 style={H3}>{heading}</h3>
      {children}
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="legal-main" style={{ backgroundColor: '#f5f7fc', paddingTop: 90, paddingBottom: 120 }}>

        {/* Single centred column — title and body share the same 900px container */}
        <div
          className="legal-container"
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
              fontSize: 56,
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.56px',
              color: '#141B29',
              marginBottom: 16,
            }}
          >
            Privacy policy
          </h1>

          {/* Intro paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={BODY}>
              L37 Innovations Inc. (&ldquo;L37&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a Delaware corporation providing Physical AI and Clinical AI solutions for healthcare, pharmaceutical, and life sciences organizations, through our website at www.l37.co (the &ldquo;Site&rdquo;) and our products and services (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p style={BODY}>
              This Privacy Policy explains how we collect, use, share, and protect Personal Information — any information relating to an identified or identifiable individual — when you visit our Site, interact with us, or use our Services.
            </p>
            <p style={BODY}>
              L37 acts in two distinct roles. For information collected through the Site and in the course of our business relationships (for example, contact details of client representatives), L37 is the data controller. For clinical and operational data processed within our Services on behalf of hospitals, health systems, and other enterprise clients, L37 acts as a data processor — or service provider / business associate, as applicable — under a written agreement with that client. In those cases the client&apos;s own privacy notice governs, and this Policy applies only to the extent L37 determines the purposes and means of processing.
            </p>
            <p style={BODY}>
              If you do not agree with this Privacy Policy, please do not use the Site or submit Personal Information to us.
            </p>
          </div>

          {/* Information we collect through the Site */}
          <Section heading="Information we collect through the Site">
            <Bullet>Contact information such as your name, business email address, phone number, employer, job title, and country, when you contact us, request a briefing, or subscribe to communications;</Bullet>
            <Bullet>Communications, including the content of messages you send us, questions, feedback, and responses to surveys;</Bullet>
            <Bullet>Event and meeting information, such as registration details for demonstrations, webinars, and briefings;</Bullet>
            <Bullet>Usage information, including pages visited, features used, date and time of access, IP address, browser type, operating system, device identifiers, and referring domain, collected through cookies and similar technologies;</Bullet>
            <Bullet>Recruitment information, such as CVs and related details, if you apply to work with us.</Bullet>
            <p style={BODY}>We do not collect Personal Information from the Site for advertising resale, and we do not sell Personal Information.</p>
          </Section>

          {/* Data processed within our Services */}
          <Section heading="Data processed within our Services">
            <p style={BODY}>Our Services operate inside clinical and operational environments. Depending on the deployment, they may process:</p>
            <Bullet>Operational telemetry from robots and connected hospital assets, such as location, task status, and sensor readings;</Bullet>
            <Bullet>Voice and video data captured by assistive robots and devices, including speech processed for transcription and interaction;</Bullet>
            <Bullet>Clinical and patient data made available by the client within its systems and processed under the client&apos;s instructions;</Bullet>
            <Bullet>Simulation and digital twin data describing facilities, equipment, and workflows.</Bullet>
            <p style={BODY}>This data is processed on behalf of, and under the documented instructions of, our clients, under contracts that include data processing terms and — where applicable in the United States — business associate agreements. Our clients are responsible for the lawfulness of the underlying data and for obtaining any required patient consents.</p>
          </Section>

          {/* How we use Personal Information */}
          <Section heading="How we use Personal Information">
            <Bullet>Providing and operating the Site and Services, and performing our contracts;</Bullet>
            <Bullet>Responding to inquiries and managing our business relationships;</Bullet>
            <Bullet>Sending administrative and service communications, such as confirmations, technical notices, and updates;</Bullet>
            <Bullet>Sending marketing communications about our Services, with your consent where required — you can opt out at any time;</Bullet>
            <Bullet>Improving and securing our Site and Services, including analytics, monitoring, fraud prevention, and enforcement of our terms;</Bullet>
            <Bullet>Complying with legal obligations and responding to lawful requests.</Bullet>
            <p style={BODY}>Where the GDPR or similar laws apply, we process Personal Information on the following legal bases: performance of a contract; our legitimate interests; your consent; and compliance with legal obligations.</p>
          </Section>

          {/* Cookies and analytics */}
          <Section heading="Cookies and analytics">
            <p style={BODY}>We use cookies and similar technologies for authentication, preferences, security, and analytics. You can control cookies through your browser settings and, where required by law, through the consent manager presented when you first visit the Site. For more information, see our Cookie Notice.</p>
          </Section>

          {/* How we share Personal Information */}
          <Section heading="How we share Personal Information">
            <Bullet>Service providers supporting our operations — including cloud hosting and infrastructure, identity and access management, payment processing, communications, customer relationship management, and analytics — under data processing agreements;</Bullet>
            <Bullet>L37 business units in the United States, France, Kazakhstan, and Kenya, for the purposes described in this Policy;</Bullet>
            <Bullet>Professional advisers, such as lawyers, auditors, and insurers, under confidentiality obligations;</Bullet>
            <Bullet>Counterparties and advisers in a merger, acquisition, financing, reorganization, or sale of assets, with appropriate safeguards during diligence;</Bullet>
            <Bullet>Public authorities, courts, or regulators where required by law, to comply with legal process, or to protect rights, safety, and property.</Bullet>
            <p style={BODY}>We do not sell Personal Information, and we do not share it for cross-context behavioral advertising.</p>
          </Section>

          {/* International data transfers */}
          <Section heading="International data transfers">
            <p style={BODY}>L37 operates internationally. Where Personal Information is transferred across borders — including to the United States — we implement appropriate safeguards, such as the European Commission&apos;s Standard Contractual Clauses, or we rely on adequacy decisions or other lawful transfer mechanisms. Copies of the applicable safeguards are available on request.</p>
          </Section>

          {/* Regional disclosures */}
          <Section heading="Regional disclosures">

            {/* EEA and UK */}
            <h4 style={H4}>European Economic Area and United Kingdom</h4>
            <p style={BODY}>If you are in the EEA or the UK, you have the following rights regarding Personal Information for which L37 is the controller, subject to the conditions of the GDPR and UK GDPR:</p>
            <Bullet>To be informed about, and to access, the Personal Information we hold about you;</Bullet>
            <Bullet>To rectify inaccurate or incomplete Personal Information;</Bullet>
            <Bullet>To erasure and to restriction of processing, under certain circumstances;</Bullet>
            <Bullet>To data portability, under certain circumstances;</Bullet>
            <Bullet>To object to processing based on legitimate interests, and to direct marketing at any time;</Bullet>
            <Bullet>To withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal;</Bullet>
            <Bullet>To lodge a complaint with your supervisory authority.</Bullet>

            {/* United States */}
            <h4 style={{ ...H4, marginTop: 8 }}>United States</h4>
            <p style={BODY}>Where L37 processes protected health information for covered entities or other business associates, it does so as a business associate under written business associate agreements pursuant to HIPAA. California residents and residents of other states with comprehensive privacy laws may have additional rights, including the right to know, correct, delete, and opt out of certain sales or sharing. To exercise these rights, contact us at info@l37.co.</p>

            {/* France */}
            <h4 style={{ ...H4, marginTop: 8 }}>France</h4>
            <p style={BODY}>Personal health data processed in connection with deployments in France is hosted by HDS-certified providers and processed in accordance with the GDPR and applicable guidance of the CNIL.</p>

            {/* Kenya */}
            <h4 style={{ ...H4, marginTop: 8 }}>Kenya</h4>
            <p style={BODY}>Personal Information relating to individuals in Kenya is processed in accordance with the Data Protection Act, 2019, including rights of access, correction, and deletion. Complaints may be addressed to the Office of the Data Protection Commissioner.</p>

            {/* Kazakhstan */}
            <h4 style={{ ...H4, marginTop: 8 }}>Kazakhstan</h4>
            <p style={BODY}>Personal Information relating to individuals in Kazakhstan is processed in accordance with the Law of the Republic of Kazakhstan &ldquo;On Personal Data and Their Protection&rdquo;, including its consent and cross-border transfer requirements.</p>
          </Section>

          {/* AI and automated decision-making */}
          <Section heading="AI and automated decision-making">
            <p style={BODY}>Our Services include agentic AI and Physical AI systems. L37 designs these systems for human oversight: they support clinical and operational decisions, but they do not make solely automated decisions that produce legal or similarly significant effects on individuals without human review.</p>
            <p style={BODY}>Our AI systems record their actions in auditable logs, and we maintain explainability and guardrail mechanisms appropriate to the risk of each deployment. Where laws such as the GDPR or the EU AI Act require additional disclosures or impact assessments, we provide them in the relevant contractual documentation.</p>
          </Section>

          {/* Security */}
          <Section heading="Security">
            <p style={BODY}>We apply technical and organizational measures appropriate to the risk, including encryption in transit and at rest, role-based access control, multi-factor authentication, audit logging, network isolation, and regular security assessments. No system is completely secure; if you believe your interaction with us has been compromised, please contact us immediately at info@l37.co.</p>
          </Section>

          {/* Data retention */}
          <Section heading="Data retention">
            <p style={BODY}>We retain Personal Information for as long as necessary for the purposes described in this Policy, to comply with legal and contractual obligations — including medical record retention rules applicable to our healthcare clients — and to resolve disputes and enforce our agreements. When retention periods expire, we delete or anonymize Personal Information securely.</p>
          </Section>

          {/* Children */}
          <Section heading="Children">
            <p style={BODY}>Our Site and Services are intended for business users and are not directed to children. We do not knowingly collect Personal Information from children through the Site. Where our Services process paediatric patient data, that data is processed on behalf of and under the instructions of our healthcare clients, who are responsible for the applicable consents and disclosures.</p>
          </Section>

          {/* Your choices and rights */}
          <Section heading="Your choices and rights">
            <p style={BODY}>You may request access to, correction of, or deletion of your Personal Information, or exercise the other rights described in this Policy, by contacting info@l37.co. We verify requests before acting on them and respond within the timeframes required by applicable law. You will not be discriminated against for exercising your rights.</p>
          </Section>

          {/* Changes to this Privacy Policy */}
          <Section heading="Changes to this Privacy Policy">
            <p style={BODY}>We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the &ldquo;Date of last revision&rdquo; below, and where required by law we will provide additional notice. Your continued use of the Site after the effective date of the updated Policy constitutes your acceptance of the changes.</p>
          </Section>

          {/* Contact us */}
          <Section heading="Contact us">
            <p style={BODY}>If you have questions or concerns about this Privacy Policy or L37&apos;s privacy practices, contact us at:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <p style={BODY}>L37 Innovations Inc.</p>
              <p style={BODY}>Attention: Privacy</p>
              <p style={BODY}>200 Continental Drive, Suite 401,</p>
              <p style={BODY}>Newark, DE 19713, USA</p>
              <p style={BODY}>+1 (740) 272-5256</p>
              <p style={BODY}>
                <a href="mailto:info@l37.co" style={{ color: '#2473f2', textDecoration: 'none' }}>
                  info@l37.co
                </a>
              </p>
            </div>
            <p style={{ ...BODY, marginTop: 8 }}>
              <em>Date of last revision: June 12, 2026</em>
            </p>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  )
}
