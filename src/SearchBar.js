function SearchBar(props) {
    return(
    <form onSubmit={props.onSubmit}>
    <p>Search for videos </p>
    <input type="text" name="videoSearch" value={props.inputText} onChange={props.handleSearchInputChange} />
    </form>
    );
};

export default SearchBar;