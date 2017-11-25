module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true, // 如果用__dirname等node中, 必须开启
        "commonjs": true, // 如果要用moduel require等方法，必须开启
    },
    // npm install eslint-config-aribnb(standard) 一般需要额外的插件, 看文档
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended", // 避免no-unused-vars错误
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module", // 如果要用import，必须设置这一项
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    // npm install eslint-plugin-xxx
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "off",
            "always"
        ],
    },
    "root": true
};