<template>
    <button 
        :class='"btn " + this.btnColorClass + " " + this.btnBgColorClass'
        :rounded="0" 
        flat
    >
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'custom-button',

    props: {
        color: {
            type: String,
            required: false,
            default: 'purple'
        },

        bgColor: {
            type: String,
            required: false,
            default: 'light-grey'
        },
    },

    computed: {
        btnColorClass() {
            return "btn-color-" + this.color
        },

        btnBgColorClass() {
            return "btn-bg-color-" + this.bgColor
        },
    },
}
</script>


<style lang="scss" scoped>
    .btn {
        width: 170px;
        height: 56px;

        background-color: var(--light-grey);
        font-family: var(--satoshi);

        text-transform: none;

        &-color {
            &-white {
                color: var(--white);
            }

            &-purple {
                color: var(--purple);
            }
        }

        &-bg-color {
            &-light-grey {
                background-color: var(--light-grey);
            }

            &-white {
                background-color: var(--white);
            }

            &-purple {
                background-color: var(--purple);
            }
        }
    }
</style>