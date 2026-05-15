import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  height: auto;
  background: var(--principal);
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
flex-direction: column;
  padding: 10px;
  justify-content: center;
  text-align: justify;
`;

export const Titulo = styled.h2`
  background: var(--principaldark);
  text-align: center;
  width: 100%;
  padding: 20px;
  height: auto;
  overflow: hidden;
`;