// 响应式核心实现（reactive、ref、effect）

// 依赖收集容器
type Dep = Set<() => void>;
const targetMap = new WeakMap<object, Map<string | symbol, Dep>>();

let activeEffect: (() => void) | null = null;
export function effect(fn: () => void) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

function track(target: object, key: string | symbol) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  dep.add(activeEffect);
}

function trigger(target: object, key: string | symbol) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) dep.forEach(fn => fn());
}

export function reactive<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return res;
    }
  });
}

export function ref<T>(value: T) {
  const wrapper = {
    get value() {
      track(wrapper, 'value');
      return value;
    },
    set value(val: T) {
      value = val;
      trigger(wrapper, 'value');
    }
  };
  return wrapper;
}
