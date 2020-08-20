import db from '../firebase/config';
import { useEffect } from 'react'

export default () => {
   const [posts, setPosts] = React.useState([]);

   useEffect(() => {
     db
       .firestore()
       .collection('posts')
       .onSnapshot(snap => {
         const posts = snap.docs.map(doc => ({
           id: doc.id,
           ...doc.data(),
         }));
         setPosts(posts);
       });
   }, []);

  return(
   <>
     {posts.map((post) => (
       <div>
        {JSON.stringify(post)}
       </div>
        ))}
   </>
  )
}
