import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 80px;
  margin-left: 30px;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const HeaderPhoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const HeaderName = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  color: #333333;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const AmountContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const CardAmount = styled.View`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
  padding-left: 20px;
  padding-top: 15px;
`;

export const CardAmountTitle = styled.Text`
  font-family: Lexend_300Light;
  font-size: 15px;
  color: #333333;
`;

export const CardAmountValue = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  color: #333333;
  top: 50px;
  position: absolute;
  left: 20px;
`;

export const WinOrLose = styled.Text<{ color: string }>`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: ${(props) => props.color};
  position: absolute;
  top: 55px;
  right: 60px;
`;

export const IconWinOrLose = styled.View`
  position: absolute;
  top: 55px;
  right: 30px;
`;

export const Body = styled.View`
  padding-left: 20px;
  padding-top: 20px;
  flex: 1;
  align-items: center;
`;

export const BodyTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  color: #000;
  position: absolute;
  left: 30px;
  top: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 60px;
`;
