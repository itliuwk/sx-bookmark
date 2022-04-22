<template>
  <el-dialog
    custom-class="my-dialog"
    title="帮助说明"
    :visible="isHelpVisible"
    width="758px"
  >
    <div>
      <div class="tips">
        <p class="problem">1、怎么注册？</p>
        <p class="answer">点击用户登录，未注册会默认注册</p>
      </div>
      <div class="tips">
        <p class="problem">2、书签的显示规则？</p>
        <p class="answer">
          登录后，若无用户数据，默认显示的书签是平台提供的，若想显示自己的，请查看 3、4 的操作，有用户数据若想查看平台的书签，请退出登录后查看
        </p>
      </div>
      <div class="tips">
        <p class="problem">3、chrome书签导入的格式？</p>
        <p class="answer">
          chrome浏览器 - 设置 - 书签 - 书签管理器 - 右上角三个竖点 - 导出书签 -
          保存到桌面或者其它地方
        </p>
      </div>
      <div class="tips">
        <p class="problem">4、导入chrome书签？</p>
        <p class="answer">左下角导入图标，选择chrome中导出的书签即可，会保存到用户账号中，<strong>任何浏览器打开此网站登录后都可查看</strong></p>
      </div>
      <div class="tips">
        <p class="problem">5、平台导出书签？</p>
        <p class="answer">
          平台导出的书签的默认提供的，暂不提供导出用户所导入的数据
        </p>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  model: {
    value: 'isHelpVisible',
    events: 'closeViews'
  },
  props: {
    isHelpVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    // 关闭弹窗
    function closeViews() {
      context.emit('closeViews', false)
    }

    return {
      closeViews
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.tips {
  .problem {
    font-size: 12px;
    margin-bottom: 5px;
    color: #999;
  }
  .answer {
    font-size: 12px;
    text-indent: 2em;
  }
}
</style>
