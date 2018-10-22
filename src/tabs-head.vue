<template>
    <div class="w-tabs-head">
        <slot></slot>
        <span class="line" ref="line"></span>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-head',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, left} = vm.$el.getBoundingClientRect()
                const lineStyle = this.$refs.line.style
                lineStyle.width = `${width}px`
                lineStyle.transform = `translateX(${left}px)`
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $active-blue: #4ca2ff;
    $border-color: #ddd;

    .w-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: center;
        position: relative;
        border-bottom: 1px solid $border-color;

        > .line {
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid $active-blue;
            transition: all 250ms;
        }
        > .actions-wrapper {
            display: flex;
            align-items: center;
            margin-left: auto;
            padding: 0 1em;
        }
    }
</style>