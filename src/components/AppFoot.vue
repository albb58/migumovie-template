<template>
    <footer class="app-footer">
        <div class="main-menu" @click="show">
            <ul>
                <router-link tag="li" :to="item.path" class="menu-list"
                     v-for = "item in menu" :key = "item.id">
                    <a>
                        <img v-if="isShow" :src ="item.imgUrl"/>
                        <img v-else :src ="item.imgActive"/>
                        <p>{{ item.title }}</p>
                    </a>
                </router-link>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            menu: [
                {id: 0, imgUrl: require('../images/mov.png'), imgActive: require('../images/mov-active.png'), title: "看片", path: '/home'},
                {id: 1, imgUrl: require('../images/buy.png'), imgActive: require('../images/buy-active.png'), title: "购票", path: '/ticket'},
                {id: 2, imgUrl: require('../images/find.png'), imgActive: require('../images/find-active.png'), title: "发现", path: '/find'},
                {id: 3, imgUrl: require('../images/mine.png'), imgActive: require('../images/mine-active.png'), title: "我的", path: '/mine'},
            ],
            isShow: true
        }
    },
    methods: {
        show(){
        }
    }
}
</script>

<style lang="scss">
    .app-footer {
        position: fixed;
        bottom: 0;
        z-index: 999;
        .main-menu {
            background-color: #fff;
            width: 100%;
            height: 1.333333rem;
            border-top: 1px solid #dadada;
            ul {
                display: flex;
                .menu-list {
                    text-align: center;
                    width: 2.5rem;
                    a {
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                        padding: 5px 0;
                        img {
                            width: .64rem;
                        }
                        p {
                            line-height: 0.5;
                            font-size: .32rem;
                        }
                    }
                }
            }
            .router-link-active {
                p {
                    color: #F74444;
                }
            }
        }
    }
</style>


