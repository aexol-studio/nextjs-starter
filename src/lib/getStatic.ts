import nextI18nextConfig from '@/next-i18next.config';
import { i18n } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import resources from '@/src/@types/resources';
export interface ContextModel {
  params: { locale: string };
}

const getI18nPaths = () =>
  nextI18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: ContextModel,
  ns: Array<keyof typeof resources> = ['common'],
) {
  const locale = ctx?.params?.locale || 'en';
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources();
  }
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  };

  return props;
}

export function makeStaticProps(ns: Array<keyof typeof resources>) {
  return async function getStaticProps(ctx: ContextModel) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
