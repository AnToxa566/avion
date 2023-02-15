<template>
    <div class="features-list d-flex justify-space-between">
        <features-list-item
            v-for="(item, index) in items"

            :key="index"
            :item="item"

            class="features-list__item w-100"
        ></features-list-item>
    </div>
</template>


<script>
import FeaturesListItem from '@/components/FeaturesListItem.vue'

export default {
    components: {
        FeaturesListItem,
    },

    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>


<style lang="scss" scoped>
    .features-list {
        &__item {
            margin: 0px 10px;

            &:first-child {
                margin-left: 0px;
            }

            &:last-child {
                margin-right: 0px;
            }
        }
    }
</style>