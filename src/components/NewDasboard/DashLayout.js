import React from 'react'
import React from 'react'
import Dashboard from './Dashboard';
import Sidebar from '../SideBar/Sidebar'
import { GroupList } from './GroupList';

const DashLayout = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (
    <div className='App'>
      <div className='AppGlass'>
          <Sidebar
          onCollapse={(inactive) => {
              setInactive(inactive);
          }}
          />
              
          <Dashboard/> 
      </div>
    </div>

     
  );
  
}

export default DashLayout