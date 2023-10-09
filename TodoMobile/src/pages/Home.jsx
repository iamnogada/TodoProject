import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
// import { Button } from '@rneui/base';
import { Text, Card, Button, Input } from "@rneui/themed";

import DateTimePicker from "@react-native-community/datetimepicker";

function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <ScrollView style={styles.container}>
      <View>
        <Card>
          <Card.Title>Input Component</Card.Title>
          <Card.Divider />
          <Input
            placeholder="INPUT WITH ERROR MESSAGE"
            errorStyle={{ color: "red" }}
            errorMessage="ENTER A VALID ERROR HERE"
          />
        </Card>
        <Card>
          <Card.Title>Input with Button Component</Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Input
              placeholder="Enter text..."
              containerStyle={{ flex: 1, marginRight: 10 }}
              // You can customize the input style here
            />
            <Button
              title="Submit"
              buttonStyle={{ backgroundColor: "blue" }}
              // You can customize the button style here
            />
          </View>
        </Card>
        <Card>
          <Card.Title>Date Time Component</Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <DateTimePicker value={date} />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Home;
