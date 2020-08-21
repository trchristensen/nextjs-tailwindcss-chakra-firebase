import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/core';
import firebase from '../../firebase/config'

const Post = ({post, removePost, index}) => {

  const handleDelete = (index) => {

    firebase
      .firestore()
      .collection('posts').doc(post.id)
      .delete()
      .then(() => {
        console.log('Post successfully deleted!');
        removePost(index);
      })
      .catch(error => {
        console.error('Error deleting Post: ', error);
      });

  }
  
  return (
    <Box className="post p-6 border-b border-blue-400" id={`post-${post.id}`}>
      <div className="flex flex-wrap flex-row justify-between align-center w-full">
        <div className="content">
          <Heading fontSize="xl">{post.title}</Heading>
          <Text className="mt-4">{post.content}</Text>
        </div>
        <div className="actions">
          <Button
          onClick={() => handleDelete(index)}
          >Delete</Button>
        </div>
      </div>
    </Box>
  );
}

export default Post;