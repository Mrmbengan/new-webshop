import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ButtonImage from '../../assets/MepplClothing2.png';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  const { currentUser } = useContext(UserContext);

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
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
            <Link className="nav-link" to='/auth'>
              Sign In 
            </Link>
            )}
          </div>
        </div>
        <Outlet />
      </Fragment>
    );  
    
  
  };

  export default Navigation;