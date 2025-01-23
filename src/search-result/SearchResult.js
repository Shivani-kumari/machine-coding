import React, { useState } from 'react'
import './Search.css'

export default function SearchResult() {
    const [searchResult,setSearchResult] = useState([])
    let fruitesArray = ["apple","mango","cheery","orange"]
    const handleInput = (e)=>{
        if(e.target.value ==""){
            setSearchResult([])
        }else{
            let searchFuriteResultes = fruitesArray.filter((fruit)=>fruit.includes(e.target.value))
            setSearchResult(searchFuriteResultes)
        }
    }
  return (
    <div className='searchResultStyle'>
    <div>SearchResult</div>
    <input onChange={handleInput}/>
    <div>
        {searchResult.map((fruites)=>{
          return  <div>
                {fruites}
            </div>
        })}
    </div>
    </div>
  )
}
