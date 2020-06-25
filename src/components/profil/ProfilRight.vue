<template>
    <div id="ProfilRight">
        <params-user v-if="page === 'paramsUser'"></params-user>
        <fav v-if="page === 'bookmark'"></fav>
        <read-list v-if="page === 'readList'"></read-list>
        <article-list v-if="page === 'article'"></article-list>
        <points v-if="page === 'point'"></points>

    </div>
</template>

<script>
    import ParamsUser from './ParamsUser';
    import Fav from './Fav';
    import ArticleList from './Article';
    import Points from './Points';
    import ReadList from './ReadList';
    export default {
        name: "profilRight",
        props: ['page'],
        components: {
            ParamsUser,
            Fav,
            ReadList,
            ArticleList,
            Points
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
