import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useNavigate } from 'react-router-dom';
import ButtonImage from '../../assets/MepplClothing2.png';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
          <button className='navbutton' onClick={handleButtonClick}>
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
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet />
      </Fragment>
    );  
    
  
  };

  export default Navigation;