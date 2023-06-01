import { Feather } from "@expo/vector-icons";
import { ContainerDays, ContainerMonths, Months } from "./styles";
import { TouchableOpacity, View, Dimensions } from "react-native";

import { useState, Fragment, useEffect, useRef } from "react";
import { calculateDaysInMonth, months } from "../../helpers";
import { FlatList } from "react-native";
import ListDays from "../ListDays";
import { YearText } from "./styles";
import moment from "moment";

interface CalendarProps {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

export default function Calendar(props: CalendarProps) {
  const [daysInMonthSelected, setDaysInMonthSelected] = useState<string[]>([]);

  const { width } = Dimensions.get("screen");

  const daysRef = useRef<FlatList>(null);

  useEffect(() => {
    setDaysInMonthSelected(calculateDaysInMonth(props.selectedMonth));
  }, [props.selectedMonth]);

  useEffect(() => {
    if (props.selectedMonth !== new Date().getMonth()) {
      props.setSelectedDay(
        moment()
          .set({
            year: new Date().getFullYear(),
            month: props.selectedMonth,
            date: 1,
          })
          .toISOString()
      );
      daysRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    } else if (moment(props.selectedDay).date() === 1) {
      props.setSelectedDay(new Date().toISOString());
      daysRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    } else {
      props.setSelectedDay(new Date().toISOString());
      daysRef.current?.scrollToOffset({
        offset: moment().date() * (width / 9),
        animated: true,
      });
    }
  }, [props.selectedMonth]);

  return (
    <Fragment>
      <ContainerMonths>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
        >
          <Feather name="calendar" size={24} color="#345AF8" />
          <Months>{months[props.selectedMonth]}</Months>
          <YearText>2023</YearText>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              if (props.selectedMonth === 0) {
                props.setSelectedMonth(11);
              } else {
                props.setSelectedMonth(props.selectedMonth - 1);
              }
            }}
          >
            <Feather name="chevron-left" size={24} color="#9298a2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (props.selectedMonth === 11) {
                props.setSelectedMonth(0);
              } else {
                props.setSelectedMonth(props.selectedMonth + 1);
              }
            }}
          >
            <Feather name="chevron-right" size={24} color="#9298a2" />
          </TouchableOpacity>
        </View>
      </ContainerMonths>

      <ContainerDays>
        <FlatList
          ref={daysRef}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width / 9}
          pagingEnabled={true}
          horizontal={true}
          data={daysInMonthSelected}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ListDays
              days={item}
              selectedMonth={props.selectedMonth}
              setSelectedDay={props.setSelectedDay}
              selectedDay={props.selectedDay}
            />
          )}
        />
      </ContainerDays>
    </Fragment>
  );
}
