<template>
    <div id="readList">
        <div class="containerHomeLeft">
            <div class="title">
                <h3>Vos listes de lecture  - France Culture</h3>
                <hr>
            </div>
            <div class="containerRecommandation">
                <h4>A écouter plus tard</h4>
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
            <div class="containerRecommandation">
                <h4>Veille société</h4>
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
        name: "readList"
    }
</script>

<style lang="scss" scoped>
    #readList {
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
