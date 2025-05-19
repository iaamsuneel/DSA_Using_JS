1. Percentage (%)
   ✅ What It Achieves:
   Creates fluid layouts that scale with parent container
   Perfect for responsive grids, nested components

⚠️ Side Effects:
Breaks with position: absolute/fixed (sizes relative to nearest positioned ancestor)
Height percentages fail if parent height isn’t explicitly set

🔧 Workarounds:
Use height: 100% only when parent has fixed height or vh
For absolute positioning, combine with vw/vh or transform

2. Viewport Units (vw, vh)
   ✅ What It Achieves:
   Elements sized relative to screen dimensions (e.g., full-screen hero sections)
   Dynamic typography (font-size: 2vw)

⚠️ Side Effects:
100vw includes scrollbar width → horizontal overflow
Mobile browsers hide/show address bar → vh jumps

🔧 Workarounds:
Use width: 100% instead of 100vw to avoid overflow
For mobile vh, use JS or dvh (dynamic viewport units):

css
.element { height: 100dvh; } /_ Modern solution _/

3. em
   ✅ What It Achieves:
   Component-level scalability (e.g., buttons with proportional padding)
   Responsive spacing within a component

⚠️ Side Effects:
Compounding sizing in nested elements:
css
/_ Parent: font-size=16px, child: font-size=0.8em → 12.8px _/
/_ Grandchild: font-size=0.8em → 10.24px (compounds!) _/
🔧 Workarounds:
Use rem for predictable nesting
Limit em to non-nested components (e.g., button padding)

4. rem
   ✅ What It Achieves:
Global consistency (sizes always relative to root html font-size)
Accessible (respects user’s browser font preferences)

⚠️ Side Effects:
Requires explicit html font-size (default is typically 16px)
Overriding root size affects all rem values

🔧 Workarounds:
Set root font-size for responsiveness:
css
html { font-size: 62.5%; } /_ 1rem = 10px (16px × 0.625) _/
body { font-size: 1.6rem; } /_ Reset to 16px _/
Use CSS variables for theme scaling:

css
:root { --scale: 1.2; }  
.text { font-size: calc(1rem \* var(--scale)); }
