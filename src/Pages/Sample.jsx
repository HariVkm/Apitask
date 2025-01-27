import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Apifetching } from './Api'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const Main = styled.div`
width:100%;
height:700px;
background-color:grey;
display:flex;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
overflow:scroll;
`
const Image = styled.img`
  width:280px;
  height:280px;
  margin:15px;
`
const Name = styled.h3`
 color:violet;
 font-size:18px;
 margin:10px;
 text-align:center;

`
const Sample = () => {
    const [state, setstate] = useState(0)
    const [apidata, setapidata] = useState([])
    async function display() {
        const returndata = await Apifetching()
        console.log("Fetching Api data", returndata)
        setapidata(returndata)
      }
      useEffect(() => {
        display()
      }, [])
      console.log("***********", apidata)
  return (
    <>
    <Name>"Welcome To Futura Labs..."</Name>
    <br></br>
    <Name>Api Fetching Task</Name>
    <Main>
    {apidata.map((li)=>{
        return (
              
            <Link to={`/disp/${li.idCategory}`}> <div>
            <Image src={li.strCategoryThumb} />
            <button className="mybtn mybtn2">
              <Name>{li.strCategory}</Name>
            </button>
          </div>
          </Link>
        )
     })}
    </Main>
   
    </>
  )
}

export default Sample