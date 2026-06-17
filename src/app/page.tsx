import SecondaryNav from '@/components/layout/SecondaryNav'
import Hero from '@/components/sections/Hero'
import HeroMobile from '@/components/sections/HeroMobile'
import SolutionSection from '@/components/sections/SolutionSection'
import SolutionMobile from '@/components/sections/SolutionMobile'
import PhysicalAIDigitalTwins from '@/components/sections/PhysicalAIDigitalTwins'
import PhysicalAIDigitalTwinsMobile from '@/components/sections/PhysicalAIDigitalTwinsMobile'
import OemProgram from '@/components/sections/OemProgram'
import OemProgramMobile from '@/components/sections/OemProgramMobile'
import TechStack from '@/components/sections/TechStack'
import TechStackMobile from '@/components/sections/TechStackMobile'
import Pediatric from '@/components/sections/Pediatric'
import PediatricMobile from '@/components/sections/PediatricMobile'
import Ontology from '@/components/sections/Ontology'
import OntologyMobile from '@/components/sections/OntologyMobile'
import Workflow from '@/components/sections/Workflow'
import WorkflowMobile from '@/components/sections/WorkflowMobile'
import Strength from '@/components/sections/Strength'
import StrengthMobile from '@/components/sections/StrengthMobile'
import GetInTouch from '@/components/sections/GetInTouch'
import GetInTouchMobile from '@/components/sections/GetInTouchMobile'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <SecondaryNav />
      </div>
      <main>
        {/* ── Hero ── */}
        <div style={{ paddingTop: '90px', paddingLeft: '16px', paddingRight: '16px' }}>
          <section id="vision">
            <div className="hidden md:block">
              <Hero />
            </div>
            <div className="md:hidden">
              <HeroMobile />
            </div>
          </section>
        </div>

        {/* ── Solution ── */}
        <section id="solution">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 160, paddingBottom: 0, marginBottom: 160 }}
          >
            <SolutionSection />
          </div>
          <div className="md:hidden">
            <SolutionMobile />
          </div>
        </section>

        {/* ── Physical AI & Digital Twins ── */}
        <section id="digital-twins">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
          >
            <div style={{ maxWidth: 1350, margin: '0 auto' }}>
              <PhysicalAIDigitalTwins />
            </div>
          </div>
          <div className="md:hidden">
            <PhysicalAIDigitalTwinsMobile />
          </div>
        </section>

        {/* ── OEM Program ── */}
        <section id="oem-program">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 24, paddingBottom: 0, marginBottom: 0 }}
          >
            <OemProgram />
          </div>
          <div className="md:hidden">
            <OemProgramMobile />
          </div>
        </section>

        {/* ── TechStack — flushes with OemProgram above ── */}
        <section id="technology" className="mb-0 md:mb-[160px]" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="hidden md:block">
            <TechStack />
          </div>
          <div className="md:hidden" style={{ marginTop: 0 }}>
            <TechStackMobile />
          </div>
        </section>

        {/* ── Pediatric ── */}
        <section id="pediatric">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
          >
            <div style={{ maxWidth: 1350, margin: '0 auto' }}>
              <Pediatric />
            </div>
          </div>
          <div className="md:hidden" style={{ marginTop: 80 }}>
            <PediatricMobile />
          </div>
        </section>

        {/* ── Ontology ── */}
        <section id="ontology">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
          >
            <div style={{ maxWidth: 1350, margin: '0 auto' }}>
              <Ontology />
            </div>
          </div>
          <div className="md:hidden">
            <OntologyMobile />
          </div>
        </section>

        {/* ── Workflow ── */}
        <section id="workflow">
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 24, paddingBottom: 0, marginBottom: 0 }}
          >
            <Workflow />
          </div>
          <div className="md:hidden px-[16px]">
            <WorkflowMobile />
          </div>
        </section>

        {/* ── Strength — flushes with Workflow above ── */}
        <section>
          <div
            className="hidden md:block px-[16px]"
            style={{ paddingTop: 0, paddingBottom: 24, marginBottom: 0 }}
          >
            <Strength />
          </div>
          <div className="md:hidden px-[16px]" style={{ marginBottom: '64px' }}>
            <StrengthMobile />
          </div>
        </section>

        {/* ── Get in touch ── */}
        <section>
          <div
            className="hidden md:block px-[16px]"
            style={{ marginTop: 160, marginBottom: 160 }}
          >
            <div style={{ maxWidth: 1281, margin: '0 auto' }}>
              <GetInTouch />
            </div>
          </div>
          <div className="md:hidden">
            <GetInTouchMobile />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
