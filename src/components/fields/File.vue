<template>
    <div class="formGroup">
        <label for="image">
            Image
            <div class="containerFiles">
                <button class="btn-secondary selectFile" @click.prevent="getFile">Sélectionner un fichier</button>
                <span>{{nameFile}}</span>
            </div>
            <input class="inputFile" ref="file" type="file" id="image" name="image" @change="onSelect">
        </label>
    </div>
</template>
<script>
    export default {
        name: "validation",
        data() {
            return{
                nameFile: '',
            }
        },
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0];
                this.nameFile = this.$refs.file.files[0].name;
                this.$emit('add-file', file)
            },
            getFile: function () {
                this.$refs.file.click();
            },
        },

    }
</script>
<style  lang="scss">
    #image {
        position: absolute;
        visibility: hidden;
        top: 0; left: 0;
        width: 225px;
        opacity: 0;
        padding: 14px 0;
        cursor: pointer;
    }
    .containerFiles {
        display: flex;
        margin-top: 2%;
        span {
            margin: auto 0 auto 4%;
        }
    }
</style>
