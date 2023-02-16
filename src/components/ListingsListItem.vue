<template>
    <div class="listing-list__item">
        <img :src="this.item.imgPath">

        <h4>{{ this.item.title }}</h4>

        <p>{{ this.item.price }}</p>
    </div>
</template>


<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
}
</script>


<style lang="scss" scoped>
    .listing-list__item {
        width: 305px;

        img {
            margin-bottom: 24px;
        }

        h4 {
            font-size: 20px;
            margin-bottom: 8px;
        }

        p {
            font-family: var(--satoshi);
            font-size: 18px;
        }
    }
</style>