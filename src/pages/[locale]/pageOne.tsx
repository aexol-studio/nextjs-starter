import { getPathLanguages } from '@/pathLanguages';
import { useState } from 'react';

const PageOne: React.FC = (lang) => {
    // const router = useRouter();
    // const lang = router?.query.locale;
    const a: any = lang;
    const [test, setTest] = useState<any>();

    // useEffect(() => {
    //     if (lang === 'en') {
    //         setTest(a.languageEn.h1);
    //         console.log('>>>>>', a.languageEn);
    //     } else if (lang === 'ru') {
    //         setTest(a.languageRu.h1);
    //     } else {
    //         setTest(a.languagePl.h1);
    //     }
    // }, []);

    return (
        <div>
            {console.log('>>lang', lang)}
            <p> {a.lang.h1}</p>
        </div>
    );
};

export async function getStaticProps(context: any) {
    const languageEn = await import(`../../../public/locales/translations/en/main.json`);
    const languagePl = await import(`../../../public/locales/translations/pl/main.json`);
    const languageRu = await import(`../../../public/locales/translations/ru/main.json`);

    const { params } = context;
    const { locale } = params;
    const translation = () => {
        if (locale === 'en') {
            return languageEn.default;
        } else if (locale === 'ru') {
            return languageRu.default;
        } else {
            return languagePl.default;
        }
    };

    return {
        props: {
            lang: translation(),
        },
    };
}

export const getStaticPaths = () => ({
    fallback: false,
    paths: getPathLanguages(),
});

export default PageOne;
