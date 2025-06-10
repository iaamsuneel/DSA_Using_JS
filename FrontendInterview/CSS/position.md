The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

1. static (Default)
Behavior: Follows normal document flow. Ignores top, bottom, left, right, and z-index.
Use Case: Default layout behavior
div { position: static; } /* Default behavior */

2. relative
Behavior:
Positioned relative to its normal position in the flow.
Adjust with top, left, etc. without disrupting other elements.
Space Reserved: Original space is preserved.
div {
  position: relative;
  top: 20px; /* Moves down 20px from normal position */
  left: 30px;
}

3. absolute
Behavior:
Removed from normal flow.
Positioned relative to its nearest positioned ancestor (non-static) or the viewport.
Space Collapsed: Original space is removed.
.parent { position: relative; } /* Anchor for child */
.child {
  position: absolute;
  bottom: 0; /* Sticks to parent's bottom */
  right: 0;
}

4. fixed
Behavior:
Removed from flow and positioned relative to the viewport (browser window).
Stays fixed during scrolling.
Use Case: Sticky headers, chat buttons. 
header {
  position: fixed;
  top: 0; /* Sticks to top of viewport */
  width: 100%;
}

5. sticky
Behavior: Hybrid of relative and fixed.
Behaves like relative until a scroll threshold (top, left, etc.) is hit.
Then "sticks" like fixed.
Use Case: Sticky table headers, navigation bars.
nav {
  position: sticky;
  top: 0; /* Sticks when scrolled past */
}
