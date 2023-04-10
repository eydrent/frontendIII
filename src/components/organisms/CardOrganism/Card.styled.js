import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 350px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const DentistName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DentistInfo = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardButtonLink = styled.a`
    width: 100%;
`;

export const CardButton = styled.button`
  // padding: 10px 20px;
    // background-color: ${({theme}) => theme.buttonBackground};
    // color: ${({theme}) => theme.text};
  // border: none;
  // border-radius: 5px;
  // cursor: pointer;
  padding: 8px 16px 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5rem;
  width: 100%;

  &:hover {
    background-color: #0062cc;
  }
`;