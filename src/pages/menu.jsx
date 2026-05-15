import * as S from './menu.styles.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuPrincipal() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <S.Container>
        <S.DivLogo><p>LOGO</p></S.DivLogo>
        <S.UlMenu>
          <S.LiMenu><Link to="/">Home</Link></S.LiMenu>
           <S.LinhaVer />
      <S.LiMenu><Link to="/sobre">Sobre</Link></S.LiMenu>
             <S.LinhaVer />
      <S.LiMenu><Link to="/contato">Contato</Link></S.LiMenu>
        </S.UlMenu>

        <S.Hamburger onClick={() => setAberto(!aberto)}>
          <S.Linha />
          <S.Linha />
          <S.Linha />
        </S.Hamburger>
      </S.Container>

      {aberto && (
        <S.MenuMobile>
          <S.LiMenuMobile><Link to="/">Home</Link></S.LiMenuMobile>
          <S.LinhaHor />
            <S.LiMenuMobile><Link to="/sobre">Sobre</Link></S.LiMenuMobile>
            <S.LinhaHor />
      <S.LiMenuMobile><Link to="/contato">Contato</Link></S.LiMenuMobile>
        </S.MenuMobile>
      )}
    </>
  )
}

export default MenuPrincipal