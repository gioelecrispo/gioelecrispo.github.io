<template>
    <v-container grid-list-md text-xs-center fluid pa-0>
        <!-- TOPICS -->
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-layout row wrap>
                        <v-flex
                                v-for="topic in topics"
                                :key="topic.id"
                                xl4 lg4 md4 sm6 xs12
                        >
                            <v-card>
                                <v-img
                                        :src="topic.img"
                                        height="350px"
                                >
                                </v-img>
                                <v-card-title primary-title flat tile>
                                    <v-layout row wrap text-xs-center>
                                        <v-flex xs12>
                                            <div>
                                                <div class="headline">{{ topic.name }}</div>
                                                <span class="grey--text">{{ topic.description }}</span>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-card-title>

                                <v-card-actions>
                                    <v-btn flat color="primary"
                                           @click="$router.push( topic.path )">
                                        See more
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import UserIntro from "@/components/UserIntro";

export default {
    name: "AboutMe",
    components: {
        UserIntro
    },
    props: {},
    computed: {},
    data() {
        return {
            topics: [
                {
                    id: "works",
                    name: "Works and Skills",
                    description: "A resume of my skills and my curriculum vitae. You can find all the information about my works and occupations.",
                    img: require("@/assets/img/topics/works.jpg"),
                    path: "/me/cv"
                },
                {
                    id: "hobbies",
                    name: "Hobbies and Passions",
                    description: "Let's discover my hobbies!",
                    img: require("@/assets/img/topics/hobbies.jpg"),
                    path: "/me/hobbies"
                },
                {
                    id: "goals",
                    name: "Future Goals",
                    description: "A look to the future?",
                    img: require("@/assets/img/topics/goals.jpg"),
                    path: "/me/goals"
                }
            ]
        };
    }
};
</script>
