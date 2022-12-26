import { Article } from "@/types/NewsApiPost";
import Image from "next/image";
import { Category, Container, DateText, ImageContainer, InfoContainer, InfoInLine, Title } from "./styles";

interface BlogPostProps {
  article: Article
}

export function BlogPost({ article }: BlogPostProps) {
  const convertArticleDate = () => {
    const date = new Date(article?.publishedAt ?? '')
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }
  
  return (
    <Container>
      <ImageContainer>
        <Image src={article.urlToImage ?? ''} alt={article.title} width={118} height={118} />
      </ImageContainer>

      <InfoContainer>
        <InfoInLine>
          <Category>{article?.author ?? ''}</Category>
          <DateText>{convertArticleDate()}</DateText>
        </InfoInLine>

        <Title>{article?.title ?? ''}</Title>
      </InfoContainer>
    </Container>
  )
}