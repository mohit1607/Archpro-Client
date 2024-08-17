import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Portal from "./pages/Portal.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Social from "./pages/Social.jsx";
import Project from "./pages/Project.jsx";
import Auth from "./pages/Auth.js";
import { FirebaseContext } from "./context/firebase/firebaseContext.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Layout from "./Layout.js";
import { Toaster } from "react-hot-toast";
import Modal from "./components/Modal.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProfileReadOnly from "./pages/ProfileReadOnly.jsx";

function App() {
  const modalText =
    "You need to sign up to access the things inside the portal.";

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route
          path="/portal"
          element={
            <Layout>
              <Portal></Portal>
            </Layout>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Layout>
              <Portfolio></Portfolio>
            </Layout>
          }
        />
        {/* <Route path='/social' element={<Layout><Social></Social></Layout>} /> */}
        <Route
          path="/project"
          element={
            <Layout>
              <Project></Project>
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile></Profile>
            </Layout>
          }
        />
        <Route
          path="/post"
          element={
            <Layout>
              <Post></Post>
            </Layout>
          }
        />
        <Route
          path="/profile_read"
          element={
            <Layout>
              <ProfileReadOnly></ProfileReadOnly>
            </Layout>
          }
        />
        <Route
          path="/project_page"
          element={
            <Layout>
              <ProjectPage></ProjectPage>
            </Layout>
          }
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal
        heading={"Looks like You are not logged in yet"}
        text={modalText}
      />
    </>
  );
}

export default App;
