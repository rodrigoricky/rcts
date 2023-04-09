import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';

// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogDetails from './pages/BlogDetails';

// Service 
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';

// Project 
import ProjectDetails from './pages/ProjectDetails';

// Pages 
import AboutUs from './pages/AboutUs';
import PricingTable from './pages/PricingTable';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<DigitalAgency />}/>

				{/* Blogs */}
				<Route path={process.env.PUBLIC_URL + "/blog-grid/"} element={<BlogGridView />}/>
				<Route path={process.env.PUBLIC_URL + "/category/:slug"} element={<BlogCategory />}/>
				<Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />}/>
				<Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />}/>

				{/* Service */}
				<Route path={process.env.PUBLIC_URL + "/service-one/"} element={<ServiceOne />}/>
				<Route path={process.env.PUBLIC_URL + "/service-two/"} element={<ServiceTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />}/>

				{/* Project  */}
				<Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />}/>
			{/*	<Route path={process.env.PUBLIC_URL + "/case-study"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/case-details/:slug"} element={<CaseDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />}/>*/}
				<Route path={process.env.PUBLIC_URL + "/pricing-table"} element={<PricingTable />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>

				<Route path="*" element={<ErrorPage />} />

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
