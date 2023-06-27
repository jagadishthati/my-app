import {MagnifyingGlass} from "phosphor-react"
import { useContext } from "react"
import { Card } from "../Context/Context"

const Filter = () => {
    const{dispatch}=useContext(Card)
  return (
    <>
    <div className="filters flex  gap-4">
        <div className="filterButton">
            Filter
        </div>
        <div className="search flex">
            <span>search
          <input type="text" name="search" id="search"  className="border" 
 onChange={(e)=>{
     dispatch({
         type:"FILTER_BY_SEARCH",
         payload:e.target.value
     })
  }} /> 
            </span>
        <MagnifyingGlass size={32} />
        </div>
    </div>
    </>
  )
}

export default Filter


// onChange={(e)=>{
//     dispatch({
//         type:"FILTER_BY_SEARCH",
//         payload:e.target.value
//     })
//  }}