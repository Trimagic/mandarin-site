const fs = require('node:fs');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { IconDevicesSearch, IconDeviceMobileSearch, IconZoomScan } = require('@tabler/icons-react');
const sharp = require(require.resolve('sharp', { paths: [require.resolve('next/package.json')] }));
const icons = [IconDevicesSearch, IconDeviceMobileSearch, IconZoomScan];
const labels = ['Техника + поиск', 'Телефон + поиск', 'Проверка'];
const cards = icons.map((icon, i) => {
  const x = 24 + i * 340;
  const markup = renderToStaticMarkup(React.createElement(icon, { size: 34, stroke: 1.5, color: '#65a832' }));
  return `<g transform="translate(${x} 52)"><rect width="320" height="110" rx="16" fill="#fffefd" stroke="#eee7df"/><text x="18" y="36" font-family="Arial" font-size="16" font-weight="700" fill="#211a17">Диагностика при</text><text x="18" y="60" font-family="Arial" font-size="16" font-weight="700" fill="#211a17">ремонте — бесплатно</text><circle cx="273" cy="55" r="28" fill="none" stroke="#7bb64b" stroke-opacity=".6"/><g transform="translate(256 38)">${markup}</g><text x="0" y="143" font-family="Arial" font-size="16" fill="#6f625c">${i + 1}. ${labels[i]}</text></g>`;
}).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1068" height="230" viewBox="0 0 1068 230"><rect width="1068" height="230" fill="#fffaf6"/>${cards}</svg>`;
fs.mkdirSync('output', { recursive: true });
sharp(Buffer.from(svg)).png().toFile('output/diagnostics-icon-options.png').then(() => console.log('Preview saved'));
