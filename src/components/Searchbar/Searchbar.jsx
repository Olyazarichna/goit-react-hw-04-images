import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      alert('Enter a search value');

      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value.toLowerCase() });
//   };
//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.search.trim() === '') {
//       alert('Enter a search value');

//       return;
//     }
//     this.props.onSubmit(this.state.search);
//     this.setState({ search: '' });
//   };
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className={css.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="search"
//             value={this.state.search}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
