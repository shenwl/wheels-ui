<template>
    <div class="w-col" :class="colClass">

    </div>
</template>

<script>
    export default {
        name: "w-col",
        computed: {
            colClass() {
                let {col} = this;
                return [col && `col-${col}`];
            }
        },
        props: {
            col: {
                type: [Number, String],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .w-col {
        $prefix: col-;

        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>