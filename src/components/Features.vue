<template>
    <div class="features">
        <h3 class="features-title text-center">What makes our brand different</h3>

        <features-list
            class="features-list"
            :items="this.features"
        ></features-list>
    </div>
</template>


<script>
import FeaturesList from '@/components/FeaturesList.vue'

export default {
    components: {
        FeaturesList,
    },

    data: () => ({
        features: [
            {
                title: 'Next day as standard',
                description: 'Order before 3pm and get your order the next day as standard',
                iconPath: '/svg/delivery.svg', 
            },
            {
                title: 'Made by true artisans',
                description: 'Handmade crafted goods made with real passion and craftmanship',
                iconPath: '/svg/checkmark.svg', 
            },
            {
                title: 'Unbeatable prices',
                description: 'For our materials and quality you won’t find better prices anywhere',
                iconPath: '/svg/purchase.svg', 
            },
            {
                title: 'Recycled packaging',
                description: 'We use 100% recycled to ensure our footprint is more manageable',
                iconPath: '/svg/sprout.svg', 
            },
        ],
    }),
}
</script>


<style lang="scss" scoped>
    .features {
        padding: 80px;

        &-title {
            font-size: 24px;
        }

        &-list {
            margin-top: 36px;
        }
    }
</style>