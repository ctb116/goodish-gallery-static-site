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
  title: "https://i.imgur.com/Wmp3yCM.jpeg",
  titleUrl: "https://i.imgur.com/Wmp3yCM.jpeg"
}
]

//Static Site 
import React from "react";
import "./style.css";


export default function App() {
  return (
    <div>
      <h1>Main Page</h1>
      <ComicWall comics={listOfComics}/>
    </div>
  );
}

// really this just displays an image. How that image is displayed could change on the CSS
// responsible for a grid of images
class ComicWall extends React.Component {
  render() {
    const comics = this.props.comics
    const mapTest = comics.map((comic) => (<Comic comic={comic}/>))
    return (
      <div>
       {mapTest}
      </div>
    );
  }
}

function Comic(props) {
  return (
    <div>
      <p>test</p>
      <img src={props.comic.titleUrl}/>
    </div>
  )
}



// this.props.products.forEach((product) => {
//   }
