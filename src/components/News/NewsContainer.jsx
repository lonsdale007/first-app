import {connect} from "react-redux";
import News from "./News";

const mapStateToProps = (state) => {
    return {
        newsPosts: state.newsPage.newsPosts,
    }
}

const NewsContainer = connect(mapStateToProps)(News)

export default NewsContainer;