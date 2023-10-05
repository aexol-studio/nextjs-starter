import {
    ContextModel,
    getStaticPaths,
    makeStaticProps,
  } from '@/src/lib/getStatic';
  import {  LanguageSwitcher, TestMolecules } from '@/src/components';
  import { useTranslation } from 'next-i18next';
  import { useRouter } from 'next/router';
  import { StaticProps } from '@/src/util/staticPropsHelper';
  import React from 'react';
import { LogoAexol } from '@/src/assets';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Layout } from '@/src/layouts';
import aexol_logo from '@/public/images/aexol_logo.svg';
import aexol_full_logo from '@/public/images/aexol_full_logo.png';
import Image from 'next/image';

const ALink = styled.div`
    a {
        color: black;
    }
`;
  
  export const Index: React.FC<StaticProps<typeof getStaticProps>> = (props) => {
    const { t } = useTranslation('common');
    const { query } = useRouter();
    const { locale } = query;


    return (
        <Layout pageTitle="Posts">
            <LanguageSwitcher/>
            <TestMolecules />
            <LogoAexol />
            <h1> POSTS </h1>
            <ALink>
                <Link href="/posts/first">Dynamic Route Post Example</Link>
            </ALink>
            <Image src={aexol_logo.src} alt=""  width={100} height={100}/>
            <Image src={aexol_full_logo.src} alt=""  width={100} height={100} />
        </Layout>
    );
  };
  
  const getStaticProps = async (ctx: { params: ContextModel['params'] }) => {
    const sprops = makeStaticProps(['common']);
    const r = await sprops(ctx);
    const returnedStuff = {
      props: { ...r.props },
    };
    return returnedStuff;
  };
  
  export { getStaticPaths, getStaticProps };
  export default Index;
  