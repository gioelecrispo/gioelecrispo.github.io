<template>
    <v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="800px">
        <v-system-bar window dark>
            <span>{{ title }}</span>
            <v-spacer></v-spacer>
            <v-icon>remove</v-icon>
            <v-icon>check_box_outline_blank</v-icon>
            <v-icon>close</v-icon>
        </v-system-bar>
    </v-card>
</template>

<script>
export default {
    name: "WindowedContent",
    props: ["title","onClose"],
    components: {}
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .1s
    }

    .fade-enter,
    .fade-leave-to
        /* .fade-leave-active in <2.1.8 */

    {
        opacity: 0
    }
</style>

