import Page, { getStaticProps } from '@/src/pages/[locale]/index.page';
import { Redirect } from '@/src/lib/redirect';
import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


export default (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return Redirect({ children: <Page {...props} /> })();
};

export { getStaticProps };

