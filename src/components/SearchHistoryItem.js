import Moment from 'react-moment';
import 'moment-timezone';
import { HistoryItemContainer } from './SearchHistoryItem.styles';

const SearchHistoryItem = (props) => { 
    const handleClick = searchString => () => props.onClick(searchString);
    return(
    <HistoryItemContainer>
        <img alt="search result" src={props.videos[0].snippet.thumbnails.default.url} />
        <p>{props.searchString} - <Moment fromNow tz="Europe/Madrid">{props.timeStamp}</Moment></p>
        
        <button onClick={handleClick(props.searchString)}>Repeat search</button>
    </HistoryItemContainer>
);
}

export default SearchHistoryItem;