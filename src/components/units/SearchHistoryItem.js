import Moment from "react-moment";
import "moment-timezone";
import { HistoryItemContainer, TextContainer, TimeContainer } from "./SearchHistoryItem.styles";
import { HiOutlineSearch, HiOutlineClock } from "react-icons/hi";

const SearchHistoryItem = props => {
  const handleClick = searchString => () => props.onClick(searchString);
  return (
    <HistoryItemContainer>
      <img alt="search result" src={props.videos[0].snippet.thumbnails.default.url} />
      <TextContainer>
        <p>{props.searchString}</p>
        <TimeContainer>
          <HiOutlineClock />
          <p>
            <Moment fromNow tz="Europe/Madrid">
              {props.timeStamp}
            </Moment>
          </p>
        </TimeContainer>
      </TextContainer>
      <button data-tip="Repeat search" onClick={handleClick(props.searchString)}>
        <HiOutlineSearch />
      </button>
    </HistoryItemContainer>
  );
};

export default SearchHistoryItem;
