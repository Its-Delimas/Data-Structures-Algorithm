# 64-Day DSA Mastery Roadmap (TypeScript, Interview-Focused)

**Your goal:** Crack FAANG-style coding interviews.
**Your fuel:** 1-2 focused hours a day.
**Your promise to yourself:** Come back and read this line when Day 30 feels hard — you started this to open doors, not to memorize trivia. Progress > perfection.

---

## 0. Setup (Day 1, ~1 hr) — Do this once

**Why we set up a real project instead of using an online editor:** Typing out your own `Node<T>` classes and running your own tests builds muscle memory. Online judges hide the "shape your own data" thinking that interviews actually test.

```bash
mkdir dsa-ts && cd dsa-ts
npm init -y
npm install -D typescript tsx vitest @types/node
npx tsc --init --strict --target ES2022 --module commonjs
```

- **`tsx`** (not the older `ts-node`) — instant TS execution, zero config, the current standard for running TS scripts in 2025/2026.
- **`vitest`** (not `jest`) — faster, native ESM/TS support, the modern default for new TS projects. Writing a test per problem forces you to think about edge cases (empty array, single node, negative numbers) *before* an interviewer points them out.
- **`--strict`** — turns on `strictNullChecks` etc. This is non-negotiable: it's what makes TS actually catch the null-pointer bugs that sink people on linked-list/tree problems.

Folder structure:
```
dsa-ts/
  01-arrays-hashing/
  02-two-pointers/
  ...
  each-folder/
    problem.ts
    problem.test.ts
```

**Practice source:** Use **NeetCode 150** (free list, neetcode.io) as your problem bank throughout. Why this over random LeetCode grinding: it's curated so each problem teaches a *distinct* pattern instead of 150 slight variations — pattern recognition, not memorization, is what actually transfers to a new interview question.

---

## Phase 1 — Foundations: Big-O, Arrays, Hashing (Days 2–9)

**Why first:** Every later structure's efficiency claims ("O(1) lookup," "O(log n) search") are meaningless until Big-O is second nature. Arrays/hashing are also ~30% of real interview questions on their own.

| Days | Topic | Why it matters |
|---|---|---|
| 2 | Big-O/Big-Ω notation, time vs space tradeoffs | The *language* interviewers use to evaluate you. Without it you can write correct code and still fail the interview. |
| 3–4 | Arrays: two-pointer, sliding window | Turns O(n²) brute force into O(n) — the single most common "aha" interviewers look for. |
| 5–6 | Hash Maps/Sets in TS (`Map`, `Set`, `Record<K,V>`) | O(1) average lookup is the answer to "can we do better than O(n²)?" in a huge fraction of problems. |
| 7 | Strings (manipulation, anagrams, palindromes) | Frequently combined with hashing/two-pointer above — reinforces rather than adds new theory. |
| 8–9 | Practice + review | Spaced repetition: revisiting Day 2–7 concepts on Day 8–9 is what moves them from short-term to long-term memory. |

**Milestone:** Solve 20 NeetCode "Arrays & Hashing" + "Two Pointers" problems.

---

## Phase 2 — Linear Structures: Linked Lists, Stacks, Queues (Days 10–17)

**Why after arrays, not before:** Linked lists force you to *build* the structure yourself (unlike arrays, which are built-in) — you can't do that confidently until array/pointer thinking is solid.

| Days | Topic | Why |
|---|---|---|
| 10–12 | Singly & Doubly Linked Lists | Teaches pointer manipulation without an array's safety net — this is where `strictNullChecks` earns its keep. |
| 13 | Stacks (`push`/`pop`, monotonic stack pattern) | Monotonic stack is a top-10 interview pattern (e.g., "next greater element"). |
| 14 | Queues + Deques | Sets up BFS in Phase 5 — don't skip even though it feels simple. |
| 15 | Fast & slow pointers (cycle detection) | A "trick" that reappears in linked lists, arrays, *and* graph cycle detection later. |
| 16–17 | Practice + review | Same spaced-repetition logic as Phase 1. |

**Milestone:** Implement a doubly linked list *from scratch* in TS with generics, no `any`.

---

## Phase 3 — Recursion & Backtracking (Days 18–23)

**Why this comes before Trees/Graphs, not after:** Trees, graphs, and DP are recursion wearing different clothes. Learning recursion in isolation first means you debug *one* new concept at a time instead of three at once later.

| Days | Topic | Why |
|---|---|---|
| 18–19 | Recursion fundamentals, base cases, call stack | Understanding *why* stack overflow happens demystifies "recursion is scary." |
| 20–21 | Backtracking (subsets, permutations, combinations) | Directly tests recursion understanding — if this clicks, trees/graphs will feel easy. |
| 22 | Divide & Conquer (merge sort, quick sort from scratch) | Sets up Big-O intuition for O(n log n) — and sorting algorithms are still asked directly. |
| 23 | Practice + review | — |

