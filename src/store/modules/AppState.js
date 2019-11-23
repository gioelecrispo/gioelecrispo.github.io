
const getDefaultState = function() {
    return {
        // Initial state
        hasSplashed: false, // SplashScreen has been executed
        leftNavDrawer: false, // Left Navigation Drawer is opened (true) or not (false)
        leftTempNavDrawer: true, // Left Temporary Navigation Drawer is opened (true) or not (false)
        globalNotificationsPanel: false, // Global Notification Panel is opened (true) or not (false)
        availableLocales: [
            {
                name: "English",
                locale: "en",
                image: require("@/assets/img/settings/flags/en.png"),
            },
            {
                name: "Italiano",
                locale: "it",
                image: require("@/assets/img/settings/flags/it.png"),
            }
        ],
    };
};

const state = getDefaultState();


const getters = {
    hasSplashed: (state) => {
        return state.hasSplashed;
    },
    isLeftNavDrawer: (state) => {
        return state.leftNavDrawer;
    },
    isLeftTempNavDrawer: (state) => {
        return state.leftTempNavDrawer;
    },
    getAvailableLocales: (state) => {
        return state.availableLocales;
    },
};

const actions = {
    resetState ({ commit }) {
        commit("resetState");
    },
    setHasSplashed({commit}, hasSplashed) {
        commit("setHasSplashed", hasSplashed);
    },
    setLeftNavDrawer({commit}, leftNavDrawer) {
        commit("setLeftNavDrawer", leftNavDrawer);
    },
    setLeftTempNavDrawer({commit}, leftTempNavDrawer) {
        commit("setLeftTempNavDrawer", leftTempNavDrawer);
    },
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState());
    },
    setHasSplashed(state, hasSplashed) {
        state.hasSplashed = hasSplashed;
        // console.log('AppState -> setHasSplashed: ' + state.hasSplashed);
    },
    setLeftNavDrawer(state, leftNavDrawer) {
        state.leftNavDrawer = leftNavDrawer;
        // console.log('AppState -> setLeftTempNavDrawer: ' + state.leftNavDrawer);
    },
    setLeftTempNavDrawer(state, leftTempNavDrawer) {
        state.leftTempNavDrawer = leftTempNavDrawer;
        // console.log('AppState -> setLeftTempNavDrawer: ' + state.leftTempNavDrawer);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
