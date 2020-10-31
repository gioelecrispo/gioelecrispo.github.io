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
            <v-alert
                    text
                    class="py-2 px-4 mb-1"
                    width="100%"
                    border="bottom"
                    color="orange darken-2"
                    v-for="certification in certifications"
                    :key="certification.id"
            >
                <v-row align="center">
                    <v-col cols="auto">
                        <v-icon large color="orange darken-2">mdi-medal</v-icon>
                    </v-col>
                    <v-col>
                        <h3 class="headline">
                            {{ certification.title }}
                        </h3>
                        <div>{{ certification.id }} · {{ certification.date }} </div>
                    </v-col>
                </v-row>
               </v-alert>
        </v-row>

        <v-row class="pt-6 pb-3">
            <h2>Publications</h2>
        </v-row>
        <v-row>
            <v-card
                    outlined
                    elevation="0"
                    width="100%"
                    v-for="publication in publications"
                    :key="publication.title"
            >
                <v-row
                        align="center"
                        no-gutters
                >
                    <v-col>
                        <v-card-title class="py-2">
                            {{ publication.title }}
                        </v-card-title>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn
                                class="mr-3"
                                icon
                                target="_blank"
                                href="publication.href"
                        >
                            <v-icon>mdi-open-in-new</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-card-text class="py-1">
                    {{ publication.date }} · {{ publication.location }}
                </v-card-text>
                <v-card-text class="pt-0 pb-1">
                    {{ publication.authors }}
                </v-card-text>
            </v-card>
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
                      <Experience :experience="experience"></Experience>
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

    import Skill from "../components/Skill";
    import {mapGetters} from "vuex";
    import Experience from "../components/Experience";

    export default {
        name: "Works",
        components: {Experience, Skill},
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

<style scoped lang="scss">
    .v-timeline-item__opposite {
        align-self: flex-start !important;
        margin-top: 10px !important;
    }
</style>
