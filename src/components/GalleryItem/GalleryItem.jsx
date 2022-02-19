import './GalleryItem.css';
import { useState } from 'react';

function ListItem({ photo, likeClick }) {
  
  const handleLikeClick = () => {
    console.log('This img was liked', photo.id);
    likeClick(photo);
  };

  
  const [toggled, setToggled] = useState(true);

  // toggles the pic and description
  const toggleImage = () => setToggled(!toggled);

  return (
    <>
      <div key={photo.id} className="picBox">
        {toggled ? (
          <div className="pic">
          <img onClick={() => toggleImage()} src={photo.path} />
          </div>
        ) : (
          <div className="text" onClick={() => toggleImage()}>
            <p>{photo.description}</p>
          </div>
        )}

        <div>
          <button onClick={handleLikeClick}>Like</button>
          <p>Likes: {photo.likes}</p>
        </div>
      </div>
    </>
  );
}

export default ListItem;
