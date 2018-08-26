<template>
    <button
        class="w-button"
        :class="`icon-position-${iconPosition}`"
        @click="$emit('click')"
    >
        <w-icon :icon="icon" v-if="icon"></w-icon>
        <w-icon icon="loading" v-if="loading"></w-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Vue from 'vue'
    import Icon from './icon'

    Vue.component('w-icon', Icon)

    export default {
        props: {
            icon: {
                type: String,
            },
            loading: {
                type: Boolean,
                default: false,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(position) {
                    return position === 'right' || position === 'left'
                },
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .w-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        > .w-icon {
            order: 1;
            margin-right: 0.3em;
        }
        > .content {
            order: 2;
        }
        &.icon-position-right {
            > .w-icon {
                order: 2;
                margin-left: 0.3em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }

    .loading {
        animation: spin 2s infinite;
    }
</style>