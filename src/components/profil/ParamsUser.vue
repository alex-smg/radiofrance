<template>
    <div id="paramsUser">
        <div class="title">
            <h3>Paramètres utilisateurs</h3>
            <hr>
        </div>
        <div class="paramUser_cta">
            <ul>
                <li>
                    <button>Modifier mon mot de passe</button>
                </li>
                <li>
                    <button>Modifier mon adresse mail</button>
                </li>
                <li>
                    <button>Modifier ma date de naissance</button>
                </li>
            </ul>
            <hr>
            <div class="flex">
                <button>Mes centres d’intérêts</button>
                <img src="../../assets/arrow.svg">
            </div>
            <hr>
            <button>Me déconnecter</button>
            <button>Supprimer mon compte</button>


        </div>

    </div>
</template>

<script>
    export default {
        name:"paramsUser"
    }
</script>

<style lang="scss" scoped>
#paramsUser {
    .paramUser_cta {
        button {
            font-size: 16px;
            background: transparent;
            border: none;
            transition: 0.5s;
            margin: 30px 0px;
            cursor: pointer;
            display: block;
            &:hover {
                color: #67046B;
            }
        }
        hr {
            height: 1.5px;
            border: none;
            background-color: #161616;
        }
        ul {
            li {
                list-style: none;
                display: block;
            }
        }
        .flex {
            display: flex;
            justify-content: space-between;
            img {
                transform: rotate(180deg);
                width: 25px;
            }
        }
    }
}
</style>
