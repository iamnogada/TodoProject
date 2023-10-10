import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Card, CheckBox, Button, Input, Icon } from "@rneui/themed";

import useTodoStore from "../store/todoStore";

const todos = [
  {
    id: 1,
    todo: "Buy groceries",
    status: "pending",
  },
  {
    id: 2,
    todo: "Finish React project",
    status: "pending",
  },
  {
    id: 3,
    todo: "Go for a run",
    status: "completed",
  },
  {
    id: 4,
    todo: "Read a book",
    status: "pending",
  },
  {
    id: 5,
    todo: "Write an article",
    status: "completed",
  },
  {
    id: 6,
    todo: "Call mom",
    status: "pending",
  },
  {
    id: 7,
    todo: "Attend a meeting",
    status: "completed",
  },
  {
    id: 8,
    todo: "Clean the house",
    status: "pending",
  },
  {
    id: 9,
    todo: "Plan a vacation",
    status: "pending",
  },
  {
    id: 10,
    todo: "Learn a new language",
    status: "completed",
  },
];

function Todo() {
  const { todos, fetchTodos, addTodo, toggleTodo } = useTodoStore();
  const [todo, setTodo] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    if (!todo) return;
    addTodo({
      todo,
      status: "pending",
    });
    setTodo("");
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchTodos();
      setRefreshing(false);
    }, 500);
  };
  const renderItem = ({ item }) => {
    return (
      <Card containerStyle={{ margin: 5 }}>
        <View style={styles.card}>
          <CheckBox
            checked={item.status === "completed"}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={"checkbox-blank-outline"}
            uncheckedColor="#1d4ed8"
            checkedColor="#94a3b8"
            onPress={() => toggleTodo(item)}
          />
          <Text
            style={
              item.status === "completed"
                ? styles.completedText
                : styles.pendingText
            }
          >
            {item.todo}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Todo List</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Input
          placeholder="Enter todo..."
          containerStyle={{ flex: 1, marginRight: 10 }}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <Button
          title="Submit"
          buttonStyle={{
            backgroundColor: "#1d4ed8",
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          onPress={handleAddTodo}
        >
          <Icon type="material-community" name="plus" color="white" />
        </Button>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex:1,
    flexDirection: "column",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pendingText: {
    textDecorationLine: "none",
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#94a3b8",
    fontSize: 16,
  },
});

export default Todo;
