import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, Stack } from "expo-router";

const productDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text style={{ fontSize: 20 }}>productDetailsScreen for id: {id}</Text>
    </View>
  );
};

export default productDetailsScreen;
