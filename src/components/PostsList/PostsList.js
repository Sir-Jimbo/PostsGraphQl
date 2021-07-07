import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Spinner from '../Spinner/Spinner';


function PostsList({ id }) {

   const getPosts = gql`query GetAllPosts{
      post(id:${id}) {
               id
               title
               body
               
            }
            }`

   const { loading, data, error } = useQuery(getPosts)

   if (!data) return <Spinner />
   if (loading) return null;
   if (error) return `Error! ${error}`;

   return (
      <div>
         <ul>
            <li key={data.post.id}>
               <h1>{data.post.title}</h1>
               <p>{data.post.body}</p>
            </li>
         </ul>
      </div>
   )
}

export default PostsList;