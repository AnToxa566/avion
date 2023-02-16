<template>
    <div class="listings">
        <listings-list
            :items="this.listings"
            class="listings-list"
        ></listings-list>

        <div class="d-flex justify-center">
            <custom-button>View collection</custom-button>
        </div>
    </div>
</template>


<script>
import ListingsList from '@/components/ListingsList.vue'

export default {
    components: {
        ListingsList
    },

    data: () => ({
        listings: [
            {
                title: 'The Dandy chair',
                price: '£250',
                imgPath: '/img/product1.jpg',
            },
            {
                title: 'Rustic Vase Set',
                price: '£155',
                imgPath: '/img/product2.jpg',
            },
            {
                title: 'The Silky Vase',
                price: '£125',
                imgPath: '/img/product3.jpg',
            },
            {
                title: 'The Lucy Lamp',
                price: '£399',
                imgPath: '/img/product4.jpg',
            },
        ]
    }),
}
</script>


<style lang="scss" scoped>
    .listings {
        padding: 28px 80px 40px;

        &-list {
            margin-bottom: 48px;
        }
    }
</style>