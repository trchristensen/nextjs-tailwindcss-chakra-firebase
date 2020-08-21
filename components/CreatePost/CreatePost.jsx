import React, { useState } from 'react';
import firebase from '../../firebase/config';

const CreatePost = ({addPost}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const post = {
      title: title,
      content: content,
      timestamp: Date.now(),
    };
    
    firebase
      .firestore()
      .collection('posts')
      .add(post)
      .then((data) => {
        console.log('Post successfully written!');
        addPost({...post, id: data.id});
        
         setTitle('');
         setContent('');
      })
      .catch(function (error) {
        console.error('Error writing Post: ', error);
      });
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-title"
              type="text"
              placeholder="Title"
            />
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              value={content}
              onChange={({ target }) => setContent(target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-title"
              type="text"
              placeholder="What is on your mind?"
            />
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
