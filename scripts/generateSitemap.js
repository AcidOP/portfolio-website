const { readdirSync, writeFileSync } = require('fs');

console.log('Generating sitemap.xml');

const rootDir = process.cwd();
const projectDir = rootDir + '/markdowns/projects';

const files = readdirSync(projectDir);
const markdowns = files.filter(file => file.endsWith('.md'));

const slugs = markdowns.map(file => file.replace('.md', ''));
const sitemapUrls = slugs.map(slug => `https://acidop.codes/projects/${slug}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>https://acidop.codes/</loc>
</url>
<url>
    <loc>https://acidop.codes/about</loc>
</url>
<url>
    <loc>https://acidop.codes/projects</loc>
</url>
${sitemapUrls.map(url => `
<url>
    <loc>${url}</loc>
</url>
`).join('')}
<url>
    <loc>https://acidop.codes/contact</loc>
</url>
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('sitemap.xml generated');