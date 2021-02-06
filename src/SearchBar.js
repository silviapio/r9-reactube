function SearchBar(props) {
    return(
    <form>
    <p>Search for videos</p>
    <input type="text" name="videoSearch" value={props.inputText} onChange={props.handleSearchInputChange}/>
    <button onClick={props.onSubmit}>Search</button>
    </form>
    );
};

export default SearchBar;