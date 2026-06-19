import Footer from '@/components/layout/Footer'
import CompanyHero from '@/components/sections/CompanyHero'
import CompanyHeroMobile from '@/components/sections/CompanyHeroMobile'
import CompanyConviction from '@/components/sections/CompanyConviction'
import CompanyMission from '@/components/sections/CompanyMission'
import CompanyL37Name from '@/components/sections/CompanyL37Name'
import CompanyApproach from '@/components/sections/CompanyApproach'
import CompanyFocusMarkets from '@/components/sections/CompanyFocusMarkets'
import CompanyGlobal from '@/components/sections/CompanyGlobal'
import CompanyTeamStats from '@/components/sections/CompanyTeamStats'
import CompanyCompliance from '@/components/sections/CompanyCompliance'
import CompanyInvestors from '@/components/sections/CompanyInvestors'
import CompanyGetInTouch from '@/components/sections/CompanyGetInTouch'

export const metadata = {
  title: 'Company — L37',
  description: 'L37 brings Clinical Intelligence to Physical AI — our conviction, approach, team and story.',
}

export default function CompanyPage() {
  return (
    <>
      <main className="bg-[#f5f7fc] pt-[90px]">

        {/* Hero — desktop */}
        <div className="hidden md:block">
          <CompanyHero />
        </div>
        {/* Hero — mobile */}
        <div className="md:hidden">
          <CompanyHeroMobile />
        </div>

        {/* Conviction */}
        <CompanyConviction />

        {/* Mission quote */}
        <CompanyMission />

        {/* L37 name story */}
        <CompanyL37Name />

        {/* Approach + 3 cards */}
        <CompanyApproach />

        {/* Focus & Markets (dark) */}
        <CompanyFocusMarkets />

        {/* Global presence (dark, continues from above) */}
        <CompanyGlobal />

        {/* Team stats */}
        <CompanyTeamStats />

        {/* Compliance */}
        <CompanyCompliance />

        {/* Investors */}
        <CompanyInvestors />

        {/* Get in touch */}
        <CompanyGetInTouch />

      </main>

      <Footer />
    </>
  )
}
