import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditMovie from "../pages/EditMovie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import NewMovie from "../pages/NewMovie";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
        <Route path="/new-movie" element={<PrivateRouter />}>
          <Route path="" element={<NewMovie />} />
        </Route>
        <Route path="/edit-movie/:id" element={<PrivateRouter />}>
          <Route path="" element={<EditMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
