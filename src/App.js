/*
    Crud App =>
             * Using Bootstrab and Css for styling
             * Using Fontawesome Icons v5
             * Using Json Server for Manipulating products Data
             * Using Ract Router Dom for routing
             * Using useParams() and useLocation() from Ract Router Dom
             * Using Sweet Allert2 Library
             * Using Fetch( ) to Sent and get data from server
             * Using Axios Library to sent data to json server

*/
import './App.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function App() {
  return (
    <>
      <Navbar />
      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
library.add(fab, fas, far)
