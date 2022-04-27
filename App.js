import axios from 'axios';
import React, {useState, useEffect} from 'react';
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
  const getTodos = async () => {
    await axios
      .get('https://todo-django-restapi.herokuapp.com/api/task-list/')
      .then(response => setTodoList(response.data));
  };
  const postTodo = async () => {
    await axios.post(
      'https://todo-django-restapi.herokuapp.com/api/task-create/',
      {title: input, completed: false},
    );
    setInput('');
    getTodos();
  };

  const handleAddTodo = () => {
    input ? postTodo() : alert('Write Something!!');
  };
  const deleteHandler = id => {
    async function deleteTodo() {
      await axios.delete(
        `https://todo-django-restapi.herokuapp.com/api/task-delete/${id}`,
      );
      getTodos();
    }
    deleteTodo();
  };
  useEffect(() => {
    getTodos();
  }, []);

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
          renderItem={({item}) => (
            <View style={styles.todoContainer}>
              <Text style={styles.todos}>{item.title}</Text>
              <TouchableOpacity
                style={styles.delButton}
                onPress={() => deleteHandler(item.id)}>
                <Text style={styles.delText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
