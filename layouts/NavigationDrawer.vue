<template>
    <v-navigation-drawer
            :value="isLeftNavDrawer"
            :right="right"
            width="100%"
            app
    >
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-row
                            justify="end"
                            class="mr-3"
                    >
                        <v-btn
                                icon
                                @click="closeLeftNavBar()"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row justify="center" class="pt-6">
                        <v-avatar size="104">
                            <img
                                    :src="require('@/assets/img/me/me.png')"
                                    alt="Gioele Crispo"
                            >
                        </v-avatar>
                    </v-row>
                    <v-list
                            class="pt-0 mt-12"
                            dense
                            rounded
                    >
                        <v-list-item-group v-model="model">
                            <v-list-item
                                    v-for="element in appNavDrawElements"
                                    :key="element.title"
                                    class="text-center"
                                    @click="$router.push(element.path)"
                            >
                                <v-row>
                                    <v-col cols="12">
                                        <v-row justify="center">
                                            <v-icon class="mr-4">
                                                {{ element.icon }}
                                            </v-icon>
                                            {{ element.title }}
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
    import {mapGetters} from "vuex";
    import ui from "../mixins/ui";

    export default {
        name: "NavigationDrawer",
        mixins: [ui],
        props: ["right"],
        computed: {
            ...mapGetters("AppState", {
                    isLeftNavDrawer: "isLeftNavDrawer",
                    appNavDrawElements: "getNavLinks"
                }
            ),
        },
        data() {
            return {
                model: 1,
                disableResizeWatcher: true,
                darkTheme: false
            };
        },
        methods: {
            closeLeftNavBar() {
                this.$store.dispatch("AppState/setLeftNavDrawer", false);
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>

