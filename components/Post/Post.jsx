import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/core';
const Post = ({post}) => {
  
  return (
    <Box className="post p-6 border-b border-blue-400" id={`post-${post.id}`}>
      <div className="flex flex-wrap flex-row justify-between align-center w-full">
        <div className="content">
          <Heading fontSize="xl">{post.title}</Heading>
          <Text className="mt-4">{post.content}</Text>
        </div>
        <div className="actions">
          <Button
          onClick={() => alert('hi')}
          >Delete</Button>
        </div>
      </div>
    </Box>
  );
}

export default Post;