import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
// import { Button } from '@rneui/base';
import { Button, Card, Input } from "@rneui/themed";

// import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "react-native-modal-datetime-picker";

function Home() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const toggleDatePicker = () => {
    setShow(!show);
  }
  
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card>
          <Card.Title>Input Component</Card.Title>
          <Card.Divider />
          <Input
            placeholder="INPUT WITH ERROR MESSAGE"
            errorStyle={{ color: "#1d4ed8" }}
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
              buttonStyle={{ backgroundColor: "#1d4ed8" }}
              // You can customize the button style here
            />
          </View>
        </Card>
        <Card>
          <Card.Title>Date Time Component</Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Button onPress={() => toggleDatePicker()} title="Date picker" buttonStyle={{backgroundColor: "#1d4ed8"}} />
          <DateTimePicker
          isVisible={show}
          onConfirm={()=>{setShow(false)}}
          onCancel={()=>{setShow(false)}}
        />
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
