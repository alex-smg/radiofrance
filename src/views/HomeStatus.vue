<template>
    <div id="homeStatus">
        <!--<head-status></head-status>-->
        <div class="flex">
            <nav-status></nav-status>
            <div id="contentStatus">
                <create-status v-if="type === 'createStatus'"></create-status>
                <my-status @change-route="changeRoute" v-if="type === 'myStatus'"></my-status>
                <all-status v-if="type === 'allStatus'"></all-status>
            </div>
        </div>
    </div>
</template>

<script>
   /* import HeadStatus from '../components/status/HeadStatus'*/
    import NavStatus from '../components/status/NavStatus'
    import CreateStatus from '../components/status/CreateStatus'
    import AllStatus from "../components/status/AllStatus";
    import MyStatus from "../components/status/MyStatus";
    export default {
        name: "homeStatus",
        components: {
            AllStatus,
            /*HeadStatus,*/
            NavStatus,
            CreateStatus,
            MyStatus
        },
        data() {
            return{
                allCategories: [],
                type: "myStatus",
            }
        },
        methods: {
            changeRoute: function (type) {
                this.type = type;
            }
        }


    }
</script>

<style lang="scss" scoped>
#homeStatus {
    .flex {
        display: flex;
    }
    #contentStatus {
        margin-left: 30%;
        width: 65%;
    }
}
</style>
