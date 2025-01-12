import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ImageSliderProps } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: ImageSliderProps;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");
// const ITEM_WIDTH = width; // Adjust the width to show 3 items

const SliderItem = ({ item, index, scrollX }: Props) => {
  
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.6, 0, width * 0.6],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.8, 1, 0.8],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image source={item.image} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text>{item.title}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: width,
  },
  image: {
    width: 168,
    height: 268,
    borderRadius: 14,
  },
  background: {
    position: "absolute",
    width: 168,
    height: 268,
    padding: 14,
    borderRadius: 14,
    justifyContent: "space-between",
  },
});
