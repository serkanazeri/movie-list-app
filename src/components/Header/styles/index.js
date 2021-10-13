import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background: linear-gradient(transparent, #000),
    url("/images/header-img.webp") center no-repeat;
  background-size: cover;
  height: 30vh;
  @media (max-width: 1366px) {
    height: 25vh;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 3.75rem;
  color: #fff;
  margin: 0 auto;
  @media (max-width: 1366px) {
    font-size: 3rem;
  }
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
`;
