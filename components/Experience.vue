<template>
    <v-card
            :color="experience.color"
            dark
    >
        <v-card-title class="py-2 px-4">
            <v-container
                    class="py-0"
                    fluid
            >
                <v-col
                        class="pa-0"
                        cols="12"
                >
                    <v-row class="pa-0">
                        <p class="ma-0 title">
                            {{ experience.position }}
                        </p>
                    </v-row>
                    <v-row
                            class="pa-0 pt-1"
                            align="center"
                    >
                        <span class="ma-0 subtitle-2 mr-2">{{ experience.company }}</span>
                        <span class="mr-2">·</span>
                        <span class="mt-1 overline" style="line-height: 100%;"
                        >{{ experience.location }}</span>
                    </v-row>
                </v-col>
            </v-container>
        </v-card-title>
        <v-card-text class="white--text">
            <v-row
                    v-if="tabletAndDown() || forceDate"
                    class="pt-0"
            >
                <v-icon
                        color="white"
                        class="mx-3"
                >
                    mdi-clock
                </v-icon>
                <p class="ma-0 py-2 outline">
                    {{ experience.date }}
                </p>
            </v-row>
            <p class="py-2 ma-0">
                {{ experience.text }}
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    import ui from "../mixins/ui";

    export default {
        name: "Experience",
        components: {},
        props: ["experience", "forceDate"],
        mixins: [ui],
        data() {
            return {};
        },
        computed: {},
        methods: {}
    };
</script>

<style lang="scss" scoped>

</style>
