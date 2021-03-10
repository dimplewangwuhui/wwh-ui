<template>
  <button class="wwh-button" :class="[`wwh-button-${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled}]"
     @click="handleClick"
  >
    <i v-if="icon" :class="`wwh-icon-${icon}`"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'wwhButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
  .wwh-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 8px 20px;
    font-size: 12px;
    border-radius: 4px;
    &:hover, &:focus{
      color: #455CC6;
      border-color: #455CC6;
      background-color: #fafafa;
    }
  }

  .wwh-button+.wwh-button {
    margin-left: 10px;
  }

  /* type属性 */
  .wwh-button-primary{
    background: #455CC6;
    border: 1px solid #455CC6;
    color: #fff;
    &:hover, &:focus{
      border-color: #409eff;
      background-color: #409eff;
      color: #fff;
    }
  }
  .wwh-button-success{
    background: #67c23a;
    border: 1px solid #67c23a;
    color: #fff;
    &:hover, &:focus{
      border-color: #85ce61;
      background-color: #85ce61;
      color: #fff;
    }
  }
  .wwh-button-info{
    background: #909399;
    border: 1px solid #909399;
    color: #fff;
    &:hover, &:focus{
      border-color: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
  .wwh-button-warning{
    background: #e6a23c;
    border: 1px solid #e6a23c;
    color: #fff;
    &:hover, &:focus{
      border-color: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
  .wwh-button-danger{
    background: #f56c6c;
    border: 1px solid #f56c6c;
    color: #fff;
    &:hover, &:focus{
      border-color: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }

  /* plain属性 */
  .wwh-button.is-plain{
    &:hover, &:focus{
      background-color: #fff;
      border: 1px solid #455CC6;
      color: #455CC6;
    }
  }
  .wwh-button-primary.is-plain{
    color: #455CC6;
    background-color: #ecf5ff;
    border-color: #b3d8ff;
    &:hover, &:focus{
      background: #455CC6;
      border-color: #455CC6;
      color: #fff;
    }
  }
  .wwh-button-success.is-plain{
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b0;
    &:hover, &:focus{
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .wwh-button-info.is-plain{
    color: #909399;
    background-color: #f4f4f5;
    border-color: #d3d4d6;
    &:hover, &:focus{
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .wwh-button-warning.is-plain{
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;
    &:hover, &:focus{
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .wwh-button-danger.is-plain{
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;
    &:hover, &:focus{
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }

  /* round属性 */
  .wwh-button.is-round{
    border-radius: 20px;
    padding: 8px 20px;
  }

  /* circle属性 */
  .wwh-button.is-circle{
    border-radius: 50%;
    padding: 8px;
  }

  /* icon */
  .wwh-button [class*=el-icon-]+span {
    margin-left: 5px;
  }

  /* disabled */
  .wwh-button.is-disabled, .wwh-button.is-disabled:focus, .wwh-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
</style>
