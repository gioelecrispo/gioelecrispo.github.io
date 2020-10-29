<template>
  <v-container id="app-content">
    <ContentToolbar v-if="$route.meta.showContentToolbar" />
    <v-row class="pa-0 ma-0">
      <ContentBody />
    </v-row>
    <ContentFooter v-if="$route.meta.showContentFooter" />
  </v-container>
</template>

<script>
import ContentHeader from "@/pages/Layout/ContentHeader";
import ContentToolbar from "@/pages/Layout/ContentToolbar";
import ContentBody from "@/pages/Layout/ContentBody";
import ContentFooter from "@/pages/Layout/ContentFooter";

export default {
    name: "AppContent",
    components: {
        ContentHeader,
        ContentToolbar,
        ContentBody,
        ContentFooter,
    },
    methods: {
        tabletAndDown() {
            return this.$vuetify.breakpoint.name === "xs" ||
                    this.$vuetify.breakpoint.name === "sm";
        },
    }
};
</script>

<style lang="scss" scoped>
</style>

