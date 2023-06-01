import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const BoxTypeTransaction = styled.View`
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
`;

export const Profit = styled.TouchableOpacity<{ background: string }>`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
`;

export const ProfitText = styled.Text<{ color: string }>`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: ${(props) => props.color};
`;

export const Expense = styled.TouchableOpacity<{ background: string }>`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
`;

export const ExpenseText = styled.Text<{ color: string }>`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: ${(props) => props.color};
`;

export const BoxCalendar = styled.View`
  margin-top: 50px;
  width: 360px;
  align-self: center;
  height: 140px;
  background-color: #f4f6fa;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const BoxInputs = styled.View`
  align-items: center;
  row-gap: 10px;
  margin-top: 30px;
`;

export const BoxCategorys = styled.View`
  margin-left: 30px;
  margin-top: 10px;
`;

export const CategorysLabel = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #9298a2;
`;

export const Category = styled.TouchableOpacity<{ background: string }>`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
`;

export const CategoryImage = styled.Image`
  width: 45px;
  height: 45px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 80px;
`;

export const ButtonAddTransaction = styled.TouchableOpacity`
  width: 360px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #345af8;
`;

export const ButtonAddTransactionText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
`;

export const ModalAmount = styled.Modal``;
