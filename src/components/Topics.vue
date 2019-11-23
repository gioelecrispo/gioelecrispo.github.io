<template>
    <v-flex xs12>
        <v-layout pa-3 row wrap v-for="(topic, index) in topics"
                    :text-xs-left="isLeft(index)"
                  :text-xs-right="!isLeft(index)"
                  :key=topic.id>
            <!-- LEFT -->
            <v-flex v-if="!isMobile() && isLeft(index)" class="px-2" xs6>
                <v-card class="circled-75 elevation-0 black-border white--text" color="red">
                    <v-layout class="pa-0" align-center justify-center>
                        <v-flex shrink class="pa-0">
                            <v-avatar size="150px" tile="false">
                                <img class="circled-75"
                                     :src="require('@/assets/img/topics/' + topic.img)"
                                     :lazy-src="require('@/assets/img/topics/' + topic.img)"
                                     :alt="topic.img">
                            </v-avatar>
                        </v-flex>
                        <v-flex grow>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{ topic.title }}</div>
                                    <div>{{ topic.description }}</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex v-if="!isMobile() && isLeft(index)" class="px-2 text-xs-center " xs6>
                <v-layout fill-height align-center justify-center>
                    <div class="subheading"> {{ topic.description }}</div>
                </v-layout>
            </v-flex>

            <!-- RIGHT -->
            <v-flex v-if="!isMobile() && !isLeft(index)" class="px-2 text-xs-center" xs6>
                <v-layout fill-height align-center justify-center>
                    <div class="subheading"> {{ topic.description }}</div>
                </v-layout>
            </v-flex>
            <v-flex v-if="!isMobile() && !isLeft(index)" class="px-2" xs6>
                <v-card class="circled-75 elevation-0 black-border white--text" :color="topic.color">
                    <v-layout align-center justify-center class="pa-0">
                        <v-flex grow>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{ topic.title }}</div>
                                    <div>{{ topic.description }}</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex shrink class="pa-0">
                            <v-avatar size="150px" tile="false">
                                <img class="circled-75"
                                     :src="require('@/assets/img/topics/' + topic.img)"
                                     :lazy-src="require('@/assets/img/topics/' + topic.img)"
                                     :alt="topic.img">
                            </v-avatar>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

            <!-- MOBILE -->
            <v-flex v-if="isMobile()" class="px-2 text-xs-center" xs12>
                <v-layout row wrap>
                    <v-flex xs12 class="px-2 text-xs-center">
                        <v-layout fill-height align-center justify-center>
                            <div class="subheading"> {{ topic.description }}</div>
                        </v-layout>
                    </v-flex>
                    <!-- LEFT -->
                    <v-flex v-if="isLeft(index)" class="px-2" xs12>
                        <v-card class="circled-75 elevation-0 black-border white--text" color="red">
                            <v-layout class="pa-0" align-center justify-center>
                                <v-flex shrink class="pa-0">
                                    <v-avatar size="150px" tile="false">
                                        <img class="circled-75"
                                             :src="require('@/assets/img/topics/' + topic.img)"
                                             :lazy-src="require('@/assets/img/topics/' + topic.img)"
                                             :alt="topic.img">
                                    </v-avatar>
                                </v-flex>
                                <v-flex grow>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">{{ topic.title }}</div>
                                            <div>{{ topic.description }}</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>

                    <!-- RIGHT -->
                    <v-flex xs12 class="px-2" v-if="!isLeft(index)">
                        <v-card class="circled-75 elevation-0 black-border white--text" :color="topic.color">
                            <v-layout align-center justify-center class="pa-0">
                                <v-flex grow>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">{{ topic.title }}</div>
                                            <div>{{ topic.description }}</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                                <v-flex shrink class="pa-0">
                                    <v-avatar size="150px" tile="false">
                                        <img class="circled-75"
                                             :src="require('@/assets/img/topics/' + topic.img)"
                                             :lazy-src="require('@/assets/img/topics/' + topic.img)"
                                             :alt="topic.img">
                                    </v-avatar>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>

export default {
    name: "Topics",
    props: ["topics"],
    methods: {
        isLeft(index) {
            return index % 2 === 0;
        },
        isMobile() {
            return false;
        }
    }
};
</script>

<style lang="scss" scoped>
    .black-border {
        border-color: #333333!important;
        border-width: 1px!important;
    }
</style>