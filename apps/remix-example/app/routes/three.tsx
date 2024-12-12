import type { MetaFunction } from "@remix-run/node";

const title = "Three";

export const meta: MetaFunction = () => {
  return [
    { title },
    { name: "description", content: "Third page" },
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
