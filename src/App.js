// fake data
const listOfComics = [
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

const artWallDisplay = {
  width: '50%'
}

const comicCoverGallary = {
  display: 'grid',
  // two columns, 1 row
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(1, 25vw)',
  gridGap: '15px'
}


const comicCoverImg = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

const color = {
  gridColumnStart: '1',
  gridColumnEnd: '1',
  gridRowStart: '1',
  gridRowEnd: '1'
}

export default function App() {
  return (
    <div>
      <h1>Main Page</h1>
      <div>
        <ComicWall comics={listOfComics}/>
      </div>
    </div>
  );
}

// really this just displays an image. How that image is displayed could change on the CSS
// responsible for a grid of images
class ComicWall extends React.Component {
  render() {
    const comics = this.props.comics
    const mapTest = comics.map((comic) => (<Comic comic={comic} style={comicCoverImg} color={color}/>))
    return (
      <div style={artWallDisplay}>
        <div style={comicCoverGallary}>
         {mapTest}
        </div>
      </div>
    );
  }
}

function Comic(props) {
  return (
    <div style={props.color}>
      <h3>{props.comic.title}</h3>
      <img src={props.comic.titleUrl} style={props.style}/>
      <p>{props.comic.description}</p>
    </div>
  )
}



// this.props.products.forEach((product) => {
//   }
