import React from 'react'
import style from './Profile.module.css'
import Bg from "../../Assets/Img/_ozero_reka.jpg";

const Profile = (props) => {
    return(
        <div>
            <img src={Bg} className={style.Bg} />
            {/*<ProfileInfo profile={props.profile} />*/}
            {/*<MyPostsContainer/>*/}
        </div>
    )
}
export default Profile;