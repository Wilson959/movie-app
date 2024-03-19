import styled from "styled-components/native";
import COLORS from "@/constants/colors";
import { Dimensions } from "react-native";

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const ItemImgContainer = styled.View`
  width: ${Dimensions.get("window").width * 0.3}px;
  height: ${Dimensions.get("window").width * 0.4}px;
  margin-right: 24px;
`;

const ItemImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const ItemName = styled.Text`
  color: ${COLORS.secondary};
  font-weight: 600;
  font-size: 18px;
`;

const ItemCharacter = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 16px;
`;

const Item = {
  Container: ItemContainer,
  TextContainer: ItemTextContainer,
  ImageContainer: ItemImgContainer,
  Image: ItemImage,
  Name: ItemName,
  Character: ItemCharacter,
};

const Separator = styled.View`
  height: 2px;
  background-color: ${COLORS.secondary};
`;

const PlaceHolder = styled.View`
  background-color: ${COLORS.secondary};
  width: 100%;
  height: 100%;
`;

export { Item, Separator, PlaceHolder };
