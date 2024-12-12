import type { MetaFunction } from "@remix-run/node";

const title = "Four";

export const meta: MetaFunction = () => {
  return [
    { title },
    { name: "description", content: "Forth page" },
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
