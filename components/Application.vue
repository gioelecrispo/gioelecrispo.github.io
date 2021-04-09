<template>
    <div class="fade-in-fwd">
        <v-hover v-slot="{ hover }">
            <v-card
                    tile
                    class="mx-auto"
                    color="transparent"
                    @click="opened = !opened"
                    :elevation="hover ? 12 : 0"
                    :class="`${hover ? 'expand' : ''}`"
            >
                <v-img
                        :src="topImg"
                        aspect-ratio="1.3"
                >
                    <v-fade-transition>
                        <v-container fluid fill-height
                                     class="transition-fast-in-fast-out v-card--reveal white--text"
                                     style="height: 100%;"
                                     :style="background(application.color)"
                        >
                            <v-row justify="center" align="center">
                                <v-container>
                                    <v-row justify="center" align="center"
                                           class="overline title font-weight-medium ma-2">
                                        <h1 class="text-center" style="letter-spacing: 0px; line-height: 0.9;">
                                            {{application.name}}
                                        </h1>
                                    </v-row>
                                    <v-row>
                                        <v-divider color="white" class="mx-4 mt-2"></v-divider>
                                    </v-row>
                                    <v-row justify="center" align="center"
                                           class="overline subtitle-2 font-weight-light ma-2">
                                        <h4 class="text-center" style="line-height: 0.9;">{{application.area}}</h4>
                                    </v-row>
                                </v-container>
                            </v-row>
                        </v-container>
                    </v-fade-transition>
                </v-img>
            </v-card>
        </v-hover>
        <v-dialog v-model="opened"
                  :max-width="!tabletAndDown() ? '70%' : '100%'"
                  :fullscreen="tabletAndDown()"
                  @click:outside="close()">
            <v-card>
                <v-container fluid fill-height>
                    <v-row justify="end" align="top">
                        <v-col cols="auto" class="pa-0 pr-3">
                            <v-btn elevation="0" small
                                   icon
                                   @click="close()">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="top" class="px-3" style="margin-top: -30px">
                        <v-col><h2 class="text-center">{{application.name}}</h2></v-col>
                    </v-row>
                    <v-row :class="mobile() ? '' : 'ma-2'">
                        <v-col class="pa-0" cols="12" md="6">
                            <v-carousel
                                    :cycle="!isPlaying"
                                    @change="pauseVideo(this.videoId)"
                                    height="400"
                                    hide-delimiter-background
                                    show-arrows-on-hover
                            >
                                <div v-for="(resource, i) in application.resources" :key="i">
                                    <v-carousel-item reverse-transition="fade-transition"
                                                     transition="fade-transition">
                                        <v-card dark elevation="0" height="400">
                                            <v-container fluid fill-height>
                                                <v-row align="center">
                                                    <youtube v-if="resource.videoId"
                                                             :ref="resource.videoId"
                                                             :video-id="resource.videoId"
                                                             :player-vars="playerVars"
                                                             fit-parent
                                                             resize
                                                             @playing="isPlaying = true"
                                                             @paused="isPlaying = false"
                                                             @ended="isPlaying = false"
                                                             @click="playVideo(resource.videoId)"
                                                    />
                                                    <v-img v-else height="385" style="margin-top: -5px"
                                                           :src="resource.img"
                                                           contain
                                                           aspect-ratio="1">
                                                    </v-img>
                                                </v-row>
                                            </v-container>
                                        </v-card>
                                    </v-carousel-item>
                                </div>
                            </v-carousel>
                        </v-col>
                        <v-col cols="12" md="6" class="py-0 px-3"
                               :class="tabletAndDown() ? 'pt-3 px-0': 'pr-2 pl-4'">
                            <h3 class="mb-1">Project info</h3>
                            <p class="pb-2">{{ application.description }}</p>

                            <h3 class="mt-4 mb-1">Project details</h3>
                            <p class="py-2 mb-0"><b>Area:</b> {{application.area}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Technologies:</b> {{application.technologies}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Group:</b> {{application.group}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Date:</b> {{application.date}}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

    import ui from "../mixins/ui";

    export default {
        name: "Application",
        components: {},
        mixins: [ui],
        props: ["application"],
        data() {
            return {
                opened: false,
                isPlaying: false,
                playerVars: {
                    autoplay: 1
                }
            };
        },
        computed: {
            topImg() {
                return this.application.resources.filter(resource => resource.img !== undefined)[0]["img"];
            },
            videoId() {
                let videos = this.application.resources.filter(resource => resource.videoId !== undefined);
                if (videos.length > 0 && videos[0]["videoId"] !== undefined) {
                    return this.application.resources.filter(resource => resource.videoId !== undefined)[0]["videoId"];
                }
            },
        },
        methods: {
            background(color) {
                if (color === "blue") {
                    return "background: rgba(76, 85, 210, 0.75)";
                } else if (color === "green") {
                    return "background: rgba(56, 145, 50, 0.75)";
                } else if (color === "red") {
                    return "background: rgba(176, 75, 80, 0.75)";
                } else if (color === "purple") {
                    return "background: rgba(155, 75, 155, 0.75)";
                } else if (color === "gray") {
                    return "background: rgba(75, 75, 75, 0.75)";
                }
                return "background: rgba(255, 255, 255, 0.75)";
            },
            playVideo(videoId) {
                this.$refs[videoId][0].player.playVideo();
            },
            pauseVideo(videoId) {
                this.$refs[videoId][0].player.pauseVideo();
            },
            stopVideo(videoId) {
                this.$refs[videoId][0].player.stopVideo();
            },
            close() {
                if (this.videoId) {
                    this.pauseVideo(this.videoId);
                }
                this.opened = false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .expand {
        transition: 0.3s all ease-in-out;
        transform: scale(1.02);
        z-index: 2;
    }
</style>
