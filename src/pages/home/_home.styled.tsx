import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--grey-3);
  color: var(--grey-9);
  font-family: Montserrat, serif;

  display: flex;
  align-items: flex-start;
  padding: 0.25em 0;
  min-height: 100vh;
`;

export const LeftSidebar = styled.div`
  width: 240px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardActions = styled.div`
  border: 2px solid var(--grey-9);
  border-radius: 4px;
  padding: 0 4px;
  width: 80%;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--grey-2);
  padding: 16px 20px;
  border-radius: 4px;
  border: 2px solid var(--grey-9);
  margin: 8px;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: var(--grey-4);
    text-decoration: underline;
    color: var(--grey-9);
  }
`;