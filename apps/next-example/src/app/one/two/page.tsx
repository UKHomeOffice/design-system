import { BackLink } from '@not-govuk/simple-components';
const title = 'Two';

export default function Page() {
  return (
    <>
      <BackLink />
      <h1>
        {title}
      </h1>
      <p>{title} content</p>
    </>
  );
}
