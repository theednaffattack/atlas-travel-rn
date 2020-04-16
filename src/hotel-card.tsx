import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import faker from "faker";
import { Image, View, InteractionManager } from "react-native";

import Icon from "./icons-plural";
import { FlexView, Text } from "./primitive-or-common";
import { useFocusEffect } from "@react-navigation/native";

function Card({ children }): JSX.Element {
  return (
    <FlexView
      flexDirection="row"
      width={1}
      p={3}
      my={2}
      borderRadius="18px"
      bg="#fff"
    >
      {children}
    </FlexView>
  );
}

export function HotelCard({
  commonPaddingPx,
  item,
  navigation,
}: {
  commonPaddingPx: number;
  navigation: any;
  item: any;
}): JSX.Element {
  const [response, setResponse] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        // Expensive task

        // I WANT TO KEEP THIS API CALL!!!
        getImagesFromApiAsync().then((theResponse) => {
          setResponse(theResponse?.url);
          return theResponse.url;
        });
      });

      return () => task.cancel();
    }, [])
  );

  return (
    <FlexView
      // px={commonPaddingPx}
      px={3}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      {/* https://unsplash.com/collections/3466704/my-first-collection/aa1b21b6f7cb5526f82030f1d86bdf2c */}
      {/* https://source.unsplash.com/collection/3466704/480x480 */}
      {/* https://source.unsplash.com/random/100x60/?city,night */}
      <Card>
        <FlexView justifyContent="center" mr={3}>
          <Icon name="close" fill="green" height={80} width={100} />

          {/* <Image
            style={{
              width: 100,
              height: 80,
              borderRadius: 18,
            }}
            source={{
              uri: response
                ? response
                : `https://source.unsplash.com/collection/3466704/100x80`,
            }}
          /> */}
        </FlexView>

        <FlexView
          // width={1}
          flexDirection="column"
          flex={1}
        >
          <FlexView
            // width={1}
            flexDirection="row"
          >
            <FlexView flexDirection="column">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ViewHotel", {
                    name: item.name,
                  });
                }}
              >
                <Text
                  fontSize={3}
                  fontWeight="bold"
                  color="#444"
                >{`Hotel ${item.name}`}</Text>
              </TouchableOpacity>

              <FlexView flexDirection="row" mt={1}>
                <Text fontSize={2} color="#888888">
                  {"$" + item.priceLow}
                </Text>
                <Text ml={2} fontSize={2} color="#888888">
                  {"$" + item.priceHi}
                </Text>
              </FlexView>
            </FlexView>

            <FlexView ml="auto" alignItems="center" flexDirection="row">
              <Icon name="more" height={18} width={18} fill="#aaaaaa" />
            </FlexView>
          </FlexView>
          <FlexView flexDirection="row" mt={3}>
            <FlexView flexDirection="row" mr="auto">
              <Icon name="mapPin" height={15} width={15} fill="#aaaaaa" />
              <Text ml={1} color="#707070">
                {item.city}
              </Text>
            </FlexView>

            <FlexView flexDirection="row" mr={2}>
              <Icon name="love" height={15} width={15} fill="#aaaaaa" />
              <Text ml={1} color="#707070">
                {item.loveCount}k
              </Text>
            </FlexView>
            <FlexView flexDirection="row" ml={1}>
              <Icon name="comment" height={15} width={15} fill="#aaaaaa" />
              <Text ml={1} color="#707070">
                {item.commentCount}
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
      </Card>
    </FlexView>
  );
}

async function getImagesFromApiAsync() {
  // alert("getting images");
  try {
    let response = await fetch(
      `https://source.unsplash.com/collection/3466704/115x60`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
