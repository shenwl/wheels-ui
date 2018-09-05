<template>
    <div class="w-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-col",
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this;
                return [span && `col-${span}`, offset && `col-offset-${offset}`];
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
        }
    }
</script>

<style lang="scss" scoped>
    .w-col {
        height: 100px;
        background: #666;
        border: 1px solid black;
        color: #fff;

        $prefix: col-;

        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $prefix: col-offset-;
        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>