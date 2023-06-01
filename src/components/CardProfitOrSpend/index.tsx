import {
  Card,
  CardDate,
  CardInfo,
  CardPhoto,
  CardPhotoBackground,
  CardTitle,
  CardValue,
  RightContent,
} from "./styles";

type CardProfitOrSpendProps = {
  name: string;
  date: string;
  value: string;
  category: string;
  id: string;
};

import { months } from "../../helpers";

import { Alert } from "react-native";

import moment from "moment";
import { FireStoreService } from "../../services/firestoreservice";

export default function CardProfitOrSpend(props: CardProfitOrSpendProps) {
  function removeTransaction() {
    try {
      Alert.alert("Atenção!", "Desejar excluir a transação?", [
        {
          text: "Sim",
          onPress: async () =>
            await new FireStoreService().deleteTransaction(props.id),
        },
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    } catch (e) {
      Alert.alert("Erro", "Erro ao remover transação");
    }
  }

  return (
    <Card
      style={{ elevation: 4 }}
      onLongPress={removeTransaction}
      delayLongPress={1000}
    >
      <RightContent>
        <CardPhotoBackground
          backgroundcolor={
            props.category === "Food"
              ? "#e61413"
              : props.category === "Car"
              ? "#c35e06"
              : props.category === "Shopping"
              ? "green"
              : "white"
          }
        >
          {props.category === "Food" ? (
            <CardPhoto source={require("../../assets/food.png")} />
          ) : props.category === "Car" ? (
            <CardPhoto source={require("../../assets/car.png")} />
          ) : props.category === "Shopping" ? (
            <CardPhoto source={require("../../assets/shopping.png")} />
          ) : (
            <CardPhoto source={require("../../assets/others.png")} />
          )}
        </CardPhotoBackground>
        <CardInfo>
          <CardTitle>{props.name}</CardTitle>
          <CardDate>{`${moment(props.date).date()} ${
            months[moment(props.date).month()]
          }, ${new Date().getFullYear()}`}</CardDate>
        </CardInfo>
      </RightContent>
      <CardValue>R$ {props.value}</CardValue>
    </Card>
  );
}
