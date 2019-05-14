import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../store';

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

// const onSeachSubmit = setImages => async term => {
//   const response = await unsplash.get('/search/photos', {
//     params: { query: term }
//   });
//   setImages(response.data.results);
// };

export const App = ({ images }) => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={() => ({})} />
      <ImageList images={images} />
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images
});

const Root = connect(
  mapStateToProps,
  {}
)(App);
export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
