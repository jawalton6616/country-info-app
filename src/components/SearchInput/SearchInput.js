import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./search-input.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
