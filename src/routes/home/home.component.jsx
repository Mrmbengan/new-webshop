import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
import '../../../src/categories.styles.scss';

const Home = () => { 
  return (
    <div>
      <Directory />
      <Outlet />

    </div>
    
  );
};

export default Home;