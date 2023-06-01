import { TouchableOpacity, FlatList, Text } from "react-native";
import {
  Body,
  Container,
  Header,
  ScreenProfitText,
  ScreenSpendsText,
} from "./styles";

import { Animated, Alert } from "react-native";
import { useRef, useState, useEffect } from "react";
import AnimatedLine from "../../components/AnimatedLine";
import CardProfitOrSpend from "../../components/CardProfitOrSpend";
import { TransactionModel } from "../../Models/transactionModel";
import { FireStoreService } from "../../services/firestoreservice";

export default function Historic() {
  const animation = useRef(new Animated.Value(0)).current;
  const [screen, setScreen] = useState<"Lucros" | "Gastos">("Lucros");

  const [transactions, setTransactions] = useState<TransactionModel[]>([]);

  const moveLine = () => {
    const toValue: number = screen === "Lucros" ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    moveLine();
  }, [screen]);

  async function receiveTransactions() {
    try {
      setTransactions(
        await new FireStoreService().getAllTransactions<TransactionModel>()
      );
    } catch (e) {
      Alert.alert("Erro", "Erro ao receber transações");
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      receiveTransactions();
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => setScreen("Lucros")}>
          <ScreenProfitText>Lucros</ScreenProfitText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen("Gastos")}>
          <ScreenSpendsText>Gastos</ScreenSpendsText>
        </TouchableOpacity>
      </Header>
      <AnimatedLine animation={animation} />

      <Body>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
          data={
            screen === "Lucros"
              ? transactions.filter((item) => item.type === "Lucro")
              : transactions.filter((item) => item.type === "Despesa")
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardProfitOrSpend
              name={item.name}
              value={item.value}
              category={item.category}
              date={item.date}
              id={item.id}
            />
          )}
        />
      </Body>
    </Container>
  );
}
