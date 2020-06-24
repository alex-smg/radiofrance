<template>
    <div id="profilLeft">
        <div class="containerProfilLeft">
            <div class="profil">
                <div>
                    <div class="containerImg">
                    </div>
                </div>
                <div class="name">
                    <h3>{{$store.state.userSession.firstname + ' ' + $store.state.userSession.lastname}}</h3>
                    <button class="btn_secondary">Option</button>
                </div>
            </div>
            <div class="cta">
                <ul>
                    <li>
                        <button class="btn_secondary" :class="page === 'paramsUser' ? 'select' : ''" @click="$emit('change-profil', 'paramsUser')">Paramètres utilisateur</button>
                    </li>
                    <li>
                        <button class="btn_secondary" :class="page === 'bookmark' ? 'select' : ''" @click="$emit('change-profil', 'bookmark')">Vos favoris</button>
                    </li>
                    <li>
                        <button class="btn_secondary" :class="page === 'readList' ? 'select' : ''" @click="$emit('change-profil', 'readList')">Vos listes de lecture</button>
                    </li>
                    <li>
                        <button class="btn_secondary" :class="page === 'article' ? 'select' : ''" @click="$emit('change-profil', 'article')">Mes articles</button>
                    </li>
                    <li>
                        <button class="btn_secondary" :class="page === 'point' ? 'select' : ''" @click="$emit('change-profil', 'point')">Utiliser mes points</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profilLeft",
        props: ['page']
    }
</script>

<style lang="scss" scoped>
    #profilLeft {
        position: fixed;
        top: 80px;
        height: 100vh;
        width: 25%;
        background-color: #F4F4F4;
        .containerProfilLeft {
            margin: 130px auto;
            width: 80%;
            .cta {
                ul {
                    width: min-content;
                    li {
                        &:first-child {
                            margin: 50px 0px;
                        }
                        white-space: nowrap;
                        list-style: none;
                        display: block;
                    }
                }
                .select {
                    color: #67046B;
                }
            }
            .profil {
                display: flex;
                h3 {
                    font-weight: 200;
                    font-size: 24px;
                }
                button {
                    background: transparent;
                    border: none;
                    font-weight: 100;
                    font-size: 12px;
                    margin: 0;
                }
                .containerImg {
                    width: 100px;
                    height: 100px;
                    background-color: #FFFFFF;
                    border-radius: 80px;
                }
                .name {
                    margin: auto;
                    height: min-content;
                }

            }
        }
    }

</style>
