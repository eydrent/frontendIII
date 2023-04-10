import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: ${(props) => props.theme === "light" ? "#fff" : "#000"};
  color: ${(props) => props.theme === "light" ? "#000" : "#fff"};
  width: 100%;
`;

export const MainUL = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const ButtonToggle = styled.button`
  padding: 8px 16px 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5rem;

  &:hover {
    background-color: #0062cc;
  }
`;