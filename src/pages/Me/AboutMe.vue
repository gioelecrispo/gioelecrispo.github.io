<template>
  <v-container
    grid-list-md
    text-xs-center
    fluid
    pa-0
  >
    <!-- TOPICS -->
    <v-container fluid>
      <v-row
        row
        wrap
      >
        <v-col>
          <v-row>
            <v-col
              v-for="topic in topics"
              :key="topic.id"
              xl4
              lg4
              md4
              sm6
              xs12
            >
              <v-card>
                <v-img
                  :src="topic.img"
                  height="350px"
                />
                <v-card-title
                  primary-title
                  flat
                  tile
                >
                  <v-row text-xs-center>
                    <v-col>
                      <div>
                        <div class="headline">
                          {{ topic.name }}
                        </div>
                        <span class="grey--text">{{ topic.description }}</span>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-title>

                <v-card-actions>
                  <v-btn
                    flat
                    color="primary"
                    @click="$router.push( topic.path )"
                  >
                    See more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row mt-5>
        <v-card class="elevation-0 transparent mx-auto">
          <v-list
            two-line
            subheader
          >
            <v-subheader>Contacts</v-subheader>
            <template
              v-for="(contact, index) in contacts"
              @click=""
            >
              <v-divider
                v-if="contact.divider"
                :key="index"
                :inset="contact.inset"
              />
              <v-list-item
                v-else
                :key="contact.title"
                @click=""
              >
                <v-list-item-avatar tile>
                  <v-img :src="contact.avatar" />
                </v-list-item-avatar>
                <!-- <v-list-item-avatar>
                                     <v-icon
                                             :class="[contact.iconClass]"
                                             v-text="contact.icon"
                                     ></v-icon>
                                 </v-list-item-avatar>-->

                <v-list-item-content>
                  <v-list-item-title v-text="contact.title" />
                  <v-list-item-subtitle v-text="contact.subtitle" />
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">
                      mdi-information
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import UserIntro from "@/components/UserIntro";

export default {
    name: "AboutMe",
    components: {
        UserIntro
    },
    props: {},
    data() {
        return {
            topics: [
                {
                    id: "works",
                    name: "Works and Skills",
                    description: "A resume of my skills and my curriculum vitae. You can find all the information about my works and occupations.",
                    img: require("@/assets/img/topics/works.jpg"),
                    path: "/me/cv"
                },
                {
                    id: "hobbies",
                    name: "Hobbies and Passions",
                    description: "Let's discover my hobbies!",
                    img: require("@/assets/img/topics/hobbies.jpg"),
                    path: "/me/hobbies"
                },
                {
                    id: "goals",
                    name: "Future Goals",
                    description: "A look to the future?",
                    img: require("@/assets/img/topics/goals.jpg"),
                    path: "/me/goals"
                }
            ],
            contacts: [
                {
                    avatar: require("@/assets/img/contacts/email.png"),
                    badge: "mdi-book",
                    title: "E-mail",
                    subtitle: "crispogioele@gmail.com"
                },
                {divider: true, inset: true},
                {
                    avatar: require("@/assets/img/contacts/facebook.png"),
                    badge: "mdi-book",
                    title: "Facebook",
                    subtitle: "Gioele Crispo"
                },
                {divider: true, inset: true},
                {
                    avatar: require("@/assets/img/contacts/linkedin.png"),
                    badge: "mdi-book",
                    title: "LinkedIn",
                    subtitle: "https://www.linkedin.com/in/gioele-crispo/"
                },
                {divider: true, inset: true},
                {
                    avatar: require("@/assets/img/contacts/skype.png"),
                    badge: "mdi-book",
                    title: "Skype",
                    subtitle: "gioele.crispo"
                },
            ],
            email: ["joe.crisp7@gmail.com", "crispogioele@gmail.com"],
            cellNumber: "+39 3929646139",
            location: "Salerno, 84100, Italy",
        };
    },
    computed: {}
};
</script>
