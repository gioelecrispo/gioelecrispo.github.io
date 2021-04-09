export default ({ store, route, redirect }) => {
    // Check if user is connected first

    // Get authorizations for matched routes (with children routes too)
    const meta = route.meta[0]
    for (const [property, value] of Object.entries(meta)) {
        store.commit('setProperty', { property, value })
    }
}
