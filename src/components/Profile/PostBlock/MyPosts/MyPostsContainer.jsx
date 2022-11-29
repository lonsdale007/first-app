import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;