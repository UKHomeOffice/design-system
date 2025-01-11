export type ImageData = string | {
  src: string
}

// For handling Next.js' loader
export const unwrapImage = (v: ImageData | any): string => (
  typeof v === 'string'
    ? v
    : v.src
);
