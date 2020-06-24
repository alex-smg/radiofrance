<template>
    <div id="createStatus">
        <div class="title">
            <h3>Créer un statut</h3>
            <hr>
        </div>
        <div>
            <h4>Je recherche</h4>
            <ul>
                <li>
                    <button class="btn_underline">Une émission</button>
                </li>
                <li>
                    <button class="btn_underline">Un podcast</button>
                </li>
                <li>
                    <button class="btn_underline">Un article</button>
                </li>
            </ul>
        </div>
        <div>
            <h4>A propos de</h4>
            <ul>
                <li>
                    <button>Rap us</button>
                </li>
                <li>
                    <button>Rap Fr</button>
                </li>
                <li>
                    <button>Actualité</button>
                </li>
            </ul>
        </div>
        <div>
            <button>Créer un status</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "createStatus",
        data() {
            return{
                status: {
                    type: '',
                    categorie: '',
                    phrasing: '',
                }
            }
        },
        methods: {
            selectType: function (event, type) {
                this.status.type = type;
            },
            selectCategorie: function (event, categorie) {
                this.categorie.type = categorie;
            },
            createPhrasing: function () {
                this.status.phrasing = 'Je recherche ' + this.status.type + ' sur ' + this.status.categorie
            }

        }
    }
</script>

<style lang="scss" scoped>
    #createStatus {
        ul {
            display: flex;
            width: 70%;
            justify-content: space-between;
            li {
                list-style: none;
                width: 30%;
                button {
                    background: transparent;
                    border: none;
                    border-bottom: 2px solid #161616;
                    width: 100%;
                    text-align: left;

                }
            }
        }
        .title {
            width: 100%;
            margin-bottom: 10px;

            h3 {
                margin-bottom: 15px;
                font-weight: 200;
                text-transform: uppercase;
            }
        }
    }

</style>
