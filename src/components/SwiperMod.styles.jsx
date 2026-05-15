import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 0px;


  /* ---------- SLIDES ---------- */

  .swiper-slide {
    opacity: 0.4;

    transition: 0.3s;
  }

  .swiper-slide-active {
    opacity: 1;

    transform: scale(1);
  }

  /* ---------- SETAS ---------- */

  .swiper-button-next,
  .swiper-button-prev {

    color: white;

    /* TAMANHO DAS SETAS */

    transform: scale(0.7);

  }

  /* ---------- PAGINAÇÃO ---------- */

  .swiper-pagination-bullet {

    background: white;

    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {

    opacity: 1;
  }
`;

export const SlideBox = styled.div`
    width: 100%;
    aspect-ratio: 2 / 1;
    background: #444;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    overflow: hidden;
`;