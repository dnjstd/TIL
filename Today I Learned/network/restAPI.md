# REST API

## REST란?

REST(Representational State Transfer)의 약자. <br/>
자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미한다.

## REST API란?

‘REST하게 클라이언트와 서버간에 데이터를 주고 받는 방식’이다.

1. HTTP URI(Uniform Resource Identifier, 웹상 자료의 고유식별자)를 통해 자원을 명시하고,
2. HTTP Method(POST, GET, PUT, DELETE)를 통해
3. 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미한다.

## CRUD Operation

대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로 <br/>
REST에서의 CRUD Operation 동작 예시는 다음과 같다.

Create : 데이터 생성(POST)
Read : 데이터 조회(GET)
Update : 데이터 수정(PUT)
Delete : 데이터 삭제(DELETE)
