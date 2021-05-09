import React from "react";
import { gql } from "apollo-boost"; // JS는 Apollo를 이해하지 못하기에 GraphQL을 import한다.

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default function Home() {
  return <h1>Home</h1>;
}
