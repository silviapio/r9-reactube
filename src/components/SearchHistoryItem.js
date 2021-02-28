import Moment from 'react-moment';
import 'moment-timezone';
import { HistoryItemContainer } from './SearchHistoryItem.styles';
import { FaSearch } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const SearchHistoryItem = (props) => { 
    const handleClick = searchString => () => props.onClick(searchString);
    return(
    <HistoryItemContainer>
        <img alt="search result" src={props.videos[0].snippet.thumbnails.default.url} />
        <p>{props.searchString} 🕑 <Moment fromNow tz="Europe/Madrid">{props.timeStamp}</Moment></p>
        
        <button data-tip="Repeat search" onClick={handleClick(props.searchString)}><FaSearch/></button>
        <ReactTooltip place="top" type="light" effect="solid"/>
    </HistoryItemContainer>
);
}

export default SearchHistoryItem;