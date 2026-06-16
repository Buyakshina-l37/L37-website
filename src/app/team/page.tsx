import Footer from '@/components/layout/Footer'
import TeamCard from '@/components/sections/TeamCard'
import Image from 'next/image'
import './team-hero.css'

// ── Team data — 8 cards (2 empty recruitment + 6 with photos) ──────
// Order matches Figma node 9735:12015 row by row (3 per row)
const TEAM = [
  // Row 1
  {
    name: 'Serge Bouissou',
    role: 'Founder & Chief Executive Officer',
    photo: '/images/team/Serge-Bouissou.png',
    bio: 'Serge is a seasoned technology executive with over 30 years of leadership across healthcare, life sciences, pharma, and enterprise technology. He founded L37 to build the next generation of Clinical and Physical AI agents — bringing together his rare combination of deep technical vision and commercial execution at scale. Before L37, he served as CTO and SVP EMEA at Ryte Health, where he built global SaaS, DaaS, and AIaaS platforms and established AI departments specializing in Generative AI, NLP, and Computer Vision across France, the US, and Kazakhstan. His earlier career spans IBM Business Consulting, where he led pharma and life sciences strategy across Canada, and a decade as CEO of his own portfolio of businesses.',
    email: 'serge.bouissou@l37.co',
    linkedin: 'https://www.linkedin.com/in/sergebouissou/',
  },
  {
    name: 'Active recruitment',
    role: 'Chief Technology Officer',
    photo: null,
    bio: null,
    email: null,
    linkedin: null,
  },
  {
    name: 'Active recruitment',
    role: 'Chief Commercial Officer Americas',
    photo: null,
    bio: null,
    email: null,
    linkedin: null,
  },
  {
    name: 'Bertrand Loubaton',
    role: 'Chief Commercial Officer',
    photo: '/images/team/Bertrand-Loubaton.png',
    bio: 'Bertrand is a senior executive with over 30 years of leadership in global healthcare — spanning medical devices, life sciences, and biopharma. He has built and scaled commercial operations across Europe, the US, Asia, and MEA, and brings deep expertise in business development, M&A, and go-to-market strategy. As CCO at L37, he leads the commercial roadmap for an AI-driven healthcare platform, turning complex clinical AI capabilities into market-ready products. His career includes founding Adaptherapy and senior roles at GE Healthcare.',
    email: 'bertrand.loubaton@l37.co',
    linkedin: 'https://www.linkedin.com/in/bertrand-loubaton-34a2937/',
  },
  // Row 2
  {
    name: 'Kabya Basu',
    role: 'MLOps Senior Engineer',
    photo: '/images/team/Kabya-Basu.png',
    bio: 'Kabya is an applied AI leader with 15+ years building machine learning systems from research lab to production. His expertise spans LLM fine-tuning, MLOps orchestration, recommendation engines, and edge AI deployment — currently focused on optimizing on-device AI for interactive robotics at L37. He has led AI projects for Walmart, Microsoft, and GoFundMe, and published 26 research papers in computational biology and machine learning. He bridges the gap between cutting-edge AI research and real-world engineering at scale.',
    email: 'kabya.basu@l37.co',
    linkedin: 'https://www.linkedin.com/in/kabyabasu/',
  },
  {
    name: 'Aizhan Kakimzhanova',
    role: 'Data Engineer',
    photo: '/images/team/Aizhan-Kakimzhanova.png',
    bio: 'Aizhan brings over 10 years of expertise in big data engineering across healthcare and financial sectors. She architects HIPAA-compliant cloud data platforms on Azure and Databricks, building scalable pipelines that transform raw clinical data into unified, analytics-ready schemas. Her background spans the full data stack — from ETL/ELT design and warehouse optimization to team leadership. At L37, she drives the infrastructure that makes large-scale healthcare data secure, interoperable, and ML-ready.',
    email: 'aizhan.kakimzhanova@l37.co',
    linkedin: 'https://www.linkedin.com/in/aizhan-k-5b0a4060/',
  },
  {
    name: 'Katharine Nowakowski',
    role: 'Ontology Data Engineer',
    photo: '/images/team/Katharine-Nowakowski.png',
    bio: 'Katharine is a scientist and semantic engineer with a PhD in Biomechanical Engineering and a rare ability to bridge clinical science with knowledge graph architecture. At L37, she leads the integration of genetic, gait, and EHR data into structured ontologies that power AI-driven pharmaceutical and clinical insights. Her work spans graphRAG pipelines, SPARQL/SHACL validation, and deep learning simulations of human movement. She combines academic rigor with hands-on engineering to build the semantic foundations of clinical AI.',
    email: 'katharine.nowakowski@l37.co',
    linkedin: 'https://www.linkedin.com/in/katharine-n-803954124/',
  },
  // Row 3
  {
    name: 'Yingkar Bahetnur',
    role: 'Data Lead',
    photo: '/images/team/Yingkar-Bahetnur.png',
    bio: 'Yingkar is a data strategist focused on healthcare data modeling, interoperability, and enterprise architecture. At L37, she defines the data strategy and establishes modeling lifecycles that keep datasets audit-ready and upgrade-safe. Her previous work at Ryte Corp included redesigning a 14-domain healthcare schema to support 100TB+ data and leading Real World Evidence product development with a cross-functional team of 20. With a research background in environmental health and publications in peer-reviewed journals, she brings both analytical depth and strategic clarity to complex data challenges.',
    email: 'yingkar.bahetnur@l37.co',
    linkedin: 'https://www.linkedin.com/in/yingkar-bahetnur/',
  },
  {
    name: 'Rita Paseveckaite',
    role: 'Operations Manager',
    photo: '/images/team/Rita-Paseveckaite.png',
    bio: 'Rita is a versatile operations leader with international experience across corporate governance, finance, HR, and legal functions. She has supported C-level executives and Boards of Directors in multi-country environments, managing everything from shareholder communications to cross-functional team coordination. At L37, she ensures that strategic goals translate into disciplined, efficient daily operations. Her background includes diplomatic service at the Lithuanian Consulate and a dual Master\'s in International Finance and International Trade.',
    email: 'rita.paseveckaite@l37.co',
    linkedin: 'https://www.linkedin.com/in/ritapaseveckaite/',
  },
  {
    name: 'Yuliya Buyakshina',
    role: 'Visual Designer',
    photo: null,
    bio: 'Yuliya is a visual designer with over a decade of experience building brand identities, digital products, and design systems — most recently focused on the intersection of healthcare and AI. At L37, she leads the full visual infrastructure: from brand guidelines and design tokens to the company website and marketing assets, ensuring every touchpoint reflects a cohesive, user-centered experience. Her background spans UI/UX design for B2B web and mobile applications, analytical reporting tools for healthcare professionals, and long-term collaboration with international design agencies.',
    email: 'yuliya.buyakshina@l37.co',
    linkedin: 'https://www.linkedin.com/in/buyakshina-yuliya-747567214/',
  },
]

