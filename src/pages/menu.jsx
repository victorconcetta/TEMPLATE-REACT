import * as S from './menu.styles.jsx'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"


function MenuPrincipal() {
  const [aberto, setAberto] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  const [subMenuMobile, setSubMenuMobile] = useState(false)
  const timeoutRef = useRef(null)

useEffect(() => {
  if (aberto) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  return () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}, [aberto])

function abrirSub() {
  clearTimeout(timeoutRef.current)
  setSubMenu(true)
}

function fecharSub() {
  timeoutRef.current = setTimeout(() => setSubMenu(false), 200)
}

function fecharMenu() {
  setAberto(false)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

  return (
    <>
      <S.Container>
        <S.DivLogo><Link to="/"><img src={logo} /></Link></S.DivLogo>
        <S.UlMenu>
          <S.LiMenu><Link to="/" onClick={() => setSubMenu(false)}>Home</Link></S.LiMenu>
          <S.LinhaVer />

          <S.LiMenu
            onMouseEnter={abrirSub}
            onMouseLeave={fecharSub}
          >
            SubMenu
          </S.LiMenu>

          <S.LinhaVer />
          <S.LiMenu><Link to="/Subpagina" onClick={() => setSubMenu(false)}>Item</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/Subpagina" onClick={() => setSubMenu(false)}>Item</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/Subpagina" onClick={() => setSubMenu(false)}>Item</Link></S.LiMenu>
        </S.UlMenu>

        <S.Hamburger onClick={() => setAberto(!aberto)}>
          <S.Linha />
          <S.Linha />
          <S.Linha />
        </S.Hamburger>
      </S.Container>

      {subMenu && (
        <S.SubMenu
          onMouseEnter={abrirSub}
          onMouseLeave={fecharSub}
        >
          <S.ListaSubMenu>
            <S.ListaSubMenuLi>SubItem 1</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 2</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 3</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 4</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 5</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 6</S.ListaSubMenuLi>
            <S.ListaSubMenuLi>SubItem 7</S.ListaSubMenuLi>
          </S.ListaSubMenu>
        </S.SubMenu>
      )}

      {aberto && (
      <>
        <S.MenuMobile>
          <S.LiMenuMobile><Link to="/" onClick={fecharMenu}>Home</Link></S.LiMenuMobile>
          <S.LinhaHor />
          <S.LiMenuMobile onClick={() => setSubMenuMobile(!subMenuMobile)}>
            Item com SubMenu <S.SetaIcon $aberto={subMenuMobile}>▼</S.SetaIcon>
          </S.LiMenuMobile>
          <S.SubMobile $aberto={subMenuMobile}>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 1</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 2</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 3</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 4</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 5</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 6</S.LiSubMobile>
            <S.LinhaHor />
            <S.LiSubMobile onClick={fecharMenu}>SubItem 7</S.LiSubMobile>
          </S.SubMobile>
          <S.LinhaHor />
          <S.LiMenuMobile><Link to="/Subpagina" onClick={fecharMenu}>Item</Link></S.LiMenuMobile>
          <S.LinhaHor />
          <S.LiMenuMobile><Link to="/Subpagina" onClick={fecharMenu}>Item</Link></S.LiMenuMobile>
          <S.LinhaHor />
          <S.LiMenuMobile><Link to="/Subpagina" onClick={fecharMenu}>Item</Link></S.LiMenuMobile>
        </S.MenuMobile>
        <S.Overlay onClick={fecharMenu} />
      </>
      )}
    </>
  )
}

export default MenuPrincipal