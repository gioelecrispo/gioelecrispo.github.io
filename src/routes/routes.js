// APP
import AppStructure from "@/pages/Layout/AppStructure";
// Me
import Me from "@/pages/Me/Me";
import Home from "@/pages/Me/Home";
import AboutMe from "@/pages/Me/AboutMe";
import Works from "@/pages/Me/Works";
import Hobbies from "@/pages/Me/Hobbies";
import Goals from "@/pages/Me/Goals";
import Articles from "@/pages/Me/Articles";
import ArticlesList from "@/pages/Me/ArticlesList";
import ArticleDetails from "@/pages/Me/ArticleDetails";
import Projects from "@/pages/Me/Projects";

const routes = [
    {
        path: "/",
        name: "AppStructure",
        component: AppStructure,
        redirect: "me",
        children: [
            {
                path: "me",
                name: "Me",
                component: Me,
                redirect: "me/home",
                children: [
                    {
                        path: "home",
                        name: "Home",
                        component: Home,
                        meta: {
                            toolbarTitle: "Home",
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
                        path: "hobbies",
                        name: "Hobbies",
                        component: Hobbies,
                        meta: {
                            toolbarTitle: "Hobbies",
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
                        path: "goals",
                        name: "Goals",
                        component: Goals,
                        meta: {
                            toolbarTitle: "Goals",
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
                        path: "aboutme",
                        name: "AboutMe",
                        component: AboutMe,
                        meta: {
                            toolbarTitle: "About Me",
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
                                    toolbarTitle: "Article Details",
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
                    }
                ]
            }
        ]
    }
];

export default routes;
