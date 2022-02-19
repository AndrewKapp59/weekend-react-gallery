import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import '../GalleryList/GalleryList'
import GalleryList from '../GalleryList/GalleryList';

function App() {

  useEffect( () => {
    fetchGallery();
  }, [])

  let [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios.get('/gallery')
      .then( (response) => {
        console.log('Image Gallery', response.data);

        // Sets data into state var
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  const likeClick = (photo) => {

    axios.put(`/gallery/like/${photo.id}`)
      .then( (response) => {
        console.log(response);
        fetchGallery()
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList = {galleryList}
        likeClick = {likeClick}
        />
      </div>
    );
}

export default App;
