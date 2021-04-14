
export default (title, description, routePath, image) => {
    return {
        title: title,
        meta: [
            { hid: 'og:title', property: "og:title", content: title},
            { hid: 'description', name: 'description', content: description },
            { hid: 'og:url', property: "og:url", content: "https://gioelecrispo.github.io/" + routePath},
            { hid: 'og:image', property: 'og:image', content: image },
        ]
    }
};
