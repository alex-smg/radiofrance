<template>
    <div id="fav">
        <div class="containerHomeLeft">
            <div class="title">
                <h3>Vos favoris - France Culture</h3>
                <hr>
            </div>
            <div class="containerRecommandation">
                <ul>
                    <li>
                        <div>
                            <img src="../../assets/test3.png">
                        </div>
                        <p>Umla</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/test2.png">
                        </div>
                        <p>Fête de la musique</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/test.png">
                        </div>
                        <p>Rap français</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/test.png">
                        </div>
                        <p>Rap français</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'fav'
    }
</script>

<style lang="scss" scoped>
    #fav {
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

</style>
