import {
  Card,
  CardIcon,
  CardText,
  CardValue,
  CardVariationValue,
  ContainerVariation,
} from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

type CardSavingOrExpenseProps = {
  title: string;
  value: string;
  // variation: string;
  iconTop: any;
  // iconVariation: any;
  backgroundcolor: string;
  colorIcon: string;
  // colorIconVariation: string;
};

export default function CardSavingOrExpense(props: CardSavingOrExpenseProps) {
  return (
    <Card background={props.backgroundcolor}>
      <CardIcon background={props.colorIcon}>
        <MaterialIcons name={props.iconTop} size={24} color="white" />
      </CardIcon>
      <CardText>{props.title}</CardText>
      <CardValue>R$ {props.value}</CardValue>
      <ContainerVariation>
        {/* <CardVariationValue>{props.variation}%</CardVariationValue>
        <Feather
          name={props.iconVariation}
          size={18}
          color={props.colorIconVariation}
          style={{ marginTop: 10 }}
        /> */}
      </ContainerVariation>
    </Card>
  );
}
