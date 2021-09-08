import { Layout } from '@/src/layouts';
import { LogoAexol } from '@/src/assets';
import { TestMolecules } from '@/src/components';
import aexol_logo from '@/public/images/aexol_logo.svg';
import aexol_full_logo from '@/public/images/aexol_full_logo.png';
import Link from 'next/link';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';



const ALink = styled.div`
    a {
        color: black;
    }
`;

console.log(process.env.NEXT_PUBLIC_HOST);

const HomePage = () => {

    const { t } = useTranslation()


    return (
        <Layout pageTitle="HomePage">
            <TestMolecules />
            <LogoAexol />
            <h1>{t(`translations:test.test`)}</h1>
            <ALink>
                <Link href="/posts/first">Dynamic Route Post Example</Link>
            </ALink>
            <img src={aexol_logo.src} alt="" />
            <img src={aexol_full_logo.src} alt="" />
        </Layout>
    );
};

export default HomePage;
