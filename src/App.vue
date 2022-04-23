<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
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
      <div class="inner-content"></div>
    </d-content>
    <d-footer class="dfooter-1">footer</d-footer>
  </d-layout>
</template>

<style>
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
