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

//Static Site 
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
  render() {
    const comics = this.props.comics
    const chapters = this.props.chapters
    const pages = this.props.pages
    
    const comicCoverGalleryStyles = {
      display: 'grid',
      // two columns, 1 row
      gridTemplateColumns: 'repeat(2, auto [col-start])',
      gridTemplateRows: 'repeat(1, auto [row-start])',
    }

    const comicCoverStyle = {
      backgroundColor: 'green',
      margin: '5px',
      padding: '5px',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }

    const comicChpGalleryStyles = {
      display: 'grid',
      // four columns, 2 row
      gridTemplateColumns: 'repeat(4, auto [col-start])',
      gridTemplateRows: 'repeat(2, auto [row-start])',
      // width: 1 = this prevents each grid item expanding to fill grid space
    }

    const comicChpStyle = {
      width: '100%',
      backgroundColor: 'green',
      height: '100%',
      margin: '15px',
      padding: '5px',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }

    const comicPageGalleryStyles = {
      display: 'grid',
      // 1 columns, 1 row
      gridTemplateColumns: 'repeat(1, auto [col-start])',
      gridTemplateRows: 'repeat(1, auto [row-start])',
    }

    const comicPageStyle = {
      width: '100%',
      backgroundColor: 'green',
      height: '100%',
      margin: '5px',
      padding: '5px',
      outlineStyle: 'double',
      outlineWidth: 'medium',
      outlineColor: 'white',
    }
    
    const comicCoverGallery = comics.map((comic) => (
      <table style={comicCoverStyle}>
        <GalleryTitle title={comic.title}/>
        <GalleryImage url={comic.titleUrl}/>
        <GalleryDescription description={comic.description}/>
      </table>
    ))

    const comicChpGallery = chapters.map((chapter) =>(
      <table style={comicChpStyle}>
        <GalleryTitle title={chapter.name}/>
        <GalleryImage url={chapter.pageUrl}/>
        <GalleryDescription description={chapter.description}/>
        <PageCount chpStart={chapter.chpStart} chpEnd={chapter.chpEnd}/>
      </table>
    ))

    const comicPageGallery = pages.map((page) => (
      <table style={comicPageStyle}>
        <GalleryImage url={page.pageUrl}/>
      </table>

    ))
    
    return (
      <div>
        <h2>Comics</h2>
        <h3>Title</h3>
        <div className={"flexContainer"}>
          <div className={"flexItem-a"}>
            <div style={comicChpGalleryStyles} className={"grid"}>
            {comicChpGallery}
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