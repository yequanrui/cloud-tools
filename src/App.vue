<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  ThemeServiceInit,
  infinityTheme,
  provenceTheme,
  sweetTheme,
  deepTheme,
  galaxyTheme,
} from 'devui-theme';
import HelloWorld from './components/HelloWorld.vue';

const themeList = ref([
  { value: 'infinity-theme', label: '无限' },
  { value: 'sweet-theme', label: '蜜糖' },
  { value: 'provence-theme', label: '紫罗兰' },
  { value: 'deep-theme', label: '深邃夜空' },
  { value: 'galaxy-theme', label: '追光' },
]);
// 为了方便根据主题名称获取主题对象，我们定义一个主题映射表
const THEME_MAP: any = {
  'infinity-theme': infinityTheme,
  'sweet-theme': sweetTheme,
  'provence-theme': provenceTheme,
  'deep-theme': deepTheme,
  'galaxy-theme': galaxyTheme,
};
const currentTheme = ref(localStorage.getItem('user-custom-theme') || themeList.value[0].value);
// 初始化主题
const themeService = ThemeServiceInit(THEME_MAP, currentTheme.value);
// 主题切换
watch(currentTheme, (newVal) => {
  // 调用applyTheme方法切换主题
  themeService.applyTheme(THEME_MAP[newVal]);
});
</script>

<template>
  <d-layout>
    <d-header class="dheader-1">
      <div class="logo">
        <span class="logo-devui">
          <img src="https://devui.design/components/assets/logo.svg" width="26" height="26" />
        </span>
        <span class="text">DevUI</span>
      </div>
    </d-header>
    <d-content class="dcontent-1">
      <d-breadcrumb class="dbreadcrumb">
        <d-breadcrumb-item>
          <span>DevUI</span>
        </d-breadcrumb-item>
        <d-breadcrumb-item>
          <span>面包屑</span>
        </d-breadcrumb-item>
      </d-breadcrumb>
      <div class="inner-content">
        <d-radio-group direction="row" v-model="currentTheme">
          <d-radio v-for="item in themeList" :key="item.value" :value="item.value" :name="item.label">
            {{ item.label }}
          </d-radio>
        </d-radio-group>
      </div>
    </d-content>
    <d-footer class="dfooter-1">footer</d-footer>
  </d-layout>
</template>

<style lang="scss">
@import 'devui-theme/styles-var/devui-var';

body {
  background-color: $devui-base-bg;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.dheader-1 {
  text-align: left;
  position: relative;
  height: 40px;
  background-color: #333854;
  color: #fff;
}

.dheader-1 .logo {
  position: absolute;
  left: 0;
  margin-left: 40px;
  height: 40px;
  width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
}

.dheader-1 .logo .logo-devui {
  margin-top: 8px;
}

.dheader-1 .logo .logo-devui,
.dheader-1 .logo .text {
  display: inline-block;
  vertical-align: top;
}

.dcontent-1 {
  padding: 0 40px;
  height: 300px;
  background-color: #f3f6f8;
}

.dcontent-1 .dbreadcrumb {
  margin: 8px 0;
}

.dcontent-1 .inner-content {
  background-color: #fff;
  height: 100%;
}

.dfooter-1 {
  background: #333854;
  color: #fff;
  text-align: center;
  line-height: 40px;
  min-height: 40px;
}
</style>