export const metadata = {
  title: 'Team — L37',
  description: 'Meet the L37 team bringing together expertise in software, healthcare, and big data.',
}

export default function TeamPage() {
  return (
    <>
      <main className="bg-[#f5f7fc] pt-[90px]">

        {/* ── Hero section ── photo + gradient + title bottom-left ── */}
        {/* Figma node 12544:5843: h-460, rounded-24, max-w-1609 */}
        {/* Gradient: bottom 166px, rgba(0,0,0,0)→rgba(0,0,0,0.6) */}
        {/* Title: Denim WD Regular 64px, white, left-120 bottom-60 */}
        <div className="md:px-[16px] md:py-[24px] px-[16px] py-[16px]">
          <section
            className="hero-section relative max-w-[1609px] mx-auto overflow-hidden md:rounded-[24px]"
            style={{ height: '460px' }}
          >
            {/* Background photo — desktop (hidden on mobile) */}
            <div className="hero-image-wrapper hidden md:block">
              <Image
                src="/images/team-hero.png"
                alt="L37 Team"
                fill
                className="object-cover object-center pointer-events-none hero-image"
                priority
                sizes="1609px"
              />
            </div>

            {/* Background photo — mobile */}
            <div className="hero-image-wrapper block md:hidden">
              <Image
                src="/images/team-hero-mobi.png"
                alt="L37 Team"
                fill
                className="object-cover object-top pointer-events-none hero-image"
                priority
                sizes="390px"
              />
            </div>

            {/* Gradient overlay — bottom 166px */}
            <div
              className="hero-overlay absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: 166,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
              }}
            />

            {/* Title — Denim WD Regular 64px desktop / 40px mobile, white, bottom-left */}
            <h1
              className="hero-title absolute font-denim-wd font-normal text-white"
              style={{ lineHeight: '1.15', letterSpacing: '-0.64px', left: 120, bottom: 60 }}
            >
              L37 Team
            </h1>
          </section>
        </div>

        {/* ── Below hero: title + body text ────────────────────────── */}
        {/* Figma node 13253:10009: flex row gap-190, left col w-461, right col w-483 */}
        {/* Title: Denim TRIAL Regular 48px, #0C1629, leading-1.15 */}
        {/* Body:  Denim TRIAL Regular 20px, navy-80, leading-1.4 */}
        <div className="py-[60px] md:py-[140px]">
          <div
            className="mx-auto px-[20px] md:px-[16px] flex flex-col md:flex-row gap-[32px] md:gap-[190px] items-start"
            style={{ maxWidth: '1148px' }}
          >
            <h2
              className="font-denim font-normal text-[32px] md:text-[48px] text-navy-base md:w-[461px] md:shrink-0"
              style={{ lineHeight: '1.15' }}
            >
              Deep expertise.<br />Close-knit by choice.
            </h2>
            <p
              className="font-denim font-normal text-[17px] md:text-[20px] leading-[1.4] text-navy-80 md:shrink-0 md:w-[483px]"
            >
              A team that has spent careers understanding how clinical environments actually work, what breaks when simulation meets reality, and how healthcare organisations make decisions. We came to Physical AI from healthcare — not the other way around.
            </p>
          </div>
        </div>

        {/* ── Cards grid ───────────────────────────────────────────── */}
        {/* 3 cols × 340px + 2 × 48px gap = 1116px, centered */}
        <div className="pb-[60px] md:pb-[90px]">
          <div
            className="mx-auto px-[20px] md:px-[16px]"
            style={{ maxWidth: '1148px' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[48px]">
              {TEAM.map((member) => (
                <TeamCard
                  key={`${member.name}-${member.role}`}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  bio={member.bio}
                  email={member.email}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
