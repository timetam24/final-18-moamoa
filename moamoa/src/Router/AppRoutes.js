import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../Pages/ProductDetail';
import AddProduct from '../Pages/AddProduct';
import LoginPage from '../Pages/Login';
import JoinPage from '../Pages/Join';
import ProfileInfo from '../Pages/ProfileInfo';
// import Landing from '../Pages/Landing';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path='/' element={<Landing />} /> */}

      {/* 내 프로필 */}
      <Route path='/profile' element={<ProfileInfo />} />

      {/* 로그인 */}
      {/* <Route path='/login' element={<?? />} /> */}

      {/* 상품 등록 */}
      <Route path='/product' element={<AddProduct />} />

      {/* 상품 리스트 */}
      <Route path='/product/:accountname' element={<ProductDetail />} />

      {/* 게시글 상세 */}
      {/* <Route path="/post/:post_id" element={<?? />} /> */}

      <Route path='/user/login' element={<LoginPage />} />
      <Route path='/user' element={<JoinPage />} />
    </Routes>
  );
}
