<template>
    <v-card outlined class="slide-in-bottom">
        <div class="d-flex flex-no-wrap justify-space-between">
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            class="py-0"
                    >
                        <v-row>
                            <v-list>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                     <h2 class="mb-1">{{ project.name }}</h2>
                                        <v-list-item-subtitle>
                                            <v-row
                                                    align="center"
                                                    class="pl-3"
                                            >
                        <span
                                v-if="project.license"
                                class="overline my-1"
                        >{{ project.license.name }}</span>
                                                <span
                                                        v-if="project.license"
                                                        class="mx-2"
                                                >|</span>
                                                <span class="my-1 overline">Language</span>
                                                <v-avatar
                                                        v-if="project.language != null"
                                                        class="ml-3"
                                                        size="20"
                                                        tile
                                                >
                                                    <v-img
                                                            :src="require('@/assets/img/skills/' + project.language.toLowerCase() + '.png')"
                                                    />
                                                </v-avatar>
                                            </v-row>
                                        </v-list-item-subtitle>
                                        <v-list-item-subtitle>
                                            <span>{{ project.description }}</span>
                                        </v-list-item-subtitle>

                                        <v-list-item-subtitle class="mt-2">
                                            <a
                                                    :href="project.html_url"
                                                    target="_blank"
                                            >Go to the project</a>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-card>
</template>

<script>

    export default {
        name: "Project",
        components: {},
        props: ["project"],
        data() {
            return {};
        },
        computed: {},
        methods: {}
    };
</script>

<style lang="scss" scoped>

</style>
