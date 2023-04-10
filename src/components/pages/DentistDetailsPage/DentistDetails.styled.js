import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10.1rem 0;
`;

export const CardWrapper = styled.div`
  width: 500px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
`;

export const DentistName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const DentistInfo = styled.p`
  margin: 5px 0;
`;

export const CardButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
`;
