import React, { useState } from 'react';
import ImageList from './components/ImageList';
import Modal from './components/Modal';
import GlobalStyles from './styles/GlobalStyles';

// We declare the type for the image object
interface Image {
  id: number;
  url: string;
}

// Array with initial images
// initialImages - is used to identify this array Image[] of objects.
// : Image[] is the type definition for the initialImages variable.
// that is, the initialImages array must contain only objects that correspond to the Image type.
// In general, const initialImages: Image[] means that the initialImages variable is an array of Image objects, and it contains five Image objects that contain the IDs and URLs of the images.
const initialImages: Image[] = [
  { id: 1, url: 'https://via.placeholder.com/150' },
  { id: 2, url: 'https://via.placeholder.com/200' },
  { id: 3, url: 'https://via.placeholder.com/250' },
  { id: 4, url: 'https://via.placeholder.com/300' },
  { id: 5, url: 'https://via.placeholder.com/350' },
];

const App: React.FC = () => {
  // Use useState to create the image state and the currently selected image
  // <Image[]> is a TypeScript (or some other modern JavaScript) syntax that defines the data type for images and setImages. Specifically, <Image[]> indicates that the variable images and setImages should contain an array of objects of type Image.
  //   <string | null>: This is a type declaration for the state selectedImage. Here, it specifies that the state's value can be either a string or null.

  // (null): This is the default value for the selectedImage state. In this case, the initial value of the state is null, meaning no image is selected at the beginning.
  const [images, setImages] = useState<Image[]>(initialImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GlobalStyles />
      <h1>Image Gallery</h1>
      <ImageList images={images} onImageClick={handleImageClick} />
      {selectedImage && <Modal imageUrl={selectedImage} onClose={handleModalClose} />}
    </>
  );
};

export default App;
