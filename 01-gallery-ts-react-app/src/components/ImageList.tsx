import React from 'react'
import styled from '@emotion/styled';

interface Image{
  id: number;
  url: string;
}
// This interface defines the type for the props (properties) of the ImageList component. In this case, ImageListProps has one property:

// images: Image[] - This is the images prop, which is an array of objects of type Image. It means that the ImageList component expects to receive a prop named images, which is an array of objects, where each object conforms to the Image type (containing id and url properties). 
interface ImageListProps{
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const ImageItem = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
`;
// This code declares that the ImageList variable is a functional component (React.FC stands for "Functional Component"). ImageList receives the ImageListProps prop, meaning it expects the prop passed to be of type ImageListProps. In this case, the only prop that ImageList expects is images.
const ImageList: React.FC<ImageListProps> = ({images, onImageClick}) => {
  return (
    <ImageContainer>
      {images.map((image) => (
        <ImageItem key={image.id} src={image.url} alt={`Image ${image.id}`} onClick={() => onImageClick(image.url)}   />
      ))}
    </ImageContainer>
  )
}

export default ImageList