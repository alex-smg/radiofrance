<template>
    <div id="navStatus">
        <div class="containerNav">
            <div class="profil">
                <div>
                    <div class="containerImg">

                    </div>
                </div>
                <div>
                    <h3>{{}}</h3>
                    <button>Option</button>
                </div>
            </div>
            <div class="contentNav">
                <button class="tallBtn">Mes Statuts</button>
                <button class="tallBtn">Statuts de la communauté</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navStatus"
    }
</script>

<style lang="scss" scoped>
    #navStatus {
        width: 25%;
        background-color: #F4F4F4;
        height: 100vh;
        position: fixed;
        top: 80px;
        display: flex;
        button {
            background-color: transparent;
            border: none;
            transition: 0.5s;
            cursor: pointer;
            &:hover {
                color: #67046B;
            }
        }
        .containerImg {
            width: 100px;
            height: 100px;
            background-color: #FFFFFF;
            border-radius: 80px;
        }
        .containerNav {
            margin: 130px auto;
            .profil {
                display: flex;
                div {
                    &:last-child {
                        margin: auto;
                    }
                }
            }
        }
        .contentNav {
            margin-top: 50px;
            button {
                display: block;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 30px;
            }
        }
        .tallBtn {

        }
    }

</style>
