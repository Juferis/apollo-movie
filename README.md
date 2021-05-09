# GraphQL로 영화 웹 앱 만들기

> GraphQL로 만든 영화 API를 이용하기 위해 http://localhost:4000/포트 서버를 실행해 준다.  
> 4000번 포트를 Apollo의 uri로 지정해 JSON및 Query를 받아온다.  
> **받아온 결과**  
> ![img](./img/img_01.jpg)  
> [GraphQL로 만든 영화 API 링크](https://github.com/Juferis/for-practice/tree/master/movieql)
>
> 받은 Query를 이용해 영화의 포스터를 띄워주고 포스터를 클릭하면,  
> /:id 페이지로 넘어가 상세 정보를 알려준다.

## 1.0 참고 및 사용 기술

### 1.1 사용 기술

> GraphQL v15.5.0  
> React v17.0.2  
> @apollo/react-hooks v4.0.0  
> apollo-boost v0.4.9  
> react-router-dom v5.2.0  
> styled-components v5.3.0

### 1.2 참고

> **Apollo**  
> Apollo Client in your React app 설명 [링크](https://www.apollographql.com/docs/react/get-started/)  
> apollo-boost : GraphQl Yoga처럼 모든 것을 다 설정해 둔 패키지
>
> **styled-components** > [styled-components](https://hellominchan.tistory.com/99)  
> JS 파일 내에서 CSS를 사용할 수 있게 해주는 React 프레임워클 주요 대상으로 하는 라이브러리
>
> **Link**  
> <a href={link}>는 React App을 죽게 만들기에 react-router-dom의 Link를 사용
>
> **Apollo의 query**  
> query에 variable이 있을 때 apollo를 위해 query의 이름이 있어야 한다.  
> apollo가 변수의 타입($id: Int)을 검사하도록 도와준다.  
> ![img](./img/apollo-query.jpg)
