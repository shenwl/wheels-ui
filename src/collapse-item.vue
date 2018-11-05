<template>
    <div class="collapse-item">
        <div class="title" @click="handleToggle">
            {{title}}
        </div>
        <div v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-collapse-item",
        props: {
            title: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                open: false,
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', vm => {
                if (vm !== this) {
                    this.close()
                }
            })
        },
        methods: {
            handleToggle() {
                if (this.open) {
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected', this)
                }
            },
            close() {
                this.open = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;

    .collapse-item {
        > .title {
            border: 1px solid $gray;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title {
                margin-bottom: -1px;
            }
        }
    }
</style>