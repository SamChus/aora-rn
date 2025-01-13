import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderProps } from '@/constants/data'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type Props = {
    items: ImageSliderProps[],
    scrollX: SharedValue<number>,
    paginationIndex: number
}

const Pagination = ({items, paginationIndex, scrollX}: Props) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        const pgAnimationStyle = useAnimatedStyle(() => {
            const dotWidth = interpolate(
                scrollX.value,
                [(index - 1) * 375, index * 375, (index + 1) * 375],
                [8, 20, 8],
                Extrapolation.CLAMP
            )
            return {
                width: dotWidth,
            }
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              pgAnimationStyle,
              {
                backgroundColor:
                  index === paginationIndex ? "#FFA101" : "#7B7B8B",
              },
            ]}
            key={index}
          />
        );
     })}
    </View>
  );
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#7B7B8B",
    marginHorizontal: 2,
  },
});