<template>
    <div id="home">
        <div class="containerHomeLeft">
            <div class="title">
                <h3>Des programmes</h3>
                <hr>
            </div>
            <div class="containerRecommandation">
                <h4>Selon vos favoris</h4>
                <ul>
                    <li>
                        <div>
                            <img src="../assets/test3.png">
                        </div>
                        <p>Umla</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/test2.png">
                        </div>
                        <p>Fête de la musique</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/test.png">
                        </div>
                        <p>Rap français</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/test.png">
                        </div>
                        <p>Rap français</p>
                    </li>
                </ul>
            </div>
            <div class="containerRecommandation">
                <h4>Selon vos favoris</h4>
                <ul>
                    <li>
                        <div>
                            <img src="../assets/test3.png">
                        </div>
                        <p>Umla</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/test2.png">
                        </div>
                        <p>Fête de la musique</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/test.png">
                        </div>
                        <p>Rap français</p>
                    </li>
                </ul>
            </div>

        </div>
        <aside>
            <div class="title">
                <h3>Les plus consultés</h3>
                <hr>
            </div>
        </aside>

    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style lang="scss" scoped>
    #home {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 30px auto 0 auto;
        .title {
            width: 100%;
        }
        .containerHomeLeft {
            width: 65%;
            .containerRecommandation {
                margin-top: 30px;
                h4 {
                    margin-bottom: 5px;
                }
                ul {
                    li {
                        list-style: none;
                        display: inline-block;
                        margin-right: 30px;
                        p {
                            text-align: center;
                            margin-top: 10px;
                        }
                    }
                }
            }

        }
        aside {
            width: 30%;
        }
    }
</style>
