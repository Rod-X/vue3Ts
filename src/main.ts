// 入口文件，演示简化版 vue3 框架用法
import { reactive, ref, effect } from './reactivity';
import { h } from './vnode';
import { render } from './renderer';
import { Hello } from './component';

const state = reactive({ count: 0 });
const message = ref('world');

effect(() => {
  const app = h('div', null, [
    h('h1', null, '简化版 Vue3 框架'),
    h('button', { onclick: () => state.count++ }, 'count: ' + state.count),
    h('input', {
      value: message.value,
      oninput: (e: any) => (message.value = e.target.value)
    }),
    h(Hello, { msg: message.value })
  ]);
  const root = document.getElementById('app');
  if (root) root.innerHTML = '';
  if (root) render(app, root);
});
