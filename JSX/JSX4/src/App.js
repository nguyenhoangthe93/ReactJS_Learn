import React from 'react';
import './App.css';
import FromRegister from './components/FormContact/FormContact';
import Profile from './Profile/Profile';
import JobList from './JobList/JobList';
import Heading from './Heading/Heading';
import From from './Form/Form';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AcountLayout from './Layout/AcountLayout';



function App() {
  return (
    <div className="container vh-100">
        {/* <Heading color='green' background='yellow'> We are learning CRA </Heading>
        <Heading color='yellow' background='red'> We are learning CRA </Heading>
        <FromRegister />
        <Profile />
        <JobList /> */}

        {/* <From></From> */}
        {/* <Header /> */}
        {/* <JobList/> */}
        {/* <Profile /> */}
        {/* <FromRegister /> */}

        {/* <Footer/> */}

        {/* <JobList/> */}
        <From/>
    </div>
  );
}

export default App;
