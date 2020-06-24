<template>
    <div id="profil">
        <profil-left :page="page" @change-profil="changeProfil"></profil-left>
        <profil-right :page="page"></profil-right>

    </div>
</template>

<script>
    import ProfilLeft from '../components/profil/ProfilLeft'
    import ProfilRight from '../components/profil/ProfilRight'
    import store from '../store/index'
    export default {
        name: "profil",
        components:{
            ProfilLeft,
            ProfilRight
        },
        data() {
            return{
                page: 'paramsUser'
            }
        },
        methods: {
            getPerson: async function (id) {
                try {
                    const response = await this.$http.get(process.env.VUE_APP_API +`/person/${id}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    store.dispatch('populateUserSession', response.data);
                } catch (error) {
                    console.log(error)
                }
            },
            changeProfil: function (type) {
                this.page = type;
            }
        },
        mounted() {
            this.getPerson(localStorage.idPerson)
        }

    }
</script>

<style lang="scss" scoped>
    #profil {
        position: relative;
    }
</style>
