<template>
    <div id="formSignup">
        <div>
            <form>
                <div v-if="step === 1" class="firstStep">
                    <div class="title">
                        <h3>Inscription</h3>
                        <hr>
                    </div>
                    <p>
                        Envie de retrouver vos favoris sur tous vos écrans et profiter d'une expérience
                        personnalisée ? Créer dès maintenant votre compte radiofrance
                    </p>
                    <input-text
                            v-bind:title.sync="user.email"
                            name="email"
                            id="emailInput"
                            label="E-mail"
                            type="text"
                            class="input"
                    />
                    <input-text
                            v-bind:title.sync="user.password"
                            name="password"
                            id="password"
                            label="Mot de passe"
                            type="password"
                            class="input"
                    />
                    <input-text
                            v-bind:title.sync="user.lastname"
                            name="lastname"
                            id="lastnameInput"
                            label="Nom"
                            type="text"
                            class="input"
                    />
                    <input-text
                            v-bind:title.sync="user.firstname"
                            name="firstname"
                            id="firstnameInput"
                            label="Prénom"
                            type="text"
                            class="input"
                    />
                    <input-text
                            v-bind:title.sync="user.age"
                            name="age"
                            id="ageInput"
                            label="Age"
                            type="number"
                            class="input age"
                    />

                    <button class="btn-primary" @click.prevent="$emit('go-to-step')">Continuer</button>
                </div>
                <div v-if="step === 2" class="secondStep">
                    <div class="title">
                        <h3>Vos centres d’intérêts</h3>
                        <hr>
                    </div>
                    <p class="description">
                        Afin de vous proposer des contenus selon vos goûts, sélectionnez les sujets
                        qui correspondent le plus à vos centre d'intérêts.
                        Vous pourrez modifier vos choix dans votre page profil.
                    </p>
                    <ul>
                        <li v-for="categorie in allCategories" :key="categorie._id" :ref="categorie._id" @click.prevent="addCategorie($event, categorie._id)">
                            <img src="../../assets/arrowblue.svg"> <p>{{categorie.name}}</p>
                        </li>
                    </ul>
                    <button class="btn-primary" @click.prevent="createUser">S'inscrire</button>
                </div>
            </form>
        </div>


    </div>
</template>

<script>
    import InputText from "@/components/fields/InputText";
    import axios from 'axios';
    export default {
        name: 'signup',
        props: ['allCategories', 'step'],
        components: {
            InputText
        },
        data() {
            return{
                user: {
                    email: '',
                    firstname: '',
                    lastname: '',
                    age: '',
                    password: '',
                    categories: []
                }
            }
        },
        methods: {
            addCategorie: function (event, id) {
                event.target.classList.toggle('selectCat');
                let search  = this.user.categories.find(el => el === id);
                if (!search) {
                    this.user.categories.push(id);
                    console.log(this.user.categories)
                } else {
                    console.log('test');
                    let index = this.user.categories.indexOf(search);
                    console.log(index);
                    this.user.categories.splice(index, 1);
                    console.log(this.user.categories)
                }
            },
            createUser: async function () {
                try{
                    const response = await axios.post(process.env.VUE_APP_API + '/person', this.user );
                    console.log(response)

                }catch (e) {
                    console.log(e)
                }
            }
        },
        mounted() {
            console.log(this.step)
        }
    }
</script>

<style lang="scss" scoped>
    #formSignup {
        .input {
            margin: 40px 0px;
        }
        .age {
            width: 20%;
        }
        button {
            margin: 60px auto;
            display: block;
            cursor: pointer;
        }
        .firstStep {
            h2, p {
                margin-bottom: 32px;
                line-height: 28px;
            }
        }
        .secondStep {
            width: 85%;
            margin: auto;
           .description {
               margin-bottom: 32px ;
           }
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 100%;
                .selectCat {
                    background-color: #FFFFFF;
                    color: #0078D7;
                    img {
                        width: min-content;
                    }
                    p{
                        color: #0078D7;
                        margin: auto;
                    }
                }
                li {
                    margin: 10px 0px 32px 0px;
                    list-style: none;
                    padding: 5px 8px 0px 8px;
                    width: 28%;
                    border: none;
                    border-bottom: 2px solid #161616;
                    cursor: pointer;
                    transition: 0.5s;
                    display: flex;
                    padding-bottom: 10px ;
                    img {
                        transition: 0.5s;
                        width: 0;
                    }
                    .showImg {

                    }
                    p {
                        transition: 0.5s;
                        pointer-events: none;
                    }
                    button {
                        background: transparent;
                        border: none;
                        height: 100%;
                        width: 100%;
                        margin: 0;
                        
                        p {
                            font-weight: 700;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>
