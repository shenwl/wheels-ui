<template>
    <div class="w-row" :style="rowStyle" :class="rowClass">
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
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
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
            align: {
                type: String,
                validator(value) {
                    const validValues = ['left', 'center', 'right']
                    if(!validValues.includes(value)) {
                        return false
                    }
                    return true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .w-row {
        display: flex;

        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>