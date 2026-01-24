// 组件系统实现
import { h, VNode } from './vnode';
import { reactive } from './reactivity';

export function defineComponent(options: { setup: (props?: any) => any; render: (ctx: any) => VNode }): any {
  return (props: any) => {
    const ctx = options.setup ? options.setup(props) : {};
    return options.render(ctx);
  };
}

// 组件 props 示例
type HelloProps = { msg: string };
export const Hello = defineComponent({
  setup: (props: HelloProps) => ({
    text: props.msg
  }),
  render(ctx) {
    return h('div', null, 'Hello, ' + ctx.text);
  }
});
