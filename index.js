import fs from "fs/promises";

async function summarizeFile(filename) {
  try {
    const content = await fs.readFile(`./data/${filename}`, "utf-8");

    // Split into sentences instead of lines
    const sentences = content.split(/[.!?]\s/).slice(0, 2).join(". ");
    return `Summary of ${filename}: ${sentences}...`;
  } catch (err) {
    return `Error reading file: ${err.message}`;
  }
}

async function run() {
  console.log("Agent starting...");
  const request = "Summarize report.txt";
  console.log("User request:", request);

  const result = await summarizeFile("report.txt");
  console.log("Agent result:", result);
}

run();
