import './GalleryItem.css'

function ListItem({photo, likeClick}) {
    
    const handleImgClick = () => {
      console.log('This img was clicked', photo.id);
      imgClicked(photo);
    };

    const handleLikeClick = () => {
      console.log('This img was liked', photo.id);
      likeClick(photo);
    };

    return (
      <>
        <div key = {photo.id} className="picBox">
          <div className="pic">
            <img onClick={handleImgClick} src= {photo.path}/>
          </div>
            {/* <div>
              <p>{photo.description}</p>
            </div> */}
          <div>
            <button onClick={handleLikeClick}>Like</button>
            <p>Likes: {photo.likes}</p>
          </div>
        </div>
      </>
    )


}

export default ListItem;