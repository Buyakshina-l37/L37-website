# Hero Section — Animation Reference

## Загальна шкала часу

```
0.0s ──── Hospital slide-in ────────────────────────── 0.8s
0.6s ──── Cards entrance (×6, стаггер 0.12s) ───────── ~1.5s
          └── float loop стартує після кожного
1.2s ──── Graph: bg-halo, rings, sphere pop-in ──────── 1.8s
1.50s ─── Lines entrance (×21, стаггер 0.10s) ───────── ~4.2s
          └── пауза 1.2s → crossfade 0.6s → snake loop @ 6.0s
1.70s ─── Nodes pop-in (×13, стаггер 0.06s) ─────────── ~2.5s
1.85s ─── Node labels (×13, стаггер 0.07s) ──────────── ~2.8s
1.8s ──── UI panels ×2 (стаггер 0.15s) ──────────────── 2.3s
2.0s ──── Query Log panel + data-line ───────────────── 2.6s
2.2s ──── Signal dots ×3 (стаггер 0.12s) ────────────── 2.6s
2.2s ──── Humanoid slide-in ─────────────────────────── 3.0s
2.8s ──── Text Line 1 ────────────────────────────────── 3.3s
2.95s ─── Text Line 2 (gradient) ────────────────────── 3.45s
3.15s ─── CTA button bounce ──────────────────────────── done
3.2s ──── Sphere inner pulse starts (continuous)
3.5s ──── Ripple, node wave, card pulse starts (continuous)
3.5s ──── Query Log row highlight starts (continuous)
```

---

## 1. Hospital (Phase 1)

| параметр | значення |
|---|---|
| position | `left: 0, top: 8` |
| size | `912 × 499` |
| entrance | slide від лівого краю |
| initial | `x: -60, opacity: 0` |
| animate | `x: 0, opacity: 1` |
| delay | `0s` |
| duration | `0.8s` |
| ease | `easeOut` |

---

## 2. Data Cards (Phase 2) — ×6, CardLive

**Порядок і позиції:**

| # | key | left | top | w×h |
|---|---|---|---|---|
| 0 | BP | 138 | 92 | 59×32 |
| 1 | HR | 302 | 100 | 59×32 |
| 2 | Sp (SpO2) | 565 | 128 | 59×32 |
| 3 | RR | 379 | 370 | 59×32 |
| 4 | EMG | 600 | 384 | 59×36 |
| 5 | Temp | 698 | 351 | 59×36 |

**Entrance (кожна картка):**

| параметр | значення |
|---|---|
| initial | `scale: 0.8, opacity: 0` |
| animate | `scale: 1, opacity: 1` |
| delay | `0.6 + i × 0.12s` → від 0.6s до 1.2s |
| duration | `0.5s` |
| ease | `easeOut` (за замовч.) |

**Float loop (після entrance, нескінченно):**

| key | amp | floatDur | напрямок |
|---|---|---|---|
| BP | −5px | 3.8s | вгору |
| HR | −4px | 3.2s | вгору |
| Sp | −6px | 4.0s | вгору |
| RR | −5px | 3.5s | вгору |
| EMG | −4px | 4.2s | вгору |
| Temp | −6px | 3.0s | вгору |

```
animate: y [0, amp, 0]
delay: entranceDelay + 0.5s
repeat: Infinity, repeatType: 'loop', ease: 'easeInOut'
```

**Live numbers (cross-fade, Task 1):**

| key | start | range | interval |
|---|---|---|---|
| BP | 118 | 116–121 | 3400ms |
| HR | 72 | 70–76 | 2600ms |
| Sp | 98 | 97–99 | 5000ms |
| RR | 16 | 14–18 | 4200ms |
| EMG | 0.4 | 0.3–0.6 | 1500ms |
| Temp | 36.6 | 36.5–36.7 | 6000ms |

```
AnimatePresence mode="wait" initial={false}
cross-fade duration: 0.2s
font: Courier Prime 14px, color: #5E6D80
```

**Datapoint pulse (Task 2, нескінченно):**

```
element: rect 4×4px at (47, 7) у кожному SVG
animate: scale [1, 1.4, 1], opacity [1, 0.3, 1]
duration: 1.5s
ease: easeInOut, repeatType: 'reverse'
delay per card: 4.2 / 4.6 / 5.0 / 5.4 / 5.8 / 6.2s
```

---

## 3. Graph — GraphLayer (Phase 3)

### 3a. bg-halo
```
initial: opacity 0  →  animate: opacity 1
delay: 1.2s, duration: 0.6s
```

### 3b. ring-outer
```
initial: opacity 0, scale 0.85  →  animate: opacity 1, scale 1
transformOrigin: 152px 207px
delay: 1.2s, duration: 0.6s, ease: easeOut
```

### 3c. ring-inner
```
initial: opacity 0, scale 0.85  →  animate: opacity 1, scale 1
transformOrigin: 152px 207px
delay: 1.3s, duration: 0.6s, ease: easeOut
```

### 3d. Mesh lines (×21, GraphLine, Task 4)

**Entrance — solid draw:**
```
initial: pathLength 0  →  animate: pathLength 1
delay: 1.50 + i × 0.10s  (від 1.50s до 3.50s)
duration: 0.7s, ease: easeInOut
→ остання лінія завершується: 1.50 + 20×0.10 + 0.70 = 4.20s
```

