import styled from 'styled-components'


export const Container = styled.div`
display: flex;
align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 140px;
  background: var(--principal);
  position: fixed;
  z-index: 100;


 @media (max-width: 900px) {
    height: 70px;
    justify-content: space-between;
  }
`
export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20%;
  min-width: 200px;

  img {
    width: 100%;
    height: 140px;
    padding: 10px;
  }

  @media (max-width: 900px) {
    min-width: 120px;
    width: 150px;
   

    img {
      height: 80px;
      width: 100%;
    }
  }
`

export const UlMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none;
  }
`

export const Linha = styled.span`
  width: 100%;
  height: 3px;
  background: #616161;
  border-radius: 3px;
`

export const LiMenu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.3s;
  


  a{
    text-decoration: none;
    color: inherit;
  }

 &:hover {
  transform: scale(1.1);
}
`
  export const LinhaVer = styled.span`
  width: 3px;
  height: 70%;
  background: #616161;
  border-radius: 10px;

`

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  width: 28px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`
export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--principallight);
  width: 100%;
  overflow: hidden;

  @media (min-width: 900px) {
    display: none;
  }
`
export const LiMenuMobile = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 1.5rem;
  padding: 10px;
  transition: 0.3s;


  a {
    text-decoration: none;
    color: inherit;
  }

 &:hover {
  transform: scale(1.1);
}
`


  export const LinhaHor = styled.span`
  width: 70%;
  height: 2px;
  background: #616161;
  border-radius: 3px;

`;


