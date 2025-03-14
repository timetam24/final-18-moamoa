import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from '../Pages/Splash/Landing';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Join from '../Pages/Join/Join';

import MyProfile from '../Pages/Profile/MyProfile';
import YourProfile from '../Pages/Profile/YourProfile';
import EditProfile from '../Pages/Profile/EditProfile';

// import FollowingList from '../Pages/Follow/FollowingList';
import FollowerList from '../Pages/Follow/FollowerList';

import ProductDetail from '../Pages/Product/ProductDetail';
import ProductList from '../Pages/Product/ProductList';
import AddProduct from '../Pages/Product/AddProduct';
import EditProduct from '../Pages/Product/EditProduct';

import UploadPost from '../Pages/Post/UploadPost';
import EditPost from '../Pages/Post/EditPost';
// import PostDetail from '../Pages/Post/PostDetail';

// import ChatRoom from '../Pages/Chat/ChatRoom';
// import ChatList from '../Pages/Chat/ChatList';

// import Error from '../Pages/Error';
// import Search from '../Pages/Search/Search';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 시작 */}
      <Route path='/' element={<Landing />} />

      {/* 홈 */}
      <Route path='/home' element={<Home />} />

      {/* 로그인 */}
      <Route path='/user/login' element={<Login />} />

      {/* 회원가입 */}
      <Route path='/user/join' element={<Join />} />

      {/* 내 프로필 */}
      <Route path='/profile/myInfo' element={<MyProfile />} />

      {/* 남의 프로필 */}
      <Route path='/profile/:accountname' element={<YourProfile />} />

      {/* 내 프로필 수정*/}
      <Route path='/profile/edit' element={<EditProfile />} />
      {/* 공통파일 프로필 수정 경로추가 */}

      {/* 팔로워 리스트*/}
      <Route path='profile/:accountname/follower' element={<FollowerList />} />

      {/* 상품 등록 */}
      <Route path='/product' element={<AddProduct />} />

      {/* 상품 수정 */}
      <Route path='/product/edit' element={<EditProduct />} />

      {/* 상품 리스트 */}
      <Route path='/product/:accountname' element={<ProductList />} />

      {/* 상품 상세 */}
      <Route path='/product/detail/:product_id' element={<ProductDetail />} />

      {/* 게시글 작성 */}
      <Route path='/post' element={<UploadPost />} />

      {/* 게시글 수정 */}
      <Route path='/post/edit' element={<EditPost />} />

      {/* 게시글 상세 */}
      <Route path='/post/:post_id' element={<PostDetail/>} />

      {/* <Route path='/user/login' element={<LoginPage />} />
      <Route path='/user' element={<JoinPage />} /> */}
    </Routes>
  );
}
