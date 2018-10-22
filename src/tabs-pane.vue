<template>
    <div class="w-tabs-pane">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-pane',
        inject: ['eventBus'],
        props: {
          name: {
              type: Number|String,
              required: true,
          }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name)
            })
        },
        methods: {
            handleTabChange() {
                this.eventBus.$emit('update:selected', this.name)
            },
        },
    }
</script>
<style lang="scss">
    .w-tabs-pane {

    }
</style>