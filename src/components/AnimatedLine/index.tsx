import { useRef } from "react";
import { LineSelectedScreen } from "./styles";

import { Dimensions, Animated, Button } from "react-native";

type AnimatedLineProps = {
  animation: Animated.Value;
};

export default function AnimatedLine(props: AnimatedLineProps) {
  const secondPartScreen = Dimensions.get("window").width / 2;

  const styleLine = {
    transform: [
      {
        translateX: props.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, secondPartScreen],
        }),
      },
    ],
  };

  return (
    <Animated.View style={styleLine}>
      <LineSelectedScreen width={secondPartScreen} />
    </Animated.View>
  );
}
