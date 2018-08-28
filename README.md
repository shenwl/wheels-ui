# wheels-ui

[![Build Status](https://travis-ci.org/shenwl/wheels-ui.svg?branch=master)](https://travis-ci.org/shenwl/wheels-ui)

## 介绍

在学习 Vue 过程中制作的一个 UI 组件库。

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请确保在 CSS 中开启 border-box
    
    ```css
    *, *::before, *::after {box-sizing: border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式。  
        
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    
    ```css
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    
    注意兼容性问题。

2. 安装 wheels-ui  
    ```
    npm install --save  wheels-test-1
    ```

3. 引入 wheels-ui
    ```js
    import { Button, ButtonGroup, Icon } from "wheels-test-1"
    import "wheels-test-1/dist/index.css"
    ```

4. 引入 svg symbols
    ```js
    <script src="//at.alicdn.com/t/font_808984_u48ykw5at5e.js"></script>
    ```

## 文档

## 问答

## 变更记录

## 联系方式

## 贡献者
