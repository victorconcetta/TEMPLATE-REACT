import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 1;
    overflow: hidden;
    border-radius: 10px;
`;

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const Legenda = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 2px 50px;
    color: white;
font-size: clamp(1rem, 2.2dvw, 40px);
    font-weight: bold;
    text-align: right;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;