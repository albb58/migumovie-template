<template>
    <header class="app-header">
        <div class="head">
            <div class="head_left">
                <a>
                    <img src="../../images/wallet.png">
                    <span>0元</span>
                </a>
            </div>
            <div class="head_right">
                <a>
                    <img src="../../images/history-btn.png">
                </a>
                <a>
                    <img src="../../images/search_grey.png">
                </a>
            </div>
        </div>
        <app-header-nav></app-header-nav>
    </header>
</template>

<script>
import AppHeaderNav from '@component/Home/AppHeaderNav';
export default {
    components:{
        AppHeaderNav
    }
}
</script>

<style lang="scss">
    .app-header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #fff;
        z-index: 100;
        .head {
            height: 41px;
            padding: 8px 12px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            .head_left {
                a {
                    display: inline-block;
                    img {
                        margin-right: 5px;
                        width: .64rem;
                    }
                    span {
                        padding-top: 5px;
                        font-size: .4rem;
                        display: inline-block;
                        color: #000;
                        position: absolute;
                        top: 8px;
                    }
                }
            }
            .head_right {
                a {
                    img {
                        width: .64rem;
                        margin-left: .4rem
                    }
                }
            }
        }
    }
</style>


