// fake data
const arrayOfComics = [
  {
  NO_ID_FIELD: "ID 1",
  description: "this is a description 1",
  headerUrl: "this is a header URL 1 - the cropped image may not need this",
  route: "this is a route 1",
  title: "this is the title 1",
  titleUrl: "https://i.imgur.com/0gZlG7Y.jpeg"
},
{
  NO_ID_FIELD: "ID 2",
  description: "this is a description 2",
  headerUrl: "this is a header URL 2",
  route: "this is a route 2",
  title: "This is the title 2",
  titleUrl: "https://i.imgur.com/Wmp3yCM.jpeg"
}
]

//Static Site 
import React from "react";
import "./style.css";


export default function App() {

  const artWallDisplay = {
    width: '50%'
  }

  return (
    <div>
      <h1>Main Page</h1>
      <div style={artWallDisplay}>
        <Gallery comics={arrayOfComics}/>
      </div>
    </div>
  );
}

class Gallery extends React.Component {
  render() {
    const comics = this.props.comics
    
    const comicCoverGalleryStyles = {
      display: 'grid',
      // two columns, 1 row
      gridTemplateColumns: 'repeat(2, auto [col-start])',
      gridTemplateRows: 'repeat(1, auto [row-start])',
    }
    
    const comicCoverImg = {
      display: 'block',
      width: '100%',
      height: '100%',
      maxWidth: '350px',
      maxHeight: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      objectFit: 'scale-down',
    }

    const test = {
      backgroundColor: 'green',
      margin: 'auto',
      padding: '5px',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white'
    }

    const comicCoverGallery = comics.map((comic) => (
      <figure style={test}>
        <GalleryTitle title={comic.title}/>
        <GalleryImage titleUrl={comic.titleUrl} imgStyle={comicCoverImg}/>
        <GalleryDescription description={comic.description}/>
      </figure>
    ))
    
    return (
      <div>
        <h2>Comics</h2>
        <div style={comicCoverGalleryStyles} className={"grid"}>
         {comicCoverGallery}
        </div>
      </div>
    );
  }
}

function GalleryTitle(props) {
  return <h3>{props.title}</h3>
}

function GalleryImage(props) {
  return <img src={props.titleUrl} style={props.imgStyle}/>
}

function GalleryDescription(props) {
  return <p>{props.description}</p>
}