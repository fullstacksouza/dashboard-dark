import styled from "styled-components";

export const Container = styled.div`
  /* background: #161b2e; */
  flex-direction: row;
  display: flex;
  height: 100vh;
  /* flex: 2; */
`;

export const MinimalMenu = styled.div`
  background: #1c293b;
  min-width: 50px;
  padding: 10px 5px;
`;

export const ExpandedMenu = styled.div`
  background: #161b2e;
  min-width: 200px;
`;

export const ExpandedTitleContainer = styled.div`
  padding: 15px 5px;
  border-bottom: solid 1px #707070;
  margin: 0 20px;
`;

export const ExpandedTitle = styled.div`
  color: #fff;
`;

export const ExpandedOption = styled.div`
  color: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  /* background: red; */
`;
