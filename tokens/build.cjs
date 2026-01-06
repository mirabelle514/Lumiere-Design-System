const fs = require('fs');
const path = require('path');

const colors = require('./src/colors.cjs');
const typography = require('./src/typography.cjs');
const spacing = require('./src/spacing.cjs');

const tokens = {
  ...colors,
  ...typography,
  ...spacing,
};

// Ensure dist directories exist
const distDirs = ['dist', 'dist/css', 'dist/js', 'dist/json'];
distDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate CSS custom properties
const cssTokens = Object.entries(tokens.lumiere)
  .map(([key, value]) => `  --lumiere-${key}: ${value};`)
  .join('\n');

const cssContent = `:root {\n${cssTokens}\n}`;

// Generate JavaScript tokens (ESM)
const jsContent = `export const lumiereTokens = ${JSON.stringify(tokens, null, 2)};\n`;

// Generate TypeScript declaration file (kept intentionally simple/stable)
const dtsContent = `export declare const lumiereTokens: {\n  lumiere: Record<string, string>;\n  fonts: Record<string, string>;\n  fontSizes: Record<string, string>;\n  spacing: Record<string, string>;\n};\n`;

// Generate JSON tokens
const jsonContent = JSON.stringify(tokens, null, 2);

// Write files
fs.writeFileSync(path.join('dist', 'css', 'tokens.css'), cssContent);
fs.writeFileSync(path.join('dist', 'js', 'tokens.js'), jsContent);
fs.writeFileSync(path.join('dist', 'js', 'tokens.d.ts'), dtsContent);
fs.writeFileSync(path.join('dist', 'json', 'tokens.json'), jsonContent);

console.log('Design tokens built successfully!');

