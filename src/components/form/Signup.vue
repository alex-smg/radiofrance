<template>
    <div id="formSignup">
        <div>
            <form>
                <div v-if="step === 1" class="firstStep">
                    <h2>Inscription</h2>
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
                    <p>{{user.email}}</p>
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

                    <button class="btn-primary" @click.prevent="$emit('go-to-step')">Continuer</button>
                </div>
                <div v-if="step === 2" class="secondStep">
                    <h2>Vos centres d'intérêts</h2>
                    <p>
                        Afin de vous proposer des contenus selon vos goûts, sélectionnez les sujets
                        qui correspondent le plus à vos centre d'intérêts.
                        Vous pourrez modifier vos choix dans votre page profil.
                    </p>
                    <ul>
                        <li v-for="categorie in allCategories" :key="categorie._id" :ref="categorie._id" @click.prevent="addCategorie($event, categorie._id)">
                            {{categorie.name}}
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
            margin: 32px 0px;
        }
        button {
            margin: 24px auto;
            display: block;
        }
        h2, p {
            margin-bottom: 32px;
            line-height: 28px;
        }
        .secondStep {
            ul {
                display: flex;
                flex-wrap: wrap;
                .selectCat {
                    background-color: #0078D7;
                    color: #FFFFFF;
                    p{
                        color: #FFFFFF;
                    }
                }
                li {
                    margin: 10px 0px 10px 10px;
                    list-style: none;
                    padding: 5px 8px 20px 8px;
                    width: 28%;
                    border: 2px solid #0078D7;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.5s;
                    button {
                        background: transparent;
                        border: none;
                        height: 100%;
                        width: 100%;
                        margin: 0;
                        
                        p {
                            margin: 0;
                            font-weight: 700;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>
