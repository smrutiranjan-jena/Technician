import '../index.css'
import NavBar from "../component/NavBar"
import Footer from '../component/Footer';
import CategoryList from '../component/CategoryList';
import { useEffect, useState } from 'react';
const HomePage = (props) => {
  return (
    <div>
      <NavBar />
      <CategoryList />
      <Footer />
    </div>)
}
export default HomePage