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

const arrayOfChapters = [
  {
    name: "chapter 1",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/PdiIXBe.png"
  },
  {
    name: "chapter 2",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/eC2H1ix.png"
  },
  {
    name: "chapter 3",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/RbkSaII.jpeg"
  },
  {
    name: "chapter 4",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/yTvPglU.jpeg"
  },
  {
    name: "chapter 5",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/qfkduUJ.jpeg"
  },
  {
    name: "chapter 6",
    description: "The description of this chapter",
    chpStart: 1,
    chpEnd: 18,
    pageUrl: "https://i.imgur.com/yTvPglU.jpeg"
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
        <GalleryControl comics={arrayOfComics} pages={arrayOfChapters}/>
      </div>
    </div>
  );
}

class GalleryControl extends React.Component {
  render() {
    const comics = this.props.comics
    const pages = this.props.pages
    
    const comicCoverGalleryStyles = {
      display: 'grid',
      // two columns, 1 row
      gridTemplateColumns: 'repeat(2, auto [col-start])',
      gridTemplateRows: 'repeat(1, auto [row-start])',
    }
    //these two swap
    const comicPageGalleryStyles = {
      display: 'grid',
      // two columns, 1 row
      gridTemplateColumns: 'repeat(4, auto [col-start])',
      gridTemplateRows: 'repeat(2, auto [row-start])',
    }
    
    const comicCoverImg = {
      display: 'block',
      width: '100%',
      height: '100%',
      maxWidth: '350px',
      maxHeight: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      objectFit: 'fill',
    }

    const comicPageImg = {
      maxWidth: '100%',
      maxHeight: '100%'
    }

      //the figure that contains the image
    const test = {
      width: '100%',
      height: '100%',
      backgroundColor: 'green',
      margin: '5px',
      padding: '5px',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }

    const comicCoverGallery = comics.map((comic) => (
      <figure style={test}>
        <GalleryTitle title={comic.title}/>
        <GalleryImage url={comic.titleUrl}/>
        <GalleryDescription description={comic.description}/>
      </figure>
    ))

    const comicPageGallery = pages.map((page) =>(
      <table style={test}>
        <GalleryTitle title={page.name}/>
        <GalleryImage url={page.pageUrl}/>
        <GalleryDescription description={page.description}/>
        <PageCount chpStart={page.chpStart} chpEnd={page.chpEnd}/>
      </table>
    ))
    
    return (
      <div>
        <h2>Comics</h2>
        <div style={comicPageGalleryStyles} className={"grid"}>
         {comicPageGallery}
        </div>
      </div>
    );
  }
}

function GalleryTitle(props) {

  const frameImg = {
    margin: '0px',
  }


  return (
    <h3 style={frameImg}>{props.title}</h3>
  )
}

function GalleryImage(props) {

  const containImg = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }

  const frameImg = {
    width: '100%',
    height: '100%',
  }

  return (
    <tr style={frameImg}>
      <img src={props.url} style={containImg}/>
    </tr>
  )
}

function GalleryDescription(props) {
  return (
    <tr>
      <p>{props.description}</p>
    </tr>
  )
}

function PageCount(props) {

  let pageList = [];
  for (let p = props.chpStart; p <= props.chpEnd; p++) {
    pageList.push(<td style={{textAlign: 'center'}}>{p}</td>)
  };

  const firstSix = <tr>{pageList.splice(0, 6)}</tr>
  const secondSix = <tr>{pageList.splice(0, 6)}</tr>
  const thirdSix = <tr>{pageList.splice(0, 6)}</tr>
  const forthSix = <tr>{pageList.splice(0, 6)}</tr>

  return (
    <tr>
      <table style={{margin: 'auto'}}>
          {firstSix}
          {secondSix}
          {thirdSix}
          {forthSix}
      </table>
    </tr>
  )
}
