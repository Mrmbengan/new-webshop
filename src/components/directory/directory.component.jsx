import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
    
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://images.unsplash.com/photo-1572994631587-b3b33b849ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    route: '/shop/hats'
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    route: '/shop/jackets'
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    route: '/shop/sneakers'
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    route: '/shop/womens'
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://images.unsplash.com/photo-1676278746071-cd54ce97bf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    route: '/shop/mens'
  }
];

const Directory = () => {
  
    return (
        <DirectoryContainer>
          {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            
            
          ))}
        </DirectoryContainer>
      );
}

export default Directory;