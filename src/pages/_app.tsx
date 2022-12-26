import { Header } from '@/components/organisms/Header';
import { styled } from '@/styles';
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles();

const Container = styled('main', {
  padding: '0px 16px',
  width: '100%',
})

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
