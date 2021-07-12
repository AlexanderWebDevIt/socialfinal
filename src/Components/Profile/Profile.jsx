import React from 'react'
import style from './Profile.module.css'
import Bg from "../../Assets/Img/_ozero_reka.jpg";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let postData = [
        {id: 2, post: "fgfdgiufhghiusfhgihs uaghgvu", likesCount: 12},
        {id: 3, post: "fgfdgiufhghiusfhgihs uidshv aghgvu", likesCount: 14},
        {id: 5, post: "fgfdggihs uidshv aghgvu", likesCount: 10}
    ]
    return(
        <div>
            <img src={Bg} className={style.Bg} />
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )
}
export default Profile;