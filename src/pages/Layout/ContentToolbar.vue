<template>
    <v-toolbar color="transparent"
               class="elevation-0">
        <v-btn icon v-if="allowBack" @click="routerGoBack()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
</template>


<script>
export default {
    name: "ContentToolbar",
    props: ["title", "allowBack"],
    data() {
        return {

        };
    },
    methods: {
        routerGoBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>

</style>

