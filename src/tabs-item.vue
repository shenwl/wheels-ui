<template>
    <div class="w-tabs-item" @click="handleTabChange" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-item',
        inject: ['eventBus'],
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
        data() {
            return {
                active: false,
            }
        },
        computed: {
          classes() {
              return {
                  active: this.active,
              }
          }
        },
        created() {
          this.eventBus.$on('update:selected', (name) => {
              this.active = (name === this.name)
          })
        },
        methods: {
            handleTabChange() {
                this.eventBus.$emit('update:selected', this.name)
            },
        },
    }
</script>
<style lang="scss" scoped>
    .w-tabs-item {
        flex-shrink: 0;
        padding-left: 2em;
        &.active {
            color: red;
        }
    }
</style>