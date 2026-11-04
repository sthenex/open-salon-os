import { access, readFile } from 'node:fs/promises';

const required = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'GOVERNANCE.md',
  'ROADMAP.md',
  'docs/product/vision.md',
  'docs/product/user-flows.md',
  'docs/product/component-specs.md',
  'docs/product/design-tokens.md',
  'docs/architecture/overview.md',
  'docs/architecture/data-model.md',
  'docs/maintainers/openai-oss-application.md'
];

const failures = [];
for (const file of required) {
  try {
    await access(file);
    const text = await readFile(file, 'utf8');
    if (!text.trim()) failures.push(`${file}: empty`);
    if (/\r/.test(text)) failures.push(`${file}: CRLF detected`);
  } catch {
    failures.push(`${file}: missing`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Documentation contract passed (${required.length} files).`);

