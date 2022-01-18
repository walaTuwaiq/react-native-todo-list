import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CompleteTask from "./Components/CompleteTask";
import Task from "./Components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const sendTask = () => {
    Keyboard.dismiss();
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const completeTask = (elem, index) => {
    const copiedCompleteTasks = [...completeTasks];
    copiedCompleteTasks.push(elem);
    setCompleteTasks(copiedCompleteTasks);

    const copiedTasksList = [...taskList];
    copiedTasksList.splice(index, 1);
    setTaskList(copiedTasksList);
  };

  const deleteTask = (index) => {
    const copiedCompleteTasks = [...completeTasks];
    copiedCompleteTasks.splice(index, 1);
    setCompleteTasks(copiedCompleteTasks);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Hello World. This is first react native app!
        </Text>
        <Text style={styles.title}>TO DO LIST:</Text>
        <View style={styles.item}>
          {taskList &&
            taskList.map((elem, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    completeTask(elem, index);
                  }}
                >
                  <Task text={elem} />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <View>
        <Text style={styles.line}>------------------------------------------------</Text>
      </View>
      <View>
        <Text style={styles.titleComplete}>COMPLETE TASKE:</Text>
      </View>
      <View style={{paddingLeft:"2%"}}>
        {completeTasks &&
          completeTasks.map((elem, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  deleteTask(index);
                }}
              >
                <CompleteTask text={elem} />
              </TouchableOpacity>
            );
          })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerAddText}
      >
        <TextInput
          placeholder="WRITE HERE..."
          style={styles.textInput}
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sendTask();
          }}
        >
          <View style={styles.wrapperText}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },
  header: {
    color: "#fff",
    fontSize: 18,
    paddingTop: 100,
  },
  title: {
    paddingTop: 60,
    color: "#fff",
    fontSize: 30,
  },
  titleComplete: {
    paddingTop: 12,
    color: "#fff",
    fontSize: 15,
    marginBottom:5,
  },
  item: {
    justifyContent: "center",
  },
  line: {
    color: "#fff",
  },

  containerAddText: {
    position: "absolute",
    bottom: 70,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "75%",
    height: 30,
    borderRadius: 8,
    paddingLeft: 10,
  },
  wrapperText: {
    width: 40,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  addText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
