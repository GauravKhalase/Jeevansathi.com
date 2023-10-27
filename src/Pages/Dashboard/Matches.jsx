import React from 'react'
import ProfileNavbar from '../../Components/Dashboard/ProfileNavbar'
import LeftSideCard from '../../Components/Dashboard/LeftSideCard'
import UpgradeCard from '../../Components/Dashboard/UpgradeCard'

const Matches = () => {
  return (
    <div>
      <div><ProfileNavbar/></div>
      <div>
        <LeftSideCard/>
        <div>
          matches
        </div>
        <UpgradeCard/>
      </div>
    </div>
  )
}

export default Matches