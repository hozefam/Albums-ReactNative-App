import React from "react";
import { View, Text, Image, Linking } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, image, url, thumbnail_image } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: { fontSize: 18 },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default AlbumDetail;
