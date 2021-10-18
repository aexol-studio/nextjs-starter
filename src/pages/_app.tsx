import '../styles/global.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default App;
