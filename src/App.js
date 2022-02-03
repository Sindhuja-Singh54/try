import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/sell" component={Sell} />
            <Route path="/buy" component={Buy} />
            <Route path="/account" component={Account} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
