import React from 'react';
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import imgAPI from './services/Api';

export function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }
    setLoading(true);
    imgAPI
      .fetchImgs(search, page)
      .then(imgs => {
        if (imgs.length === 0) {
          return alert(
            "Sorry, There aren't such images in our gallery. Please try try another word!"
          );
        }
        setImages(newImg => newImg.concat(imgs));
      })
      .catch(error => {
        alert('oops, something wrong, try again');
        return error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, search]);

  const formSubmit = search => {
    setSearch(search);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const onModalOpen = largeImage => {
    setLargeImageURL(largeImage);
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={formSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery imgs={images} onClick={onModalOpen} />
          <Button onClick={loadMore} />
        </>
      )}
      {isLoading && <Loader className="Loader" />}
      {openModal && <Modal onCloseModal={toggleModal} src={largeImageURL} />}
    </div>
  );
}

// export class App extends Component {
//   state = {
//     images: [],
//     page: 1,
//     isLoading: false,
//     search: '',
//     openModal: false,
//     largeImageURL: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const KEY = `27598952-802517bdfa4ff8ef34e84ef82`;
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.setState({ isLoading: true });

//       fetch(
//         `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(response => response.json())
//         .then(data => {
//           const imgs = data.hits;
//           const image = imgs.map(img => {
//             const images = {
//               id: img.id,
//               largeImageURL: img.largeImageURL,
//               webformatURL: img.webformatURL,
//               tags: img.tags,
//             };

//             return images;
//           });

//           return image;
//         })
//         .then(images => {
//           this.setState(prevState => ({
//             images: prevState.images.concat(images),
//           }));
//         })
//         .catch(error => {
//           alert('oops, something wrong, try again');
//           console.log(error.message);
//         })
//         .finally(() => {
//           this.setState({ isLoading: false });
//         });
//     }
//   }

//   formSubmit = search => {
//     this.setState(() => {
//       return {
//         search,
//         page: 1,
//         images: [],
//       };
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };
//   onModalOpen = largeImage => {
//     this.setState({ largeImageURL: largeImage });
//     this.setState(({ openModal }) => ({
//       openModal: !openModal,
//     }));
//   };

//   toggleModal = () => {
//     this.setState(({ openModal }) => ({
//       openModal: !openModal,
//     }));
//   };

//   render() {
//     const { images, isLoading, openModal, largeImageURL } = this.state;
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.formSubmit} />
//         {images.length > 0 && (
//           <>
//             <ImageGallery imgs={images} onClick={this.onModalOpen} />
//             <Button onClick={this.loadMore} />
//           </>
//         )}
//         {isLoading && <Loader className="Loader" />}
//         {openModal && (
//           <Modal onCloseModal={this.toggleModal} src={largeImageURL} />
//         )}
//       </div>
//     );
//   }
// }
