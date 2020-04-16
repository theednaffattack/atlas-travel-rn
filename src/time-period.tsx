import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { FlexView, Text } from "./primitive-or-common";

interface TimePeriodProps {}

export const TimePeriod: React.FC<TimePeriodProps> = ({ children }) => {
  return (
    <FlexView py={4} bg="#eee" width={1}>
      <FlexView ml={4} mb={3}>
        <Text fontSize={3} color="#444">
          Time Period
        </Text>
      </FlexView>
      {children}
    </FlexView>
  );
};

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  return (
    <FlexView>
      <FromCalendar />
      <FlexView px={4}>
        <FlexView
          width={1}
          borderBottomColor="grey"
          borderBottomWidth="2px"
          alignSelf="center"
          mt={2}
          mb={4}
          px={4}
        ></FlexView>
      </FlexView>
      <ToCalendar />
    </FlexView>
  );
};

const FromCalendar = () => {
  return (
    <FlexView my={3}>
      <Text ml={4} fontSize={1} color="#222">
        FROM
      </Text>
      <FlatList
        horizontal={true}
        data={fromDates}
        style={{ paddingBottom: 12 }}
        renderItem={({ item: { dayOfTheWeek, numeralDate } }) => (
          <FlexView
            key={`${dayOfTheWeek}-${numeralDate}`}
            px={2}
            alignItems="center"
          >
            <FlexView my={3} alignItems="center" justifyContent="center">
              <Text color="#aaa" fontSize={2}>
                {dayOfTheWeek.slice(0, 1)}
              </Text>
            </FlexView>
            <FlexView
              height={50}
              width={50}
              border="2px #aaa solid"
              borderRadius={50}
              alignItems="center"
              justifyContent="center"
            >
              <Text>{numeralDate}</Text>
            </FlexView>
          </FlexView>
        )}
      />
    </FlexView>
  );
};

const ToCalendar = () => {
  return (
    <FlexView>
      <Text ml={4} color="#222">
        TO
      </Text>
      <FlatList
        horizontal={true}
        data={fromDates}
        style={{ paddingBottom: 12 }}
        renderItem={({ item: { dayOfTheWeek, numeralDate } }) => (
          <FlexView
            key={`${dayOfTheWeek}-${numeralDate}`}
            px={2}
            alignItems="center"
          >
            <FlexView my={3} alignItems="center" justifyContent="center">
              <Text color="#aaa" fontSize={2}>
                {dayOfTheWeek.slice(0, 1)}
              </Text>
            </FlexView>
            <FlexView
              alignItems="center"
              justifyContent="center"
              height={50}
              width={50}
              border="2px #aaa solid"
              borderRadius={50}
            >
              <Text>{numeralDate}</Text>
            </FlexView>
          </FlexView>
        )}
      ></FlatList>
    </FlexView>
  );
};

interface FromDatesProps {
  dayOfTheWeek: string;
  numeralDate: string | number;
}

const fromDates: FromDatesProps[] = [
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
];
