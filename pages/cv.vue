<template>
    <v-container fluid>
        <v-row
                justify="center"
                class="fade-in-fwd "
                align="center"
                no-gutters
        >
            <v-col
                    class="pa-1"
                    cols="auto"
            >
               <CVBtnDownload :isFab=false></CVBtnDownload>
            </v-col>
        </v-row>
        <CVBtnDownload :isFab=true></CVBtnDownload>


        <v-row class="pt-8 pb-3 slide-in-bottom" justify="center">
            <h1>Certifications</h1>
        </v-row>
        <v-row class="slide-in-bottom">
            <div v-for="certification in certifications"
                 :key="certification.id"
                 class="awards-container pb-2">
                <Certification :certification="certification"></Certification>
            </div>
        </v-row>

        <v-row class="pt-8 pb-3 slide-in-bottom" justify="center">
            <h1>Publications</h1>
        </v-row>
        <v-row class="slide-in-bottom">
            <div v-for="publication in publications"
                 :key="publication.title"
                 class="awards-container pb-2">
                <Publication :publication="publication"></Publication>
            </div>
        </v-row>


        <v-row class="pt-8 pb-3 slide-in-bottom" justify="center">
            <h1>Experiences</h1>
        </v-row>
        <v-row class="slide-in-bottom">
            <v-timeline :dense="tabletAndDown()">
                <v-timeline-item
                        v-for="(experience, i) in experiences"
                        :key="i"
                        :color="experience.color"
                        :icon="experience.icon"
                        fill-dot
                >
                    <template v-slot:opposite>
            <span
                    v-if="!tabletAndDown()"
                    :class="`body-1 font-weight-bold`"
                    v-text="experience.date"
            />
                    </template>
                    <Experience :experience="experience" :forceDate="false"></Experience>
                </v-timeline-item>
            </v-timeline>
        </v-row>


        <v-row class="pt-8 pb-3 slide-in-bottom" justify="center">
            <h1>Skills</h1>
        </v-row>
        <div
                v-for="(skillSet, skillSetName) in skills"
                :key="skillSetName"
        >
            <v-row class="pt-6 pb-2 slide-in-bottom">
                <h3>{{ skillSetName }}</h3>
            </v-row>
            <Skill
                    v-for="skill in skillSet"
                    :key="skill.title"
                    :skill="skill"
            />
        </div>


        <v-row class="pt-8 pb-3 slide-in-bottom" justify="center">
            <h1>Languages</h1>
        </v-row>
        <v-row class="slide-in-bottom" justify="center">
            <v-data-table
                    :headers="languages.tableHeaders"
                    :items="languages.tableValues"
                    hide-default-footer
                    class="elevation-0"
                    style="width: 90%;"
            />
        </v-row>
        <v-row class="slide-in-bottom">
            <p class="my-2">
                Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:
                Proficient user - (*) Common European Framework of Reference for Languages
            </p>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import Skill from "../components/Skill";
    import Experience from "../components/Experience";
    import Certification from "../components/Certification";
    import Publication from "../components/Publication";
    import CVBtnDownload from "../components/CVBtnDownload";

    export default {
        name: "Works",
        layout: 'AppStructure',
        head() {
            return {
                title: 'Curriculum Vitae',
                meta: [
                    { hid: 'og:title', property: "og:title", content: "Curriculum Vitae"},
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: "A complete Curriculum Vitae with experiences, certifications, skill and so on."
                    },
                    { hid: 'og:url', property: "og:url", content: "https://gioelecrispo.github.io/me" + this.$route.path},
                ],
            }
        },
        meta: {
            appToolbarTitle: 'Curriculum Vitae',
            showAppToolbar: true,
            showAppFooter: true,
            showAppNavigationDrawer: true,
            showContentHeader: false,
        },
        components: {CVBtnDownload, Experience, Skill, Certification, Publication},
        props: {},
        data() {
            return {
                cvFabShow: false,
                languages: {
                    tableHeaders: [
                        {
                            text: "Language",
                            align: "center",
                            sortable: false,
                            value: "language"
                        },
                        {
                            text: "Listening",
                            align: "center",
                            sortable: false,
                            value: "listening"
                        },
                        {
                            text: "Reading",
                            align: "center",
                            sortable: false,
                            value: "reading"
                        },
                        {
                            text: "Spoken Interaction",
                            align: "center",
                            sortable: false,
                            value: "spokenInteraction"
                        },
                        {
                            text: "Spoken Production",
                            align: "center",
                            sortable: false,
                            value: "spokenProduction"
                        },
                        {
                            text: "Writing",
                            align: "center",
                            sortable: false,
                            value: "writing"
                        },
                    ],
                    tableValues: [
                        {
                            language: "English",
                            listening: "B2",
                            reading: "C1",
                            spokenInteraction: "B2",
                            spokenProduction: "B2",
                            writing: "B2",
                        },
                        {
                            language: "Spanish",
                            listening: "A2",
                            reading: "B1",
                            spokenInteraction: "A2",
                            spokenProduction: "A2",
                            writing: "A2",
                        },
                    ],
                }
            };
        },
        computed: {
            ...mapGetters("DataState", {
                certifications: "getCertifications",
                publications: "getPublications",
                skills: "getSkills",
                experiences: "getExperiences",
            }),
        },
        methods: {
            tabletAndDown() {
                return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
            },
        }
    };
</script>

<style lang="scss" scoped>
    .awards-container {
        width: 100%;
    }

    .v-timeline-item__opposite {
        align-self: flex-start !important;
        margin-top: 10px !important;
    }
</style>
