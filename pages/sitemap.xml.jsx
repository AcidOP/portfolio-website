import fs from 'fs'
import matter from 'gray-matter';

function generateSiteMap(posts) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://acidop.codes</loc>
        </url>
        <url>
            <loc>https://acidop.codes/about</loc>
        </url>
        <url>
            <loc>https://acidop.codes/projects</loc>
        </url>
        <url>
            <loc>https://acidop.codes/contact</loc>
        </url>
            ${posts
            .map(({ slug }) => {
                return `
                        <url>
                            <loc>${`https://acidop.codes/projects/${slug}`}</loc>
                        </url>
                    `;
            })
            .join('')}
        </urlset>
    `;
    return sitemap;
}

export default function SiteMap({ sitemap }) {
    return sitemap;
}

export async function getServerSideProps({ res }) {
    const files = fs.readdirSync('markdowns/projects', 'utf-8');
    const markdowns = files.filter((file) => file.endsWith('.md'));

    const slugs = markdowns.map((file) => {
        const markdown = fs.readFileSync(`markdowns/projects/${file}`, 'utf8');
        const { data } = matter(markdown);

        return { slug: data.slug };
    });

    const sitemap = generateSiteMap(slugs);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: { sitemap },
    };
}