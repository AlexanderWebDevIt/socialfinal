import React from 'react';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postData: [
        {id: 2, post: "Настроениен дерьмо, да и день такой же", likesCount: 12},
        {id: 3, post: "А у меня все нормально !!!", likesCount: 14},
        {id: 5, post: "Везет некоторым", likesCount: 10}
    ],
    newPostText: '',
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText ,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = '';
            return state
        case   UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
};
export const addPostAC = () => ({type: ADD_POST})
export const updatePAC = (newText) => ({type:UPDATE_POST_TEXT,newText})

export default ProfileReducer;