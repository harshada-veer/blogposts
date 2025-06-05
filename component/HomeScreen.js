import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './blogSlice';
import BlogCard from '../components/BlogCard';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog List</Text>
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <BlogCard post={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
