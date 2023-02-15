<template>
    <div class="features-list__item">
        <img :src="this.item.iconPath">

        <h4>{{ this.item.title }}</h4>

        <p>{{ this.item.description }}</p>
    </div>
</template>


<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style lang="scss" scoped>
    .features-list__item {
        padding: 48px;
        background-color: var(--light-grey);

        h4 {
            margin-top: 12px;
            font-size: 20px;
        }

        p {
            margin-top: 12px;
            font-family: var(--satoshi);
            line-height: 24px;
        }
    }
</style>