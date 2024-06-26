import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Web Starter' },
    {
      property: 'og:title',
      content: 'Remix Web Starter',
    },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};
