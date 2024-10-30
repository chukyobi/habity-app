import profile from '../assets/images/ProfileJay.jpeg'; 
import { FaPlus, FaChevronDown, FaCalendar, FaSearch } from 'react-icons/fa'; 

const Layout = () => {
  return (
    <div className="main-container">
    <div className="layout-1">
        <div className="profile">
            <img className="profile_pic" src={profile} alt="profile" />
            <span>Joseph-Clinton Obi</span>
        </div>
    </div>

    <div className="layout-2">
      <div className="nav">
        <p className='nav-title'>
          My Habits
        </p>
        <div className='tabs'>
        <div className="tab-1">
                <FaCalendar/>
                    <span className='tab-title'>Tomorrow</span>
                <FaChevronDown/>
            </div>
            <div className="tab">
                <FaPlus/>
                  <span className='tab-title'>Add Habits</span>
                <FaChevronDown/>
            </div>
            <span className='tab-2'>
              <FaSearch/>
            </span>
        </div>
       
      </div>
    </div>

    <div className="layout-3">
      details
    </div>
  </div>
  )
}

export default Layout