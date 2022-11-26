import n from './News.module.css';
import Post from "./Post/Post";
import NewPost from "../Profile/PostBlock/NewPost/NewPost";

const News = (props) => {
    return (
        <div className={n.news}>
            <NewPost/>
            <Post
                avatar={'https://sun6-20.userapi.com/s/v1/ig2/a_mAKJuMJIEUj0R2iu6YrA8QH0-HvMCT3zqZWDrVfrv8X3uZLzNIN2Z9HABXPCU_YSnp0XZvDXKeT2EsnsL8PcHf.jpg?size=1150x1150&quality=96&crop=0,0,1150,1150&ava=1'}
                name={'Public group'}
                date={'20 ноя в 19:13'}
                text={'Great sunset'}
                pic={'https://images.alphacoders.com/852/thumb-1920-852592.jpg'}
                likes_count={5}
            />
        </div>
    )
}

export default News;