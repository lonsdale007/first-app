import sb from './SearchBlock.module.css'


const SearchBlock = (props) => {
    return (
        <div className={sb.search_block}>
            <img src={require('../../../../img/search.png')} alt={''}/>
            <input className={sb.search_area} placeholder={'Search'} type={'text'}/>
        </div>
    )
}

export default SearchBlock;