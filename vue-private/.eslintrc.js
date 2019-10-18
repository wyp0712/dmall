module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-alert": 0, // 禁止使用alert confirm prompt
    "no-console": 2, // 禁止使用console
    'eqeqeq': 0, // 允许使用==
    // 允许使用tab
    'no-tabs': 0,
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // debugger使用
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 开发模式允许使用console
    'no-console': 0,
    // 条件语句中复制操作符需要用圆括号括起来
    'no-cond-assign': [2, 'except-parens'],
    // 单行可忽略大括号，多行不可忽略
    'curly': [2, 'multi-line'],
    // 不允许使用var变量
    'no-var': 2,
    // 不允许出现多个空格
    'no-multi-spaces': 2,
    // if语句包含一个return语句， else就多余
    'no-else-return': 2,
    // 不允许圆括号中出现空格
    'space-in-parens': [2, 'never'],
    // 强制点号与属性同一行
    'dot-location': [2, 'property'],
    // 强制单行代码使用空格
    'block-spacing': [2, 'always'],
    // 约束for-in使用hasOwnProperty判断
    'guard-for-in': 2,
    // 采用one true brace style大括号风格
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // 统一逗号周围空格风格
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // 允许箭头函数不使用圆括号
    'arrow-parens': 0,
    // 要求在块级 行前/行后备注
    // 'lines-around-comment': [2, { 'beforeBlockComment': false, 'afterBlockComment': false, 'beforeLineComment': false, 'afterLineComment': false }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
