import './GalleryItem.css'

function ListItem({galleyList, photo}) {
    
    return (
      <>
        <div key = {photo.id} className="picBox">
          <div className="pic"><img src= {photo.path}/> </div>
          <div><button>Like</button></div>
        </div>

      </>
    )


}

export default ListItem;