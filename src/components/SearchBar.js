import { SearchBarText, InputContainer } from './SearchBar.styles';

const SearchBar = ({onSubmit, inputText, onChange, loading}) =>
    <form onSubmit={onSubmit}>
        <SearchBarText>Video Search</SearchBarText>
        <InputContainer>
            <input
                type="search"
                name="videoSearch"
                placeholder="Type your search here"
                value={inputText}
                onChange={onChange}
                disabled={loading} />
        </InputContainer>
    </form>;

export default SearchBar;