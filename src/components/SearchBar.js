import { InputContainer } from './SearchBar.styles';

const SearchBar = ({onSubmit, inputText, onChange, loading}) =>
    <form onSubmit={onSubmit}>
        <InputContainer>
            <input
                type="search"
                name="videoSearch"
                placeholder="Search..."
                value={inputText}
                onChange={onChange}
                disabled={loading} />
        </InputContainer>
    </form>;

export default SearchBar;