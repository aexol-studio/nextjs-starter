import Page, { getStaticProps } from '@/src/pages/[locale]/index.page';
import { Redirect } from '@/src/lib/redirect';
import { StaticProps } from '@/src/util/staticPropsHelper';
import React from 'react';

export default (props: StaticProps<typeof getStaticProps>) => {
  return Redirect({ children: <Page {...props} /> })();
};

export { getStaticProps };

