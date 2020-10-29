<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card
        v-if="githubUserInfo"
        class="mx-auto"
        max-width="500"
        outlined
        shaped
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-list color="transparent">
            <v-list-item three-line>
              <v-list-item-content>
                <v-row
                  align="center"
                  class="mb-4 pl-3"
                >
                  <v-icon
                    small
                    class="mr-3"
                  >
                    mdi-github-circle
                  </v-icon>
                  <span class="overline">Github</span>
                </v-row>
                <v-list-item-title class="headline mb-1">
                  {{ githubUserInfo.login }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span>{{ githubUserInfo.location }}</span><span class="mx-2">|</span>
                  <span class="overline">{{ githubUserInfo.company }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle class="py-0">
                  <v-row
                    align="center"
                    class="pl-3"
                  >
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-briefcase
                    </v-icon>
                    Projects: {{ githubUserInfo.public_repos }}
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-0">
                  <v-row
                    align="center"
                    class="pl-3"
                  >
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-account-tie
                    </v-icon>
                    Followers: {{ githubUserInfo.followers }}
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-0">
                  <v-row
                    align="center"
                    class="pl-3"
                  >
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-account-tie
                    </v-icon>
                    Following: {{ githubUserInfo.following }}
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-0">
                  <v-row
                    align="center"
                    class="pl-3"
                  >
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-card-text-outline
                    </v-icon>
                    {{ githubUserInfo.bio }}
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-row
            align="center"
            class="mx-3"
            color="transparent"
          >
            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="require('@/assets/img/me/me.png')" />
            </v-avatar>
          </v-row>
        </div>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="12"
            sm="6"
            md="6"
          >
            <Project :project="project" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import Project from "../../components/Project";

const axios = require("axios");

export default {
    name: "Projects",
    components: {Project},
    props: {},
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters("DataState", {
            githubUserInfo: "getGithubUserInfo",
            projects: "getProjects"
        }),
    },
    methods: {

    }
};
</script>
