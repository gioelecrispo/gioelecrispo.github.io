

export default {
    data: () => ({
    }),
    metaInfo() {
        return {
            title: "Gioele Crispo",
            titleTemplate: "%s - " + this.$route.meta.tags.title,
            htmlAttrs: {
                lang: "en",
                amp: true
            },
            meta: [
                { name: "robots", content: "index,follow" },
                { name: "description", content: this.$route.meta.tags.description },
                { property: "og:title", content: "Gioele Crispo - " + this.$route.meta.tags.title},
                { property: "og:site_name", content: "Gioele Crispo" },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://gioelecrispo.github.io" + this.$route.path},
                { property: "og:image", content: this.$route.meta.tags.image }
            ]
        }
    },
    computed: {},
    methods: {},
}
