<template>
    <v-container fluid fill-height class="py-0">
        <v-row justify="center" align="center" style="height: 100%;">
            <v-btn height="100%" class="pa-0"
                    text large block
                    color="primary"
                    @click="$router.push(path)"
            >
               {{text}}
                <v-icon class="ml-2" large>
                   {{ icon }}
                </v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>

    import ui from "../mixins/ui";

    export default {
        name: "PageNavigator",
        components: {},
        mixins: [ui],
        props: ["text", "icon", "path"],
        data() {
            return {
            };
        },
        computed: {},
        methods: {
        }
    };
</script>

<style lang="scss" scoped>

</style>
