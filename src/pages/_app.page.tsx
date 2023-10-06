import '../styles/global.css';
import { AppProps } from 'next/app';
import { UseCounterProvider } from '@/src/hooks';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <UseCounterProvider>
            <Component {...pageProps} />;
        </UseCounterProvider>
    );
};

export default appWithTranslation(App);
