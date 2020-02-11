import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 15px;
  background: #26374c;
  width: 350px;
`;

export const CardHeader = styled.div`
  font-weight: bold;
  color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: "center";
  border-bottom: 1px solid #707070;
`;

export const CardFooter = styled.div`
  font-weight: bold;
  color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: "center";
  border-top: 1px solid #707070;
`;

export const CardBody = styled.div`
  margin: 10px 0;
  padding: 10px;
`;
