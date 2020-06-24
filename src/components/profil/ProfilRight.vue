<template>
    <div id="ProfilRight">
        <params-user v-if="page === 'paramsUser'"></params-user>

    </div>
</template>

<script>
    import ParamsUser from './ParamsUser'
    export default {
        name: "profilRight",
        props: ['page'],
        components: {
            ParamsUser
        }
    }
</script>

<style lang="scss" scoped>
    #ProfilRight {
        margin-top: 133px;
        margin-left: 30%;
        width: 60%;
    }

</style>
