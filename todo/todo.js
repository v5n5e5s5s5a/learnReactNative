import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Todo</Text>
      </View>
      <StatusBar style="auto"/>
      <View style={styles.itemsContainer}>
        <Text style={styles.items}>Todo List Items</Text>
        <TouchableOpacity style={styles.cleaning}>
          <Text style={styles.one}>1</Text>
          <Text style={styles.clean}>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <Text style={styles.one}>1</Text>
          <Text style={styles.clean}>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <Text style={styles.one}>1</Text>
          <Text style={styles.clean}>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <Text style={styles.one}>1</Text>
          <Text style={styles.clean}>cleaning</Text>
        </TouchableOpacity>

        <View style={styles.addItem}>
          <TextInput style={styles.input} placeholder='Enter New Todo Item' placeholderTextColor={'#d3d3d3'}></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.addTodo}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'top',
    justifyContent: 'top',
  },
  subContainer: {
    backgroundColor: '#ff7f50',
    width: '100%',
    height: 80,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 300,
  },
  itemsContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  items: {
    fontSize: 20,
    marginTop: 60,
  },
  cleaning: {
    backgroundColor: '#f8f8ff',
    marginTop: 25,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  addItem: {
    width: '100%',
    height: 90,
    marginTop: 247,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    width: '77%',
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: '#f8f8ff',
  },
  btn: {
    width: '20%',
    height: 50,
    backgroundColor: '#ff7f50',
    borderRadius: 5,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addTodo: {
    color: 'white',
  },
});
