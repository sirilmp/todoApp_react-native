import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {


  const [task, setTask] = useState();
  const [taskItems,setTaskItems]=useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask();
  }

  const completedTask=(index)=>{
    let itemsCopy=[...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
    
    <View style={styles.container}>
      {/* Tittle text */}
      <View style={styles.textWrapper}>
        <Text style={styles.sectionHeading}>Today's Works</Text>
        <View style={styles.item}>
          {/* item components */}
      {
            taskItems.map((item,index)=>(
     
                <TouchableOpacity key={index}  onPress={()=>completedTask(index)}>
                       
                          <Task text={item} />
                          

              </TouchableOpacity>
     
             
            ))
      }
      
     
        </View>
      </View>

      {/* add a list */}

      <KeyboardAvoidingView behavior={Platform === "ios" ? "padding" : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder='write a task.' value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
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
    backgroundColor: '#001B46',
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionHeading: {
    color: '#FEC400',
    fontWeight: 'bold',
    fontSize: 28,
  },
  item: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FEC400'
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#FEC400',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {
    color: '#FEC400',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
