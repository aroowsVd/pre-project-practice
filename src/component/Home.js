import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-left: 5px;
  font-weight: 700;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    list-style: none;
  }
`;

function Home() {
  const todos = [
    {
      id: 1,
      text: '투두스',
    },
    {
      id: 2,
      text: 'next',
    },
  ]
  const [text, setText] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Container>
      <H1>To Do List</H1>
      <Form onSubmit={onSubmit}>
        <Input type="text" value={text} onChange={onChange} />
        <Button>ADD</Button>
      </Form>
      <Ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </Ul>
    </Container>
  )
}

export default Home;