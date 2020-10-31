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
                        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis,
                        feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien,
                        a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare lobortis.
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
        <v-row align="center">
            <v-col cols="12"
                   sm="6" class="pa-2 pr-2">
                <Experience :experience="visibleExperience"></Experience>
            </v-col>
<!--            <v-col cols="12"-->
<!--                   sm="6" class="pa-2 pl-4">-->
<!--                <v-row v-for="skill in visibleSkills" :key="skill.name">-->
<!--                    <v-card outlined>-->
<!--                        <Skill :skill="skill"></Skill>-->
<!--                    </v-card>-->
<!--                </v-row>-->
<!--            </v-col>-->
        </v-row>
        <v-row>
            <v-btn
                    text
                    color="primary"
                    @click="navigate('/me/cv')"
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
                    @click="navigate('/me/projects')"
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
                    @click="navigate('/me/articles')"
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
    import UserIntro from "@/components/UserIntro";
    import Article from "@/components/Article";
    import {mapGetters} from "vuex";
    import Project from "../../components/Project";
    import RouterService from "../../helpers/RouterService";
    import Experience from "../../components/Experience";
    import Skill from "../../components/Skill";

    export default {
        name: "Home",
        components: {
            Experience,
            Project,
            UserIntro,
            Article,
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
            }),
            visibleExperience() {
                if (this.experiences)
                    return this.experiences.slice(0, 1)[0];
                return this.experiences;
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
