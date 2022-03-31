<template>
    <v-alert
            text
            class="py-2 px-4 mb-1 imageBackground" :style='style'
            width="100%"
            border="bottom"
            :color="certification.color"

    >
        <v-row align="center" class="pa-0 pt-1">

            <v-col class="pa-2 pt-1">
                <h3 class="white--text title">
                    <b>{{ certification.title }}</b>
                </h3>
                <v-row align="center" class="py-0">
                    <v-col cols="auto" class="py-0 pr-2">
                        <h5 class='white--text'>{{ certification.id }}</h5>
                    </v-col>
                    <v-col cols="auto" class="pa-0 white--text" v-if="certification.credential">
                        ·
                    </v-col>
                    <v-col cols="auto" class="py-0 pl-2" v-if="certification.credential">
                        <span class="subtitle-2"><a class="white--text" :href="certification.credential">View credential</a></span>
                    </v-col>
                </v-row>
                <div class='white--text'>{{ certification.date }} </div>
            </v-col>
        </v-row>
    </v-alert>
</template>

<script>
    import utils from "../mixins/utils";
    export default {
        name: "Certification",
        components: {},
        props: ["certification"],
        mixins: [utils],
        data() {
            return {
            };
        },
        computed: {
            style: function() {
                let color = this.hexToRgb(this.certification.color);
                if (this.$vuetify.theme.isDark) {
                    color = '0,0,0';
                }
                return {
                    'background-image': 'linear-gradient(to right, rgba(' + color + ',0.99) 30%, rgba(' + color + ',0)), url(' + this.certification.imageUrl + ')!important'
                }
            }
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
.imageBackground {
    background-size: cover!important;
    background-repeat: no-repeat!important;
}
</style>
