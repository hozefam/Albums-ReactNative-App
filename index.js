// Import React
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create Component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

// Render to Device
AppRegistry.registerComponent("albums", () => App);
