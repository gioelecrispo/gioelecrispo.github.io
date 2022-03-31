<template>
    <v-card dark width="100%" elevation="0" outlined color="transparent">
        <v-row align="center" justify='center'>
            <v-col style='justify-content: center;'
                   cols="12"
                   md="auto"
            >
                <PersonalAvatar class='fade-in-fwd'></PersonalAvatar>
            </v-col>
            <v-col>
                <v-row justify="center">
                    <div class="box mb-3">
                        <div class="title">
                            <span class="block"></span>
                            <h1 class='display-2'>Gioele Crispo<span></span></h1>
                        </div>
                        <v-divider/>
                        <div class="role mt-1">
                            <div class="block"></div>
                            <span class="overline pt-1 my-3 px-3 text-focus-in" style="line-height: 1.1;">
                    SOFTWARE ENGINEERING, ARTIFICIAL INTELLIGENCE, WEB</span>
                        </div>
                    </div>
                </v-row>
                <!--<div id=flip>
                    <div><div>SOFTWARE ENGINEERING</div></div>
                    <div><div>ARTIFICIAL INTELLIGENCE</div></div>
                    <div><div>WEB DEVELOPMENT</div></div>
                </div>-->
                <!--</v-row>-->
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import ui from "../mixins/ui";
    import PersonalAvatar from '~/components/PersonalAvatar'

    export default {
        name: "UserIntro",
        components: { PersonalAvatar },
        mixins: [ui],
        props: {},
        data() {
            return {};
        },
        computed: {},
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
#flip {
    height:50px;
    overflow:hidden;
}

#flip > div > div {
    color:#fff;
    padding:4px 12px;
    height:45px;
    margin-bottom:45px;
    display:inline-block;
}

#flip div:first-child {
    animation: show 5s linear infinite;
}

#flip div div {
    background:#42c58a;
}
#flip div:first-child div {
    background:#4ec7f3;
}
#flip div:last-child div {
    background:#DC143C;
}

@keyframes show {
    0% {margin-top:-270px;}
    5% {margin-top:-180px;}
    33% {margin-top:-180px;}
    38% {margin-top:-90px;}
    66% {margin-top:-90px;}
    71% {margin-top:0px;}
    99.99% {margin-top:0px;}
    100% {margin-top:-270px;}
}




.container {
    width: 100%;
    height: 100vh;
    background: #232323;

    display: flex;
    justify-content: center;
    align-items: center;

    .box {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .title {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            height: 50px;

            .block {
                width: 0;
                height: inherit;
                background: var(--v-primary-base);
                position: absolute;
                animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
                display: flex;
            }

            h1 {
                margin: auto;
                color: white;
                font-size: 32px;
                -webkit-animation: mainFadeIn 2s forwards;
                -o-animation: mainFadeIn 2s forwards;
                animation: mainFadeIn 2s forwards;
                animation-delay: 1.6s;
                opacity: 0;
                display: flex;
                align-items: baseline;
                position: relative;

                span {
                    width: 0;
                    height: 0;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;

                    background: var(--v-primary-base);
                    -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
                    animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
                    animation-delay: 2s;
                    margin-left: 5px;
                    margin-top: -10px;
                    position: absolute;
                    bottom: 13px;
                    right: -12px;
                }
            }
        }

        .role {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            height: 30px;
            margin-top: -10px;

            .block {
                width: 0%;
                height: inherit;
                background: var(--v-primary-darken2);
                position: absolute;
                animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
                animation-delay: 2s;
                display: flex;
            }

            p, span {
                animation: secFadeIn 2s forwards;
                animation-delay: 3.2s;
                opacity: 0;
                font-weight: 400;
                color: white;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 5px;
            }
        }
    }
}



@keyframes mainBlock {
    0% {
        width: 0;
        left: 0;

    }
    50% {
        width: 100%;
        left: 0;

    }
    100% {
        width: 0;
        left: 100%;
    }
}

@keyframes secBlock {
    0% {
        width: 0%;
        left: 0;

    }
    50% {
        width: 100%;
        left: 0;

    }
    100% {
        width: 0;
        left: 100%;
    }
}

@keyframes mainFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


@keyframes popIn {
    0% {
        width: 0px;
        height: 0px;
        background: var(--v-primary-base);
        border: 0px solid #ddd;
        opacity: 0;
    }
    50% {
        width: 10px;
        height: 10px;
        background: var(--v-primary-base);
        opacity: 1;
        bottom: 45px;
    }
    65% {
        width: 15px;
        height: 7px;
        bottom: 0;
    }
    80% {
        width: 10px;
        height: 10px;
        bottom: 20px
    }
    100% {
        width: 7px;
        height: 7px;
        background: var(--v-primary-base);
        border: 0px solid #222;
        bottom: 13px;

    }
}

@keyframes secFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
}




footer {
    width: 350px;
    height: 80px;
    background: var(--v-primary-base);
    position: absolute;
    right: 0;
    bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: top 0.8s forwards;
    animation-delay: 4s;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #232323;

        i {
            margin-right: 25px;
            font-size: 22px;
            color: #232323;
            animation: icon 2s forwards;
            animation-delay: 4s;
            opacity: 0;
        }
    }
}

@keyframes top {
    0% {
        opacity: 0;
        bottom: -80px
    }
    100% {
        opacity: 1;
        bottom: 0;
    }
}

@keyframes icon {
    0% {
        opacity: 0;
        transform: scale(0.0);
    }
    50% {
        opacity: 1;
        transform: scale(1.3) rotate(-02deg);
    }
    100% {
        opacity: 1;
        bottom: 0;
    }
}
</style>
