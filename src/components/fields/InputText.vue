<template>
    <div class="formGroup inputText">
        <label :for="name">
            <input :type="type" :placeholder="placeholder" class="inputText"  v-model="title" :id="id" :name="name" @input="$emit('update:title', $event.target.value)"/>
            <p>{{label}}</p>
        </label>
        <span>{{error}}</span>
    </div>
</template>
<script>
    export default {
        name: "inputText",
        props: ['name', 'id', 'label', 'error', 'placeholder', 'showLabel', 'title', 'type'],
        components: {},
        data() {
            return {
                value: ''
            }
        },
        mounted() {
            console.log(this.title)
        }
    }
</script>
<style lang="scss">
    .inputText {
        width: 100%;
        label {
            display: block;
            position: relative;
            p {
                position: absolute;
                top: 0;
                margin: 0;
                transition: 0.5s;
                color: #0078D7;
            }
            input {
                border: none;
                border-bottom: 2px solid #0078D7;
                outline: none;
                padding: 5px;

            }
            input:focus + p {
                top: -20px;
            }

        }
    }
</style>
