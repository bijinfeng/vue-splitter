import type { ExtractPropTypes, PropType, Ref, VNode } from "vue"

export function stringType<T extends string = string>(defaultVal?: T) {
  return { type: String as unknown as PropType<T>, default: defaultVal as T };
}

export function functionType<T = () => {}>(defaultVal?: T) {
  return { type: Function as PropType<T>, default: defaultVal as T };
}

export const splitterProps = () => {
  return {
    prefixCls: { type: String },
    layout: stringType<'horizontal' | 'vertical'>("horizontal"),
    lazy: Boolean,
    onResizeStart: functionType<(sizes: number[]) => void>(),
    onResize: functionType<(sizes: number[]) => void>(),
    onResizeEnd: functionType<(sizes: number[]) => void>()
  }
}

export const panelProps = () => {
  return {
    prefixCls: String,
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    size: { type: [Number, String] },
    collapsible: [Boolean, Object] as PropType<boolean | { start?: boolean, end?: boolean }>,
    resizable: Boolean,
    defaultSize: { type: [Number, String] }
  }
}

export type SplitterProps = Partial<ExtractPropTypes<ReturnType<typeof splitterProps>>>;
export type PanelProps = Partial<ExtractPropTypes<ReturnType<typeof panelProps>>>;
