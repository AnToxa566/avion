<template>
    <div class="listing-list d-flex justify-space-between">
        <listings-list-item
            v-for="(item, index) in items"
            :key="index"
            :item="item"

            class="listing-list__item"
        ></listings-list-item>
    </div>
</template>


<script>
import ListingsListItem from '@/components/ListingsListItem.vue'

export default {
    components: {
        ListingsListItem,
    },

    props: {
        items: {
            type: Array,
            required: true,
        }
    },
}
</script>


<style lang="scss" scoped>
    .listing-list {
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