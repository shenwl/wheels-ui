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
        created() {
            this.eventBus.$on('update:selected', (item, vm) => {
                console.log(vm.$el)
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $active-blue: #4ca2ff;

    .w-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: center;
        position: relative;
        > .line {
            position: absolute;
            bottom: 2px;
            border-bottom: 2px solid $active-blue;
            width: 100px;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>