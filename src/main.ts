import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import { ThemeServiceInit, devuiDarkTheme } from 'devui-theme';
import { createApp } from 'vue';
import App from './App.vue';

// 使用深色主题
ThemeServiceInit({ devuiDarkTheme }, 'devuiDarkTheme');

createApp(App).use(DevUI).mount('#app');
