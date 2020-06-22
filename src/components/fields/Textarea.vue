<template>
    <div class="formGroup textarea">
        <label :for="name">
            <p>{{label}}</p>
            <textarea class="inputText" :placeholder="placeholder" v-model="title" :id="id" :name="name" @input="$emit('update:title', $event.target.value)"></textarea>
        </label>
    </div>
</template>
<script>
    export default {
        name: "textarea",
        props: ['name', 'id', 'label', 'placeholder', 'title'],
        components: {},
        data() {
            return {
                value: ''
            }
        }
    }
</script>
<style>
</style>
