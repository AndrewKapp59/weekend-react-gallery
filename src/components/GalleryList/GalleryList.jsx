import React from 'react';
import './GalleryList.css';
import '../GalleryItem/GalleryItem';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
  return (
    <div className="List">
      {galleryList.map((photo) => (
        <GalleryItem
        key = {photo.id}
        photo = {photo}
        />
      ))}
    </div>
  );
}

export default GalleryList;
