Scripts Using async or defer:
Modern best practice: Place non-render-blocking scripts in <head> with:

async: For independent scripts (e.g., analytics).
<script async src="analytics.js"></script>

defer: For DOM-dependent scripts (executes after HTML parsing).
<script defer src="app.js"></script>