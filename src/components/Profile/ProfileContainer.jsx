import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react';
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.router.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "a7e14689-3433-40ab-b21b-cc7303eee722"
                }
            })
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));