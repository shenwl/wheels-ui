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
                  disabled: this.disabled,
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
                if(this.disabled) {return}
                this.eventBus.$emit('update:selected', this.name, this)
            },
        },
    }
</script>
<style lang="scss" scoped>
    $active-blue: #4ca2ff;
    $disabled-color: #ddd;

    .w-tabs-item {
        flex-shrink: 0;
        padding: 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $active-blue;
        }
        &.disabled {
            color: $disabled-color;
        }
    }
</style>