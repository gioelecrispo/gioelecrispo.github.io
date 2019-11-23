<template>
    <v-layout row wrap>
        <v-flex xs12 pt-0>
            <v-parallax
                    dark
                    height="400"
                    :src="require('@/assets/img/Me_Parallax.jpg')"
            >
                <v-layout
                        align-center
                        column
                        justify-center
                >
                    <h1 class="display-3 font-weight-thin mb-3">Hi, I am <strong>Gioele Crispo</strong></h1>
                    <h1 class="subheading font-weight-thin mb-3">Computer engineer</h1>
                </v-layout>
            </v-parallax>
        </v-flex>
        <v-flex class="profileAvatar">
            <v-flex xs12 align-center justify-center layout>
                <v-avatar
                        :tile="avatarTile"
                        :size="avatarSize"
                        color="grey lighten-4"
                >
                    <img :src="require('@/assets/img/me/me.png')" alt="avatar">
                </v-avatar>
            </v-flex>
        </v-flex>
    </v-layout>

</template>

<script>
export default {
    name: "UserIntro",
    components: {},
    props: {},
    computed: {},
    data() {
        return {
            avatarTile: false,
            avatarSize: 192
        };
    }
};
</script>

<style lang="scss" scoped>
    .profileAvatar {
        margin-top: -98px;
    }
</style>