**Milestone:** Implement merge sort and quicksort in TS without looking at references.

---

## Phase 4 — Trees (Days 24–31)

| Days | Topic | Why |
|---|---|---|
| 24–25 | Binary Trees: traversals (in/pre/post-order, level-order) | DFS/BFS on trees is the direct on-ramp to graph traversal in Phase 6. |
| 26–27 | Binary Search Trees (BST): insert, delete, search | O(log n) operations — concrete payoff for the Big-O theory from Phase 1. |
| 28 | Tree height, balance, validating a BST | Common interview "gotcha" questions. |
| 29–30 | Tries | Directly powers autocomplete/word-search problems — a recognizable "real system" payoff. |
| 31 | Practice + review | — |

**Milestone:** Solve 15 NeetCode Tree problems; explain out loud *why* each traversal order matters (interviewers grade your reasoning, not just your code).

---

## Phase 5 — Heaps & Graphs (Days 32–45)

**Why heaps right before graphs:** Dijkstra's and "k-th largest" style problems need a priority queue — introducing it just before graphs means you use it immediately instead of forgetting it.

| Days | Topic | Why |
|---|---|---|
| 32–34 | Heaps / Priority Queues (build one in TS — no built-in heap in JS!) | TS/JS has no native heap, unlike Python/Java. Building your own is a genuinely valuable, commonly-tested exercise. |
| 35–38 | Graph representations (adjacency list/matrix), BFS, DFS | The two traversal patterns that ~90% of graph problems reduce to. |
| 39–40 | Topological sort, cycle detection | Directly tests "can you combine DFS + state tracking" — a step up in difficulty that interviewers use to differentiate candidates. |
| 41–42 | Union-Find (Disjoint Set) | The efficient way to answer "are these connected?" — shows up in Kruskal's MST and many "friend circle"-style problems. |
| 43–44 | Shortest path (Dijkstra's) | Combines heaps + graphs — a natural capstone for this phase. |
| 45 | Practice + review | — |

**Milestone:** Implement BFS and DFS from scratch on your own adjacency-list graph class.

---

## Phase 6 — Dynamic Programming (Days 46–55)

**Why DP is last of the "core" phases:** DP is recursion + "remember what you've already computed" (memoization). Without Phase 3's recursion fluency, DP is unlearnable; with it, DP is just "recursion, but smarter."

| Days | Topic | Why |
|---|---|---|
| 46–47 | 1D DP (climbing stairs, house robber) | Simplest form — builds the "top-down vs bottom-up" mental model. |
| 48–49 | 2D DP (grid paths, edit distance) | Most feared interview topic — tackled here only *after* 1D intuition is solid, not before. |
| 50–51 | Knapsack patterns (0/1, unbounded) | A template that quietly solves ~15 "different-looking" problems once recognized. |
| 52–53 | Longest Common Subsequence family, string DP | String problems are a favorite at companies like Amazon/Google. |
| 54–55 | Practice + review | This phase deserves the most repetition — budget extra time here if you're behind schedule. |

**Milestone:** Solve a DP problem completely unaided, explaining top-down *and* bottom-up approaches out loud.

---

## Phase 7 — Advanced / Interview Polish (Days 56–64)

| Days | Topic | Why |
|---|---|---|
| 56 | Greedy algorithms | A distinct problem-solving mode (local optimal choices) that trips people up if never explicitly named. |
| 57 | Bit manipulation | Quick, high-signal questions companies use as a "filter" round. |
| 58 | Intervals (merge intervals, meeting rooms) | A recognizable pattern family, quick to learn, frequently asked. |
| 59 | System-design-lite for coding rounds (how to discuss tradeoffs) | Senior-leaning interviews increasingly ask "how would this scale?" even in a coding round. |
| 60–62 | **Mock interviews** — talk out loud, use a timer, simulate pressure | The single highest-ROI activity in this entire plan. Solving silently ≠ solving while explaining your thinking to a stranger. |
| 63 | Review your personal "weak topics" list (keep one from Day 1!) | Confronting weak spots directly beats re-reviewing what you're already good at. |
| 64 | Rest, reflect, write down what you're proud of | You started this to grow — take the day to notice that you did. |

---

## How to actually stick to this for 64 days

1. **Daily minimum, not daily maximum:** on a rough day, do 20 minutes and one problem rather than skip entirely — momentum matters more than intensity.
2. **Keep a "why I started" note** somewhere visible (sticky note, phone lock screen) — pull it up on the days motivation dips, especially around Phase 6 (DP), which is where most people quit.
3. **Track weak topics as you go** in a simple running list — Day 63 is built around revisiting exactly that list.
4. **Explain answers out loud**, even alone. Interviewers hire people who can *communicate* a solution, not just produce one.

---

*Want to start? Say the word and I'll walk you through Day 1's setup + your first two problems, with the reasoning behind each step.*
