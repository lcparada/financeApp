import { useEffect } from "react";
import CardSavingOrExpense from "../../components/CardSavingOrExpense";
import {
  AmountContainer,
  Body,
  BodyTitle,
  CardAmount,
  CardAmountTitle,
  CardAmountValue,
  Container,
  Footer,
  Header,
  HeaderName,
  HeaderPhoto,
  Icon,
  IconWinOrLose,
  WinOrLose,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { VictoryPie } from "victory-native";

import { TransactionModel } from "../../models/transactionModel";

import { Alert } from "react-native";

import { FireStoreService } from "../../services/firestoreservice";

import { useState } from "react";
import moment from "moment";

export default function Home() {
  const [expenses, setExpenses] = useState<TransactionModel[]>([]);
  const [profits, setProfits] = useState<TransactionModel[]>([]);

  async function receiveTransactions() {
    try {
      const data =
        await new FireStoreService().getAllTransactions<TransactionModel>();
      setExpenses(
        data.filter(
          (item) =>
            item.type === "Despesa" && moment(item.date).isBefore(moment())
        )
      );

      setProfits(
        data.filter(
          (item) =>
            item.type === "Lucro" && moment(item.date).isBefore(moment())
        )
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

  // useEffect(() => {
  //   console.log(expenses);
  //   console.log(expenses.reduce((acc, item) => acc + Number(item.value), 0));
  // }, []);

  const data = [
    {
      x: "Lucro",
      y: profits.reduce((acc, item) => acc + Number(item.value), 0),
      color: "rgba(0, 100, 0,1)",
    },
    {
      x: "Gasto",
      y: expenses.reduce((acc, item) => acc + Number(item.value), 0),
      color: "rgba(237, 248, 75,1)",
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderPhoto source={require("../../assets/profilephoto2.jpg")} />
        <HeaderName>Lucas Parada</HeaderName>
        <Icon style={{ elevation: 3 }}>
          <Feather name="bell" size={24} color="black" />
        </Icon>
      </Header>

      <AmountContainer>
        <CardAmount style={{ elevation: 4 }}>
          <CardAmountTitle>Saldo disponível</CardAmountTitle>
          <CardAmountValue>
            R${" "}
            {(
              profits.reduce((acc, item) => acc + Number(item.value), 0) -
              expenses.reduce((acc, item) => acc + Number(item.value), 0)
            ).toFixed(2)}
          </CardAmountValue>
          {/* <WinOrLose color="green">R$ 29.82</WinOrLose>
          <IconWinOrLose>
            <Feather name="trending-up" size={24} color="green" />
          </IconWinOrLose> */}
        </CardAmount>
      </AmountContainer>

      <Body>
        <BodyTitle>Visão geral</BodyTitle>
        <VictoryPie
          data={data}
          innerRadius={80}
          padAngle={5}
          height={320}
          colorScale={data.map((item) => item.color)}
          style={{
            labels: {
              display: "none",
            },
          }}
        />
      </Body>

      <Footer>
        <CardSavingOrExpense
          title="Valor guardado"
          value={profits
            .reduce((acc, item) => acc + Number(item.value), 0)
            .toFixed(2)
            .toString()}
          // variation="12"
          iconTop="attach-money"
          // iconVariation="trending-up"
          backgroundcolor="rgba(0, 100, 0, 0.3)"
          colorIcon="green"
          // colorIconVariation="green"
        />

        <CardSavingOrExpense
          title="Total gasto"
          value={expenses
            .reduce((acc, item) => acc + Number(item.value), 0)
            .toFixed(2)
            .toString()}
          iconTop="money-off"
          // variation="8"
          // iconVariation="trending-up"
          backgroundcolor="rgba(237, 248, 75, 0.562)"
          colorIcon="rgba(202, 216, 5, 0.89)"
          // colorIconVariation="rgba(202, 216, 5, 0.89)"
        />
      </Footer>
    </Container>
  );
}
