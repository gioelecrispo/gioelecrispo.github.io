<template>
    <v-container fluid>
        <v-row justify="center">
            <v-btn v-for="applicationType in applicationTypes"
                   :key="applicationType"
                   class="mx-1"
                   :class="tab === applicationType ? 'active-button' : ''"
                   :color="tab === applicationType ? 'primary' : ''"
                   tile text
                   @click="tab = applicationType">
                {{applicationType}}
            </v-btn>
        </v-row>
        <v-row>
            <v-col cols="12" class="pa-0 mt-4">
                <v-row
                        align="center"
                >
                    <v-col
                            v-for="application in selectedApplications"
                            :key="application.id"
                            class="pa-0"
                            cols="12"
                            sm="6"
                            md="4"
                    >
                        <Application :application="application"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import Application from "@/components/Application";
    import ui from "../mixins/ui";
    import metadata from "../mixins/metadata";

    const axios = require("axios");

    export default {
        name: "Applications",
        layout: 'AppStructure',
        meta: {
            showAppToolbar: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {Application},
        mixins: [ui, metadata],
        props: {},
        data() {
            return {
                applicationTypes: ["All", "Artificial Intelligence", "Other"],
                tab: "All",
            };
        },
        computed: {
            ...mapGetters("DataState", {
                applications: "getApplications"
            }),
            selectedApplications() {
                if (this.tab !== "All") {
                    return this.applications.filter(application => application.type.toLowerCase() === this.tab.toLowerCase());
                }
                return this.applications;
            }
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>

</style>
