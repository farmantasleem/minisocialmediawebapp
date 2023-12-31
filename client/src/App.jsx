import { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import { HomePage } from './Pages/HomePage';
import { VideoPage } from './Pages/VideoPage';
import "./style/HomePage.css"
import { PostCard } from './Components/PostCard';
import { PostPage } from './Pages/PostPage';
import { AllRoutes } from './routes/AllRoutes';

function App() {
 
  return (
    <AllRoutes/>
    
  );
}

export default App;
