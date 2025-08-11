1. # CSS: position, display, how to align 2divs horizontal : Done ✅
2. JavaScript: closure, hoisting, debouncing weakset, weakmap, forEach v/s map
   React: context api
   class based and functional based, lifecycle
   events Few programming questions like :
   Check whether the given array is sorted or not.
   Create a modified object by interchanging key-value pair of original object.
   # Define Stack. Explain its working Done ✅

Round 1: Technical Foundations

# Basic introductions and a dive into core JavaScript concepts Done ✅

Coding a polyfill for the call method.
Explaining closures .

# Understanding why async functions aren't directly used in useEffect. Done ✅

# Ans : useEffect hook expects its callback function to either return nothing or a cleanup function. An async function implicitly returns a Promise

Building a data fetching and client-side search feature using TypeScript.
I was pleased to move forward after this round.

Round 2: Deep Dive and Feedback
This round focused heavily on my resume and theoretical understanding.

Discussions on TypeScript generics, useState vs. useReducer, and the internal workings of useState.
Exploring Next.js fundamentals, including the starting point and the role of document.js.
Strategies for SEO optimization and improving Core Web Vitals.
A detailed review of my project experience.

Interview Experience | React Developer at Cashify 👇
⚙️ Total Rounds: 3 Technical + 1 HR
Let’s break it down round by round:
🔹 Round 1: Machine Coding + JavaScript & React Fundamentals
This was a hands-on technical round focused on both JavaScript logic and React implementation.
✅ JavaScript Coding Question: Object Iteration with Path
📌 Problem: Flatten a nested object and print the path along with its values.
Example input:
const obj = {a: 12,b: 23,c: {d: 34,e: {f: 67}}};
Output --> a=12 b=23 c.d = 34 c.e.f=67

# React Coding Question: Random Coupon Generator - Done ✅

# 🔁 Build a component that generates a random coupon code and updates it automatically at a given time interval. Done ✅

📘 Theory Questions:

# Difference between useMemo() and useCallback() Done ✅

Ans :

# useMemo → Optimizes values to avoid expensive recalculations.

# useCallback → Optimizes functions to prevent unnecessary re-renders in child components.

# Return types of useMemo and useCallback Done ✅

Ans :

# useMemo -> Computed value -> string, number[], { id: 1 }

# useCallback -> Memoized function reference - > () => void, (id: number) => void

# Props vs State Done ✅

| Feature             | Props                        | State                      |
| ------------------- | ---------------------------- | -------------------------- |
| Read/Write          | Read-only                    | Can be updated (writeable) |
| Set by              | Parent component             | Component itself           |
| Purpose             | Pass data to child           | Manage internal changes    |
| Triggers re-render? | Yes                          | Yes                        |
| Mutability          | Immutable (within component) | Mutable                    |

# React Hooks

# useState

➤ Add state to functional components.

# useEffect

➤ Handle side effects like data fetching, DOM updates, or subscriptions.

# useContext

➤ Access values from React Context (e.g., global state or theme).

# useRef

➤ Create a reference to a DOM element or
store a persistent mutable value without re-render.

# useMemo

➤ Memoize a computed value to avoid expensive recalculations on every render.

# useCallback

➤ Memoize a function so it doesn't get re-created unless dependencies change.

# useReducer

➤ Handle complex state logic or state transitions (similar to Redux reducer).

# useLayoutEffect

➤ Like useEffect, but fires synchronously after all DOM changes — used when measurement/layout is needed before the browser paints.

Throttling vs Debouncing :
Garbage Collection in JS
let vs var
Event Loop in JS
🔹 Round 2
This round focused more on my internship experiences, past company projects, and overall approach to learning and development.
Topics Discussed:
My role and responsibilities during internships
Tech stacks I worked with
Key projects and challenges
Core OOPs concepts
How I learn new technologies
How I approach web performance optimization
🔹 Round 3: Deep Dive into Next.js, DevOps, and Optimization
A very detailed and interesting round around my full-stack exposure and how I build scalable frontend systems.
📁 Next.js & Architecture:
File structure of a Next.js project
Purpose of next.config.js and middleware.ts
Routing in Next.js and how I used it in my project
Why I chose Next.js and benefits over CRA
Difference between SSR (Server-Side Rendering) and SSG (Static Site Generation)
🎨 Styling & Tools:
Why I preferred Tailwind CSS over Bootstrap during my internship
CI/CD workflows and my experience with Docker
🔄 React Optimization & In-Depth Discussions:
React Hooks I’ve used and where

How to optimize React.memo when props are objects that partially change
In-depth discussion on functional vs class components, including follow-up questions on:
Lifecycle methods in class components
How to replicate those in functional components using hooks
Usage and replacement of getDerivedStateFromProps() in functional components

🔍 Deep Dive on useRef():
What is useRef in React?
How to use it for direct DOM manipulation and Other use cases of useRef
Several follow-up questions to explore all possible patterns and real-world scenarios
🧠 Scenario-Based Question:
Suppose you load 10 elements in a component and want to display more on demand using the same component — how would you design that?

Received interview call through Naukri platform. The process included two technical rounds:
1st Round: Focused on fundamental DSA (e.g., reversing an array)
and JavaScript concepts like closures.
The questions were simple but tested core logic and understanding.
2nd Round: Covered basics of Next.js, including file-based routing,
static vs server-side rendering,
data fetching methods (getServerSideProps, getStaticProps),
and component structuring. Overall, the interview process was smooth,
with questions aimed at evaluating foundational web development knowledge.

Interview questions [1]
Question 1
1st round: Covered basic DSA (reverse an array) and JavaScript closures.
2nd round: Focused on Next.js fundamentals,
including routing, data fetching, and component structure.
Overall: Core concepts tested efficiently.
