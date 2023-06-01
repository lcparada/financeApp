import styled from "styled-components/native";

export const DaysButton = styled.TouchableOpacity<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 60px;
`;

export const DaysItem = styled.View<{ background: string }>`
  width: 90%;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 10px;
  height: 50px;
`;

export const DaysName = styled.Text<{ color: string }>`
  font-family: Lexend_400Regular;
  color: ${(props) => props.color};
`;

export const Days = styled.Text`
  font-family: Lexend_400Regular;
  color: #333333;
  font-size: 16px;
`;
