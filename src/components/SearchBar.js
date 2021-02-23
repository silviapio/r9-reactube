import { SearchBarText, InputContainer } from './SearchBar.styles';

const SearchBar = props =>
    <form onSubmit={props.onSubmit}>
        <SearchBarText>Video Search</SearchBarText>
        <InputContainer>
            <input type="search" name="videoSearch" placeholder="Type your search here" value={props.inputText} onChange={props.onChange} disabled={props.loading}/>
        </InputContainer>
    </form>;

export default SearchBar;