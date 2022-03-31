export default {
    mounted() {
        console.log("loaded!")
        this.isLoaded = true
    },
    data() {
        return {
            isLoaded: false
        }
    }
}
