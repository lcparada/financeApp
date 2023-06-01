import {
  View,
  Pressable,
  Keyboard,
  Modal,
  TextInputProps,
  Alert,
} from "react-native";
import InputAddSpendOrExpenseScreen from "../../components/InputAddSpendOrExpenseScreen";
import {
  BoxCalendar,
  BoxInputs,
  BoxTypeTransaction,
  BoxCategorys,
  CategorysLabel,
  Container,
  Expense,
  ExpenseText,
  Profit,
  ProfitText,
  Category,
  CategoryImage,
  Footer,
  ButtonAddTransaction,
  ButtonAddTransactionText,
} from "./styles";

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import Calendar from "../../components/Calendar";
import { FireStoreService } from "../../services/firestoreservice";

export default function AddSpendOrProfit() {
  const [typeTransaction, setTypeTransaction] = useState<"Lucro" | "Despesa">(
    "Lucro"
  );
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const [selectedDay, setSelectedDay] = useState<string>(
    new Date().toISOString()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );

  const [loading, setLoading] = useState<boolean>(false);

  async function newTransaction(
    typeTransaction: "Lucro" | "Despesa",
    selectedDay: string,
    amount: string,
    name: string,
    category: string
  ) {
    const data = {
      type: typeTransaction,
      date: selectedDay,
      value: amount,
      name: name,
      category: category,
      id: "",
    };
    if (amount !== "" && name !== "" && category !== "") {
      setLoading(true);
      try {
        await new FireStoreService().addNewTransaction(data);
        setLoading(false);
        setAmount("");
        setName("");
        Alert.alert("Sucesso", "Transação adicionada com sucesso");
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert("Erro", "Preencha todos os campos");
    }
  }

  return (
    <Container>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <BoxTypeTransaction>
          <Profit
            background={typeTransaction === "Lucro" ? "#345AF8" : "#fff"}
            style={{ elevation: 4 }}
            onPress={() => setTypeTransaction("Lucro")}
          >
            <ProfitText color={typeTransaction === "Lucro" ? "white" : "black"}>
              Lucro
            </ProfitText>
          </Profit>
          <Expense
            background={typeTransaction === "Despesa" ? "#345AF8" : "#fff"}
            style={{ elevation: 4 }}
            onPress={() => setTypeTransaction("Despesa")}
          >
            <ExpenseText
              color={typeTransaction === "Despesa" ? "white" : "black"}
            >
              Despesa
            </ExpenseText>
          </Expense>
        </BoxTypeTransaction>
        <BoxCalendar style={{ elevation: 4 }}>
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        </BoxCalendar>
        <BoxInputs>
          <InputAddSpendOrExpenseScreen
            label="quantidade:"
            keyboardType="numeric"
            placeholder="Ex: 300"
            value={amount}
            onChangeText={setAmount}
          />

          <InputAddSpendOrExpenseScreen
            label="nome:"
            placeholder="Ex: Carro"
            value={name}
            onChangeText={setName}
          />
        </BoxInputs>

        <BoxCategorys>
          <CategorysLabel>categorias:</CategorysLabel>
          <View
            style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
          >
            <Category
              background="#717171"
              style={{
                borderWidth: 2,
                borderColor: category === "Others" ? "#345AF8" : "transparent",
              }}
              onPress={() => setCategory("Others")}
            >
              <AntDesign name="plus" size={24} color="white" />
            </Category>

            <Category
              background="#c35e06"
              style={{
                borderWidth: 2,
                borderColor: category === "Car" ? "#345AF8" : "transparent",
              }}
              onPress={() => setCategory("Car")}
            >
              <CategoryImage source={require("../../assets/car.png")} />
            </Category>

            <Category
              background="#E61413"
              style={{
                borderWidth: 2,
                borderColor: category === "food" ? "#345AF8" : "transparent",
              }}
              onPress={() => setCategory("food")}
            >
              <CategoryImage source={require("../../assets/food.png")} />
            </Category>

            <Category
              background="green"
              style={{
                borderWidth: 2,
                borderColor:
                  category === "shopping" ? "#345AF8" : "transparent",
              }}
              onPress={() => setCategory("shopping")}
            >
              <CategoryImage source={require("../../assets/shopping.png")} />
            </Category>
          </View>
        </BoxCategorys>

        <Footer>
          <ButtonAddTransaction
            onPress={() =>
              newTransaction(
                typeTransaction,
                selectedDay,
                amount,
                name,
                category
              )
            }
            disabled={loading}
          >
            <ButtonAddTransactionText>
              {loading ? "Adicionando..." : "Adicionar"}
            </ButtonAddTransactionText>
          </ButtonAddTransaction>
        </Footer>
      </Pressable>
    </Container>
  );
}
