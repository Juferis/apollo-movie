import React from "react";
import { gql } from "apollo-boost"; // JS는 Apollo를 이해하지 못하기에 GraphQL을 import한다.
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default function Home() {
  // @apollo/react-hooks에서 useQuery를 사용할 수 있게 해준다.
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>GraphQL 영화 웹</Title>
        <Subtitle>with Apollo</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {/* // map은 리스트의 요소를 지정된 함수로 처리해주는 함수 */}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image} />
          ))}
        </Movies>
      )}
    </Container>
  );
}
