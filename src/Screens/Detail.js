import { useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import { addBlog, deleteBlog, getBlog, updateBlog, getComments } from '../Helpers/BlogFunctions';
import { actionAddBlogCount } from '../Reducers/Reducer-Counter-Actions';
import { initialState, reducer } from '../Reducers/Reducers';

function Detail({edit,newPost,blogCount,dispatch}) {
    const [state, dispatch2] = useReducer(reducer, initialState);
    let {detailId} = useParams()
    let location = useLocation()
    let navigate = useNavigate();
    let [title, setTitle] = useState("")
    let [body, setBody] = useState("")
    useEffect(() => {
        if(newPost){
            setTitle("")
            setBody("")
        }
        
        async function get(){
            try {
                let res = await getBlog(newPost,detailId,dispatch2);
                let comments = await getComments(detailId,dispatch2)
                if(!state.selectedPost){
                    state.selectedPost = res
                }
                console.log(state.comments)
                if(!state.comments){
                    state.comments = comments
                }
                if(edit){
                    setTitle(state.selectedPost?.title)
                    setBody(state.selectedPost?.body) 
                }
            } catch (error) {
                console.log(error)
            }
           
        }
        get()
        
        
    }, [location.pathname]);
    
    return (
        <div className='bg-white grid container mx-auto rounded my-3 p-4'>        
             <div style={{position:"relative"}} className="p-10">
                <div className='grid grid-cols-4 items-center '>
                    <span className='flex items-center space-x-2'>
                        <Link className='bg-slate-200 w-24 block h-24 flex justify-center items-center rounded-full' onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <h1 className='text-gray-500 font-semibold text-3xl '>POSTS</h1>
                    </span>
                    
                    
                    {edit &&
                        <button className="bg-blue-500 w-32 hover:bg-blue-700 text-white justify-self-end  justify-self-end font-bold py-2 px-4 border border-blue-700 rounded">
                            <Link to={`/detail/new`} >New Post</Link>
                        </button>
                    }
                </div>

                
             {state.selectedPost === "error" ? 
                <h1 className='text-gray-500 pl-5 pt-8 font-semibold text-2xl'>Unauthorized</h1>
                :
                <div className='grid grid-cols-2 pl-5 pt-8 mb-5'>
                    <div>
                        {edit || newPost ? 
                        <>
                            <label htmlFor="title" className="block mb-2 font-medium text-gray-900 text-2xl">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" className="bg-gray-50 border  w-full text-gray-500 mb-5 font-semibold text-2xl pl-3 py-3 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500" placeholder="Title" value={title} />
                        </>
                            
                        :
                            <h2 className='text-gray-500 mb-5 font-semibold text-2xl '>{state.selectedPost?.title}</h2>
                        }
                        {edit || newPost ?
                            <>
                                <label htmlFor="title" className="block mb-2 font-medium text-gray-90 text-2xl">Detail</label>
                                <textarea onChange={(e) => setBody(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " value={body} placeholder='Detail' ></textarea>
                            </>
                        :
                            <p>{state.selectedPost?.body}</p>
                        }
                        
                        {
                        edit || newPost ? 
                        <div className='mt-3 flex justify-end space-x-3'>
                            <button onClick={() => newPost ? addBlog(navigate,title,body,dispatch,blogCount,actionAddBlogCount) : updateBlog(detailId,dispatch,title,body)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                {newPost ? "Submit" : "Update"}
                            </button>
                            <button onClick={() => newPost ? navigate(-1) : deleteBlog(detailId,navigate)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                {newPost ? "Back" : "Delete"}
                            </button>
                        </div>
                        :
                        <div className='mt-3 flex justify-end space-x-3'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                <Link to={`/detail/${detailId}/edit`}>Edit</Link>
                            </button>
                        </div>
                        }
                    </div>
                    
                    
                </div>
            }
            {   !edit && !newPost &&
                <div>
                    <hr className='mb-3'/>
                    <h3 className='text-gray-500 mb-5 pl-5 font-semibold text-xl'>Comments</h3>
                    {
                         state.comments && state.comments.length > 0  ? 
                         state.comments.map(e => {
                            return(
                                <div className='mb-5 pl-5 space-y-3'>
                                    <h2 className='text-gray-500  '>{e.name}</h2>
                                    <p>Email: {e.email}</p>
                                    <p>{e.body}</p>
                                </div>
                            )
                            
                         })
                        :
                        <div className='pl-5'>No comment</div>
                    }
                </div>
               
            }
            </div>
            
        </div>
    );
}
const mapStateToProps = (state) => ({
    blogCount: state?.blogCount.blogCount || 0 // Sayacı buradan al
});
export default connect(mapStateToProps)(Detail)