import styled from "styled-components/native";

export const InputLabel = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #9298a2;
`;

export const Input = styled.TextInput`
  width: 360px;
  height: 50px;
  border-radius: 10px;
  font-family: Lexend_400Regular;
  color: #333333;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f4f6fa;
`;

export const ButtonInput = styled.TouchableOpacity`
  width: 360px;
  height: 50px;
  border-radius: 10px;
  background-color: #f4f6fa;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
`;

export const ButtonInputText = styled.Text<{ color: string }>`
  font-family: Lexend_400Regular;
  color: ${(props) => props.color};
`;

export const OverLay = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const BackgroundInput = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
  justify-content: center;
`;
