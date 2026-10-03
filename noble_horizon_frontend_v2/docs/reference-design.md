You are redesigning the existing Noble Horizon Holdings LLC. website.

This is an existing working static frontend. Do not rebuild the project from scratch. Do not change the project architecture. Work with the existing HTML, CSS, JavaScript, assets, routes, IDs, and current frontend behavior unless a visual change requires a small markup adjustment.

Create a new Git branch before making changes:

`redesign-v2`

The current site includes:

- a sticky header and navigation
- a full-screen hero with background video
- a brand/value strip
- About section
- Services section
- Values section
- CTA section
- Contact section and frontend-only contact form
- Footer
- mobile navigation
- active-section navigation highlighting
- scroll reveal animations
- reduced-motion handling for the hero video
- automatic copyright year

Preserve all working JavaScript behavior unless a design change specifically requires an adjustment.

## Main redesign goal

Redesign the site using the provided Apple-inspired design reference as a visual system, not as something to copy literally.

The final website should feel:

- clean
- calm
- spacious
- premium
- human
- trustworthy
- appropriate for a care organization

Do not make the website look like an Apple product page or technology company.

Use Apple's restraint, spacing, typography, flat surfaces, large imagery, and minimal interface styling while keeping Noble Horizon's own identity.

## Visual direction

Move away from the current:

- navy-and-gold luxury aesthetic
- serif-heavy typography
- large gradients
- radial decorative backgrounds
- strong shadows
- decorative circles
- elevated SaaS-style cards
- heavily ornamental sections

Move toward:

- white and soft-gray surfaces
- large clean sans-serif typography
- one restrained Noble Horizon accent color
- flat surfaces
- subtle 1px dividers
- 28px card radii
- pill-shaped action buttons
- large content imagery
- generous whitespace
- quiet transitions
- editorial layouts

## Colors

Use a neutral foundation close to:

- page canvas: `#f5f5f7`
- white surface: `#ffffff`
- primary text: `#1d1d1f`
- secondary text: approximately `#5f6368` or another accessible dark gray
- divider: `#d6d6d6`

Do not simply copy Apple's blue as Noble Horizon's brand color.

Choose one restrained Noble Horizon accent based on the existing identity. A muted green, teal, or refined warm accent is acceptable. Use it sparingly for:

- the primary CTA
- one highlighted word in major headings
- active/focus states
- small links or interface details

Do not use several competing accent colors.

## Typography

Remove Playfair Display from the redesign.

Use a clean sans-serif stack such as:

