import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import FAQsPage from './pages/about-faqs/FAQsPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPageDetail from './pages/tasks/TaskPageDetail';
import TaskPage from './pages/tasks/TaskPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = true

  let tasks = [
    { id: 1, title: 'Task 1', description: 'Description of Task 1' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2' },
  ];

  return (
    <Router>
      <div>

        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
          <Link to='/login'>| Log in ||</Link>
        </aside>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={logged ? <HomePage /> : <LoginPage/> } />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/faqs" element={<FAQsPage/>}/>
        <Route path="/profile" element={logged ? <ProfilePage /> : <LoginPage />} />
        <Route path='/tasks' element={<TaskPage/>}/>
        <Route exact path='/tasks/:id' element={<TaskPageDetail tasks={tasks}/>} />
        
        {/* 404 page not fund */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      </div>
    </Router>
  );
}

// function TaskPageDetailContainer({ tasks }) {
//   const { id } = useParams();
//   const taskId = parseInt(id, 10);
//   const task = tasks.find((task) => task.id === taskId);

//   if (!task) {
//     return <div>Task not found</div>;
//   }

//   return <TaskPageDetail task={task} />;
// }
export default AppRoutingOne;
