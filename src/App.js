// fake data
const listOfComics = [
  {
  NO_ID_FIELD: "ID 1",
  description: "this is a description 1",
  headerUrl: "this is a header URL 1 - the cropped image may not need this",
  route: "this is a route 1",
  title: "this is the title 1",
  titleUrl: "https://i.imgur.com/Wmp3yCM.jpeg"
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
    console.log(this.props)
    return (
      <div>
        <h2>This is a list of comics to pick from</h2>
        {this.props.comics.forEach((comic) => {
          <Comic/>
        })
        }
      </div>
    );
  }
}

const Comic = (props) => {
  console.log(props)
  return (
    <div>
      hi

    </div>
  )
}

// this.props.products.forEach((product) => {
//   }
