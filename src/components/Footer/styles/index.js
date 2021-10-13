import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(#000, transparent),
    url("/images/footer-img.jpg") center no-repeat;
  background-size: cover;
  height: 30vh;
  @media (max-width: 1366px) {
    height: 25vh;
  }
`;
