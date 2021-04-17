export default {
    data: () => ({
    }),
    mounted() {
        this.$store.dispatch("AppState/setLeftNavDrawer", false);
        window.scrollTo(0,0);
    },
    watch: {
        $route() {
            this.$store.dispatch("AppState/setLeftNavDrawer", false);
            window.scrollTo(0,0);
        }
    }
}
