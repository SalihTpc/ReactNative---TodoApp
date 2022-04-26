import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {appStyles as styles} from './styles';

const App = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    setTodoList([...todoList, input]);
    // alert(input);
    setInput('');
  };
  const deleteHandler = index => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.header}>My TodoList</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.myInput}
            value={input}
            placeholder="Enter your task"
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <FlatList
          style={styles.todos}
          data={todoList}
          renderItem={({item, index}) => (
            <View style={styles.todoContainer}>
              <Text style={styles.todos}>{item}</Text>
              <TouchableOpacity
                style={styles.delButton}
                onPress={() => deleteHandler(index)}>
                <Text style={styles.delText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
