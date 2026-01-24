// 渲染器实现
import { VNode } from './vnode';

export function render(vnode: VNode, container: HTMLElement) {
  if (typeof vnode.type === 'string') {
    // 原生标签
    const el = document.createElement(vnode.type);
    if (vnode.props) {
      for (const key in vnode.props) {
        el.setAttribute(key, vnode.props[key]);
      }
    }
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => render(child, el));
    }
    container.appendChild(el);
  } else if (typeof vnode.type === 'function') {
    // 组件
    const subTree = (vnode.type as any)(vnode.props || {});
    render(subTree, container);
  }
}
