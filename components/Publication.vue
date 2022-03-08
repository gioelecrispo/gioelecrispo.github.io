<template>
    <v-card
            outlined
            elevation="0"
            width="100%"
    >
        <v-container fluid class="py-0">
        <v-row
                align="center"
                no-gutters
        >
            <v-col>
                <v-card-title style="word-break: break-word;" class="py-2">
                    {{ publication.title }}
                </v-card-title>
            </v-col>
            <v-col cols="auto">
                <v-btn
                        class="mr-3"
                        icon
                        target="_blank"
                        :href="publication.href"
                        rel="noreferrer"
                >
                    <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        </v-container>
        <v-card-text class="py-1">
            <b>{{ publication.date }}</b> · {{ publication.location }}
        </v-card-text>
        <v-card-text class="pt-0 pb-1">
            {{ publication.authors }}
        </v-card-text>
    </v-card>
</template>

<script>

    export default {
        name: "Publication",
        components: {},
        props: ["publication"],
        data() {
            return { };
        },
        computed: {},
    };
</script>

<style lang="scss" scoped>

</style>
