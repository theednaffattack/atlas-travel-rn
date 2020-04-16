import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import faker from "faker";
import { StackNavigationProp } from "@react-navigation/stack";

import { FlexView, Text } from "./primitive-or-common";
import { TravelsParamList } from "./travels-stack";
import { HotelCard } from "./hotel-card";

interface RenderHotelListProps {
  commonPaddingPx?: number;
  navigation: StackNavigationProp<TravelsParamList, "HotelFeed">;
}

export function RenderHotelList({
  commonPaddingPx,
  navigation,
}: RenderHotelListProps): JSX.Element {
  return (
    <FlexView flexDirection="column" mb={2} pb={6}>
      <FlatList
        keyExtractor={(product, idx) => product.name + idx}
        data={fakeHotels}
        renderItem={({ item }) => {
          return (
            <HotelCard
              commonPaddingPx={commonPaddingPx}
              item={item}
              navigation={navigation}
            />
          );
        }}
        style={{ width: "100%" }}
      />
    </FlexView>
  );
}

const fakeHotels = [
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
  {
    name: "Fletcher",
    priceHi: 235,
    priceLow: 125,
    city: "Fremont",
    loveCount: 5,
    commentCount: 700,
  },
];
