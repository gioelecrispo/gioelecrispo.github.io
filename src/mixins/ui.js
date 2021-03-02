import RouterService from "../helpers/RouterService";


export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {
        tabletAndDown() {
            return this.$vuetify.breakpoint.name === "xs" ||
                this.$vuetify.breakpoint.name === "sm";
        },
        isUiLarger () {
            return this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height;
        },
        navigate(path) {
            this.$store.dispatch("AppState/setLeftNavDrawer", false);
            RouterService.goTo(path);
        },
    }
}
