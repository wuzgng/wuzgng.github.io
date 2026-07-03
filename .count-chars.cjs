const fs = require("fs");
const path = "d:/CS Tool/Project/Github/Astro-blog/src/content/blog/2026/07/从 Web2 到 Web3：我在转向之前做了什么.md";
const content = fs.readFileSync(path, "utf8");
let frontmatter = "", body = content;
if (content.startsWith("---")) {
  const idx = content.indexOf("---", 3);
  if (idx !== -1) {
    frontmatter = content.slice(3, idx);
    body = content.slice(idx + 3);
  }
}
function isCjkUnified(c) {
  const o = c.codePointAt(0);
  return (o >= 0x4E00 && o <= 0x9FFF) || (o >= 0x3400 && o <= 0x4DBF) || (o >= 0x20000 && o <= 0x2A6DF);
}
let cjk = 0, nonWs = 0;
for (const c of body) {
  if (isCjkUnified(c)) cjk++;
  if (!/\s/u.test(c)) nonWs++;
}
const dm = frontmatter.match(/^description:\s*(.+)$/m);
let desc = dm ? dm[1].trim() : "";
if ((desc.startsWith('"') && desc.endsWith('"')) || (desc.startsWith("'") && desc.endsWith("'"))) desc = desc.slice(1, -1);
let descCjk = 0, descNonWs = 0;
for (const c of desc) {
  if (isCjkUnified(c)) descCjk++;
  if (!/\s/u.test(c)) descNonWs++;
}
console.log("body_cjk:", cjk);
console.log("body_non_whitespace:", nonWs);
console.log("description_cjk:", descCjk);
console.log("description_non_whitespace:", descNonWs);
