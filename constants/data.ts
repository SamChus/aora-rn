import { ImageSourcePropType } from "react-native";

export type ImageSliderProps = {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
  color: string;
};

export const ImageSlider = [
  {
    id: 1,
    image: require("@/assets/images/trendImage1.png"),
    title: "Get the best deals",
    description: "Get the best deals on all products",
    color: "#FFDD00",
  },
  {
    id: 2,
    image: require("@/assets/images/trendImage2.png"),
    title: "All products",
    description: "Get the best deals on aproducts",
    color: "#FFDD00",
  },
  {
    id: 3,
    image: require("@/assets/images/trendImage3.png"),
    title: "Electronics",
    description: "Get the best deals on all products",
    color: "#FFDD00",
  },
  {
    id: 4,
    image: require("@/assets/images/trendImage2.png"),
    title: "All products",
    description: "Get the best deals on all products",
    color: "#FFDD00",
  },
  {
    id: 5,
    image: require("@/assets/images/trendImage3.png"),
    title: "Electronics",
    description: "Get the best deals on all products",
    color: "#FFDD00",
  },
];
