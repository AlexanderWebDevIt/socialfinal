import {addPostAC, updatePAC} from "../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return { state: state.ProfileReducer }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChang: (newText) => { dispatch(updatePAC(newText)) },
        addPost: () => { dispatch(addPostAC()) }
    }
}
const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)
export default MyPostsContainer;