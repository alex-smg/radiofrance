<template>
    <div id="points">
        <div class="title">
            <h3>Utiliser mes points - France Culture</h3>
            <hr>
        </div>
        <p>
            Vous avez actuellement 1550 points. Vous pouvez utiliser vos points pour obtenir
            des récompenses exclusives radiofrance. Chaque chaines de radiofrance propose
            un catalogue de récompenses différent.
            <br>
            <br>
            <br>

            Rendez-vous sur les autres chaines pour découvrir tous les catalogues.
        </p>
        <div class="title second">
            <h3>Catalogue France Culture</h3>
            <hr>
        </div>
        <div>
            <div class="containerInfos">
                <div>
                    <img src="../../assets/points.png">
                </div>
                <div>
                    <h4>Invitation exposition</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                        enim at tellus gravida viverra. Proin non pulvinar augue.
                        Ut dictum lobortis leo, in facilisis velit  sagittis sed. Proin vel risus eu </p>
                </div>
            </div>

            <hr>
        </div>

    </div>
</template>

<script>
    export default {
        name: "points"
    }
</script>

<style lang="scss" scoped>
    #points {
        .second {
            margin-top: 60px;
        }
        .containerInfos {
            display: flex;
            margin: 30px 0px;
            div {
                margin: auto;
                &:first-child {
                    width: 20%;
                    img {
                        width: 100%;
                    }
                }
                &:last-child {
                    margin-left: 32px;
                }
                h4{
                    font-size: 19px;
                    font-weight: 200;
                    margin-bottom: 15px;
                }
                p {
                    font-size: 14px;
                }
            }
        }
    }
</style>
