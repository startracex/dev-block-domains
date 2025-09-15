import { writeFile } from "node:fs/promises";
import domains from "./domains.json" with { type: "json" };

const entries = Object.entries(domains);

const content = entries.map(
  ([name, values]) => `
${name}

${values.map((value) => `- ${value}`).join("\n")}
`,
).join("");

const site = `\`\`\`
${
  entries.flatMap(
    ([_, values]) => values.map((value) => `-site:${value}`),
  ).join(" ")
}
\`\`\``;

await Promise.all([
  writeFile("_includes/domains.md", content),
  writeFile("_includes/sites.md", site),
]);
