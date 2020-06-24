<template>
    <div id="breadcrumb">
        <ul>
            <li>
                <div class="test"></div>
                <div class="relative">
                    <p>Informations principales</p>
                    <span class="circle"></span>
                </div>
            </li>
            <li>
                <div class="relative">
                    <p>Vos centres d'intérêts</p>
                    <span class="circle"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "breadcrumb"
    }
</script>

<style lang="scss" scoped>
    #breadcrumb {
        height: min-content;
        display: flex;
        ul {
            list-style: none;
            margin: 35px 0 0 127px;
            padding-left: 30px;
            border-left: 2px solid #161616;
            height: 75px;
            li {
                /*margin: 40px 0;*/
                position: relative;
                width: 100%;
                height: 20px;
                margin: 0 0 50px 0;

                .relative {
                    display: block;
                    p {
                        position: absolute;
                        z-index: 100;
                        cursor: pointer;
                        white-space: nowrap;
                        transition: transform 0.2s linear;
                    }
                    .circle {
                        margin-top: -10px;
                        top: 50%;
                        left: -37px;
                        width: 10px;
                        height: 10px;
                        background: #FFFFFF;
                        border: 1px solid #161616;
                        border-radius: 50%;
                        display: block;
                        position: absolute;
                    }
                }
            }
        }
        .hr {
            width: 2px;
            background-color: #0078D7;
        }
    }
</style>
