import classes from '../button/ButtonSearch.module.css';

const ButtonSearch = ({ getRepos, tempSearch, children }) => {
  return (
    <button
      className={classes.searchButton}
      onClick={() => getRepos(tempSearch)}>
      {children}
    </button>
  );
};

export default ButtonSearch;
