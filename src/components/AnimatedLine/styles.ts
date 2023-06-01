import styled from "styled-components/native";

export const LineSelectedScreen = styled.View<{
  width: number;
}>`
  position: absolute;
  border-bottom-width: 2px;
  border-color: #345af8;
  width: ${(props) => props.width}px;
  top: 10px;
`;
