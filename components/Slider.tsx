import { View, Text, FlatList } from "react-native";
import React from "react";
import { ImageSlider, ImageSliderProps } from "@/constants/data";
import SliderItem from "./SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  itemList: ImageSliderProps[];
};

const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        onScroll={onScrollHandler}
      />
    </View>
  );
};

export default Slider;
