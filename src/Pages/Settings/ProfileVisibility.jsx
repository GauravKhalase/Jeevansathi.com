import React, { useState } from 'react'
import PrivacyVisibilityCard from '../../Components/Settings/PrivacyVisibilityCard'

const ProfileVisibility = () => {

  const text = [
    {
      para1:"Allow my detailed profile to be viewed by all visitors.",
    },
    {
      para1:"Allow my detailed profile to be viewed only by registered users who pass my filters.",
      para3:"Manage Filters"
    },
    {
      para1:"Don't show my detailed profile or summary profile to any user, I will search and contact profiles.",
      para2:"Summary profile will also not viewable by any visitor",
    },
  ]

  const [gray,setGray] = useState(1);

  return (
    <div className='flex flex-row justify-between'>
      {
        text.map((item,index)=>{return<div><PrivacyVisibilityCard para1={item.para1} para2={item.para2} para3={item.para3} gray={gray} setGray={setGray} index={index}/></div>})
      }
      
    </div>
  )
}

export default ProfileVisibility