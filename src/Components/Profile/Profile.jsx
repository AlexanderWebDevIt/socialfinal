import React from 'react'
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = () => {
    return(
        <div>
           <div className={style.Bg}></div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;