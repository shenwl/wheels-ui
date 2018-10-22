<template>
    <div class="w-tabs-item" @click="handleTabChange">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-item',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: String|Number,
                required: true,
            },
        },
        inject: ['eventBus'],
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
    .w-tabs-header {

    }
</style>