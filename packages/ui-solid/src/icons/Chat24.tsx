/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Chat24Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Chat24: Component<Chat24Props> = (props) => {
  const merged = mergeProps({ size: 24 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.165 17.588A4.3 4.3 0 0 0 6.5 15.87C4.96 14.612 4 12.831 4 10.854c0-3.815 3.582-6.908 8-6.908 4.42 0 8.001 3.093 8.001 6.909s-3.582 6.908-8 6.908a9.2 9.2 0 0 1-2-.218c-.424.464-1.236 1.062-2.591 1.539-.78.274-1.74.508-2.91.652.644-.635 1.289-1.27 1.665-2.148m4.38 1.88q.715.094 1.456.095c5.155 0 9.8-3.66 9.8-8.708 0-5.049-4.645-8.709-9.8-8.709s-9.8 3.66-9.8 8.709c0 2.231.938 4.226 2.414 5.729-.176.65-.624 1.126-1.38 1.871a1.8 1.8 0 0 0 1.486 3.068c2.767-.341 4.647-1.165 5.824-2.056" clip-rule="evenodd"/></svg>
  );
}