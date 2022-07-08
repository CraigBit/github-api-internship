import classes from '../input/InputSearch.module.css';

const InputSearch = (props) => {
  return <input className={classes.searchField} {...props} />;
};

export default InputSearch;
