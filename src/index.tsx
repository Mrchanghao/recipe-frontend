import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './component/user/login.component';
import Join from './component/user/join.component';
import FindCredential from './component/user/findCredential.component';

import List from './component/recipe/list.component';
import Register from './component/recipe/register.component';
import Profile from './component/user/profile.component';
import DetailView from './component/recipe/detailView.component';
import Myhome from './component/mypage/myhome.component';

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="recipe/:recipeId" element={<DetailView />} />
            <Route path="recipe/list" element={<List />} />
            <Route path="recipe/register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myhome" element={<Myhome />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findCredential" element={<FindCredential />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
