// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: false,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  //   0或’off’：关闭规则。 
  // 1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。 
  // 2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
     // 允许使用分号
     'semi': [1, 'never'],
     // 允许使用==
     'eqeqeq': 1,
     // 缩进使用不做限制
     'indent': 1,
     // 允许使用tab
     'no-tabs': 1,
     // 函数圆括号之前没有空格
     'space-before-function-paren': [2, "never"],
     // 不要求块内空格填充格式
     'padded-blocks': 1,
     // 不限制变量一起声明
     'one-var': 1,
     // 开发模式允许使用console
     'no-console': 0,
     // 条件语句中复制操作符需要用圆括号括起来
     'no-cond-assign': [2, 'except-parens'],
     // 允许使用条件表达式使用常量
     'no-constant-condition': 1,
     // 单行可忽略大括号，多行不可忽略
     'curly': [1, 'multi-line'],
     // 不允许使用var变量
     'no-var': 0,
     // 不允许出现多个空格
     'no-multi-spaces': ["error", { ignoreEOLComments: true }],
     'camelcase': 1,
     // 对象字面量的键值空格风格
     'key-spacing': 1,
     // if语句包含一个return语句， else就多余
     'no-else-return': 1,
     // 建议将经常出现的数字提取为变量
     'no-magic-numbers': [0, {ignoreArrayIndexes: true}],
     // 不允许重复声明变量
     'no-redeclare': [1, {builtinGlobals: true}],
     // 立即执行函数风格
     'wrap-iife': [1, 'inside'],
     // 不允许圆括号中出现空格
     'space-in-parens': [1, 'never'],
     // 确保运算符周围有空格
     'space-infix-ops': 1,
     // 强制点号与属性同一行
     'dot-location': [1, 'property'],
     // 强制单行代码使用空格
     'block-spacing': [1, 'always'],
     // 约束for-in使用hasOwnProperty判断
     'guard-for-in': 1,
     // 采用one true brace style大括号风格
     'brace-style': [1, '1tbs', {'allowSingleLine': true}],
     // 统一逗号周围空格风格
     'comma-spacing': [1, {'before': false, 'after': true}],
     // 禁止出现多个空行
     'no-multiple-empty-lines': [1, {'max': 1, 'maxEOF': 2}],
     // 允许箭头函数不使用圆括号
     'arrow-parens': 0,
     'space-before-function-paren': 0,
  }
}
