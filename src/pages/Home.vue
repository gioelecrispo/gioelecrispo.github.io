<template>
    <v-container>
        <v-row class="py-4">
            <blockquote :class="isDark ? 'dark-theme' : 'light-theme'">
                Enthusiastic Machine Learning Engineer with excellent analytical, design and team working skills,
                focused on Natural Language Processing topics.
                As a team leader on several projects, I have always demonstrated excellent leadership and coordination
                skills.
                I consider myself attentive to details and precise in meeting deadlines.
                Looking for stimulating activities related to artificial intelligence that allow me to expand my current
                knowledge and soft skills.
            </blockquote>
        </v-row>
        <v-row class="pt-4">
            <v-alert
                    color="primary"
                    dark
                    border="left"
                    prominent
            >
                <v-row align="center">
                    <v-col class="ml-3" cols="auto">
                        <v-icon large>mdi-at</v-icon>
                    </v-col>
                    <v-col class="py-0">
                        <div>
                            <h2>Contacts</h2>
                        </div>
                        I am open to collaborations on interesting projects and ideas regarding artificial intelligence
                        and related.
                        If you want to propose a work or exchange an opinion do not hesitate to contact me.
                        <div class="mt-3">
                            <v-btn
                                    text
                                    large
                                    color="white"
                                    @click="$vuetify.goTo(selector, options)"
                            >
                                Go to my contacts
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-alert>
        </v-row>


        <v-row class="mt-10 pt-12 pb-3" justify="center">
            <h1>Works and Experiences</h1>
        </v-row>
        <v-row>
            My career is mainly focused on artificial intelligence projects.
            During my employment at NTT Data I have explored various architectural solutions (streaming, real time,
            batch, and others) based on microservices for complex artificial intelligence problems.
            I also achieved the AWS Machine Learning Specialty certification, with which I also projected the solutions
            into the AWS domain.
        </v-row>
        <v-row align="top" class="py-3">
            <v-col cols="12"
                   sm="6" :class="tabletAndDown() ? 'pa-0 py-1' : 'pl-0 pr-2 py-1'">
                <div v-for="experience in visibleExperiences">
                    <Experience :experience="experience" :forceDate="true"></Experience>
                </div>
            </v-col>
            <v-col cols="12" sm="6" :class="tabletAndDown() ? 'pa-0 py-1' : 'pr-0 pl-2 py-1'">
                <div v-for="certification in visibleCertifications">
                    <Certification :certification="certification"></Certification>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-btn
                    text
                    color="primary"
                    @click="navigate('/cv')"
            >
                View my CV
                <v-icon class="ml-2">
                    mdi-timeline-text
                </v-icon>
            </v-btn>
        </v-row>






        <v-row class="mt-10 pt-12 pb-3" justify="center">
            <h1>Applications</h1>
        </v-row>
        <v-row>
            I have built many systems, mainly focused on artificial intelligence and machine learning.
        </v-row>
        <v-row class="py-3 px-0">
            <v-col
                    v-for="application in visibleApplications"
                    :key="application.id"
                    class="pa-0"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Application
                        :application="application"
                />
            </v-col>
            <v-col cols="12"
                   sm="6"
                   md="4">
                <PageNavigator text="Discover all" icon="mdi-briefcase" path="/applications"></PageNavigator>
            </v-col>
        </v-row>



        <v-row class="mt-10 pt-12 pb-3" justify="center">
            <h1>Projects</h1>
        </v-row>
        <v-row>
            I use Github a lot to save my efforts, make them available for me and others. I like a lot facing with
            challenges and solve tricky problems.
            In fact, my first development in Python was "dictipy", a library that overcomes the limitations of
            json.dumps and __dict__ methods.
        </v-row>
        <v-row class="py-4">
            <v-col
                    v-for="project in visibleProjects"
                    :key="project.id"
                    class="pa-0 pr-3 pb-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Project :project="project"/>
            </v-col>
            <v-col class="pa-0"
                   cols="12"
                   sm="6"
                   md="4">
                <PageNavigator text="Explore all my projects" icon="mdi-github-circle" path="/projects"></PageNavigator>
            </v-col>
        </v-row>



        <v-row class="mt-10 pt-12 pb-3" justify="center">
            <h1 class="decorated-title">Latest Post</h1>
        </v-row>
        <v-row>
            Since childhood, I've always been very curious and eager to perfect my things.
            From here my articles are born, which are related to projects or personal insights to improve my skills.
        </v-row>
        <v-row class="py-3">
            <v-col
                    v-for="article in visibleArticles"
                    :key="article.id"
                    class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Article
                        :article="article"
                />
            </v-col>
            <v-col class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <PageNavigator text="View all my posts" icon="mdi-file-document-outline"
                               path="/articles"></PageNavigator>
            </v-col>
        </v-row>
        <v-row>
            <v-card color="transparent" height="25px"></v-card>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import ui from "../mixins/ui";

    import UserIntro from "../components/UserIntro";
    import Article from "../components/Article";
    import Project from "../components/Project";
    import Application from "../components/Application";
    import Experience from "../components/Experience";
    import Skill from "../components/Skill";
    import Certification from "../components/Certification";
    import Publication from "../components/Publication";
    import PageNavigator from "../components/PageNavigator";


    export default {
        name: "Home",
        mixins: [ui],
        components: {
            PageNavigator,
            Experience,
            Project,
            Application,
            UserIntro,
            Article,
            Certification,
            Publication,
            Skill
        },
        props: {},
        data() {
            return {
                options: {
                    duration: 700,
                    offset: 0,
                    easing: "easeInOutCubic",
                },
                selector: "#footer",
            };
        },
        computed: {
            ...mapGetters("AppState", {
                isDark: "isDark",
            }),
            ...mapGetters("DataState", {
                articles: "getArticles",
                projects: "getProjects",
                applications: "getApplications",
                skills: "getSkills",
                experiences: "getExperiences",
                certifications: "getCertifications",
                publications: "getPublications",
            }),
            visibleExperiences() {
                if (this.experiences)
                    return this.experiences.slice(0, 1);
                return this.experiences;
            },
            visibleCertifications() {
                if (this.certifications)
                    return this.certifications.slice(0, 1);
                return this.certifications;
            },
            visibleSkills() {
                if (this.skills)
                    return this.skills["Programming Languages"].slice(0, 2);
                return this.skills;
            },
            visiblePublications() {
                if (this.publications)
                    return this.publications.slice(0, 1);
                return this.publications;
            },
            visibleProjects() {
                if (this.projects)
                    return this.projects.slice(0, 5);
                return this.projects;
            },
            visibleApplications() {
                if (this.applications)
                    return this.applications.slice(0, 5);
                return this.applications;
            },
            visibleArticles() {
                if (this.articles)
                    return this.articles.slice(0, 3);
                return this.articles;
            }
        },
        methods: {}
    };
