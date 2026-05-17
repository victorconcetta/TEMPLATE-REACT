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
padding: 10px 0px 150px;


`
export const ContainerSwiper = styled.div`
padding-top: 100px;

  @media (max-width: 900px) {
padding-top: 70px;

  }
`
export const DivCentro = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: center;
  padding: 20px 10%;
  background: #e0e0e0;


  

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
  text-align: left;

h1 {
    color: var(--principaldarker);
    padding-bottom: 20px;

}
     p {
    font-size: 24px;
   } 

  @media (max-width: 1500px) {
    width: 100%;
    
   p {
    font-size: 22px;
   } 
  }

 @media (max-width: 768px) {
    
   p {
    font-size: 18px; 
   } 
   h1 { 
    font-size: 21px; 
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
    margin-bottom: 10px;
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
    font-size: 1vw;
    font-weight: 600;
    position: relative;
    z-index: 1;
    text-align: center;
    color: var(--principaldarker);
    text-shadow: 2px 8px 17px rgba(0, 0, 0, 0.274);

  }

  a{
    text-decoration: none;
  }

  @media (max-width: 768px) {
   margin-top: 0px;
   padding: 0px;
  }

    p {
    font-size: 3vw;
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
