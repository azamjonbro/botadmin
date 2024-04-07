import Content from '../Pages/Content'
import Navbar from '../Pages/Navbar'
import './style.css'
function route() {
  return (
    <div className='header'>
        <Navbar className="navbar"/>   
        <Content className="content"/>
    </div>
  )
}

export default route