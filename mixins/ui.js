export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {
        mobile() {
            return this.$vuetify.breakpoint.name === "xs";
        },
        tablet() {
            return this.$vuetify.breakpoint.name === "sm";
        },
        tabletAndDown() {
            return this.$vuetify.breakpoint.name === "xs" ||
                this.$vuetify.breakpoint.name === "sm";
        },
        isUiLarger () {
            return this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height;
        },
    }
}
