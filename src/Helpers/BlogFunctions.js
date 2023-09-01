import { API_URL, methods, profileID } from "../Globals";

export const updateBlog = (detailId, dispatch, title, body) => {
    if(detailId){
        fetch(API_URL+"/"+detailId,{
            method: methods.put,
            body:JSON.stringify({
                id:detailId,
                title,
                body,
                userId:profileID
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(response => response.json())
        .then(data => {
            if(data.userId === profileID){
                console.log(data)
                dispatch({ type: "SET_SELECTED_POST", payload: data });
            }
        });
    }
}
export const getBlog = (newPost,detailId,dispatch) => {
    try {
        return new Promise((res,rej) => {
            if(!newPost){
                fetch(API_URL+"/"+detailId )
                .then(response => response.json())
                .then(data => {
                    if(data.userId === profileID){
                        dispatch({ type: "SET_SELECTED_POST", payload: data });
                        res(data)
                    }else{
                        dispatch({ type: "SET_SELECTED_POST", payload: "error" });
                        rej(false)
                    }
                
                });
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteBlog = (detailId, navigate) => {
    fetch(API_URL+"/"+detailId,{
        method: methods.detailId
    })
    .then(navigate("/"))
}
export const addBlog = ( navigate, title, body, dispatch,count,action) => {
    fetch(API_URL,{
        method: methods.post,
        body:JSON.stringify({
            title,
            body,
            userId:profileID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dispatch(action(count))
        // navigate("/")
    });
}

export const getAllBlogs = (dispatch,dispatch2,action) => {
    return new Promise((res,rej) => {
        fetch(API_URL+"?userId="+profileID)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'SET_POSTS', payload: data });
            dispatch2(action(data.length))
            res(data)
        });
    })
    
} 

export const getComments = ($i,dispatch) => {
    try {
        return new Promise((res,rej) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${$i}/comments`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                dispatch({ type: 'SET_COMMENTS', payload: json });
                res(json)
            });
        })
    } catch (error) {
        console.log(error)
    }
    
    
}