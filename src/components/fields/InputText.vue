<template>
    <div class="formGroup inputText">
        <label :for="name">
            <input :type="type" :placeholder="placeholder" class="inputText"  v-model="title" :id="id" :name="name" @input="$emit('update:title', $event.target.value)"/>
            <p :class="title !== '' ? 'notEmpty' : ''">{{label}}</p>
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
                color: #161616;
            }
            input {
                border: none;
                border-bottom: 2px solid #161616;
                outline: none;
                padding: 10px;

            }

            .notEmpty {
                top: -15px;
            }
            input:focus + p {
                top: -20px;
            }

        }
    }
</style>
