import React from 'react'
import { styled } from 'styled-components'
const Name = styled.h3`
 color:violet;
 font-size:18px;
 margin:10px;
 text-align:center;

`
const Footer = () => {
  return (
   <>
   <div className='footer'>
    <Name>Thank you & Welcome...</Name>
</div>
   </>
  )
}

export default Footer