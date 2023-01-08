import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import NavBar from '../components/home/NavBar'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Wait from '../components/home/Wait'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  	const { locale, locales, push } = useRouter()
  	const { t } = useTranslation('hero');

  	const handleClick = (l:string) => {
    	push('/', undefined, {locale: l})
  	}

    return (
    <>
      <Head>
        <title>Mikhail Pavlenko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative max-w-[2000px] border-4 border-white shadow-2xl shadow-white'>
        <NavBar
          	mottext={t('mottext')}
          	lang={t('lang')}
          	nor={t('nor')}
          	ger={t('ger')}
          	eng={t('eng')}
          	them={t('them')}
          	old={t('old')}
          	mod={t('mod')}
          	con={t('con')}
        />
        <Hero
          	title={t('title')}
          	underTitle={t('underTitle')}
          	introduction={t('introduction')}
          	joke={t('joke')}
          	list={t('list')}
        />
        <About
          firstName={t('firstName')}
          lastName={t('lastName')}
          nametitle={t('nameTitle')}
          desc={t("desc")}
          underDesc={t("underDesc")}
          ButtonLink={t("ButtonLink")}
        />
        <Wait ex={t('ex')} />
        <Contact
          ct={t('ct')}
          uct={t('uct')}
          uce={t('uce')}
          ucb={t('ucb')}
        />
      </div>
    </>

    
  )
}

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero'])),
    }
  }
}