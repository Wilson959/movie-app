import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Button, IconButton } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import COLORS from "@/constants/colors";
import useApi from "@/hooks/useApi";
import { Genre } from "@/types/api";
import CategoryModal from "@/components/explore-screen/CategoryModal";
import CategoryList from "@/components/explore-screen/CategoryList";
import { ExploreStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<ExploreStackParamList, "Explore">;

const ExploreScreen = ({navigation} : Props) => {
  const [category, setCategory] = useState({ id: 0, name: "" });
  const { data: genres } = useApi("fetchCategories");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  useEffect(() => {
    if (genres && genres.length > 0) setCategory(genres[0]);
  }, [genres]);

  const categoryItemPressHandler = (item: Genre) => {
    setCategory(item);
    setCategoryModalVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginBottom: 8,
        padding: 12,
      }}
    >
      <View
        style={{ flexDirection: "row", marginBottom: 8, alignItems: "center" }}
      >
        <View style={{ flex: 9, flexDirection: "row" }}>
          <Text
            style={{
              flex: 7,
              color: COLORS.text,
              fontSize: 28,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Category
          </Text>
          <Button
            mode="outlined"
            textColor={COLORS.secondary}
            onPress={() => setCategoryModalVisible(true)}
            accessibilityLabel="Change category"
            style={{
              flex: 3,
              paddingVertical: 2,
              borderColor: COLORS.secondary,
              alignItems: "center",
              justifyContent: "center",
            }}
            labelStyle={{ fontSize: 16, fontWeight: "600" }}
          >
            {category.name}
          </Button>
        </View>
        <IconButton
          icon="magnify"
          iconColor={COLORS.secondary}
          size={28}
          onPress={() => navigation.navigate('Search')}
          accessibilityLabel="Search for a movie"
          style={{ flex: 1 }}
        />
      </View>

      <CategoryList genreId={category.id} />

      <CategoryModal
        visible={categoryModalVisible}
        onDismiss={() => setCategoryModalVisible(false)}
        onItemPress={categoryItemPressHandler}
      />
      
    </View>
  );
};

export default ExploreScreen;
