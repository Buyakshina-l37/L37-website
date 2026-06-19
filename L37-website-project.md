# L37 Website — Project Map

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** HubSpot Forms API (portal `48796367`, form `9e292710-121c-493d-a896-3eab828a91fd`)
- **Deploy:** Vercel (auto-deploy from `main` branch)
- **Repo:** `Buyakshina-l37/L37-website`
- **Local path:** `/Users/yuliyabuyakshina/Documents/L37/ClaudeCode/L37-website`
- **Figma (v02):** `meEu590rgHJjXsvVlls9H7`
- **Figma (v01):** `AzJKHEbEnuIM1IZ9T0CGry`

---

## Pages

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/team` | `src/app/team/page.tsx` |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| `/terms-of-service` | `src/app/terms-of-service/page.tsx` |
| Layout | `src/app/layout.tsx` |
| API | `src/app/api/contact/route.ts` |

---

## Sections — Desktop

| Component | File |
|---|---|
| `Hero` | `src/components/sections/Hero.tsx` |
| `Vision` | `src/components/sections/Vision.tsx` |
| `PhysicalAIDigitalTwins` | `src/components/sections/PhysicalAIDigitalTwins.tsx` |
| `SolutionSection` | `src/components/sections/SolutionSection.tsx` |
| `TechStack` | `src/components/sections/TechStack.tsx` |
| `TechStackCarousel` | `src/components/sections/TechStackCarousel.tsx` |
| `Pediatric` | `src/components/sections/Pediatric.tsx` |
| `Ontology` | `src/components/sections/Ontology.tsx` |
| `OemProgram` | `src/components/sections/OemProgram.tsx` |
| `Workflow` | `src/components/sections/Workflow.tsx` |
| `Strength` | `src/components/sections/Strength.tsx` |
| `GetInTouch` | `src/components/sections/GetInTouch.tsx` |
| `Data` | `src/components/sections/Data.tsx` |
| `GraphLayer` | `src/components/sections/GraphLayer.tsx` |

---

## Sections — Mobile

| Component | File |
|---|---|
| `HeroMobile` | `src/components/sections/HeroMobile.tsx` |
| `PhysicalAIDigitalTwinsMobile` | `src/components/sections/PhysicalAIDigitalTwinsMobile.tsx` |
| `SolutionMobile` | `src/components/sections/SolutionMobile.tsx` |
| `TechStackMobile` | `src/components/sections/TechStackMobile.tsx` |
| `PediatricMobile` | `src/components/sections/PediatricMobile.tsx` |
| `OntologyMobile` | `src/components/sections/OntologyMobile.tsx` |
| `OemProgramMobile` | `src/components/sections/OemProgramMobile.tsx` |
| `WorkflowMobile` | `src/components/sections/WorkflowMobile.tsx` |
| `StrengthMobile` | `src/components/sections/StrengthMobile.tsx` |
| `GetInTouchMobile` | `src/components/sections/GetInTouchMobile.tsx` |

---

## UI / Shared Components

| Component | File |
|---|---|
| `TeamCard` | `src/components/sections/TeamCard.tsx` |
| `TeamMemberModal` | `src/components/sections/TeamMemberModal.tsx` |
| `ContactForm` | `src/components/sections/ContactForm.tsx` |
| `CardLive` | `src/components/sections/CardLive.tsx` |
| `NodeInfoPanel` | `src/components/sections/NodeInfoPanel.tsx` |
| `OntologiesPanel` | `src/components/sections/OntologiesPanel.tsx` |
| `SimulationOverlay` | `src/components/sections/TechStackCarousel/SimulationOverlay.tsx` |
| `Button` | `src/components/ui/Button.tsx` |
| `Card` | `src/components/ui/Card.tsx` |
| `Label` | `src/components/ui/Label.tsx` |

---

## Layout

| Component | File |
|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` |
| `NavMobile` | `src/components/layout/NavMobile.tsx` |
| `SecondaryNav` | `src/components/layout/SecondaryNav.tsx` |
| `Footer` | `src/components/layout/Footer.tsx` |

---

## Data Files

| Name | File | Notes |
|---|---|---|
| `card-svg-data` | `src/components/sections/card-svg-data.ts` | SVG paths для CardLive |

---

## Assets

| Type | Path |
|---|---|
| Team photos | `public/images/team/` |
| Placeholder (recruitment) | `public/images/team/teamPhotoPlaceholder.svg` |
| Ontology diagram | `public/images/ontology.svg` |
| Favicon | `public/l37-favicon/` |

---

## Workflow

1. Читати Figma через MCP (`get_metadata` → `get_design_context` → `get_screenshot`)
2. Писати промти з чіткими межами (текст окремо від стилів, стилі окремо від структури)
3. Деплой: `git add . && git commit -m "..." && git push origin main`
4. Vercel auto-deploy з `main` — ручний тригер не потрібен
