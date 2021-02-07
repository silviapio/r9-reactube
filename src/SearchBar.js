import { SearchBarText, InputContainer } from './SearchBar.styles';

function SearchBar(props) {
    return(
    <form onSubmit={props.onSubmit}>
    <SearchBarText>Video Search</SearchBarText>
    <InputContainer>
    <input type="text" name="videoSearch" placeholder="Type your search here" value={props.inputText} onChange={props.handleSearchInputChange} />
    </InputContainer>
    </form>
    );
};

export default SearchBar;