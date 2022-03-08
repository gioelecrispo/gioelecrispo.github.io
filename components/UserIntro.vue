<template>
    <v-card dark width="100%" elevation="0" outlined color="transparent">
        <v-row align="center" justify='center'>
            <v-col style='justify-content: center;'
                   cols="12"
                   md="auto"
            >

                        <v-avatar class='fade-in-fwd'
                            :tile="false"
                                  :size="tabletAndDown() ? '124' : '164'"
                                  color="grey lighten-4"
                        >
                            <img
                                :src="require('@/assets/img/me/me.jpg')"
                                alt="avatar"
                            >
                        </v-avatar>

            </v-col>
            <v-col>
                <v-row justify="center">
                    <h1 class="display-3 font-weight-medium ma-0 px-3 text-focus-in">
                        Gioele Crispo
                    </h1>
                </v-row>
                <v-row justify="center" class="pt-2">
                    <p class="headline font-weight-thin mx-0 mt-0 mb-3 px-3 text-focus-in">
                        Machine Learning engineer
                    </p>
                </v-row>
                <v-row>
                    <v-divider/>
                </v-row>
                <v-row justify="center">
                <span class="font-weight-thin pt-1 mb-3 px-3 text-focus-in">
                    Curious, enthusiastic and highly organized </span>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import ui from "../mixins/ui";

    export default {
        name: "UserIntro",
        components: {},
        mixins: [ui],
        props: {},
        data() {
            return {};
        },
        computed: {},
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
</style>
