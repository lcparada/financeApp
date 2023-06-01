import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 360px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 25px;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const RightContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardPhotoBackground = styled.View<{ backgroundcolor: string }>`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundcolor};
`;

export const CardPhoto = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CardInfo = styled.View`
  margin-left: 10px;
`;

export const CardTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 15px;
`;

export const CardDate = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 12px;
  color: #a1a3a7;
`;

export const CardValue = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 15px;
`;
