import '../styles/global.css';
import { AppProps } from 'next/app';
import { UseCounterProvider } from '@/src/hooks';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <UseCounterProvider>
            <Component {...pageProps} />;
        </UseCounterProvider>
    );
};

export default App;
