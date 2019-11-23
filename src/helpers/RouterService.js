// Setting Vue Router

// Import
import router from "@/routes/router";

/**
 * - Description -
 * RouterService is a helper class that provides some facilities to navigate
 * the app. Its main aim is to contains in a single place all the routes methods,
 * in order to keep the maintainability of the entire routing system.
 *
 * - Usage -
 * Using RouterService
 *
 * import RouterService from '@/helpers/RouterService.js'
 * RouterService.goTo(path, params);
 */
export default {
    name: "RouterService",
    goTo(path) {
        router.push(path);
    },
};

