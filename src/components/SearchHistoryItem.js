import Moment from 'react-moment';
import 'moment-timezone';

const SearchHistoryItem = (props) => {
    return(
    <div>
        <img alt="search result" src={props.videos[0].snippet.thumbnails.default.url} />
        <p>{props.searchString}</p>
        <br/>
        <Moment fromNow tz="Europe/Madrid">{props.timeStamp}</Moment>
        <button>Repeat search</button>
    </div>
);
}

export default SearchHistoryItem;