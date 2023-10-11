import Directory from './components/directory/directory.component';

import './categories.styles.scss';

const App = () => { 


  const categories = [
    
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://images.unsplash.com/photo-1572994631587-b3b33b849ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://images.unsplash.com/photo-1676278746071-cd54ce97bf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      }
  ];

  return<Directory categories={categories} />;
  

  
};

export default App;
