# VELMORAINE VILLA — Asset Generation Prompts

> ## ✅ DELIVERY STATUS
> | Asset | Status |
> |---|---|
> | `kitchen.jpg` `pool-deck.jpg` `wine-cellar.jpg` `spa-bath.jpg` | ✅ delivered (cropped from scene grid) — wired as chapters 04–05, 09–10 |
> | `favicon.png` | ✅ delivered (gold-V tile) — site favicon + topbar brand mark |
> | `poster-hero.jpg` | ✅ delivered — og:image / social share card |
> | `villa-lounge.mp4` | 🔄 removed from site per owner request (Sky Lounge chapter cut). The hero drone clip was extracted to **100 webp frames** → scroll-scrubbed frame-sequence in the Arrival chapter (`assets/seq/`) |
> | `film-grade.jpg` `pool-deck-v.jpg` `great-room-v.jpg` `suite-v.jpg` | `film-grade.jpg` ✅ now wired as the **Contact chapter** backdrop. The three verticals remain unwired (Mediterranean style ≠ curved estate) — kept for social/blog use. |
> | `logo.png` (W monogram) | ⚠️ not usable — transparency is faked with a baked-in checkerboard. The gold-V tile stands in as the brand mark. Regenerate on true transparent background to swap in. |
> | `blueprint-*.jpg`, `drone-golden.mp4`, `chandelier-loop.mp4`, `pool-loop.mp4` | ⬜ still open |

Use this file to generate any NEW images or videos the scroll-world site needs.
Generate an asset → save it into `public/assets/img/` (or `/video/`) with the **exact filename**
listed here → tell me the filename and I will wire it into the site.

Works with: Midjourney v7 (`--ar 16:9 --style raw`), FLUX.1, Ideogram, Leonardo.
For VIDEO prompts use: Kling 2.x, Runway Gen-4, Luma, or Veo (image-to-video works best
when you feed them one of the stills below as the first frame).

---

## GLOBAL STYLE ANCHOR (paste this at the start of EVERY prompt)

> Ultra-realistic architectural photography of a futuristic curved luxury hillside mansion in
> Los Angeles, organic sculptural concrete and travertine forms, floor-to-ceiling curved glass,
> black marble floors, walnut wood ceilings, warm amber interior lighting glowing against a deep
> blue-hour dusk sky, infinity-edge pool reflecting city lights, sculptural olive trees in dark
> planters, bubble-glass cluster chandeliers, cinematic composition, soft volumetric light,
> photorealistic, 8k detail

**Negative / avoid:** cartoon, illustration, oversaturated HDR, distorted geometry, watermark,
text, people looking at camera, low resolution, fisheye distortion

**Aspect ratios:** desktop scene plates → `16:9` (3840×2160 if possible) · mobile verticals → `9:16`

---

## 1. MISSING SCENE PLATES (new chapters / upgrades)

### `kitchen.jpg` — The Chef's Kitchen *(storyboard has this scene, no image exists yet)*
> [STYLE ANCHOR] interior shot of a monolithic kitchen island carved from a single block of black
> marble with veined gold seams, brushed brass fixtures, floating walnut shelves with ceramic
> tableware, a professional range with blue flames, pendant lights made of hand-blown glass orbs,
> floor-to-ceiling glass wall revealing the illuminated downtown Los Angeles skyline at dusk,
> steam rising softly from a copper pot, warm candle-like ambience, wide cinematic angle
> --ar 16:9 --style raw

### `pool-deck.jpg` — The Pool Deck *(storyboard panel 5)*
> [STYLE ANCHOR] ground-level view across a still infinity pool toward two tall silhouetted palm
> trees framing the glittering Los Angeles skyline at sunset, sunken fire-pit lounge with low
> charcoal sofas on a travertine deck, flame torches lining the water edge, pink-orange gradient
> sky fading to indigo, perfect mirror reflections on the water, symmetrical cinematic composition
> --ar 16:9 --style raw

### `wine-cellar.jpg` — The Wine Wall
> [STYLE ANCHOR] interior close-up of a curved floor-to-ceiling glass wine cellar wall, hundreds
> of backlit bottles glowing amber like jewelry, black marble tasting counter with two leather
> stools, brass ladder rail, soft reflections on polished dark stone floor, moody intimate
> lighting, shallow depth of field --ar 16:9 --style raw

### `spa-bath.jpg` — The Spa Bath
> [STYLE ANCHOR] master bathroom with a monolithic travertine soaking tub positioned before a
> curved floor-to-ceiling window overlooking the night city lights, candles flickering on black
> marble ledge, rainfall shower in hammered bronze, folded white towels, olive branch in a stone
> vase, steam and warm glow against cool blue dusk light outside --ar 16:9 --style raw

---

## 2. ARCHITECTURE CHAPTER (sketch panels, storyboard frames 8–9)

