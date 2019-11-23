<template>
    <v-layout row wrap class="headerless">
        <v-flex xs12 >
            <v-img :src="require('@/assets/img/topics/goals/goals-intro.jpg')"
                   :lazy-src="require('@/assets/img/topics/goals/goals-intro.jpg')"
                   class="grey lighten-2"
            ></v-img>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Goals",
        components: {},
        props: {},
        computed: {},
        data() {
            return {};
        }
    };
</script>

<style lang="scss">
    .headerless {
        margin-top: -56px;
    }
</style>