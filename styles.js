import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {margin: 10, paddingHorizontal: 10},
  header: {
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  myInput: {
    borderWidth: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderColor: '#ddd',
    width: '80%',
  },
  button: {
    backgroundColor: 'powderblue',
    borderRadius: 6,
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 3,
  },
  buttonText: {
    fontSize: 18,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#999',
  },
  todos: {
    fontSize: 18,
    color: 'gray',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  delButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  delText: {
    color: 'white',
    fontSize: 18,
  },
});
