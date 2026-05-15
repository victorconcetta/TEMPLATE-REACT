
import * as S from './home.styles.jsx'
import DivComum from '../components/DivComum.jsx'
import styled from 'styled-components'


const DivComumFull = styled(DivComum)`
  width: 95%;
`

function Sobre() {
  return (
<div className="Subpagina">
  <S.Container>
    
<DivComumFull titulo="Sobre">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </DivComumFull >

  </S.Container>
  </div>
  )
}

export default Sobre