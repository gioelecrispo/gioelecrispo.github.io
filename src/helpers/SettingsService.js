import i18n from "@/plugins/i18n.js";
import store from "@/store";

/**
 * - Description -
 * SettingsService contains all the methods that allows the webapp to adjust settings.
 *
 */
export default {
    name: "SettingsService",
    save: save,
    discard: discard,
};

function discard() {
    // Retrieve settings from Global State
    let settings = store.getters["UserState/getSettings"];
    // Restore the settings to the previous value
    settings = restoreToPrevious(settings);
    // Save to Global state
    store.dispatch("UserState/setSettings", settings);
}

function save() {
    // Retrieve settings from Global State
    let settings = store.getters["UserState/getSettings"];
    // Set the settings to the current value
    settings = setToCurrent(settings);
    // Save to the Global State the changes
    store.dispatch("UserState/setSettings", settings);
}


function setToCurrent(settings) {
    settings.general.language.previous = settings.general.language.current;
    settings.general.theme.previous = settings.chatbot.theme.current;
    i18n.locale = settings.general.language.current.locale;
    return settings;
}

function restoreToPrevious(settings) {
    settings.general.language.current = settings.general.language.previous;
    settings.general.theme.current = settings.general.theme.previous;
    i18n.locale = settings.general.language.previous.locale;
    return settings;
}
