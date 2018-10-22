<template>
    <div class="w-tabs-pane" v-if="active">
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
        data() {
            return {
                active: false,
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = (name === this.name)
            })
        },
    }
</script>
<style lang="scss" scoped>
    .w-tabs-pane {
        padding: 1em;
    }
</style>