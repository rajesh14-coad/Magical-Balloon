import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render } = await import(path.join(ssrDir, 'entry-server.js'));

const ROUTES = [
  {
    url: '/',
    outFile: path.join(distDir, 'index.html'),
    title: 'Magical Balloon Decoration Hyderabad | Birthday, Anniversary & Event Decor',
    description:
      'Custom birthday, anniversary, baby shower, Haldi, and corporate event balloon decoration in Hyderabad. Serving Balanagar, Kukatpally, Madhapur & city-wide. Call +91 9509971603.',
    canonical: 'https://magicalballoondecoration.com/'
  },
  {
    url: '/services',
    outFile: path.join(distDir, 'services', 'index.html'),
    title: 'Decoration Packages & Themes | Magical Balloon Decoration Hyderabad',
    description:
      'Browse birthday, anniversary, baby shower, Haldi, and corporate balloon decoration packages in Hyderabad with upfront written estimates.',
    canonical: 'https://magicalballoondecoration.com/services'
  },
  {
    url: '/gallery',
    outFile: path.join(distDir, 'gallery', 'index.html'),
    title: 'Decoration Themes & Portfolio | Magical Balloon Decoration Hyderabad',
    description:
      'Explore balloon decoration themes for birthdays, anniversaries, baby showers, and grand openings across Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/gallery'
  },
  {
    url: '/contact',
    outFile: path.join(distDir, 'contact', 'index.html'),
    title: 'Contact & Free Quote | Magical Balloon Decoration Hyderabad',
    description:
      'Contact Magical Balloon Decoration in Balanagar, Hyderabad (+91 9509971603) for upfront balloon decoration quotes and availability.',
    canonical: 'https://magicalballoondecoration.com/contact'
  },
  {
    url: '/about',
    outFile: path.join(distDir, 'about', 'index.html'),
    title: 'About Us | Magical Balloon Decoration Hyderabad',
    description:
      'Learn about Magical Balloon Decoration in Balanagar, Hyderabad — our decoration team, materials, service areas, and transparent booking workflow.',
    canonical: 'https://magicalballoondecoration.com/about'
  },
  {
    url: '/privacy-policy',
    outFile: path.join(distDir, 'privacy-policy', 'index.html'),
    title: 'Privacy Policy | Magical Balloon Decoration Hyderabad',
    description:
      'Privacy Policy for Magical Balloon Decoration (magicalballoondecoration.com) explaining inquiry data handling, WhatsApp disclosure, cookies, and user rights.',
    canonical: 'https://magicalballoondecoration.com/privacy-policy'
  },
  {
    url: '/terms',
    outFile: path.join(distDir, 'terms', 'index.html'),
    title: 'Terms & Conditions | Magical Balloon Decoration Hyderabad',
    description:
      'Service Terms and Conditions for booking balloon and event decoration services with Magical Balloon Decoration in Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/terms'
  },
  {
    url: '/refund-policy',
    outFile: path.join(distDir, 'refund-policy', 'index.html'),
    title: 'Cancellation & Refund Policy | Magical Balloon Decoration Hyderabad',
    description:
      'Clear booking cancellation, rescheduling, and advance refund timelines for Magical Balloon Decoration Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/refund-policy'
  },
  {
    url: '/404',
    outFile: path.join(distDir, '404.html'),
    title: 'Page Not Found | Magical Balloon Decoration Hyderabad',
    description: 'The requested page could not be found on Magical Balloon Decoration Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/'
  }
];

function applyRouteMeta(html, route) {
  let output = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${route.canonical}" />`
    );

  const appHtml = render(route.url);
  output = output.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return output;
}

for (const route of ROUTES) {
  fs.mkdirSync(path.dirname(route.outFile), { recursive: true });
  const finalHtml = applyRouteMeta(template, route);
  fs.writeFileSync(route.outFile, finalHtml, 'utf-8');
  console.log(`Pre-rendered: ${route.url} -> ${path.relative(rootDir, route.outFile)}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
