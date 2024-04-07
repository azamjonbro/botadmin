import { Link } from 'react-router-dom'
import './style.css'
import image from '../../assets/react.svg'
function index() {
    
  return (
    <div className='container'>
        <div className="logobox">
            <img src={image} alt='salom'/>
        </div>
        <div className="navbar">
        <div className='navbar-con'>
            <Link to='/' className="client">
                Home
            </Link>
            <Link to='/add' className="client">
                Add Product
            </Link>
            <Link to='/update' className="client">
                Update Product
            </Link>
            <Link to='/create' className="client">
                Create Image
            </Link>
        </div>
        </div>
    </div>
  )
}

export default index