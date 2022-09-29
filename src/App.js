// fake data
// each of arrayOfComics a document in AllComics collection
// each document has two subcollections described below
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

// subcollection of each document in arrayOfComics
// describes all chapters in comic
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

// a subcollection of each document in arrayOfComics
// describes all pages in comic
const arrayOfPages = [
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 1,
    pageUrl: "https://i.imgur.com/KIxANBW.jpeg"
  },
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 2,
    pageUrl: "https://i.imgur.com/nzhhPnE.png"
  },
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 3,
    pageUrl: "https://i.imgur.com/eRq5JuC.jpeg"
  },
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 4,
    pageUrl: "https://i.imgur.com/GckIlvo.jpeg"
  },
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 5,
    pageUrl: "https://i.imgur.com/eRq5JuC.jpeg"
  },
  {
    name: "Title for this page",
    description: "The description of this page",
    page: 6,
    pageUrl: "https://i.imgur.com/5yV4igC.jpeg"
  }
]

import React from "react";
import "./style.css";


export default function App() {

  return (
    <div>
      <h1>Main Page</h1>
      <GalleryControl comics={arrayOfComics} chapters={arrayOfChapters} pages={arrayOfPages}/>
    </div>
  );
}

class GalleryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: 'cover'
    };
  }

  handleClick = (visible) => {
    console.log(visible)
    this.setState({galleryVisible: visible});
  }

  render() {
    const comics = this.props.comics
    const chapters = this.props.chapters
    const pages = this.props.pages

    const galleryStyles = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
    
    const comicCoverStyle = {
      margin: '15px',
      padding: '5px',
      // backgroundColor: 'green',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }
    
    const comicChpStyle = {
      width: '100%',
      height: '100%',
      maxWidth: '125px',
      maxHeight: '325px',
      margin: '10px',
      padding: '5px',
      // backgroundColor: 'green',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }

    const comicPageStyle = {
      width: '100%',
      height: '100%',
      margin: '5px',
      padding: '5px',
      // backgroundColor: 'green',
      // outlineStyle: 'double',
      // outlineWidth: 'medium',
      // outlineColor: 'white',
    }
    
    const comicCoverGallery = comics.map((comic) => (
      <figure style={comicCoverStyle} onClick={() => this.handleClick('chapter')}>
        <GalleryTitle title={comic.title}/>
        <GalleryImage url={comic.titleUrl} imgHeight={'400px'} objectFit={'scale-down'}/>
        <GalleryDescription description={comic.description}/>
      </figure>
    ))
    
    const comicChpGallery = chapters.map((chapter) =>(
      <figure style={comicChpStyle} onClick={() => this.handleClick('page')}>
        <GalleryTitle title={chapter.name}/>
        <GalleryImage url={chapter.pageUrl} imgHeight={'150px'} objectFit={'none'}/>
        <GalleryDescription description={chapter.description}/>
        <PageCount chpStart={chapter.chpStart} chpEnd={chapter.chpEnd}/>
      </figure>
    ))
    
    const comicPageGallery = pages.map((page) => (
      <figure style={comicPageStyle}>
        <GalleryImage url={page.pageUrl} imgHeight={'100%'} objectFit={'scale-down'}/>
      </figure>

    ))

    let currentlyVisibleState = null;
    if (this.state.galleryVisible == 'cover') {
      currentlyVisibleState = comicCoverGallery
    } else if (this.state.galleryVisible == 'chapter') {
      currentlyVisibleState = comicChpGallery
    } else if (this.state.galleryVisible == 'page') {
      currentlyVisibleState = comicPageGallery
    } else {
      currentlyVisibleState = <h2>something went wrong</h2>
    }

    console.log(this.state)
return (
  <div>
        <h2>Comics</h2>
        <h3>Title</h3>
        <div className={"flexContainer"}>
          <div className={"flexItem-a"}>
            <div style={galleryStyles} className={"grid"}>
            {currentlyVisibleState}
            </div>
          </div>
          <div className={"flexItem-b"}>
            <div>
              <NewsLetterSignUp/>
            </div>
            <div>
              <SocialMedia/>
            </div>
            <div>
              <TipJar/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function GalleryTitle(props) {
  return (
    <h4 style={{margin: '2px'}}>{props.title}</h4>
    )
  }
  

  function GalleryImage(props) {
    
    const containImg = {
      width: '100%',
      height: props.imgHeight,
      objectFit: props.objectFit,
    }

    return (
    <div>
      <img src={props.url} style={containImg}/>
    </div>
  )
}

function GalleryDescription(props) {
  return (
      <p>{props.description}</p>
  )
}

function PageCount(props) {

  const numberStyle = {
    textAlign: 'center',
  }

  let pageList = [];
  for (let p = props.chpStart; p <= props.chpEnd; p++) {
    pageList.push(<td style={numberStyle}>{p}</td>)
  };

  const firstSix = <tr>{pageList.splice(0, 6)}</tr>
  const secondSix = <tr>{pageList.splice(0, 6)}</tr>
  const thirdSix = <tr>{pageList.splice(0, 6)}</tr>
  const forthSix = <tr>{pageList.splice(0, 6)}</tr>

  return (
      <table style={{marginBottom: '15px'}}>
          {firstSix}
          {secondSix}
          {thirdSix}
          {forthSix}
      </table>
  )
}

function NewsLetterSignUp() {
  return (
    <div style ={{backgroundColor: 'green'}}>
      <p>Sign up to get notified of the next chapter</p>
      <button>Sign Up</button>
    </div>
  )
}

function SocialMedia() {
  return (
    <div style={{backgroundColor: 'green'}}>
      <p>Find me on social media</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
    </div>
  )
}

function TipJar() {
  return (
    <div style={{backgroundColor: 'green'}}>
      <p>Give me a tip</p>
    </div>
  )
}