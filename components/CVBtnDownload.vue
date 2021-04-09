<template>
    <v-btn
            class="scale-in-center"
            :href=href
            elevation="0"
            :color="isFab ? 'secondary' : 'primary'"
            :outlined="!isFab"
            rounded
            download
            style="z-index: 2;"
            v-scroll="onScroll"
            v-show="!isFab || (isFab && fabShow)"
            :fixed="isFab"
            :bottom="isFab"
            :right="isFab"
    >
        Download CV
        <v-icon
                small
                class="ml-2"
        >
            mdi-download
        </v-icon>
    </v-btn>
</template>

<script>

    export default {
        name: "CVBtnDownload",
        components: {},
        props: ["isFab"],
        data() {
            return {
                fabShow: false,
                href: "docs/cv_eng.pdf"
            };
        },
        computed: {},
        methods: {
            onScroll(e) {
                if (typeof window === "undefined") return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.fabShow = top > 60;
            },
        }
    };
</script>

<style lang="scss" scoped>

</style>
