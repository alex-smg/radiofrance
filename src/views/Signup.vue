<template>
    <div id="signup">
        <div class="bread">
            <button class="back">Retour</button>
            <bread />
        </div>
        <div class="form">
            <form-signup :step="step" :allCategories="allCategories" @go-to-step="goStepTwo"/>
        </div>
        <!--<button @click="getCategories">test</button>-->
    </div>
</template>

<script>
    import Bread from '../components/breadcrumb/Breadcrumb';
    import FormSignup from '../components/form/Signup';
    import axios from 'axios'
    export default {
        name: "signup",
        components: {
            Bread,
            FormSignup
        },

        data() {
            return{
                allCategories: [],
                step: 1
            }
        },

        methods: {
            goStepTwo: function() {
                this.step = 2;
            },
            getCategories: async function () {
                try {
                    const response = await axios.get(process.env.VUE_APP_API + '/categorie');
                    this.allCategories = response.data;
                } catch(err) {
                    console.log(err)
                }
            }
        },
        mounted() {
            this.getCategories();
        }
    }
</script>

<style lang="scss">
    #signup {
        display: flex;
        margin: auto;
        position: relative;
        .back {
            margin-left: 127px;
            background-color: transparent;
            border: none;
        }
        .form {
            width: 30%;
            margin: auto;
        }
        .bread {
            position: absolute;
        }
    }
    @media screen and (min-width: 200px) and (max-width: 640px) {
        #signup {
            .bread {
                display: none;
            }
            .form {
                width: 80%;
                form {
                    width: 100%;
                }
            }
        }
    }

</style>
