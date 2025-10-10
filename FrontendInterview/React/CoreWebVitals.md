# Core Web Vitals
Definition:
→ Set of metrics by Google to measure real-world page experience and performance

# Three Main Metrics:
LCP (Largest Contentful Paint): Loading performance — should be ≤ 2.5s
FID (First Input Delay): Interactivity — should be ≤ 100ms
CLS (Cumulative Layout Shift): Visual stability — should be ≤ 0.1

Why Important:
Directly impacts SEO ranking and user satisfaction
Slow or unstable pages cause higher bounce rates

🔹 1. LCP (Largest Contentful Paint) — Loading Performance
What it measures: How long it takes for the largest visible element (like an image or text block) to appear on the screen.
Good score: ≤ 2.5 seconds
Why it matters: It tells how quickly users can see the main content.
Example:
If your hero image or title loads slowly, LCP will be poor.

# How to Improve in React:
Use code-splitting with React.lazy() and Suspense to load non-critical components later.
Optimize images (use next/image, responsive formats like WebP, and lazy loading).
Preload important assets (fonts, hero images).
Use server-side rendering (SSR) or static generation for faster first render.
Minimize render-blocking scripts and CSS (load scripts asynchronously).


🔹 2. FID (First Input Delay) — Interactivity
What it measures: The time between a user’s first interaction (like clicking a button) and the browser’s response.
Good score: ≤ 100 milliseconds
Why it matters: It shows how quickly your site reacts to user input.
Example:
If JavaScript is blocking the main thread, buttons feel unresponsive.
# 🚀 How to Improve in React:
Avoid heavy JavaScript execution on the main thread.
Use web workers for expensive computations.
Split large bundles using dynamic imports.
Debounce user inputs for search or filters.
Use React’s concurrent features (useTransition, useDeferredValue) to keep UI responsive.

🔹 3. CLS (Cumulative Layout Shift) — Visual Stability
What it measures: How much content unexpectedly shifts while the page loads.
Good score: ≤ 0.1
Why it matters: Prevents users from clicking the wrong thing due to layout jumps.
Example:
If ads or images load late and push text down, CLS will increase.
# 🚀 How to Improve in React:
Set fixed height/width for images and videos.
Avoid injecting new DOM elements above existing content (e.g., ads or popups).
Reserve space for dynamically loaded content.
Use font-display: swap to prevent invisible text shifts.

# Tools to Measure Core Web Vitals
Google PageSpeed Insights
Lighthouse (in Chrome DevTools)
Web Vitals Chrome Extension
Search Console → Core Web Vitals report


# Common Interview Q&A Points

Q: What are Core Web Vitals?
A: Metrics for page load speed, interactivity, and visual stability — LCP, FID, CLS.

Q: How do you improve LCP in React?
A: Lazy load images/components, preload key assets, SSR/SSG.

Q: How do you improve FID?
A: Reduce JS execution, memoize heavy components, use Web Workers.

Q: How do you improve CLS?
A: Set fixed sizes for images/fonts, avoid layout shifts.

Q: What tools do you use to measure Web Vitals?
A: Lighthouse, PageSpeed Insights, web-vitals package.

Q: How does code splitting help Web Vitals?
A: Reduces initial JS size → faster LCP & better FID.

Q: What is difference between TTFB and LCP?
A: TTFB = server response time; LCP = main content render time.

Q: How do React.memo and useMemo improve performance?
A: Prevent unnecessary re-renders and heavy computations.