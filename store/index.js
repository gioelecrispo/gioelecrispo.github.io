export const state = () => ({
    appToolbarTitle: "",
    showAppToolbar: false,
    showAppToolbarImage: false,
    showAppNavigationDrawer: false,
    showAppFooter: false,
    showContentToolbar: false,
    showContentHeader: false,
    showContentFooter: false,
})

export const mutations = {
    setProperty (state, { property, value }) {
        state[property] = value;
    }
}
