import { useNavigate } from 'react-router-dom';
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import ButtonImage from '../../assets/MepplClothing2.png';
import './navigation.styles.scss';

const Navigation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

    return (
      <Fragment>
        <div className="navigation">
          <button className='button' onClick={handleButtonClick}>
            <img src={ButtonImage} alt="Button" />
          </button>
          <div className='nav-links-container'>
            <Link className="nav-link" to='/shop'>
              Shop
            </Link>
            <Link className="nav-link" to='/auth'>
              Sign In 
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );  
    
  
  };

  export default Navigation;