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
    bio: 'Serge has spent 30+ years at the intersection of healthcare and enterprise technology across international and North American markets, pairing deep technical vision with commercial execution at scale. He founded L37 to build the next generation of Clinical and Physical AI agents on a knowledge-graph and ontology core. Previously CTO and SVP at an AI healthcare startup, he built global SaaS, DaaS and AIaaS platforms and the AI teams behind them. He is currently acting as interim CTO and COO until those roles are filled.',
    email: 'serge.bouissou@l37.co',
    linkedin: 'https://www.linkedin.com/in/sergebouissou/',
  },
  {
    name: 'Active recruitment',
    role: 'Chief Technology Officer',
    photo: null,
    bio: 'We\'re hiring a Chief Technology Officer to lead the architecture of L37\'s Clinical and Physical AI platform — from the knowledge-graph and ontology core to agentic AI and robotics on NVIDIA edge hardware. You\'ll own the technical vision, build the engineering team, and define how AI operates safely in real clinical environments. Deep experience scaling healthcare-grade AI systems is essential.',
    email: null,
    linkedin: null,
    isRecruitment: true,
  },
  {
    name: 'Active recruitment',
    role: 'Chief Operating Officer Americas',
    photo: null,
    bio: 'We\'re hiring a Chief Operating Officer, Americas to build and scale L37\'s operations across the region — delivery, partnerships and commercial execution as we grow. You\'ll turn strategy into disciplined day-to-day operations, stand up the Americas footprint, and help bring Clinical and Physical AI solutions to hospitals and life-sciences partners. Operational leadership in healthcare or enterprise technology is essential.',
    email: null,
    linkedin: null,
    isRecruitment: true,
  },
  {
    name: 'Bertrand Loubaton',
    role: 'Chief Commercial Officer',
    photo: '/images/team/Bertrand-Loubaton.png',
    bio: 'Bertrand brings 30+ years building and scaling commercial operations in global healthcare — medical devices, life sciences and biopharma — across Europe, the US, Asia and MEA. He combines deep go-to-market, business-development and M&A expertise with a record of turning complex clinical technology into market-ready products. Having founded the health-tech venture Adaptherapy and held senior roles at GE Healthcare, he brings deep healthcare expertise to the L37 team.',
    email: 'bertrand.loubaton@l37.co',
    linkedin: 'https://www.linkedin.com/in/bertrand-loubaton-34a2937/',
  },
  // Row 2
  {
    name: 'Kabya Basu',
    role: 'SimReady Lead Engineer',
    photo: '/images/team/Kabya-Basu.png',
    bio: 'Kabya is a senior AI engineer with 15+ years taking machine-learning systems from research lab to production — spanning LLM fine-tuning, MLOps/LLMOps and edge-AI deployment. At L37 he leads SimReady engineering, optimizing on-device AI for interactive robotics on NVIDIA edge hardware. He has delivered AI at scale for organizations including Walmart, Microsoft and GoFundMe, and published 26 peer-reviewed papers in computational biology and machine learning.',
    email: 'kabya.basu@l37.co',
    linkedin: 'https://www.linkedin.com/in/kabyabasu/',
  },
  {
    name: 'Aizhan Kakimzhanova',
    role: 'Senior Data Engineer',
    photo: '/images/team/Aizhan-Kakimzhanova.png',
    bio: 'Aizhan brings 10+ years of big-data engineering across healthcare and finance. She architects HIPAA-compliant platforms on Azure and Databricks, building scalable pipelines that turn raw clinical data into ML-ready schemas feeding L37\'s knowledge graph. A Boston University–trained engineer, she previously built large-scale healthcare data infrastructure alongside the L37 team at a prior AI healthcare startup.',
    email: 'aizhan.kakimzhanova@l37.co',
    linkedin: 'https://www.linkedin.com/in/aizhan-k-5b0a4060/',
  },
  {
    name: 'Katharine Nowakowski',
    role: 'Ontology lead Engineer',
    photo: '/images/team/Katharine-Nowakowski.png',
    bio: 'Katharine is a scientist and semantic engineer with a PhD in Biomechanical Engineering who connects clinical science to knowledge-graph architecture. At L37 she leads the ontology layer at the center of the platform, integrating genetic, gait and EHR data into structured ontologies that power clinical and pharmaceutical insight. Her work spans graphRAG pipelines, SPARQL/SHACL validation and deep-learning simulation of human movement.',
    email: 'katharine.nowakowski@l37.co',
    linkedin: 'https://www.linkedin.com/in/katharine-n-803954124/',
  },
  // Row 3
  {
    name: 'Yingkar Bahetnur',
    role: 'Product Strategy & Delivery',
    photo: '/images/team/Yingkar-Bahetnur.png',
    bio: 'Yingkar leads product strategy and delivery for L37\'s Social Assisting Robot line — defining target segments, value proposition and monetization for physical AI in healthcare, and driving release planning toward MVP across engineering, data and design. A PMP-certified founding team member, she also sets L37\'s healthcare data stewardship and governance, scoping the semantic-health ontology behind its clinical and pharma use cases. Earlier she led a 20-person team to deliver a first Data-as-a-Service product on 100TB+ of healthcare data.',
    email: 'yingkar.bahetnur@l37.co',
    linkedin: 'https://www.linkedin.com/in/yingkar-bahetnur/',
  },
  {
    name: 'Rita Paseveckaite',
    role: 'Operation Manager',
    photo: '/images/team/Rita-Paseveckaite.png',
    bio: 'Rita keeps L37 running, turning strategic goals into disciplined daily operations. She brings international experience across corporate governance, finance, HR and legal coordination, supporting leadership in multi-country environments. Her background includes diplomatic service at the Lithuanian Consulate and a dual Master\'s in International Finance and International Trade, working closely with the founding team she previously supported at a prior AI healthcare startup.',
    email: 'rita.paseveckaite@l37.co',
    linkedin: 'https://www.linkedin.com/in/ritapaseveckaite/',
  },
  {
    name: 'Yuliya Buyakshina',
    role: 'Visual Designer',
    photo: null,
    bio: 'Yuliya shapes how L37 looks and feels, owning the company\'s visual infrastructure — brand guidelines, design tokens, website and marketing assets — so every touchpoint feels cohesive and user-centered. Her work spans UI/UX design for B2B web and mobile applications and analytical reporting tools for healthcare, bringing L37\'s brand to life across product and go-to-market.',
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
                  isRecruitment={'isRecruitment' in member ? member.isRecruitment : false}
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
