const Search = ({ search, setsearch }) => {
  return (
  <div className="search">
    <h2>Pesquisar:</h2>
    <input type="text" value={search} onClick={(e) => setSearch(e.target.value)} 
    placeholder="Digite para pesquisar..." />
    </div>
  );
};

export default Search