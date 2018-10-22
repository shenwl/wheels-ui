<template>
    <div class="w-tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-head',
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name)
            })
        },
    }
</script>
<style lang="scss">
    .w-tabs-head {

    }
</style>