### `blueprint-exterior.jpg`
> Hand-drawn architectural concept sketch in graphite pencil on warm white paper, elevation view
> of a curved futuristic two-story mansion with sweeping rooflines, arched openings, helipad circle
> marked with H, loose expressive hatching, elegant architect's annotations and measurement lines,
> minimalist gallery style --ar 16:9

### `blueprint-aerial.jpg`
> Hand-drawn architectural concept sketch in graphite pencil on warm white paper, aerial perspective
> view of a flowing curved mansion with lagoon pool, wooden docks, palm trees drawn loosely,
> helicopter above rooftop pad, construction dimension lines, refined drafting style, museum
> print quality --ar 16:9

---

## 3. HIGH-RES RE-SHOOTS (your current stills are 736×981 portrait; 16:9 versions stay sharp fullscreen)

Same scenes you already have — regenerate wide:

### `great-room-wide.jpg`
> [STYLE ANCHOR] double-height grand salon seen from a low center angle, monumental cascading
> chandelier of dozens of suspended amber glass shards, black spiral staircase curving along right
> wall, grand piano silhouetted left, sunken charcoal lounge pit around a black marble plinth,
> curved two-story glass wall revealing palm trees and the downtown skyline at blue hour,
> fireplace ribbon flickering right, reflective black marble floor --ar 16:9 --style raw

### `lounge-fire-wide.jpg`
> [STYLE ANCHOR] intimate evening lounge, U-shaped charcoal sectional on a raised black platform
> surrounded by a thin reflecting water channel, linear fireplace built into a book-matched black
> marble wall, floor lamps with exposed bulbs strung overhead, bar counter with two figures in soft
> focus beyond, panoramic night city lights through curved glass --ar 16:9 --style raw

### `suite-wide.jpg`
> [STYLE ANCHOR] circular master suite at night, low round bed with layered ivory and charcoal
> linens, curved ceiling with a ring oculus skylight, twin olive trees uplit beside the bed,
> headboard wall of book-matched black slate with hidden cove lighting, panoramic view of the
> glowing city through wraparound glass, champagne palette --ar 16:9 --style raw

---

## 4. VIDEO GENERATION PROMPTS (Kling / Runway / Veo)

### `drone-golden.mp4` — extended hero flight (10–20 s)
> Slow cinematic FPV drone flight gliding over a futuristic curved luxury hillside mansion at
> golden hour, camera descends past a rooftop helipad with a parked helicopter, sweeps over an
> infinity pool reflecting sunset clouds, approaches the curved glass great room where a crystal
> chandelier glows inside, supercars parked on the motor court below, palm trees swaying gently,
> smooth gimbal-stabilized movement, photorealistic, 24 fps, shallow atmospheric haze

### `chandelier-loop.mp4` — ambient loop behind The Great Room text
> Static locked-off shot, slow subtle parallax drift forward, dozens of hand-blown amber glass
> bubbles hanging from thin wires sway almost imperceptibly, warm candlelight flicker on black
> marble, dust motes floating in volumetric light, seamless loop, ultra realistic, 24 fps

### `pool-loop.mp4` — ambient loop for Finale
> Static night shot of an infinity pool, gentle ripples crossing mirror-still water reflecting a
> glowing modern mansion and distant city lights, faint steam drifting off the surface, stars
> twinkling above, seamless cinemagraph loop, photorealistic, 24 fps

---

## 5. BRAND & MISC

### `logo.png` (transparent, 2048px)
> Minimal luxury monogram logo, interlocking letters "VV" formed by two elegant serif strokes,
> thin champagne-gold lines (#C9A96A) on transparent background, high-end real-estate brand,
> flat vector style, perfectly balanced negative space --ar 1:1

### `favicon.png`
> Single letter "V" in a refined high-contrast serif, champagne gold #C9A96A on solid charcoal
> #161310 rounded square, minimal, centered, crisp edges --ar 1:1

### `poster-hero.jpg` (video poster / social share card)
> Cinematic dusk aerial of the curved mansion estate with glowing amber interiors mirrored in the
> lagoon pool, helicopter on rooftop pad, dramatic indigo sky, space in upper third for title
> typography, film-grade color grade --ar 16:9

### Vertical mobile crops (`--ar 9:16`)
Regenerate `pool-deck`, `great-room-wide`, `suite-wide` vertically for phones:
append: `, vertical composition optimized for phone screens, key subject centered` --ar 9:16
Save as: `pool-deck-v.jpg`, `great-room-v.jpg`, `suite-v.jpg`

---

## PRIORITY ORDER (if you only generate a few)

1. `kitchen.jpg` — unlocks a full missing chapter
2. `pool-deck.jpg` — signature storyboard moment
3. `great-room-wide.jpg` — sharpest hero-adjacent plate
4. `drone-golden.mp4` — richer arrival sequence
5. `logo.png` + `favicon.png` — brand finish
