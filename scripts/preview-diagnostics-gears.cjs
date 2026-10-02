const sharp = require(require.resolve('sharp', { paths: [require.resolve('next/package.json')] }));
const fs = require('node:fs');
const gear = '<path d="m10 2-.6 2.3-2 .9-2.1-1.1L3 7.5l1.5 1.8-.2 2.2L2 12.7l1.2 3.9 2.4-.1 1.6 1.5.1 2.4 4 .6.9-2.2 2.1-.7 2 1.3 2.8-2.8-1.3-2 .7-2.1 2.2-.9-.6-4-2.4-.1-1.5-1.6.1-2.4L12.7 2Z"/>';
const smallGear = `<g transform="translate(3 3) scale(.72)">${gear}<circle cx="11" cy="11" r="3"/></g>`;
const icons = [
 ['Шестерёнка + лупа', `${smallGear}<circle cx="17" cy="17" r="4.2" fill="#fffefd"/><path d="m20 20 3 3"/>`],
 ['Шестерёнка + проверка', `${gear}<path d="m7.5 11 2.5 2.5 5-5"/>`],
 ['Сканирование механизма', `<g transform="translate(5 5) scale(.64)">${gear}<circle cx="11" cy="11" r="3"/></g><path d="M2 7V2h5m10 0h5v5M2 17v5h5m10 0h5v-5"/>`],
 ['Шестерёнка + сигнал', `${gear}<path d="M6.5 11h2l1.5-3 2 6 1.5-3H16"/>`],
 ['Лупа с шестерёнкой', `<circle cx="10" cy="10" r="8"/><path d="m16 16 6 6"/><g transform="translate(4.5 4.5) scale(.5)">${gear}<circle cx="11" cy="11" r="3"/></g>`],
 ['Точная диагностика', `${gear}<circle cx="11" cy="11" r="4"/><path d="M11 9v4m-2-2h4"/>`],
];
const cells = icons.map(([label, paths], i) => {
 const x=24+(i%3)*330, y=24+Math.floor(i/3)*240;
 return `<g transform="translate(${x} ${y})"><rect width="306" height="216" rx="18" fill="#fffefd" stroke="#eee7df"/><text x="20" y="32" font-family="Arial" font-size="18" fill="#8a7d76">${i+1}</text><circle cx="153" cy="94" r="47" fill="#65a832" fill-opacity=".04" stroke="#7bb64b" stroke-opacity=".65"/><g transform="translate(126 67) scale(2.25)" fill="none" stroke="#65a832" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g><text x="153" y="174" text-anchor="middle" font-family="Arial" font-size="17" font-weight="600" fill="#211a17">${label}</text><g transform="translate(141 185)" fill="none" stroke="#65a832" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g></g>`;
}).join('');
fs.mkdirSync('output', {recursive:true});
sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1038" height="504"><rect width="1038" height="504" fill="#fffaf6"/>${cells}</svg>`)).png().toFile('output/diagnostics-gear-options.png').then(()=>console.log('Preview OK'));
