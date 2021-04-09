<template>
    <v-row align="center">
        <v-col
                cols="auto"
                class="pa-1"
        >
            <v-img
                    max-height="50"
                    max-width="50"
                    :src="skill.avatar"
            />
        </v-col>
        <v-col class="py-0 pl-3 pr-0">
            <v-row align="center">
                <v-col
                        class="pb-0"
                        v-html="skill.title"
                />
                <v-col
                        v-if="skill.value"
                        class="pb-0"
                >
                    <v-progress-linear
                            rounded
                            :value="skill.value"
                            :color="getColor(skill.value)"
                            height="10"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col
                        class="pt-1"
                        v-html="skill.subtitle"
                />
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

    export default {
        name: "Skill",
        components: {},
        props: ["skill"],
        data() {
            return {
                colors: {
                    "DEEP ORANGE": "#FF5722",
                    "ORANGE": "#FF9800",
                    "LIME": "#CDDC39",
                    "LIGHT GREEN": "#8BC34A",
                    "GREEN": "#4CAF50"
                }

            };
        },
        computed: {},
        methods: {
            getColor(value) {
                if (value >= 0 && value < 20) {
                    return this.colors["DEEP ORANGE"];
                } else if (value >= 20 && value < 40) {
                    return this.colors["ORANGE"];
                } else if (value >= 40 && value < 60) {
                    return this.colors["LIME"];
                } else if (value >= 60 && value < 80) {
                    return this.colors["LIGHT GREEN"];
                } else {
                    return this.colors["GREEN"];
                }
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
