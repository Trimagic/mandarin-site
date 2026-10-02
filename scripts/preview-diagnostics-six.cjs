const sharp = require(require.resolve('sharp', { paths: [require.resolve('next/package.json')] }));
const fs = require('node:fs');
const icons = [
  ['Микросхема + лупа', '<rect x="5" y="5" width="13" height="13" rx="2"/><path d="M8 2v3m6-3v3M2 8h3m-3 6h3M8 18v3m10-13h3"/><circle cx="17" cy="17" r="4"/><path d="m20 20 3 3M9 9h4v4H9z"/>'],
  ['Экран + сигнал', '<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M8 22h8m-4-4v4M5 11h3l2-4 4 8 2-4h3"/>'],
  ['Сканирование платы', '<path d="M2 7V3h4m12 0h4v4M2 17v4h4m12 0h4v-4"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M10 5v3m4-3v3m-4 8v3m4-3v3M5 10h3m-3 4h3m8-4h3m-3 4h3"/>'],
  ['Щупы мультиметра', '<rect x="6" y="3" width="12" height="15" rx="2"/><path d="M9 6h6v4H9z"/><circle cx="12" cy="14" r="1.5"/><path d="M9 18v3H3v-8m12 5v3h6v-8M3 9v4m18-4v4"/>'],
  ['Лупа + электроника', '<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7M6 10h3V7h4m-4 3v3h4"/><circle cx="14" cy="7" r="1"/><circle cx="14" cy="13" r="1"/>'],
  ['Устройство + проверка', '<rect x="5" y="2" width="13" height="20" rx="2"/><path d="M10 5h3m-3 14h3m-5-7 3 3 5-6"/>'],
];
const cells = icons.map(([label, paths], i) => {
  const x = 24 + (i % 3) * 330, y = 24 + Math.floor(i / 3) * 240;
  return `<g transform="translate(${x} ${y})"><rect width="306" height="216" rx="18" fill="#fffefd" stroke="#eee7df"/><text x="20" y="32" font-family="Arial" font-size="18" fill="#8a7d76">${i+1}</text><circle cx="153" cy="94" r="47" fill="#65a832" fill-opacity=".04" stroke="#7bb64b" stroke-opacity=".65"/><g transform="translate(126 67) scale(2.25)" fill="none" stroke="#65a832" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g><text x="153" y="174" text-anchor="middle" font-family="Arial" font-size="17" font-weight="600" fill="#211a17">${label}</text><g transform="translate(141 185)" fill="none" stroke="#65a832" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g></g>`;
}).join('');
fs.mkdirSync('output', {recursive:true});
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1038" height="504"><rect width="1038" height="504" fill="#fffaf6"/>${cells}</svg>`;
sharp(Buffer.from(svg)).png().toFile('output/diagnostics-six-options.png').then(()=>console.log('Preview OK'));
