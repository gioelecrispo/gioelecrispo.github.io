<template>
    <v-container>
        <v-row class="py-4">
            <blockquote class="blockquote">
                {{ description }}
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
                        I am open to collaborations on interesting projects and ideas regarding artificial intelligence and related.
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

        <v-row class="pt-6 pb-3">
            <h2>Works and Experiences</h2>
        </v-row>
        <v-row align="top">
            <v-col cols="12"
                   sm="6" class="pa-2">
                <Experience :experience="visibleExperience"></Experience>
            </v-col>
            <v-col cols="12" sm="6" class="pa-2">
                <Certification :certification="visibleCertifications"></Certification>
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

        <v-row class="pt-6 pb-3">
            <h2>Projects</h2>
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
                    class="pa-0 mr-3 mb-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Project :project="project"/>
            </v-col>
        </v-row>
        <v-row>
            <v-btn
                    text
                    color="primary"
                    @click="navigate('/projects')"
            >
                Explore all my projects
                <v-icon class="ml-2">
                    mdi-github-circle
                </v-icon>
            </v-btn>
        </v-row>
        <v-row class="pt-6 pb-3">
            <h2>Latest Post</h2>
        </v-row>
        <v-row class="py-4">
            <v-col
                    v-for="(article, articleId) in articles"
                    :key="articleId"
                    class="pa-2"
                    cols="12"
                    sm="6"
                    md="4"
            >
                <Article
                        :article-id="articleId"
                        :article="article"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-btn
                    text
                    color="primary"
                    @click="navigate('/articles')"
            >
                View all my posts
                <v-icon class="ml-2">
                    mdi-file-document-outline
                </v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import UserIntro from "../components/UserIntro";
    import Article from "../components/Article";
    import Project from "../components/Project";
    import RouterService from "../helpers/RouterService";
    import Experience from "../components/Experience";
    import Skill from "../components/Skill";
    import Certification from "../components/Certification";
    import Publication from "../components/Publication";

    export default {
        name: "Home",
        components: {
            Experience,
            Project,
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
                description: "Hi! I'm Gioele Crispo and I'm a Computer engineer. Since I was a child, I have cultivated a huge passion for technology. My studies in computer engineering have allowed me to tame my strong curiosity and now I delight in sharing the construction of the new technological society.",
            };
        },
        computed: {
            ...mapGetters("DataState", {
                articles: "getArticles",
                projects: "getProjects",
                skills: "getSkills",
                experiences: "getExperiences",
                certifications: "getCertifications",
                publications: "getPublications",
            }),
            visibleExperience() {
                if (this.experiences)
                    return this.experiences.slice(0, 1)[0];
                return this.experiences;
            },
            visiblePublications() {
                if (this.publications)
                    return this.publications.slice(0, 1)[0];
                return this.publications;
            },
            visibleCertifications() {
                if (this.certifications)
                    return this.certifications.slice(0, 1)[0];
                return this.certifications;
            },
            visibleSkills() {
                if (this.skills)
                    return this.skills["Programming Languages"].slice(0, 2);
                return this.skills;
            },
            visibleProjects() {
                if (this.projects)
                    return this.projects.slice(0, 2);
                return this.projects;
            }
        },
        methods: {
            navigate(path) {
                RouterService.goTo(path);
            },
        }
    };
</script>

<style lang="scss" scoped>


</style>
