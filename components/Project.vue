<template>
    <div class="fade-in-fwd">
        <v-hover v-slot="{ hover }">
            <v-card
                    tile
                    class="mx-auto"
                    color="transparent"
                    @click="opened = !opened"
                    :elevation="hover ? 12 : 0"
                    :class="`${hover ? 'expanded' : ''}`"
            >
                <v-img
                        :src="topImg"
                        aspect-ratio="1.3"
                >
                    <v-fade-transition>
                        <v-container fluid fill-height
                                     class="transition-fast-in-fast-out v-card--reveal white--text"
                                     style="height: 100%;"
                                     :style="background(project.color)"
                        >
                            <v-row justify="center" align="center">
                                <v-container>
                                    <v-row justify="center" align="center"
                                           class="overline title font-weight-medium ma-2">
                                        <h1 class="text-center" style="letter-spacing: 0; line-height: 0.9;">
                                            {{project.name}}
                                        </h1>
                                    </v-row>
                                    <v-row>
                                        <v-divider color="white" class="mx-4 my-2"></v-divider>
                                    </v-row>
                                    <v-row justify="center" align="center"
                                           class="overline subtitle-2 font-weight-light ma-2">
                                        <h4 class="text-center" style="line-height: 0.9;">{{project.area}}</h4>
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
                    <v-row justify="end" align="start">
                        <v-col cols="auto" class="pa-0 pr-3">
                            <v-btn elevation="0" small
                                   icon
                                   @click="close()">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="start" class="px-3" style="margin-top: -25px!important;">
                        <v-col><h2 class="text-center">{{project.name}}</h2></v-col>
                    </v-row>
                    <v-row :class="mobile() ? '' : 'pa-2'">
                        <v-col class="pa-0" cols="12" md="6">
                            <v-carousel
                                    :cycle="!isPlaying"
                                    @change="pauseVideo(videoId)"
                                    height="400"
                                    hide-delimiter-background
                                    show-arrows-on-hover
                            >
                                <div v-for="(resource, i) in project.resources" :key="i">
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
                            <p class="pb-2">{{ project.description }}</p>

                            <h3 class="mt-4 mb-1">Project details</h3>
                            <p class="py-2 mb-0"><b>Area:</b> {{project.area}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Technologies:</b> {{project.technologies}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Group:</b> {{project.group}}</p>
                            <v-divider></v-divider>
                            <p class="py-2 mb-0"><b>Date:</b> {{project.date}}</p>
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
        name: "Project",
        components: {},
        mixins: [ui],
        props: ["project"],
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
                return this.project.resources.filter(resource => resource.img !== undefined)[0]["img"];
            },
            videoId() {
                let videos = this.project.resources.filter(resource => resource.videoId !== undefined);
                if (videos.length > 0 && videos[0]["videoId"] !== undefined) {
                    return this.project.resources.filter(resource => resource.videoId !== undefined)[0]["videoId"];
                }
                return undefined;
            },
        },
        methods: {
            background(color) {
                if (color === "blue") {
                    return "background: rgba(76, 85, 210, 0.75)";
                } else if (color === "light blue") {
                    return "background: rgba(0, 191, 205, 0.75)";
                } else if (color === "dark blue") {
                    return "background: rgba(0, 0, 55, 0.75)";
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
                if (videoId && this.$refs[videoId]) {
                    this.$refs[videoId][0].player.playVideo();
                }
            },
            pauseVideo(videoId) {
                if (videoId && this.$refs[videoId]) {
                    this.$refs[videoId][0].player.pauseVideo();
                }
            },
            stopVideo(videoId) {
                if (videoId && this.$refs[videoId]) {
                    this.$refs[videoId][0].player.stopVideo();
                }
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
    .expanded {
        transition: 0.3s all ease-in-out;
        transform: scale(1.02);
    }
</style>
