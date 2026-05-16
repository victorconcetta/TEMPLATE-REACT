import styled from 'styled-components'
import ofertas from '../assets/img/ofertas.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px;
width: 100%;
height: auto;
gap: 30px;
padding: 100px 0px 150px;
`
export const ContainerSwiper = styled.div`
padding-top: 140px;

  @media (max-width: 900px) {
padding-top: 70px;
  }
`
export const DivCentro = styled.div`
  display: flex;
  width: 90%;
  gap: 30px;
  align-items: center;

  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

  
  }
`
export const DivCentroTexto = styled.div`
  flex: 1;
  width: 100%;
  align-items: center;
  text-align: justify;

h1 {
    color: var(--principaldark);
    padding-bottom: 20px;
}
     p {
    font-size: 30px;
   } 

  @media (max-width: 1500px) {
    width: 100%;
    
   p {
    font-size: 30px;
   } 
  }

 @media (max-width: 768px) {
    
   p {
    font-size: 24px;
   } 
  }
`

export const Ofertas = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    margin-top: 50px;
    margin-bottom: 100px;
  background-image: url(${ofertas});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--bg);
    opacity: 0.85;
  }

  p {
    font-size: clamp(16px, 2vw, 30px);
    font-weight: 600;
    position: relative;
    z-index: 1;
    text-align: center;
      animation: piscar 1s ease-in-out infinite;
  }

  a{
    text-decoration: none;
  }
    @keyframes piscar {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

export const DivCentroImg = styled.div`
  flex: 1;
  border-radius: 30px;
  overflow: hidden;
  min-height: 300px;
  max-height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.85;
  }

  @media (max-width: 1500px) {
    width: 80%;
    height: 300px;
    max-height: 300px;

  }
`
export const Banner3 = styled.div` 
display: flex;
justify-content: center;
  width: 70%;
  padding-bottom: 40px;

 @media (max-width: 1500px) {
    width: 100%;
 }
`

