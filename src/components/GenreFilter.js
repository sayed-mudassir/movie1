import "./GenreFilter.css";

const GenreFilter = ({ onGenreChange }) => {
  const handleGenreChange = (genre) => {
    console.log(`Filtering By ${genre}`);
    onGenreChange(genre);
  };
  const handleAllMovies = () => {
    onGenreChange(null);
  };

  return (
    <div className="parent">
      <div className="btn-group">
        <h2>Filter by Genre</h2>
        <button onClick={handleAllMovies}>All</button>
        <button onClick={() => handleGenreChange("Drama")}>Drama</button>
        <button onClick={() => handleGenreChange("Crime")}>Crime</button>
        <button onClick={() => handleGenreChange("Action")}>Action</button>
        <button onClick={() => handleGenreChange("Fantasy")}>Fantasy</button>
        <button onClick={() => handleGenreChange("Western")}>Western</button>
        <button onClick={() => handleGenreChange("Science Fiction")}>
          Science Fiction
        </button>
        <button onClick={() => handleGenreChange("Thriller")}>Thriller</button>
        <button onClick={() => handleGenreChange("War")}>War</button>
        <button onClick={() => handleGenreChange("Animation")}>
          Animation
        </button>
      </div>
    </div>
  );
};

export default GenreFilter;
