declare module '*.stories.mdx' {
  let content: {
    includeStories: string[]
    parameters: {
      docs: {
        page: () => JSX.Element
      }
    }
  }
  export default content
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

declare module '*.md' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}
