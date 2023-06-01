import {
  BackgroundInput,
  ButtonInput,
  ButtonInputText,
  Input,
  InputLabel,
  OverLay,
} from "./styles";
import { TextInputProps, View, Modal, TextInput } from "react-native";

import { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";

type InputAddSpendOrExpenseScreenProps = TextInputProps & {
  label: string;
};

export default function InputAddSpendOrExpenseScreen(
  props: InputAddSpendOrExpenseScreenProps
) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const inputRef = useRef<TextInput>(null);

  return (
    <View>
      <View>
        <InputLabel>{props.label}</InputLabel>
      </View>
      <ButtonInput onPress={() => setModalVisible(true)}>
        <ButtonInputText color={props.value === "" ? "#9298a2" : "#333333"}>
          {props.value === "" ? props.placeholder : props.value}
        </ButtonInputText>
      </ButtonInput>

      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent
        onShow={() => {
          inputRef.current?.blur();
          inputRef.current?.focus();
        }}
      >
        <OverLay onPress={() => setModalVisible(false)}>
          <BackgroundInput>
            <Input ref={inputRef} {...props} />
          </BackgroundInput>
        </OverLay>
      </Modal>
    </View>
  );
}
