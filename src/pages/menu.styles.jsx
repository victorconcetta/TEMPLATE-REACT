import styled from 'styled-components'


export const Container = styled.div`
display: flex;
align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100px;
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
  width: 140px;
  margin-left: 50px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    min-width: 120px;
    width: 150px;
      margin-left: 20px;
   

    img {
      height: 70px;
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

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  color: #000000b0;
  background: var(--principaldark);
  z-index: 50;
  position: fixed;
  top: 100px;
  cursor: pointer;

  @media (max-width: 900px) {
    top: 70px;
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none; 
    &::-webkit-scrollbar { display: none; }
        display: none;

  }


`

export const ListaSubMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0px;
  padding: 0px 50px;

  @media (max-width: 1200px) {
    padding: 0px 20px;
    gap: 10px;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding: 0px 14px;
    gap: 24px;
    width: max-content; 
  }
`

export const ListaSubMenuLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  margin: 0px;
  font-size: 24px;
  font-weight: 500;
  transition: 0.5s;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    padding: 10px 10px;
    font-size: 16px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    padding: 8px 10px;
  }
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
export const EspacadorMobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--principallight);
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 70px;
  left: 0;
  max-height: calc(100vh - 70px);
  overflow-y: auto;

  @media (min-width: 900px) {
    display: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 97; 
  cursor: pointer;
`

export const LiMenuMobile = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 1.3rem;
  padding: 8px;
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

export const SubMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  max-height: ${({ $aberto }) => $aberto ? '400px' : '0'};  /* ← animação suave */
  transition: max-height 0.3s ease;
`

export const LiSubMobile = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 400;
  transition: 0.3s;
  color: inherit;

  &:hover {
    transform: scale(1.05);
  }
`

export const SetaIcon = styled.span`
  margin-left: 8px;
  font-size: 0.8rem;
  transition: 0.3s;
  display: inline-block;
  transform: ${({ $aberto }) => $aberto ? 'rotate(180deg)' : 'rotate(0deg)'};
  `