</script>


<style lang="scss" scoped>
    @font-face {
        font-family: "Ionicons";
        src: url("https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.1");
        src: url("https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.1#iefix") format("embedded-opentype"), url("https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.1") format("truetype"), url("https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.1") format("woff"), url("https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.1#Ionicons") format("svg");
        font-weight: normal;
        font-style: normal;
    }

    blockquote {
        border-left: 3px solid #00CC8F;
        font-family: Georgia, Times, "Times New Roman", serif;
        font-size: 18px;
        font-style: italic;
        line-height: 1.8em;
        margin: 1.1em 2em;
        padding: 16px 0 16px 24px;
        position: relative;
        transition: 0.2s border ease-in-out;
        z-index: 0;
    }

    blockquote:before {
        content: "";
        position: absolute;
        top: 50%;
        left: -4px;
        height: 2em;
        width: 5px;
        margin-top: -1em;
    }

    blockquote.light-theme:before {
        background-color: #ffffff;
    }

    blockquote.dark-theme:before {
        background-color: #121212;
    }


    blockquote:after {
        content: "\f347";
        position: absolute;
        top: 50%;
        left: -0.5em;
        color: #00CC8F;
        font-family: "Ionicons";
        font-style: normal;
        line-height: 1em;
        text-align: center;
        text-indent: -2px;
        width: 1em;
        transform: rotateX(180deg);
        margin-top: -0.5em;
        transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
    }



</style>
