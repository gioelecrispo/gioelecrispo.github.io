<template>
    <v-container fluid>
        <v-row justify="center">
            <v-btn v-for="projectType in projectTypes"
                   :key="projectType"
                   class="mx-1"
                   :class="tab === projectType ? 'active-button' : ''"
                   :color="tab === projectType ? 'primary' : ''"
                   tile text
                   @click="tab = projectType">
                {{projectType}}
            </v-btn>
        </v-row>
        <v-row>
            <v-col cols="12" class="pa-0 mt-4">
                <v-row
                        align="center"
                >
                    <v-col
                            v-for="project in selectedProjects"
                            :key="project.id"
                            class="pa-0"
                            cols="12"
                            sm="6"
                            md="4"
                    >
                        <Project :project="project"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import Project from "@/components/Project";
    import ui from "../mixins/ui";
    import createSeoMeta from '../utils/seo';

    const axios = require("axios");

    export default {
        head() {
            return createSeoMeta('Projects',
                'Some of my projects and applications, mainly focused on Machine Learning.',
                this.$route.path,
                require('@/assets/img/seo/projects.jpg'));
        },
        name: "Proejcts",
        layout: 'page',
        components: { Project },
        mixins: [ui],
        props: {},
        data() {
            return {
                projectTypes: ["All", "Artificial Intelligence", "Other"],
                tab: "All",
            };
        },
        created() {
            this.$store.dispatch("AppState/setAppToolbarTitle", "Projects");
        },
        computed: {
            ...mapGetters("DataState", {
                projects: "getProjects"
            }),
            selectedProjects() {
                if (this.tab !== "All") {
                    return this.projects.filter(project => project.type.toLowerCase() === this.tab.toLowerCase());
                }
                return this.projects;
            }
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>

</style>
