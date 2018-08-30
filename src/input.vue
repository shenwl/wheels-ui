<template>
    <div class="wrapper" :class="{error: error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
        >
        <icon v-if="error" icon="error" class="icon-error"></icon>
        <span v-if="error" class="error-message">{{error}}</span>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: 'w-input',
        components: {
            Icon,
        },
        props: {
            value: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            error: {
                type: String,
            },
        },
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $font-size: 12px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $button-active-bg: #eee;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: 0.5em;
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        > input {
            font-size: inherit;
            padding: 0 8px;
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled], &[readonly] {
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
        }
    }

</style>