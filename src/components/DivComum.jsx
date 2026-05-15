import * as S from './DivComum.styles.jsx'

function DivComum({ children, titulo, className }) {
  return (
      <S.Container className={className}>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default DivComum