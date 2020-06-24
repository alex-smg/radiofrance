<template>
    <div id="navbar">
       <!-- <div>
            <img src="../../assets/logo.svg" alt="logo radiofrance"/>
        </div>-->
        <div class="firstHeader"></div>
        <div class="secondHeader"></div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style lang="scss" scoped>
    #navbar {
        /*width: 50%;*/
        display: block;
        margin: 0px auto 73px auto;
        .firstHeader {
            height: 30px;
            width: 100%;
            background: #161616;
        }
        .secondHeader{
            height: 50px;
            width: 100%;
            background: #7E2288;
        }
        div {
            img {
                width: 100%;
            }
        }
    }
</style>
