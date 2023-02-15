<template>
    <div class="header mx-auto">
        <div class="header-top d-flex justify-space-between">
            <div class="header-search">
                <img src="/svg/search.svg">
            </div>

            <div class="header-title">
                Avion
            </div>

            <div class="header-right d-flex">
                <div class="header-right__cart">
                    <img src="/svg/cart.svg">
                </div>

                <div class="header-right__avater">
                    <img src="/svg/avatar.svg">
                </div>
            </div>
        </div>

        <v-divider></v-divider>

        <div class="header-menu d-flex justify-center">
            <router-link
                v-for="(link, index) in this.menuLinks"

                :key="index"
                :to="link.path"

                class="header-menu__item"
            >
                {{ link.title }}
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    data: () => ({
        menuLinks: [
            {
                title: 'Plant pots',
                path: '/',
            },
            {
                title: 'Ceramics',
                path: '/',
            },
            {
                title: 'Tables',
                path: '/',
            },
            {
                title: 'Chairs',
                path: '/',
            },
            {
                title: 'Crockery',
                path: '/',
            },
            {
                title: 'Tableware',
                path: '/',
            },
            {
                title: 'Cutlery',
                path: '/',
            },
        ]
    }),
}
</script>


<style lang="scss" scoped>
  .header {
    max-width: 1386px;

    &-top {
        padding: 20px 0px;
    }

    &-title {
        font-size: 24px;
        color: var(--dark-purple);
    }

    &-right {
        &__cart {
            margin-right: 16px;
        }
    }

    &-menu {
        padding: 20px 0px;

        &__item {
            margin: 0px 22px;

            color: var(--light-purple-2);
            font-family: var(--satoshi);

            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
  }
</style>