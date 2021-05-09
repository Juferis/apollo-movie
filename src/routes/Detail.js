import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// query에 variable이 있을 때 apollo를 위해 query의 이름이 있어야 한다.
// query getMovie($id: Int) 부분은 apollo를 위한 query
// movie(id: $id) 부분은 server를 위한 query
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      summary
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }, // 받아오는 id가 String이라 "자바스크립트 자동 형변환"을 이용
  });
  if (loading) {
    return "loading...";
  }
  if (data && data.movie) {
    return <div>{data.movie.title}</div>;
  }
}
