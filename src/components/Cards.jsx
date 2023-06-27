














import { Card } from "../Context/Context"
import { useContext } from "react"
import CardItem from "./CardItem"
// import { Sidebar } from "phosphor-react"

const Cards = () => {
    
    const{state:{cards,searchQuery}}= useContext(Card)
   console.log(searchQuery)
    console.log(cards)
    const SearchFilter =()=>{
        let sortedData = cards
        if(searchQuery){

            sortedData = sortedData.filter((cardName)=>
            cardName.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return sortedData
    }



  return (
    <>
    <div className="flex gap-2 w-11/12 justify-center items-center flex-wrap">

     {
         SearchFilter().map((item,owner_id)=>{
             return(
                 
                 
                 <CardItem item={item} key={owner_id}/>
                 
                 // <span key={owner_id}>{item.name}</span>
                 )
                })
            }
            </div>

<div>Cards</div>
        </>
  )
}

export default Cards