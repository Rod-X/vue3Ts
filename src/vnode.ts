// 虚拟节点类型定义

export type VNode = {
  type: string | Function;
  props?: Record<string, any>;
  children?: VNode[] | string;
};

export function h(type: VNode["type"], props?: VNode["props"], children?: VNode["children"]): VNode {
  return { type, props, children };
}
