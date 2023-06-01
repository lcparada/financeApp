import styled from "styled-components/native";

export const Card = styled.View<{ background: string }>`
  width: 180px;
  height: 200px;
  background-color: ${(props) => props.background};
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 20px;
`;

export const CardIcon = styled.View<{ background: string }>`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #333333;
  margin-top: 10px;
`;

export const CardValue = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  color: #000;
  margin-top: 30px;
`;

export const ContainerVariation = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const CardVariationValue = styled.Text`
  font-family: Lexend_400Regular;
  color: #333333;
  font-size: 14px;
  margin-top: 10px;
`;
