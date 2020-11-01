<template>
    <v-container fluid>
        <v-row
                justify="center"
                align="center"
                no-gutters
        >
            <v-col
                    class="pa-1"
                    cols="auto"
            >
                <v-btn
                        href="docs/cv_eng.pdf"
                        elevation="0"
                        color="primary"
                        outlined
                        rounded
                        download
                >
                    Download CV (ENG)
                    <v-icon
                            small
                            class="ml-2"
                    >
                        mdi-download
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col
                    class="pa-1"
                    cols="auto"
            >
                <v-btn
                        href="docs/cv_eng.pdf"
                        elevation="0"
                        color="primary"
                        outlined
                        rounded
                        download
                >
                    Download CV (ITA)
                    <v-icon
                            small
                            class="ml-2"
                    >
                        mdi-download
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="pt-6 pb-3">
            <h2>Certifications</h2>
        </v-row>
        <v-row>
            <div v-for="certification in certifications"
                 :key="certification.id"
                 class="awards-container pb-2">
                <Certification :certification="certification"></Certification>
            </div>
        </v-row>

        <v-row class="pt-6 pb-3">
            <h2>Publications</h2>
        </v-row>
        <v-row>
            <div v-for="publication in publications"
                 :key="publication.title"
                 class="awards-container pb-2">
                <Publication :publication="publication"></Publication>
            </div>
        </v-row>


        <v-row class="pt-6 pb-3">
            <h2>Experiences</h2>
        </v-row>
        <v-row>
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


        <v-row class="pt-6 pb-0">
            <h2>Skills</h2>
        </v-row>
        <div
                v-for="(skillSet, skillSetName) in skills"
                :key="skillSetName"
        >
            <v-row class="pt-6 pb-2">
                <h3>{{ skillSetName }}</h3>
            </v-row>
            <Skill
                    v-for="skill in skillSet"
                    :key="skill.title"
                    :skill="skill"
            />
        </div>


        <v-row class="pt-6 pb-3">
            <h2>Languages</h2>
        </v-row>
        <v-row>
            <v-data-table
                    :headers="languages.tableHeaders"
                    :items="languages.tableValues"
                    hide-default-footer
                    class="elevation-0"
            />
        </v-row>
        <v-row>
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

    export default {
        name: "Works",
        components: {Experience, Skill, Certification, Publication},
        props: {},
        data() {
            return {
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
