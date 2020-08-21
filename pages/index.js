import firebase from '../firebase/config';
import { useEffect, useState } from 'react';
import { Stack } from '@chakra-ui/core';
import CreatePost from '../components/CreatePost/CreatePost';
import Post from '../components/Post/Post';

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // This way is for live listening.
    // db.collection('posts')
    //   .onSnapshot(snap => {
    //     const posts = snap.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setPosts(posts);
    //   });

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db
        .collection('posts')
        .orderBy('timestamp', 'desc')
        .get();
        const posts = data.docs.map(doc => ({...doc.data(), id: doc.id}));
        console.log(posts)
      setPosts(posts);
    }
    fetchData()
  }, []);


    const addPost = (post) => {
     setPosts([post, ...posts]);
   };

   const removePost = index => {
     const newPosts = [...posts];
     newPosts.splice(index, 1);
     setPosts(newPosts);
   };

  return (
    <div className="p-12 mt-12">
      <CreatePost addPost={addPost} />

      <hr className="my-8" />
      {posts ? (
        <div>
          <Stack spacing={8}>
            {posts.map((post, index) => (
              <Post key={post.id} index={index} post={post} removePost={removePost} />
            ))}
          </Stack>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
