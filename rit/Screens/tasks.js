import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";

const categories = [
  {
    id: "1",
    title: "Exercise",
    task: 4,
    image: require("../assets/3.jpeg"),
  },
  {
    id: "2",
    title: "Study",
    task: 6,
    image: require("../assets/1.jpeg"),
  },
  { id: "3", 
  title: "Movies",
  task: 19,
  image: require("../assets/6.jpeg") },
  {
    id: "4",
    title: "Meditate",
    task: 3,
    image: require("../assets/2.jpeg"),
  },
  { id: "5", 
  title: "Paint",
  task:  10,
    image: require("../assets/7.jpeg") },
  {
    id: "6",
    task: 13,
    title: "Sleep",
    image: require("../assets/4.jpeg") },

  {
    id: "7",
    task: 24,
    title: "Animal",
    image: require("../assets/tiger.jpg"),
  },
  {
    id: "8",
    title: "Work",
    task: 14,
    image: require("../assets/5.jpeg"),
  },
  {
    id: "9",
    title: "vacation",
    task: 9,
    image: require("../assets/vacation.jpg"),
  },
  
  
];

const tasks = [
  { id: "1", title: "Cybersecurity" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "UI/UX Design" },
  { id: "4", title: "Networking" },
  { id: "5", title: "Machine Learning" },
  { id: "6", title: "Artificial Intelligence" },
  { id: "7", title: "Digital Marketing" },
  { id: "8", title: "Content Writing" },
  { id: "9", title: "Video Editing" },
  { id: "10", title: "Photography" },
  { id: "11", title: "Scripture Haul" },
  { id: "12", title: "Game Development" },
  { id: "13", title: "Animation" },
  { id: "14", title: "Film Making" },
  { id: "15", title: "Cake Baking" },
];

const Tasks = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image source={require('../assets/download.png')} style={styles.filter} />
      </View>
      <Text style={styles.testUpdate}>Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              tasks={category.tasks}
              image={category.image}
            />
          ))}
        </View>
      </ScrollView>
      <Text style={styles.textUpdate}>Ongoing Tasks</Text>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor:'#F7F0E8',
    width: 380,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    padding: 9,
    borderWidth: 1,
    borderColor: "Yellow",
    borderRadius: 10,
    
  },
  textUpdate: {
    fontSize: 20,
    padding: 10,
  },
  testUpdate: {
    fontSize: 19,
    width: 170,
    height: 37,
    color: "#000000",
    top: 0,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
    filter: {
      width: 40,
      height: 40,
      backgroundColor: '#F0522F',
      top: 6,
      left: 10,
    },
    tasks:{
     fontSize: 10,
    },
  
  categoriesContainer: {
    flexDirection: "row",
    padding: 19,
    
  },
  tasksContainer: {
    padding: 10,
    margin: 5,
  },
  taskItem: {
    padding: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    elevation:2,
  },
});

export default Tasks;
