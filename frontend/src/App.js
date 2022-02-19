import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ViewportProvider from './viewport';
import Account from './pages/Account';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Signup from './pages/SignUp';
import Login from './pages/LogIn';
import Homebar from './components/Home/Homebar';

function App() {
	return (
		<ViewportProvider>
			<Homebar/>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/account" element={<Account />} />
				<Route exact path="/buy" element={<Buy />} />
				<Route exact path="/sell" element={<Sell />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</ViewportProvider>
	);
}

export default App;
