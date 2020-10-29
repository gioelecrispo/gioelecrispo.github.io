<template>
  <v-row align="center">
    <v-col
      cols="auto"
      class="pa-1"
    >
      <v-img
        max-height="50"
        max-width="50"
        :src="skill.avatar"
      />
    </v-col>
    <v-col class="py-0 pl-3 pr-0">
      <v-row align="center">
        <v-col
          class="pb-0"
          v-html="skill.title"
        />
        <v-col
          v-if="skill.value"
          class="pb-0"
        >
          <v-progress-linear
            rounded
            :value="skill.value"
            :color="getColor(skill.value)"
            height="10"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="pt-1"
          v-html="skill.subtitle"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
    name: "Skill",
    components: {},
    props: ["skill"],
    data() {
        return {
            colors: [

            ]
        };
    },
    computed: {},
    methods: {
        getColor(value) {
            return "success";
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
