import { SearchBarText, InputContainer } from './SearchBar.styles';

const SearchBar = props =>
    <form onSubmit={props.onSubmit}>
        <SearchBarText>Video Search</SearchBarText>
        <InputContainer>
            <input type="text" name="videoSearch" placeholder="Type your search here" value={props.inputText} onChange={props.onChange} />
        </InputContainer>
    </form>;

export default SearchBar;