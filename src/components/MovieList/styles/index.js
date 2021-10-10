import styled from "styled-components";

export const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10%;
`;

export const MovieItem = styled.div`
  width: 200px;
  margin: 10px 10px 25px;
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieName = styled.h2`
  color: #fff;
  font-size: 20px;
  margin: 10px 0;
`;

export const ReleaseDate = styled.span`
  color: #6c757d;
  display: block;
  margin-bottom: 5px;
  &::last-child {
    margin: 0;
  }
`;
