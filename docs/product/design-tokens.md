# Design Tokens

## Direction

The visual direction is **calm operational clarity**: warm enough for hospitality, precise enough for finance and scheduling. Dense work areas use restrained surfaces and strong typography; urgency is reserved for genuine risk. The design must not imitate a proprietary product or depend on luxury-brand styling.

## Typography

- Interface: `"IBM Plex Sans", "Segoe UI", sans-serif`
- Editorial display and onboarding: `"Newsreader", Georgia, serif`
- Numeric/tabular data: interface family with `font-variant-numeric: tabular-nums`

Recommended scale:

| Token | Size / line height | Use |
|---|---:|---|
| `--text-xs` | 0.75rem / 1rem | secondary metadata only |
| `--text-sm` | 0.875rem / 1.25rem | compact controls |
| `--text-md` | 1rem / 1.5rem | default body and forms |
| `--text-lg` | 1.125rem / 1.625rem | section lead |
| `--text-xl` | 1.375rem / 1.75rem | panel title |
| `--text-2xl` | 1.75rem / 2.125rem | page title |
| `--text-3xl` | 2.25rem / 2.5rem | onboarding display |

No essential interface text should render below 12 CSS pixels. Default form labels and values are at least 14 pixels.

## Color

Light theme CSS variables:

```css
:root {
  --canvas: #f7f6f2;
  --surface-1: #ffffff;
  --surface-2: #f0efe9;
  --surface-3: #e5e4dd;
  --ink-strong: #182322;
  --ink: #34413f;
  --ink-muted: #687370;
  --border: #d4d8d3;
  --brand: #176b68;
  --brand-hover: #105a57;
  --brand-soft: #dcefed;
  --accent: #d96f45;
  --accent-soft: #fae7df;
  --success: #26734f;
  --warning: #9a6400;
  --danger: #b43b3b;
  --info: #285f9e;
  --focus: #6f48c9;
  --scrim: rgb(10 20 19 / 58%);
}
```

Dark theme:

```css
[data-theme="dark"] {
  --canvas: #111716;
  --surface-1: #18201f;
  --surface-2: #202a28;
  --surface-3: #2b3735;
  --ink-strong: #f4f7f5;
  --ink: #d8e0dd;
  --ink-muted: #a5b1ad;
  --border: #3b4946;
  --brand: #65c7c0;
  --brand-hover: #84d6d0;
  --brand-soft: #173c3a;
  --accent: #f09a76;
  --accent-soft: #4a2a20;
  --success: #72c79d;
  --warning: #efbd62;
  --danger: #ff8b89;
  --info: #83b7ef;
  --focus: #b59aff;
  --scrim: rgb(0 0 0 / 72%);
}
```

All text/background and control states must be contrast-tested. Status never relies on color alone.

## Spacing and sizing

Base unit is 4 pixels: `--space-1: .25rem`, `--space-2: .5rem`, `--space-3: .75rem`, `--space-4: 1rem`, `--space-5: 1.25rem`, `--space-6: 1.5rem`, `--space-8: 2rem`, `--space-10: 2.5rem`, `--space-12: 3rem`, `--space-16: 4rem`.

- compact control height: 2.25rem, desktop data tools only;
- default control height: 2.75rem;
- touch control height: 3rem;
- desktop navigation width: 17rem expanded, 4.5rem compact;
- readable content maximum: 78rem; calendars and data grids may use full width.

## Shape, border, and elevation

- `--radius-sm: .375rem`
- `--radius-md: .625rem`
- `--radius-lg: 1rem`
- `--radius-pill: 999px`
- default border: 1px solid `var(--border)`
- focus ring: 3px solid `var(--focus)` with 2px offset
- shadow 1: `0 1px 2px rgb(16 30 28 / 8%)`
- shadow 2: `0 12px 32px rgb(16 30 28 / 14%)`

Use elevation for overlays and movable context, not to decorate every card.

## Motion

- fast feedback: 120ms;
- standard transition: 180ms;
- panel transition: 240ms;
- easing: `cubic-bezier(.2, .8, .2, 1)`.

No workflow depends on animation. Under `prefers-reduced-motion: reduce`, non-essential transitions are removed and scrolling is instant.

## Breakpoints

- `sm`: 30rem
- `md`: 48rem
- `lg`: 64rem
- `xl`: 80rem
- `2xl`: 96rem

Components should respond to available container width when possible. The resource calendar switches to agenda mode on narrow viewports instead of forcing page-level horizontal zoom or overflow.

