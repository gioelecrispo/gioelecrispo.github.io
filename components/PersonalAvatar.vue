<template>
    <v-avatar :tile="tile"
              :size="size"
              :class='tile ? "" : "outline-border"'
    >
        <img
            :src="require('@/assets/img/me/me.jpg')"
            alt="avatar"
        >
    </v-avatar>
</template>

<script>
    export default {
        name: 'PersonalAvatar',
        components: {},
        props: {
            tile: {
                type: Boolean,
                default: false
            },
            size: {
                type: Number,
                default: 144
            }
        },
        created() {
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
.outline-border {
    outline: 6px solid var(--v-primary-base);
}
</style>
