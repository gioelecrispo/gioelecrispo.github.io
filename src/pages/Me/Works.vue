<template>
    <v-container fluid>
        <v-row justify="center">
            <v-btn class="mr-1 primary" href="docs/cv_eng.pdf" download>Download CV (ENG)
                <v-icon small class="ml-2">mdi-download</v-icon>
            </v-btn>
            <v-btn class="ml-1 primary" href="docs/cv_eng.pdf" download>Download CV (ITA)
                <v-icon small class="ml-2">mdi-download</v-icon>
            </v-btn>
        </v-row>
        <v-row>
            <!-- SKILLS -->
            <v-col cols="12">
                <v-card>
                    <v-card-title class="pb-1">Skills</v-card-title>
                    <v-card-text>
                        <v-list two-line dense class="py-0">
                            <template v-for="(skill, index) in skills">
                                <v-subheader
                                        v-if="skill.header"
                                        :key="skill.header"
                                >
                                    {{ skill.header }}
                                </v-subheader>

                                <v-divider
                                        v-else-if="skill.divider"
                                        :inset="skill.inset"
                                        :key="index"
                                ></v-divider>

                                <v-list-item
                                        v-else
                                        :key="skill.title"
                                        avatar
                                        @click=""
                                >
                                    <v-list-item-avatar tile>
                                        <v-img :src="skill.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-html="skill.title"></v-list-item-title>
                                        <v-list-item-subtitle v-html="skill.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- LANGUAGES -->
            <v-col cols="12">
                <v-card>
                    <v-card-title class="pb-1">Languages</v-card-title>
                    <v-card-text>
                        <v-data-table
                                :headers="languages.tableHeaders"
                                :items="languages.tableValues"
                                class="elevation-0"
                                hide-default-header
                                hide-default-footer
                                dense
                        >
                            <template slot="items" slot-scope="props">
                                <td class="text-center">{{ props.item.language }}</td>
                                <td class="text-center">{{ props.item.listening }}</td>
                                <td class="text-center">{{ props.item.reading }}</td>
                                <td class="text-center">{{ props.item.spokenInteraction }}</td>
                                <td class="text-center">{{ props.item.spokenProduction }}</td>
                                <td class="text-center">{{ props.item.writing }}</td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                    <v-card-text class="pt-1 px-3">
                        <p class="mb-1">Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:
                            Proficient user - (*) Common European Framework of Reference for Languages </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- TIME LINES -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Experiences</v-card-title>
                    <v-card-text :class="{'pl-0': tabletAndDown() }">
                        <v-timeline :dense="tabletAndDown()">
                            <v-timeline-item
                                    v-for="(temporalSpike, i) in temporalSpikes"
                                    :color="temporalSpike.color"
                                    :icon="temporalSpike.icon"
                                    :key="i"
                                    fill-dot
                            >
                                <template v-slot:opposite>
                                    <span
                                            v-if="!tabletAndDown()"
                                            :class="`body-1 font-weight-bold`"
                                            v-text="temporalSpike.date"
                                    ></span>
                                </template>
                                <v-card
                                        :color="temporalSpike.color"
                                        dark
                                >
                                    <v-card-title class="py-2 px-4">
                                        <v-container class="py-0" fluid>
                                            <v-col class="pa-0" cols="12">
                                                <v-row class="pa-0">
                                                    <p class="ma-0 title">{{ temporalSpike.position }}</p>
                                                </v-row>
                                                <v-row class="pa-0" align="center">
                                                    <span class="ma-0 subtitle-2">{{ temporalSpike.company }}
                                                    </span> <span class="ml-2 mr-2">|</span> <span
                                                        class="mt-1 overline">{{ temporalSpike.location }}</span>
                                                </v-row>
                                            </v-col>
                                        </v-container>
                                    </v-card-title>
                                    <v-card-text class="white--text">
                                        <v-row class="pt-3" v-if="tabletAndDown()">
                                            <v-icon color="white" class="mx-3">mdi-clock</v-icon>
                                            <p class="ma-0 py-2 outline">{{ temporalSpike.date }}</p>
                                        </v-row>
                                        <p class="py-2 ma-0">{{ temporalSpike.text }}</p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "Works",
        components: {},
        props: {},
        computed: {
        },
        data() {
            return {
                skills: [
                    {header: "Programming languages"},
                    {
                        avatar: require("@/assets/img/skills/python.png"),
                        title: "<span><strong>Python</strong></span>",
                        subtitle: "<span class='text--primary'>Data Science</span> &mdash; with AI Frameworks, " +
                            "but also: aiohttp, Flask and others for making microservices"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/java.png"),
                        title: "<span><strong>Java</strong></span>",
                        subtitle: "<span class='text--primary'>Backend</span> &mdash; Spring, Spring Boot, Javadoc, " +
                            "Swagger codegen, microservices"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/js.png"),
                        title: "<span><strong>Javascript</strong></span>",
                        subtitle: "<span class='text--primary'>Backend and Frontend</span> &mdash; NodeJS, VueJS; " +
                            " use of NodeJS to create NodeVM sandboxed microservices in javascript"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/matlab.png"),
                        title: "<span><strong>Matlab</strong></span>",
                        subtitle: "<span class='text--primary'>Data Science</span> &mdash; Master's degree thesis " +
                            "strongly focused on Pattern Recognition and Image Analysis"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/c++.png"),
                        title: "<span><strong>C++</strong></span>",
                        subtitle: "<span class='text--primary'>Computer Vision</span> &mdash; OpenCV based " +
                            "bachelor's degree thesis"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/c.png"),
                        title: "<span><strong>C</strong></span>",
                        subtitle: "<span class='text--primary'>Generic use</span> &mdash; Some project focused on CV" +
                            " and IoT made on Raspberry Pi 3"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/sql.png"),
                        title: "<span><strong>SQL</strong></span>",
                        subtitle: "<span class='text--primary'>Databases</span> &mdash; used for many projects"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/html.png"),
                        title: "<span><strong>HTML</strong></span>",
                        subtitle: "<span class='text--primary'>Frontend</span> &mdash; used with VueJS"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/css.png"),
                        title: "<span><strong>CSS / SCSS</strong></span>",
                        subtitle: "<span class='text--primary'>Frontend</span> &mdash; used with VueJS"
                    },
                    {header: "AI Frameworks"},
                    {
                        avatar: require("@/assets/img/skills/tensorflow.png"),
                        title: "<span><strong>Tensorflow, Keras</strong></span>",
                        subtitle: "<span class='text--primary'>NLP and Audio Projects</span>"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/pytorch.png"),
                        title: "<span><strong>PyTorch, FastAI</strong></span>",
                        subtitle: "<span class='text--primary'>NLP projects</span> &mdash; GPU optimized"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/neural.png"),
                        title: "<span><strong>BERT, Scikit-learn</strong></span>",
                        subtitle: "<span class='text--primary'>NLP projects</span>"
                    },
                    {header: "General Frameworks"},
                    {
                        avatar: require("@/assets/img/skills/spring.png"),
                        title: "<span><strong>Spring 5.X, Spring Boot 2.X</strong></span>",
                        subtitle: "<span class='text--primary'>Enterprise Java</span> &mdash; MVC and Reactor, REST, " +
                            "Hibernate, String Security, Spring Data"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/nodejs.png"),
                        title: "<span><strong>NodeJS 10.X, VueJS 2.X</strong></span>",
                        subtitle: "<span class='text--primary'>Backend and Frontend</span>"
                    },
                    {header: "Tools"},
                    {
                        avatar: require("@/assets/img/skills/elastic.png"),
                        title: "<span><strong>Elastic Stack</strong></span>",
                        subtitle: "<span class='text--primary'>Big Data</span> &mdash; Elasticsearch, Kibana, " +
                            "Logstash, MetricBeat, FileBeat"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/database.png"),
                        title: "<span><strong>MongoDB, MariaDB</strong></span>",
                        subtitle: "<span class='text--primary'>Data storages</span> &mdash; for multi-clustered " +
                            "cloud architectures"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/rabbitmq.png"),
                        title: "<span><strong>RabbitMQ, Kafka</strong></span>",
                        subtitle: "<span class='text--primary'>Message Brokers, Data stream</span> &mdash; " +
                            "used in high rate cloud architectures"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/kubernetes.png"),
                        title: "<span><strong>Docker, Kubernetes</strong></span>",
                        subtitle: "<span class='text--primary'>Deployment</span> &mdash; Containers, PODS, " +
                            "microservices"
                    },
                    {header: "Project Management tools",},
                    {
                        avatar: require("@/assets/img/skills/git.png"),
                        title: "<span><strong>Git, SVN</strong></span>",
                        subtitle: "<span class='text--primary'>Source version control</span>"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/skills/task.png"),
                        title: "<span><strong>Jira, Redmine</strong></span>",
                        subtitle: "<span class='text--primary'>Agile development</span> &mdash; with Issues / Bugs " +
                            "tracking"
                    },
                    {header: "Communication capabilities"},
                    {header: "Organisational / managerial skills"},
                    {header: this.$t("cv.drivingLicence"),},
                    {
                        avatar: require("@/assets/img/skills/car.png"),
                        title: "<span><strong>A1, B</strong></span>",
                        subtitle: "Driving licence for car and scooter with 125 cc max"
                    },
                ],
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