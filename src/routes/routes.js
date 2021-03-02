// APP
import AppStructure from "@/layout/AppStructure";
// Me
import Home from "@/pages/Home";
import Works from "@/pages/Works";
import Articles from "@/pages/Articles";
import ArticlesList from "@/pages/ArticlesList";
import ArticleDetails from "@/pages/ArticleDetails";
import Projects from "@/pages/Projects";
import Applications from "@/pages/Applications";


const routes = [
    {
        path: "/",
        name: "AppStructure",
        component: AppStructure,
        redirect: "home",
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
                meta: {
                    toolbarTitle: "Home",
                    showNavigationDrawer: true,
                    showContentToolbar: false,
                    showContentHeader: true,
                    showContentFooter: false,
                    showAppToolbar: false,
                    showAppToolbarImage: false,
                    showAppFooter: true
                }
            },
            {
                path: "cv",
                name: "Works",
                component: Works,
                meta: {
                    toolbarTitle: "Works",
                    showNavigationDrawer: true,
                    showContentToolbar: false,
                    showContentHeader: false,
                    showContentFooter: false,
                    showAppToolbar: true,
                    showAppToolbarImage: false,
                    showAppFooter: true
                }
            },
            {
                path: "projects",
                name: "Projects",
                component: Projects,
                meta: {
                    toolbarTitle: "Projects",
                    showNavigationDrawer: true,
                    showContentToolbar: false,
                    showContentHeader: false,
                    showContentFooter: false,
                    showAppToolbar: true,
                    showAppToolbarImage: false,
                    showAppFooter: true
                }
            },
            {
                path: "applications",
                name: "Applications",
                component: Applications,
                meta: {
                    toolbarTitle: "Applications",
                    showNavigationDrawer: true,
                    showContentToolbar: false,
                    showContentHeader: false,
                    showContentFooter: false,
                    showAppToolbar: true,
                    showAppToolbarImage: false,
                    showAppFooter: true
                }
            },
            {
                path: "articles",
                name: "Articles",
                component: Articles,
                meta: {
                    toolbarTitle: "Articles",
                    showNavigationDrawer: true,
                    showContentToolbar: false,
                    showContentHeader: false,
                    showContentFooter: false,
                    showAppToolbar: true,
                    showAppToolbarImage: false,
                    showAppFooter: true
                },
                children: [
                    {
                        path: "",
                        name: "ArticleList",
                        component: ArticlesList,
                        meta: {
                            toolbarTitle: "Articles",
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppToolbarImage: false,
                            showAppFooter: true
                        }
                    },
                    {
                        path: ":articleId",
                        name: "ArticleDetails",
                        component: ArticleDetails,
                        props: true,
                        meta: {
                            toolbarTitle: "Article",
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppToolbarImage: true,
                            showAppFooter: true
                        }
                    }
                ]
            },
        ]
    }
];

export default routes;
