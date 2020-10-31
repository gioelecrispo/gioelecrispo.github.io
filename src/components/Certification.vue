<template>
    <v-alert
            text
            class="py-2 px-4 mb-1"
            width="100%"
            border="bottom"
            color="orange darken-2"
    >
        <v-row align="center">
            <v-col cols="auto">
                <v-icon large color="orange darken-2">mdi-medal</v-icon>
            </v-col>
            <v-col>
                <h3 class="headline">
                    {{ certification.title }}
                </h3>
                <div>{{ certification.id }} · {{ certification.date }} </div>
            </v-col>
        </v-row>
    </v-alert>
</template>

<script>

    export default {
        name: "Certification",
        components: {},
        props: ["certification"],
        data() {
            return {
            };
        },
        computed: {},
    };
</script>

<style lang="scss" scoped>

</style>