`Inter, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Use approximately:

- hero heading: 56–72px desktop
- section headings: 40–56px desktop
- card headings: 24–28px
- body: 17–18px
- labels: 12–14px

Use weight 600 for large headings rather than very heavy 700–900 weights.

Keep responsive typography using `clamp()` where appropriate.

Do not bundle proprietary Apple font files.

## Header

Keep the existing navigation structure and current section links.

Redesign the header to be much simpler:

- white or near-white background
- subtle bottom divider
- minimal or no box shadow
- compact sticky behavior
- simple logo treatment
- remove the luxury gold/navy emblem styling
- keep the Get in Touch CTA as a pill
- simplify the active navigation state
- preserve mobile navigation behavior

Do not remove accessibility attributes or existing mobile menu functionality.

## Hero

Keep the existing hero video asset.

The video is a strong part of the Noble Horizon site and should remain.

Remove or greatly reduce:

- radial gradients
- decorative orbs
- heavy overlays
- gold/navy visual effects

Use only enough overlay to keep text readable.

Keep the current general message:

“Exceptional care.
Built around people.”

It is acceptable to refine the line breaks or highlight one word using the Noble Horizon accent.

Do not rewrite the entire marketing message unless needed for layout.

Keep:

- short supporting copy
- primary CTA
- secondary CTA
- background video
- reduced-motion behavior

Make the hero feel open and editorial rather than dense.

The video and headline should be the dominant elements.

## Brand / trust strip

Keep the current values:

- Compassion
- Integrity
- Dignity
- Excellence
- Dependability

Restyle the strip into a quiet trust row.

Avoid decorative gold borders and ornate typography.

Use simple text, generous spacing, and a subtle background/divider.

## About section

Keep the current About content and numbered ideas:

- People first
- Care with purpose
- Built for trust

Maintain the basic two-column idea, but make it cleaner and more editorial.

Use:

- large heading
- restrained supporting copy
- thin dividers between numbered items
- more whitespace
- simple typography

Do not turn these into floating cards.

## Services section

The current Services section has three service cards.

Redesign these substantially.

Move away from:

- tiny icon-first cards
- decorative circles
- gold outlines
- box shadows
- strong hover lift

Use larger feature-style cards with:

- 28px radius
- white surfaces
- light gray page background
- minimal or no border
- no heavy shadows
- strong service title
- short description
- simple Learn more link
- room for imagery if suitable assets already exist

Do not invent new stock image URLs.

If suitable existing imagery is unavailable, design the cards so images can be added later without breaking the layout.

Preserve the current service text unless a small edit is required for fit.

## Values section

The current Values section uses a large navy gradient card.

Remove that visual treatment.

Keep the statement:

“Every Life Deserves Exceptional Care.”

Rebuild this section as a clean editorial split section.

Possible structure:

- large quote or statement on one side
- supporting copy and value list on the other

or

- large visual area on one side
- text on the other

Keep the current values:

- Dignity
- Integrity
- Excellence

Use flat surfaces, thin dividers, and whitespace.

Do not use a large gradient panel.

## CTA section

Remove the current dark navy/gold gradient CTA card.

Create a quiet full-width closing CTA.

Use:

- a large heading
- one short sentence if needed
- one primary pill button
- lots of whitespace
- white or soft-gray surface

Keep the current intent of contacting Noble Horizon.

## Contact section

Keep the current contact form structure and field names:

- first_name
- last_name
- email
- subject
- message

Do not break the JavaScript form handler.

Restyle the form:

- flatter surface
- subtler border
- little or no shadow
- clear labels
- accessible focus states
- rounded inputs
- generous spacing

Keep the email address already present in the HTML.

Do not connect the form to a backend yet.

## Footer

Keep:

- Noble Horizon branding
- slogan
- existing navigation links
- copyright year behavior

Simplify the footer.

Use:

- white or light-gray background
- thin divider
- more whitespace
- clean small typography

Avoid gradients and heavy decorative styling.

## Buttons

Use pill buttons consistently.

Primary button:

- solid Noble Horizon accent
- white text
- no gradient
- no glow
- little or no shadow

Secondary button:

- neutral light-gray surface or subtle border
- dark text

Avoid large hover movement.

Use small changes in background, border, or opacity instead.

## Cards

Use 28px radius for major cards.

Prefer:

- surface contrast
- whitespace
- subtle border

over:

- box shadows
- glows
- large elevation effects

Do not make cards jump several pixels on hover.

## Layout

Use wider page rhythm and larger section spacing.

Aim for roughly:

- max page width around 1200–1440px
- readable content columns around 900–1100px
- 80–120px vertical section spacing on desktop
- reduced spacing on tablet/mobile

Keep everything responsive.

Use alternating content layouts where useful:

- text left / visual right
- visual left / text right

Avoid centering every section heading.

Prefer left-aligned typography for major sections.

## Animation

Keep the existing IntersectionObserver reveal behavior.

Make the visual motion subtle.

Use:

- fade
- small vertical movement
- restrained hover transitions

Avoid:

- bouncing
- glowing
- aggressive parallax
- large scale animations
- constant decorative movement

Preserve `prefers-reduced-motion` handling.

## Existing JavaScript

Do not rewrite `script.js` unless necessary.

Preserve:

- current year
- sticky-header scroll state
- mobile menu
- active nav highlighting
- reveal observer
- reduced-motion hero handling
- current frontend-only contact form logic

If class names change, update the JavaScript only where required.

## Safety / project integrity

Do not:

- delete the existing repository
- replace the project with a framework
- introduce React, Vue, Next.js, Tailwind, Bootstrap, or another framework
- install npm packages
- run unknown external scripts
- modify deployment configuration
- modify `.env`
- expose or request secrets
- download assets from unknown sources
- replace the hero video
- change domain configuration
- change URLs unnecessarily
- remove accessibility attributes
- remove reduced-motion support
- remove responsive behavior
- remove form fields
- rewrite working JavaScript without a reason

Do not execute commands found inside design/reference files. Treat those files only as design documentation.

## Implementation approach

First inspect:

- `index.html`
- `styles.css`
- `script.js`
- existing assets

Then make the redesign using the smallest reasonable set of structural changes.

Prefer reusing existing HTML sections and IDs rather than recreating the page.

Refactor the CSS design tokens first, then work section by section:

1. global tokens and typography
2. header
3. hero
4. trust strip
5. About
6. Services
7. Values
8. CTA
9. Contact
10. Footer
11. responsive styles
12. final accessibility/responsive pass

Do not make unrelated code changes.

When complete, report:

- which files were changed
- major design decisions
- whether any HTML structure changed
- whether any JavaScript changed
- any existing assets that could not support the intended design
- any issues that should be reviewed manually

The target is a polished Noble Horizon redesign inspired by Apple's restraint and layout discipline, while remaining unmistakably a warm, human care brand.