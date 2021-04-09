export const state = () => ({
    appToolbarTitle: "default",
    showAppToolbar: true,
    showAppToolbarImage: false,
    showAppNavigationDrawer: true,
    showAppFooter: true,
    showContentToolbar: false,
    showContentHeader: false,
    showContentFooter: false,
})

export const mutations = {
    setProperty (state, { property, value }) {
        state[property] = value
        console.log("STATE 2", state[property])
    }
}
