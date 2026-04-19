# Portfolio Updates Plan

## Files to Modify

| File | Projects affected |
|------|------------------|
| `src/data/projects/index.ts` | Add `description` field to UI group type |
| `src/components/project/StudyDetail.astro` | Image width fix + YouTube embed fix |
| `src/components/project/UIDetail.astro` | Image width fix + group description rendering |
| `src/components/project/FrontendDetail.astro` | Text centering for marista |
| `src/data/projects/study.ts` | frais, banco-itau, eva, cozy |
| `src/data/projects/ui.ts` | motto-center, cormora, meuPS, mon |
| `src/data/projects/frontend.ts` | marista, frimesa, friminho-iogurte, friminho-achocolatado |

---

## Step 1 — `src/data/projects/index.ts`

- [ ] Add `description?: string` to the `ProjectUI` group interface

---

## Step 2 — `src/components/project/StudyDetail.astro`

- [ ] **A. Image 100% width** — wherever `images` arrays are rendered in a `grid grid-cols-1 sm:grid-cols-2`, change to: `grid-cols-1` always when `images.length === 1`, `sm:grid-cols-2` when 2+. Apply to: solution, wireframes, prototype image grids.
- [ ] **B. YouTube video embed** — current `<video src={videoUrl}>` won't play YouTube URLs. Change to render an `<iframe>` when the URL contains `youtube`. The cozy video embed URL from figma-links.md is `https://www.youtube.com/embed/ymiBkkMr-pA?si=oCUWPc819vdyYQKH`.

---

## Step 3 — `src/components/project/UIDetail.astro`

- [ ] **A. Image 100% width** — same conditional grid logic as above for group image grids.
- [ ] **B. Group descriptions** — add rendering for `group.description` under the group title, before images.

---

## Step 4 — `src/components/project/FrontendDetail.astro`

- [ ] **marista text** — change the overview section from `max-w-2xl` to `w-4/5 mx-auto text-center`, aligning text to center and limiting to ~80% container width.

---

## Step 5 — `src/data/projects/study.ts`

### frais-healthy-recipes
- [ ] Remove `wireframes` field entirely
- [ ] Add `prototype.figmaUrl`:
  ```
  https://www.figma.com/proto/J14YjQpl9jPClmbJhrFKS7/FRAIS?embed_host=notion&kind=proto&node-id=2-2&page-id=0%3A1&scaling=scale-down&starting-point-node-id=2%3A2&t=iKjlPFpCNcmSBRb2-1
  ```

### banco-itau-mobile-redesign
- [ ] Update `goal` to match notion-cases.md
- [ ] Update `nextSteps` to include learnings from notion
- [ ] `solution.images` has 1 image — will become full-width automatically after Step 2A fix

### eva-ux-bootcamp
- [ ] Update `prototype.figmaUrl` to the correct embed proto URL:
  ```
  https://www.figma.com/proto/OAnKO82lQ9LtwHLfVpK9kT/EVA?embed_host=notion&kind=proto&node-id=6-3&page-id=1%3A29&scaling=scale-down&starting-point-node-id=276%3A950&t=JfCuARFGE5GuawfC-1
  ```

### cozy-psychological-care
- [ ] Add `wireframes.figmaUrl` (low-fidelity):
  ```
  https://www.figma.com/proto/1W5SQJRTy3HsLbBwReLgHn/Prot%C3%B3tipo-de-baixa-fidelidade---Case-App-Psicologia?embed_host=notion&kind=proto&node-id=47-4&page-id=0%3A1&scaling=scale-down&starting-point-node-id=47%3A4&t=KDVKbBI84ZAqHQnF-1
  ```
- [ ] Add `prototype.figmaUrl` (high-fidelity):
  ```
  https://www.figma.com/proto/1W5SQJRTy3HsLbBwReLgHn/Prot%C3%B3tipo-de-baixa-fidelidade---Case-App-Psicologia?embed_host=notion&kind=proto&node-id=360-1109&page-id=213%3A61&scaling=scale-down&starting-point-node-id=360%3A1109&t=icUee88qZ1sqs4Op-1
  ```
- [ ] Update `prototype.videoUrl` to embed format (renders as `<iframe>` after Step 2B fix):
  ```
  https://www.youtube.com/embed/ymiBkkMr-pA?si=oCUWPc819vdyYQKH
  ```

