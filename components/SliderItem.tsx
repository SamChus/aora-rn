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

// const { width } = Dimensions.get("screen");
//using width as 375 here, but you use the actual width of the screen


const SliderItem = ({ item, index, scrollX }: Props) => {
  
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * 375, index * 375, (index + 1) * 375],
            [-375 * 0.50, 0, 375 * 0.50], 
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * 375, index * 375, (index + 1) * 375],
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
    width: 375,
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
