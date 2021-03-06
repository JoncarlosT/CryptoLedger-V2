import styled from "styled-components";

export const StyledButtonDiv = styled.button`
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 0.12em;
  box-sizing: border-box;
  color: #00a84f;
  display: block;
  height: 45px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 6em;
  z-index: 2;
  border-style: none;

  :hover {
    color: #ebebeb;
  }
`;

export const Span = styled.span`
  align-items: center;
  background: #191a19;
  border-radius: 0.12em;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;

  :hover {
    background: transparent;
  }
`;
