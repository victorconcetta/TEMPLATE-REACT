import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
  width: 50vw;
  min-height: 300px;
  height: auto;
  border-radius: 30px;
  border: 15px solid var(--principal);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  
  @media (max-width: 768px) {
 width: 90vw;
 border: 10px solid var(--principal);

  }

`
export const Content = styled.div`
display: flex;
padding: 10px;
justify-content: center;
text-align: justify;

`
export const Titulo = styled.h2`
background: var(--principal);
text-align: center;
width: 100%;
padding-bottom: 10px;
height: auto;
overflow: hidden;
`;





