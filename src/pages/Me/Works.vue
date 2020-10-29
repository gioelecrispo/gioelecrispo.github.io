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
      <h2>Pubblications</h2>
    </v-row>
    <v-row>
      <v-card
        outlined
        elevation="0"
        width="100%"
      >
        <v-row
          align="center"
          no-gutters
        >
          <v-card-title class="py-2">
            Tracking the Ballistic Trajectory in Complex and Long Handwritten
            Signatures
          </v-card-title>
          <v-spacer />
          <v-btn
            class="mr-3"
            icon
            target="_blank"
            href="https://www.researchgate.net/publication/327405064_Tracking_the_Ballistic_Trajectory_in_Complex_and_Long_Handwritten_Signatures"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-row>
        <v-card-text class="py-1">
          August 2018 · Conference: 16th International Conference on Frontiers in
          Handwriting Recognition (ICFHR) At: Niagara Falls, USA
        </v-card-text>
        <v-card-text class="pt-0 pb-1">
          Gioele Crispo · Moises Diaz · Angelo Marcelli · Miguel A. Ferrer
        </v-card-text>
      </v-card>
    </v-row>


    <v-row class="pt-6 pb-3">
      <h2>Experiences</h2>
    </v-row>
    <v-row>
      <v-timeline :dense="tabletAndDown()">
        <v-timeline-item
          v-for="(temporalSpike, i) in temporalSpikes"
          :key="i"
          :color="temporalSpike.color"
          :icon="temporalSpike.icon"
          fill-dot
        >
          <template v-slot:opposite>
            <span
              v-if="!tabletAndDown()"
              :class="`body-1 font-weight-bold`"
              v-text="temporalSpike.date"
            />
          </template>
          <v-card
            :color="temporalSpike.color"
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
                      {{ temporalSpike.position }}
                    </p>
                  </v-row>
                  <v-row
                    class="pa-0"
                    align="center"
                  >
                    <span class="ma-0 subtitle-2">{{ temporalSpike.company }}
                    </span> <span class="ml-2 mr-2">|</span> <span
                      class="mt-1 overline"
                    >{{ temporalSpike.location }}</span>
                  </v-row>
                </v-col>
              </v-container>
            </v-card-title>
            <v-card-text class="white--text">
              <v-row
                v-if="tabletAndDown()"
                class="pt-3"
              >
                <v-icon
                  color="white"
                  class="mx-3"
                >
                  mdi-clock
                </v-icon>
                <p class="ma-0 py-2 outline">
                  {{ temporalSpike.date }}
                </p>
              </v-row>
              <p class="py-2 ma-0">
                {{ temporalSpike.text }}
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>


    <v-row class="pt-6 pb-3">
      <h2>Skills</h2>
    </v-row>
    <div
      v-for="(skillSet, skillSetName) in skills"
      :key="skillSetName"
    >
      <v-row class="pt-0 pb-3">
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
      <p class="my-2">
        Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:
        Proficient user - (*) Common European Framework of Reference for Languages
      </p>
    </v-row>
  </v-container>
</template>

<script>

import Skill from "../../components/Skill";
import {mapGetters} from "vuex";

export default {
    name: "Works",
    components: {Skill},
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
            },
            temporalSpikes: [
                {
                    color: "blue darken-2",
                    icon: "mdi-briefcase",
                    date: "May 2018 - now",
                    location: "Naples (Italy)",
                    position: "AI Software Engineer",
                    company: "NTT Data Italia",
                    text: "Software engineer focused on issues of Artificial Intelligence and Natural Language " +
                            "Processing. Main duties:  design of software architectures in AI projects; design and" +
                            " implementation of the AI and NLP functionalities with an eye on the efficiency and " +
                            "reusability of the models;  team coordination in various projects."
                },
                {
                    color: "orange darken-1",
                    icon: "mdi-briefcase-search",
                    date: "Nov 2017 - Feb 2018",
                    location: "Las Palmas de Gran Canaria (Spain)",
                    position: "Research Internship",
                    company: "Universidad del'Atlantico Medio",
                    text: "The work was focused on pattern recognition and pattern prediction on signatures. The " +
                            "result was a conference paper, Tracking the Ballistic Trajectory in Complex and Long " +
                            "Handwritten Signatures, was written and published at the 16th International Conference " +
                            "on Frontiers in Handwriting Recognition."
                },
                {
                    color: "orange darken-1",
                    icon: "mdi-briefcase-search",
                    location: "Fisciano, Salerno (Italy)",
                    position: "Company Internship",
                    company: "A.I Tech",
                    date: "Nov 2014 - Jun 2015",
                    text: "The work was focused on the design and implementation of a gesture recognition system " +
                            "on a Kinect sensor. I proposed a new feature extraction method for gestures."
                },
                {
                    color: "red darken-2",
                    icon: "mdi-school",
                    date: "Oct 2015 - Feb 2018",
                    location: "Fisciano, Salerno (Italy)",
                    position: "Master's Degree - Computer Engineering",
                    company: "Università degli Studi di Salerno",
                    text: "Skills acquired: Semantic technologies, Data Mining and Machine Learning, Network " +
                            "Security, Robotics, Artificial Intelligence and Artificial Vision, Sistributed " +
                            "programming.",
                    vote: "110/110 cum laude"
                },
                {
                    color: "red darken-2",
                    icon: "mdi-school",
                    date: "Oct 2011 - Jun 2015",
                    location: "Fisciano, Salerno (Italy)",
                    position: "Bachelor's Degree - Computer Engineering",
                    company: "Università degli Studi di Salerno",
                    text: "Skills acquired: Object Oriented Programming; Automatic Controls; Internet and Network" +
                            " stacks; Mathematics, Statistics,Telecommunications and Physics fundamentals.",
                    vote: "103/110"
                },
            ]
        };
    },
    computed: {
        ...mapGetters("DataState", {
            skills: "getSkills",
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
