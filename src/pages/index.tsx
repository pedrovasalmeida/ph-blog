import { GetStaticProps } from 'next'
import axios from 'axios'

import { BlogPost } from '@/components/molecules/BlogPost'
import { Container, Divider, Title } from '@/styles/pages/Home'
import { NewsApiPost } from '@/types/NewsApiPost'

const API_KEY = '48f609c2149c482e8e1c1879d83ff92f'

export default function Home({ totalResults, articles }: NewsApiPost) {
  console.log({ totalResults, articles })
  
  return (
    <Container>
      <div style={{ padding: '16px 0' }}>
        <Title>Últimos posts</Title>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {articles.map((article) => (
          <>
            <BlogPost key={article.url} article={article} />
            <Divider />
          </>
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`
    console.log({ url })
    const response = await fetch(url).then(res => res.json())

    const { totalResults, articles, status } = response as NewsApiPost

    if (status !== 'ok') {
      return {
        props: {
          totalResults: 0,
          articles: [],
        }
      }
    }

    return {
      props: {
        totalResults,
        articles,
      },
      revalidate: 60 * 60 * 48, // 24 hours
    }
  } catch (error) {
    console.error('Houve um erro ao buscar as notícias: ', error);
    
    return {
      props: {
        totalResults: 0,
        articles: [],
      }
    }
  }
}
