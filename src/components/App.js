import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../store';
import { getUnsplash } from '../store/actions';

// class App extends React.Component {
//   state = { images: [] };

//   onSearchSubmit = async term => {
//     const response = await unsplash.get('/search/photos', {
//       params: { query: term }
//     });

//     this.setState({ images: response.data.results });
//   };

//   render() {
//     return (
//       <div className='ui container' style={{ marginTop: '10px' }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }

export const App = ({ images, handleSearchSubmit }) => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={value => handleSearchSubmit(value)} />
      <ImageList images={images} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSearchSubmit: value => dispatch(getUnsplash(value))
});

const mapStateToProps = state => ({
  images: state.images
});

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
