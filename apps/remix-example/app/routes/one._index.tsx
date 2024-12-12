import type { MetaFunction } from "@remix-run/node";

const title = "One";

export const meta: MetaFunction = () => {
  return [
    { title },
    { name: "description", content: "First page" },
  ];
};

export default function Page() {
  return (
    <>
      <h1>
        {title}
      </h1>
      <p>{title} content</p>
    </>
  );
}