**Crossfade — всі лінії разом, після паузи 1.2s:**
```
crossfade starts (всі): 4.20 + 1.20 = 5.40s  (фіксований setTimeout)
loop starts     (всі): 5.40 + 0.60 = 6.00s
solid:  opacity → 0,   duration: 0.6s
dashed: opacity 0 → so, duration: 0.6s  (одночасно)
```

**Loop — snake wave (нескінченно):**
```
strokeDasharray: "4 8"
animate: strokeDashoffset [12, 0]
strokeWidth: 0.5 → 1px  (разом з crossfade, duration: 0.6s)
duration per line: 2.4s
stagger (delay): i × 0.18s  → від 0s до 3.60s
repeatDelay: 21 × 0.18 − 2.4 = 1.38s
repeat: Infinity, repeatType: 'loop', ease: 'linear'
→ одна хвиля проходить по всіх лініях за ~3.78s і починається знову
```

### 3e. Nodes (×13)

**Entrance:**
```
initial: scale 0, opacity 0  →  animate: scale 1, opacity 1
delay: 1.70 + i × 0.06s  (від 1.70s до 2.42s)
duration: 0.25s, ease: [0.34, 1.56, 0.64, 1]  (пружина)
```

**Node pulse wave (Task 5, нескінченно після entrance):**
```
animate: scale [1, 1.15, 1], filter brightness [1, 1.5, 1]
delay: 3.5 + i × 0.3s  (stagger 0.3s між нодами)
duration: 1.5s, ease: easeInOut
repeat: Infinity, repeatDelay: 6.9s
→ одна хвиля ~кожні 8.4s
```

### 3f. Node labels (×13)
```
initial: opacity 0  →  animate: opacity 1
delay: 1.85 + i × 0.07s  (від 1.85s до 2.69s)
duration: 0.3s
```

### 3g. Center sphere

**Entrance:**
```
initial: scale 0  →  animate: scale 1
transformOrigin: 152px 207px
delay: 1.2s, duration: 0.3s, ease: [0.34, 1.56, 0.64, 1]
```

**Ripple ring (Task 6, нескінченно):**
```
element: circle r=33, stroke white 50% opacity
animate: scale [1, 2], opacity [0.6, 0]
delay: 3.5s, duration: 2s, ease: easeOut
repeat: Infinity, repeatDelay: 1s
→ цикл кожні 3s
```

**Inner sphere breathe (нескінченно):**
```
animate: scale [1, 1.15, 1], opacity [1, 0.6, 1]
delay: 3.2s, duration: 2s, ease: easeInOut
repeat: Infinity, repeatType: 'reverse'
```

### 3h. Signal dots (×3)
```
positions: (148,203), (238,203), (330,203)
initial: scale 0, opacity 0  →  animate: scale 1, opacity 1
delay: 2.2 + i × 0.12s  → 2.2s / 2.32s / 2.44s
duration: 0.2s
```

### 3i. Data line (горизонтальна пунктирна лінія)
```
initial: scaleX 0  →  animate: scaleX 1
transformOrigin: 152px 206.5px  (розгортається вправо від центру)
delay: 2.0s, duration: 0.8s, ease: easeOut
wrapper opacity: 0 → 0.5, delay: 2.0s, duration: 0.6s
```

---

## 4. UI Panels (Phase 4)

### Node Info + Ontologies (×2)
```
initial: y -20, opacity 0  →  animate: y 0, opacity 1
delay: 1.8 + i × 0.15s  → 1.8s / 1.95s
duration: 0.5s, ease: easeOut
```

### Query Log panel
```
initial: y -20, opacity 0  →  animate: y 0, opacity 1
delay: 2.1s (= 1.8 + 2×0.15), duration: 0.5s, ease: easeOut
position: left 828, top 461, size 112×110
```

**Query Log row highlight (Task 3, нескінченно):**
```
rows: y=19 / y=43 / y=67 / y=91  (кожен h=19px)
highlight: rgba(113, 131, 153, 0.1)
стаггер між рядками: 600ms
пауза після останнього: 2000ms
initial delay: 3500ms (чекає завершення entrance)
fade in/out per row: 0.2s
→ повний цикл: ~3.8s + 2s пауза = ~5.8s
```

---

## 5. Humanoid (Phase 5)
```
position: left 1249, top 298, size 305×457
initial: x 80, opacity 0  →  animate: x 0, opacity 1
delay: 2.2s, duration: 0.8s, ease: easeOut

brightness pulse (одноразовий після entrance):
animate: brightness [1, 1.3, 1]
delay: 3.0s, duration: 0.4s, ease: easeInOut
```

---

## 6. Text + Button (Phase 6)

**Line 1** — "Clinical Intelligence for Safe "
```
font: Denim TRIAL 500, 44px/51px, color rgba(12,22,41,0.8)
initial: y 20, opacity 0  →  animate: y 0, opacity 1
delay: 2.8s, duration: 0.5s, ease: easeOut
```

**Line 2** — "Physical AI in Healthcare"
```
font: Denim TRIAL 500, 56px/64px, gradient #2473F2→#00B88D
initial: y 20, opacity 0  →  animate: y 0, opacity 1
delay: 2.95s, duration: 0.5s, ease: easeOut
```

**CTA button** — "Watch demo"
```
size: 185×56, bg #0C1629, radius 8px
initial: scale 0.9, opacity 0  →  animate: scale 1, opacity 1
opacity: delay 3.15s, duration 0.3s
scale: delay 3.15s, spring stiffness 320, damping 14
```
