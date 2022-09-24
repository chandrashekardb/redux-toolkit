import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import SearchBox from './components/SearchBox';
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/ProductDetails';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={
      <>
      <Layout>
      <SearchBox />
      <HomePage />
      </Layout>
      </>
      }/>
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>       
    </>
  )
}

export default App