<template>
  <v-row>
    <v-col sm="3">
      <v-avatar
        :tile="avatarTile"
        :size="avatarSize"
        color="grey lighten-4"
      >
        <img
          :src="require('@/assets/img/me/me.png')"
          alt="avatar"
        >
      </v-avatar>
    </v-col>
    <v-col sm="9">
      <v-row>
        <h1 class="display-3 font-weight-medium px-3">
          Gioele Crispo
        </h1>
      </v-row>
      <v-row>
        <h1 class="subheading font-weight-thin mb-3 px-3">
          Machine Learning engineer
        </h1>
      </v-row>
      <v-row>
        <v-divider />
      </v-row>
      <v-row>
        <span class="font-weight-thin mb-3 px-3">Una breve descrizione che abbia un significato abbastanza intenso.</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: "UserIntro",
    components: {},
    props: {},
    data() {
        return {
            avatarTile: false,
            avatarSize: 192
        };
    },
    computed: {}
};
</script>

<style lang="scss" scoped>

</style>
