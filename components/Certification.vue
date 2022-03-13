<template>
    <v-alert

            text
            class="py-2 px-4 mb-1 imageBackground" :style='style'
            width="100%"
            border="bottom"
            :color="certification.color"

    >
        <v-row align="center" class="pa-0 pt-1">
            <v-col cols="auto">
                <v-icon large class='white--text' :color="certification.color">{{certification.icon}}</v-icon>
            </v-col>
            <v-col class="pa-2 pt-1">
                <h3 class="headline white--text">
                    {{ certification.title }}
                </h3>
                <v-row align="center" class="py-0">
                    <v-col cols="auto" class="py-0 pr-2">
                        <h5 class='white--text'>{{ certification.id }}</h5>
                    </v-col>
                    <v-col cols="auto" class="pa-0" v-if="certification.credential">
                        ·
                    </v-col>
                    <v-col cols="auto" class="py-0 pl-2" v-if="certification.credential">
                        <span class="subtitle-2 black--text"><a :href="certification.credential">View credential</a></span>
                    </v-col>
                </v-row>
                <div class='white--text'>{{ certification.date }} </div>
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
        computed: {
            style: function() {
                let color = this.hexToRgb(this.certification.color.slice(1));
                if (this.$vuetify.theme.isDark) {
                    color = '0,0,0';
                }
                return {
                    'background-image': 'linear-gradient(to right, rgba(' + color + ',0.99) 30%, rgba(' + color + ',0)), url(' + this.certification.imageUrl + ')!important'
                }
            }
        },
        methods: {
            hexToRgb(hex) {
                var bigint = parseInt(hex, 16);
                var r = (bigint >> 16) & 255;
                var g = (bigint >> 8) & 255;
                var b = bigint & 255;
                return r + "," + g + "," + b;
            }
        }
    };
</script>

<style lang="scss" scoped>
.imageBackground {
    background-size: cover!important;
    background-repeat: no-repeat!important;
}
</style>
