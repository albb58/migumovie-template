<template>
    <nav class="nav-bar">
        <div class="nav-list">
            <ul>
                <li v-for="item in navs" :key="item.id">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            navs: [
                {id:0, title: "推荐"},
                {id:1, title: "免费看片"},
                {id:2, title: "影单"},
                {id:3, title: "小视频"},
                {id:4, title: "影评"}
            ]
        }
    }
}
</script>
<style lang="scss">
    .nav-bar {
        width: 100%;
        .nav-list {
            width: 100%;
            background-color: yellow;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                li {
                    width: 1.955413rem;
                    text-align: center;
                    padding: 8px 0 12px;
                    font-size: .373333rem;
                }
                .nav-active {
                    border: 2px solid #f74444;
                    color: #f74444;
                }
            }
        }
    }
</style>


