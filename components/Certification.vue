<template>
    <v-alert
            text
            class="py-2 px-4 mb-1"
            width="100%"
            border="bottom"
            :color="certification.color"
    >
        <v-row align="center" class="pa-0 pt-1">
            <v-col cols="auto">
                <v-icon large :color="certification.color">{{certification.icon}}</v-icon>
            </v-col>
            <v-col class="pa-2 pt-1">
                <h3 class="headline">
                    {{ certification.title }}
                </h3>
                <v-row align="center" class="py-0">
                    <v-col cols="auto" class="py-0 pr-2">
                        <h5>{{ certification.id }}</h5>
                    </v-col>
                    <v-col cols="auto" class="pa-0" v-if="certification.credential">
                        ·
                    </v-col>
                    <v-col cols="auto" class="py-0 pl-2" v-if="certification.credential">
                        <span class="subtitle-2"><a :href="certification.credential">View credential</a></span>
                    </v-col>
                </v-row>
                <div>{{ certification.date }} </div>
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
