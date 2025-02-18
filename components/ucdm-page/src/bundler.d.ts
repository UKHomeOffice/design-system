// Based on CRA's react-scripts

type ImageData = string | {
  src: string
}

declare module '*.avif' {
  const src: ImageData;
  export default src;
}

declare module '*.bmp' {
  const src: ImageData;
  export default src;
}

declare module '*.gif' {
  const src: ImageData;
  export default src;
}

declare module '*.ico' {
  const src: ImageData;
  export default src;
}

declare module '*.jpg' {
  const src: ImageData;
  export default src;
}

declare module '*.jpeg' {
  const src: ImageData;
  export default src;
}

declare module '*.png' {
  const src: ImageData;
  export default src;
}

declare module '*.webp' {
  const src: ImageData;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
