import './FieldSearch.scss';
import Icon from '../Icon';

const FieldSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('q');
    console.log('Search query:', query);
  };

  return (
    <form 
      className="field-search" 
      name="search-form"
      role="search"
      onSubmit={handleSubmit}
    >
      <label 
        className="field-search__label visually-hidden" 
        htmlFor="search-input"
      >
        Search
      </label>
      <div className="field-search__container">
        <Icon 
          className="field-search__icon" 
          name="search"
          aria-hidden="true" 
        />
        <input 
          className="field-search__input" 
          type="search"
          id="search-input"
          name="q"
          placeholder="Search..."
          autoComplete="off"
          aria-label="Field search"
        />
        <button 
          type="submit" 
          className="visually-hidden"
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </form>
  )
};

export default FieldSearch;