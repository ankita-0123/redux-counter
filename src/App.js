import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import TicketBookingForm from './components/TicketBookingForm';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Header />
      {isAuth && <Routes>
        isAuth && <Route path="/" element={<ShowList />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
        <Route path="/booking/:id" element={<TicketBookingForm />} />
      </Routes>}
      {!isAuth && <Auth />}
    </BrowserRouter>
  );
};

export default App;
