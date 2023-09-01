import { useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { getAllBlogs } from '../Helpers/BlogFunctions';
import { actionBlogCount } from '../Reducers/Reducer-Counter-Actions';
import { initialState, reducer } from '../Reducers/Reducers';

function Post({dispatch}) {
    const [state, dispatch2] = useReducer(reducer, initialState);
    useEffect(() => {
        async function get(){
            let res = await getAllBlogs(dispatch2,dispatch,actionBlogCount)
            if(!state.posts){
                state.posts = res
            }
        }
        get()
    }, []);
  return (
    <div>
        <h1 className='text-gray-500 font-semibold text-4xl mb-3 pl-4'>Posts</h1>
        <ul className='grid grid-cols-3'>
            {state.posts.map(post => (
            <li className='py-2 px-4 flex flex-col justify-between'  key={post.id}>
                <Link to={`detail/${post.id}`}><h2 className='text-gray-500 mb-2 font-semibold text-2xl cursor-pointer'>{post.title}</h2></Link>
                <p >{post.body}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}


export default connect()(Post) ;