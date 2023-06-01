import { Days, DaysButton, DaysItem, DaysName } from "./styles";

import { Dimensions } from "react-native";

import moment from "moment";
import { daysOfTheWeekInPortuguese } from "../../helpers";

type ListDaysProps = {
  days: string;
  selectedMonth: number;
  setSelectedDay: (day: string) => void;
  selectedDay: string;
};

export default function ListDays(props: ListDaysProps) {
  const { width } = Dimensions.get("screen");

  const isSameDay = moment(props.selectedDay).isSame(props.days, "day");

  return (
    <DaysButton
      width={width / 9}
      onPress={() => props.setSelectedDay(props.days)}
    >
      <DaysItem background={isSameDay ? "#e5e6f8" : "transparent"}>
        <DaysName color={isSameDay ? "#333333" : "#adb3ba"}>
          {daysOfTheWeekInPortuguese[moment(props.days).weekday()]}
        </DaysName>
        <Days>{moment(props.days).format("D")}</Days>
      </DaysItem>
    </DaysButton>
  );
}
