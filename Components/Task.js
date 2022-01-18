import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <View>
          <Text style={styles.item}>{props.text}</Text>
        </View>
        <View style={styles.cycle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 38,
    borderWidth: 2,
    borderColor: "#8E132C",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 10,
    // flexWrap:"wrap",
  },
  item: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 1,
  },
  square: {
    backgroundColor: "#FCA9A9",
    opacity: 0.7,
    borderRadius: 10,
    padding: 10,
    width: 20,
  },
  cycle: {
    width: 13,
    height: 12,
    borderColor: "#FCA9A9",
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 200,
  },
});

export default Task;
