<template>
    <div class="w-col" :class="colClass" :style="colStyle">

    </div>
</template>

<script>
    export default {
        name: "w-col",
        computed: {
            colClass() {
                let {span} = this;
                return [span && `col-${span}`];
            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + "px",
                    paddingRight: gutter / 2 + "px"
                }
            }
        },
        props: {
            span: {
                type: [Number, String],
            },
            offset: {
                type: [Number, String],
            },
            gutter: {
                type: [Number, String],
                default: 0,
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