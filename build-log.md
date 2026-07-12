# Build Log – Assignment FL-07

## Platform
Node.js + filesystem (fs/promises)

## Core Job
Summarize one file (report.txt)

## Tool/Data Source Connected
Filesystem connector via Node's fs/promises

---

## Iteration Notes

### Attempt 1
- Goal: Connect MCP client
- What broke: `mcp.readFile is not a function`
- Change made: Switched to Node's fs/promises
- Outcome: Agent runs

### Attempt 2
- Goal: Summarize file
- What broke: Wrong path
- Change made: Adjusted to ./data/report.txt
- Outcome: File read successfully

### Attempt 3
- Goal: Improve summary readability
- What broke: Output was choppy (line breaks)
- Change made: Switched to sentence-based split
- Outcome: Cleaner summary

---

## Deviations from FL-06 Spec
- Cut multi-file support, focusing only on single file summarization for MVP.
- Did not use MCP client directly; used fs/promises for stable filesystem access.

---

## Working Run
- Description: Agent summarized report.txt end-to-end
- Raw capture: raw-run.mp4