---

## Step 6 — `src/data/projects/ui.ts`

### motto-center
- [ ] Add `description` to each group (from notion-cases.md):
  - Network Connection: `'UI design for network connection feature.'`
  - Personal Management: `'UI design for personal management feature.'`
  - Event Filter: `'UI design for event filter feature.'`
- [ ] Add `figmaUrl` to each group:
  - Network Connection:
    ```
    https://www.figma.com/proto/sUq6sT7SLpk4Ohji0pxjVn/Motto?embed_host=notion&kind=proto&node-id=11-9268&page-id=11%3A9267&scaling=scale-down-width&starting-point-node-id=11%3A9268&viewport=43264%2C60190%2C0.56&t=6tLbJ4r9rmolsoMd-1
    ```
  - Personal Management:
    ```
    https://www.figma.com/proto/sUq6sT7SLpk4Ohji0pxjVn/Motto?embed_host=notion&kind=proto&node-id=11-12852&page-id=11%3A9266&scaling=min-zoom&starting-point-node-id=11%3A12852&viewport=801%2C903%2C0.2&t=Khxz0qRO2T9IUfOK-1
    ```
  - Event Filter:
    ```
    https://www.figma.com/proto/sUq6sT7SLpk4Ohji0pxjVn/Motto?embed_host=notion&kind=proto&node-id=11-15059&page-id=1%3A1213&scaling=scale-down-width&show-proto-sidebar=1&starting-point-node-id=11%3A15059&viewport=19111%2C-1206%2C0.19&t=iIiRoEBWd1UsykLj-1
    ```

### cormora
- [ ] Remove `/assets/cover_images/cormora.png` from `groups[0].images` (cover duplicate)
- [ ] Add `description` to groups (from notion-cases.md):
  - Pop-ups: `'Pop-ups for the Cormora travel agency system, in Curitiba. Added at the beginning of each form flow so users understand the purpose and don\'t complete the wrong form.'`
  - Header: `'Redesigned header component for the Cormora system.'`
- ⚠️ No figma link available in `figma-links.md` — skipping figma embed

### meuPS
- [ ] Remove `/assets/cover_images/meuPS.png` from `groups[0].images` (cover duplicate)
- ⚠️ No figma link available in `figma-links.md` — skipping figma embed

### mon
- [ ] Remove `/assets/cover_images/mon.png` from `groups[0].images` (cover duplicate)
- [ ] Add `groups[0].figmaUrl`:
  ```
  https://www.figma.com/proto/2j8DLRYADpuibF3CPO6yJ7?embed_host=notion&kind=proto&node-id=1%3A2209&page-id=0%3A1&scaling=scale-down-width&viewport=1216%2C594%2C0.05
  ```

---

## Step 7 — `src/data/projects/frontend.ts`

### frimesa-website
- [ ] Remove `/assets/cover_images/frimesa-website.png` from `images` array (index 0)
- [ ] Update `overview` to align with notion-cases.md

### friminho-iogurte
- [ ] Remove `/assets/cover_images/friminho-iogurte.png` from `images` array (index 0)

### friminho-achocolatado
- [ ] Remove `/assets/cover_images/friminho-achocolatado.png` from `images` array (index 0)

### marista-interactive-totem
- [ ] No data changes — styling fix handled in Step 4

---

## Gaps & Notes

- **meuPS** and **cormora** have no Figma links in `figma-links.md` — no embed will be added for them.
- The `videoUrl` for cozy currently uses a `<video>` tag which won't play YouTube. Step 2B fixes this by switching to an `<iframe>` for YouTube URLs.
- Cover image stays in `motto-center` groups[0] (user did not request removal).
- `eva-ux-bootcamp` images are already in 2-col grids (4 images) — the 100% width fix applies to single-image cases only.

---

## Execution Order

1. `src/data/projects/index.ts`
2. `src/components/project/StudyDetail.astro`
3. `src/components/project/UIDetail.astro`
4. `src/components/project/FrontendDetail.astro`
5. `src/data/projects/study.ts`
6. `src/data/projects/ui.ts`
7. `src/data/projects/frontend.ts`
