<template>
    <div class="w-tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-body',
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name)
            })
        },
    }
</script>
<style lang="scss">
    .w-tabs-body {

    }
</style>