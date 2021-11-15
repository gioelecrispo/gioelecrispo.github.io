<template>
    <span>
        <a class="mx-2 mb-1 terms"
            @click="showInfoReference = true">
            <span>Terms and policy</span>
            <v-icon class="ml-3" size="20px">
                mdi-information-outline
            </v-icon>
        </a>
        <v-dialog
            v-model="showInfoReference"
            max-width="400"
        >
            <v-card class="pa-3">
                <v-card-title class="text-h5 py-1">
                    <v-container class="pa-2">
                        <v-row class="pa-0" align="center">
                            <v-col class="pa-0">Terms and Policy</v-col>
                            <v-col class="pa-0" cols="auto">
                                <v-btn large icon @click="showInfoReference = false">
                                    <v-icon>
                                        close
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>

                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="py-2">
                    Icons made by <a
                    href="https://www.flaticon.com/authors/vectors-market"
                    title="Vectors Market"
                >Vectors
                    Market</a> from <a
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                >www.flaticon.com</a> is
                    licensed by:
                    <a
                        href="http://creativecommons.org/licenses/by/3.0/"
                        title="Creative Commons BY 3.0"
                        target="_blank"
                    >CC 3.0 BY</a>
                </v-card-text>
            </v-card>
        </v-dialog>
    </span>
</template>

<script>


export default {
    name: "TermsAndPolicy",
    components: {},
    mixins: [],
    props: [],
    data() {
        return {
            showInfoReference: false
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.terms {
    color: white;
}
</style>
