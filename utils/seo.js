
export default (title, description, routePath, image) => {
    return {
        title: title,
        meta: [
            { hid: 'og:title', property: "og:title", content: title + " - Gioele Crispo" },
            { hid: 'description', name: 'description', content: description },
            { hid: 'og:description', name: 'og:description', content: description },
            { hid: 'og:url', property: "og:url", content: process.env.HOST_BASE + routePath },
            { hid: 'og:image', property: 'og:image', content: image },
            { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
            { hid: 'twitter:title', property: "twitter:title", content: title + " - Gioele Crispo" },
            { hid: 'twitter:description', name: 'twitter:description', content: description },
            { hid: 'twitter:image', property: 'twitter:image', content: image },
        ],
        link: [
            { hid: "canonical", rel: "canonical", href: process.env.HOST_BASE + routePath },
        ]
    }
};
a
