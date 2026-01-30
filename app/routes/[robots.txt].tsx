
export const loader = () => {
    const content = `User-agent: *
Allow: /

Sitemap: https://kyanadebosschere.be/sitemap.xml
`;

    return new Response(content, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
};
