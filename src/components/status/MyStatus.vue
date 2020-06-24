<template>
    <div id="myStatus">
        <div class="title">
            <h3>Mes statuts</h3>
            <hr>
        </div>
        <div>
            <p>En créant un statut, vous pourrez recevoir des recommandations des autres auditeurs de Mouv’</p>
        </div>
        <div class="containerBtn">
            <button @click="$emit('change-route', 'createStatus')">Créer un statut</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "myStatus"
    }
</script>

<style lang="scss" scoped>
    #myStatus {
        width: 100%;
        .title {
            width: 100%;
            margin-bottom: 10px;
            h3 {
                margin-bottom: 15px;
                font-weight: 200;
                text-transform: uppercase;
            }
        }
        .containerBtn {
            margin: 300px auto;
            button {
                background: transparent;
                text-transform: uppercase;
                border-radius: 10px;
                padding: 13px 60px;
                border: 1.5px solid #262623;
                margin: auto;
                display: block;
            }
        }
    }

</style>
