import styled from 'styled-components';

export const LoginPageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 10.1rem 0;
  width: 100%;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 29rem;
`;

export const Input = styled.input`
  padding: 8px 16px 8px 16px;
  border-radius: 5rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  border-radius: 5rem;

  &:hover {
    background-color: #0062cc;
  }
`;
