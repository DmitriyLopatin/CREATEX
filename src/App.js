import './App.scss';
import Homepage from './homepage/Homepage.js'
import CoursesMain from './coursesMain/CoursesMain'
import EventsMain from './eventsMain/EventsMain'
import CourseDetails from './courseDetails/CourseDetails.js'
import EventDetails from './eventDetails/EventDetails.js'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './about/About'
import { PageNotFound } from './teamInfo/TeamInfo';
import Contacts from './contacts/Contacts.js';

function App() {
  return (
    <>

     <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/courses" element={<CoursesMain />}></Route>
              <Route path="/courses/:courseID" element={<CourseDetails />}></Route>
              <Route path="/events" element={<EventsMain />}></Route>
              <Route path="/events/:eventID" element={<EventDetails />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        <Footer />
     </Router>

    </>
  );
}

export default App;
