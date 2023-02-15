<template>
    <div class="hero">
        <div class="hero-container d-flex flex-column justify-space-between">
            <div class="hero-container__text">
                <h4 class="hero-container__title">Luxury homeware for people who love timeless design quality</h4>
                <p class="hero-container__description">Shop the new Spring 2022 collection today</p>
            </div>

            <custom-button>View collection</custom-button>
        </div>
    </div>
</template>


<script>
import CustomButton from './UI/CustomButton.vue'

export default {
  components: { CustomButton },
    
}
</script>


<style lang="scss" scoped>
    .hero {
        height: 704px;
        background-image: url('/img/hero.jpg');

        &-container {
            position: absolute;
            background-color: white;

            width: 630px;
            height: 444px;

            margin-left: 730px;
            margin-top: 130px;

            padding: 48px 56px;

            &__title {
                font-size: 32px;
                line-height: 45px;
                color: var(--dark-purple);
            }

            &__description {
                font-size: 18px;
                font-family: var(--clash);
                color: var(--light-purple-1);

                margin-top: 20px
            }
        }
    }
</style>