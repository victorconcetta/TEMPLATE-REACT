import * as S from './menu.styles.jsx'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/img/logo.png"

function MenuPrincipal() {
  const [aberto, setAberto] = useState(false)
  const [subProdutos, setSubProdutos] = useState(false)
  const location = useLocation()
  const [subMobile, setSubMobile] = useState(false)

  const mostrarSub = subProdutos || location.pathname === '/sobre'

function fecharMenu() {
  setAberto(false)
  window.scrollTo({ top: 0, behavior: 'smooth' })  // ← volta pro topo
}
  return (
    <>
      <S.Container>
        <S.DivLogo><Link to="/"><img src={logo} /></Link></S.DivLogo>
        <S.UlMenu>
          <S.LiMenu><Link to="/" onClick={() => setSubProdutos(false)}>Home</Link></S.LiMenu>
          <S.LinhaVer />

          <S.LiMenu
            onMouseEnter={() => setSubProdutos(true)}
            onMouseLeave={() => setSubProdutos(false)}
          >
            Produtos
          </S.LiMenu>

          <S.LinhaVer />
          <S.LiMenu><Link to="/contato" onClick={() => setSubProdutos(false)}>Ofertas</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/contato" onClick={() => setSubProdutos(false)}>Unidades</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/contato" onClick={() => setSubProdutos(false)}>Contato</Link></S.LiMenu>
        </S.UlMenu>

        <S.Hamburger onClick={() => setAberto(!aberto)}>
          <S.Linha />
          <S.Linha />
          <S.Linha />
        </S.Hamburger>
      </S.Container>

      {mostrarSub && (
        <S.SubProdutos
          onMouseEnter={() => setSubProdutos(true)}
          onMouseLeave={() => setSubProdutos(false)}
        >
          <S.ListaProdutos>
            <S.ListaProdutosLi>Hortaliças</S.ListaProdutosLi>
            <S.ListaProdutosLi>Legumes</S.ListaProdutosLi>
            <S.ListaProdutosLi>Frutas</S.ListaProdutosLi>
            <S.ListaProdutosLi>Frutas Exóticas</S.ListaProdutosLi>
            <S.ListaProdutosLi>Doces do Campo</S.ListaProdutosLi>
            <S.ListaProdutosLi>Que-Queijo</S.ListaProdutosLi>
            <S.ListaProdutosLi>Café do Zé</S.ListaProdutosLi>
          </S.ListaProdutos>
        </S.SubProdutos>
      )}

      {aberto && (
        <>
     
<S.MenuMobile>
  <S.LiMenuMobile><Link to="/" onClick={fecharMenu}>Home</Link></S.LiMenuMobile>
  <S.LinhaHor />

  {/* Produtos — sem Link, só abre o acordeão */}
  <S.LiMenuMobile onClick={() => setSubMobile(!subMobile)}>
    Produtos <S.SetaIcon $aberto={subMobile}>▼</S.SetaIcon>
  </S.LiMenuMobile>
  <S.SubMobile $aberto={subMobile}>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Hortaliças</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Legumes</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Frutas</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Frutas Exóticas</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Doces do Campo</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Que-Queijo</S.LiSubMobile>
    <S.LinhaHor />
    <S.LiSubMobile onClick={fecharMenu}>Café do Zé</S.LiSubMobile>
  </S.SubMobile>

  <S.LinhaHor />
  <S.LiMenuMobile><Link to="/contato" onClick={fecharMenu}>Ofertas</Link></S.LiMenuMobile>
  <S.LinhaHor />
  <S.LiMenuMobile><Link to="/contato" onClick={fecharMenu}>Unidades</Link></S.LiMenuMobile>
  <S.LinhaHor />
  <S.LiMenuMobile><Link to="/contato" onClick={fecharMenu}>Contato</Link></S.LiMenuMobile>
</S.MenuMobile>
  <S.Overlay onClick={fecharMenu} />
        </>
      )}
    </>
  )
}

export default MenuPrincipal