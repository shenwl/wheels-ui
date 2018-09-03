<template>
    <div class="w-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'w-row',
        computed: {
            rowStyle() {
                let {gutter} = this
                let style = {
                    marginLeft: gutter / 2 + 'px',
                    marginRight: gutter / 2  + 'px',
                }
                return style
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                vm.gutter = this.gutter
            })
        },
        props: {
            gutter: {
                type: [Number, String],
                default: 0,
            },
        }
    }
</script>

<style lang="scss" scoped>
    .w-row {
        display: flex;
    }
</style>