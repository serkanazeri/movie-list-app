import styled from "styled-components";

export const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  min-height: 40vh;
  @media (max-width: 1366px) {
    padding: 0 15%;
    min-height: 50vh;
  }
  @media (max-width: 1024px) {
    padding: 0 10%;
  }
`;

export const MovieItem = styled.div`
  margin: 0 1rem;
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieName = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  margin: 0.75rem 0 0.5rem;
`;

export const ReleaseDate = styled.span`
  color: #6c757d;
  display: block;
  margin-bottom: 1rem;
  &::last-child {
    margin: 0;
  }
`;
