import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar.jsx';
    import Home from './pages/Home.jsx';
    import MyTasks from './pages/MyTasks.jsx';
    import MyProjects from './pages/MyProjects.jsx';
    import Profile from './pages/Profile.jsx';
    import Settings from './pages/Settings.jsx';
    import About from './pages/About.jsx';

    function App() {
      return (
        <div className="App">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-tasks" element={<MyTasks />} />
              <Route path="/my-projects" element={<MyProjects />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
