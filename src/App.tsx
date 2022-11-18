import './App.css';
import { listOfReviews } from './listOfReviews';
import { ChangeEvent, useState } from 'react';
import { fbConfig } from './firebase/firebase';

function App() {
  fbConfig;
  const [currentReview, setCurrentReview] = useState(Math.floor(Math.random() * listOfReviews.length));
  const currentReviewObject = listOfReviews[currentReview];
  const [groups] = useState<string[]>([])
  
  listOfReviews.forEach((item)=>{
    if(groups.indexOf(item.occupation) == -1) {
        groups.push(item.occupation)
    } else {
        return
    }
  })
  
  const changeReview = (e:ChangeEvent<HTMLSelectElement>)=> {
    let selected = parseInt(e.target.value);
    setCurrentReview(selected)
  }
  const goNextReview = ()=>{
    if (listOfReviews[currentReview + 1]) {
      setCurrentReview(currentReview + 1)
    } else {
      setCurrentReview(0)
    }
  }
  const goPreviousReview = ()=>{
    if (listOfReviews[currentReview - 1]) {
      setCurrentReview(currentReview - 1)
    } else {
      setCurrentReview(listOfReviews.length - 1)
    }
  }
  const surpriseMe = ()=> {
    if (listOfReviews.length >= 2) {
      let newReview = Math.floor(Math.random() * listOfReviews.length)
      if (newReview !== currentReview) {
        setCurrentReview(newReview)
      } else {
        surpriseMe()
      }
    }
  }
  return (
    <div className='container'>
      <header className='titleArea'>
        <h1 className='titleText'><a href="/">Our Reviews</a></h1>
        <div className='titleUnderBar'></div>
      </header>
      <main className='mainContent'>
        <section className='reviewArea'>
          <div className='selectedReviewArea'>
            <label className='selectedReviewLabel'>
              Selected Review: 
            </label>
            <select className='selectedReview' value={currentReview} onChange={changeReview}>
              {groups.map((grpItem, grpIndex)=>{
                return(<optgroup label={grpItem} key={grpIndex}>{
                  listOfReviews.map((item, index)=>{
                    if (item.occupation == grpItem) {
                      return(<option key={index} value={item.id}>{item.name}</option>)
                    } else {
                      return
                    }
                  })
                }</optgroup>)
              })}
            </select>
          </div>
          <div className='reviewInfos'>
            <div className='imageArea'>
              <div className='imagePictureArea'>
                <img className='imagePicture' src={currentReviewObject.image} alt="ProfilePic" />
              </div>
              <div className='imageUnderCircle'></div>
              <div className='imageAboveCircle'>”</div>
            </div>
            <div className='aboutArea'>
              <h3 className='aboutName'>{currentReviewObject.name}</h3>
              <p className='aboutOccupation'>{currentReviewObject.occupation}</p>
              <p className='aboutDescription'>{currentReviewObject.description}</p>
            </div>
            <div className='buttonsArea'>
              <div className='nextAndPreviousBtn'>
                <button className='previousBtn' onClick={goPreviousReview}>{"<"}</button>
                <button className='nextBtn' onClick={goNextReview}>{">"}</button>
              </div>
              <button className='surpriseMeBtn' onClick={surpriseMe}>Surprise Me</button>
            </div>
          </div>
        </section>
      </main>
      <footer className='footerSite'>
        <small>Created By Guilherme de Paula da Silva</small>
      </footer>
    </div>
  )
}

export default App
