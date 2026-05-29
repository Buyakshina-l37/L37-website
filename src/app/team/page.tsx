import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TeamCard from '@/components/sections/TeamCard'

// ── Team data — 8 cards (2 empty recruitment + 6 with photos) ──────
// Order matches Figma node 9735:12015 row by row (3 per row)
const TEAM = [
  // Row 1
  {
    name: 'Active recruitment',
    role: 'Chief Technology Officer',
    photo: null,
  },
  {
    name: 'Active recruitment',
    role: 'Chief Commercial Officer Americas',
    photo: null,
  },
  {
    name: 'Bertrand Loubaton',
    role: 'Chief Commercial Officer',
    photo: '/images/team/Bertrand-Loubaton.png',
  },
  // Row 2
  {
    name: 'Kabya Basu',
    role: 'MLOps Senior Engineer',
    photo: '/images/team/Kabya-Basu.png',
  },
  {
    name: 'Aizhan Kakimzhanova',
    role: 'Data Lead',
    photo: '/images/team/Aizhan-Kakimzhanova.png',
  },
  {
    name: 'Katharine Nowakowski',
    role: 'Ontology Data Engineer',
    photo: '/images/team/Katharine-Nowakowski.png',
  },
  // Row 3
  {
    name: 'Yingkar Bahetnur',
    role: 'Data Lead',
    photo: '/images/team/Yingkar-Bahetnur.png',
  },
  {
    name: 'Rita Paseveckaite',
    role: 'Operations Manager',
    photo: '/images/team/Rita-Paseveckaite.png',
  },
]

export const metadata = {
  title: 'Team — L37',
  description: 'Meet the L37 team bringing together expertise in software, healthcare, and big data.',
}

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7fc] pt-[90px]">

        {/* ── Hero section ─────────────────────────────────────────── */}
        {/* Figma: bg-[#dbe5fc], h-460, rounded-24, max-w-1609 */}
        <div className="px-[16px] py-[24px]">
          <section
            className="max-w-[1609px] mx-auto bg-light-strong rounded-[24px] flex items-center justify-center"
            style={{ height: '460px' }}
          >
            <div className="flex flex-col items-center gap-[48px]">

              {/* Title — Denim WD, 64px, "L37 " navy + "Team" #035ef2 */}
              <div className="text-center" style={{ width: '930px' }}>
                <h1
                  className="font-denim-wd font-normal text-[64px] text-center"
                  style={{ lineHeight: '1.15', letterSpacing: '-0.64px' }}
                >
                  <span className="text-navy-base">L37 </span>
                  <span style={{ color: '#035ef2' }}>Team</span>
                </h1>
              </div>

              {/* Subtitle — Denim TRIAL Regular, 20px, centered, w-609 */}
              <p
                className="font-denim font-normal text-[20px] leading-[1.4] text-navy-base text-center"
                style={{ width: '609px' }}
              >
                Our team brings together expertise in software, healthcare, and big data,
                creating a unique combination of skills.
              </p>

            </div>
          </section>
        </div>

        {/* ── Cards grid ───────────────────────────────────────────── */}
        {/* 3 cols × 340px + 2 × 48px gap = 1116px, centered */}
        {/* Vertical gaps between rows: 48px — matches Figma row spacing */}
        <div className="py-[90px]">
          <div
            className="mx-auto px-[16px]"
            style={{ maxWidth: '1148px' }} // 1116 + 32 for px-16 on each side
          >
            <div className="grid grid-cols-3 gap-[48px]">
              {TEAM.map((member) => (
                <TeamCard
                  key={`${member.name}-${member.role}`}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
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
