import { styled } from "@/styles";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
});

export const ImageContainer = styled('div', {
  width: '100%',
  height: 118,
  minWidth: 118,
  maxWidth: 118,

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  }
});

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const InfoInLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Category = styled('p', {
  margin: 0,
  padding: 0,
  fontSize: 10,
  textTransform: 'uppercase'
});

export const DateText = styled('p', {
  margin: 0,
  padding: 0,
  fontSize: 10,
  textTransform: 'uppercase',

  span: {
    textTransform: 'lowercase',
  }
})

export const Title = styled('p', {
  margin: 0,
  padding: 0,
  fontSize: 18,
});
