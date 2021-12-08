import styled from "styled-components";
import { device } from "../../device";

export const StyledAuthPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row-reverse;
    height: 90vh;
  }
`;

export const AuthSide = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 50vw;
    height: 90vh;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
`;

export const DetailSide = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);

  @media ${device.laptop} {
    width: 50vw;
    height: 90vh;
  }
`;

export const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;

  padding: 20px;
  border-radius: 15px;
  margin-bottom: 100px;
  border: 3px solid;
`;

export const AuthNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const AuthNavigationHeader = styled.h2``;
