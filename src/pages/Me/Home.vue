<template>
    <v-container grid-list-md text-xs-center fluid pa-0>
        <v-layout row wrap>
            <v-flex xs12>
                <UserIntro></UserIntro>
            </v-flex>
            <v-flex xs12
                    sm10
                    offset-sm1
                    lg8
                    offset-lg2>
                <blockquote class="blockquote"> {{ description }} </blockquote>
            </v-flex>
            <v-flex class="py-4"
                    xs12
                    sm10
                    offset-sm1
                    lg8
                    offset-lg2>
                <!--<Topics :topics="topics"></Topics>-->
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import UserIntro from "@/components/UserIntro";
import Topics from "@/components/Topics";

export default {
    name: "Home",
    components: {
        UserIntro,
        Topics
    },
    props: {},
    computed: {},
    data() {
        return {
            description: "Hi! I'm Gioele Crispo and I'm a Computer engineer. Since I was a child, I have cultivated a huge passion for technology. My studies in computer engineering have allowed me to tame my strong curiosity and now I delight in sharing the construction of the new technological society.",
            topics: [
                {
                    id: "works",
                    img: "goals.jpg",
                    title: "Future goals",
                    description: "My aspirations",
                    color: "red"
                },
                {
                    id: "projects",
                    img: "hobbies.jpg",
                    title: "Hobbies",
                    description: "My hobbies",
                    color: "blue"
                },
                {
                    id: "aboutme",
                    img: "hobbies.jpg",
                    title: "Hobbies",
                    description: "My hobbies",
                    color: "grey"
                },
                {
                    id: "hobbies",
                    img: "hobbies.jpg",
                    title: "Hobbies",
                    description: "My hobbies",
                    color: "green"
                }
            ],
        };
    }
};
</script>

<style lang="scss" scoped>


</style>
