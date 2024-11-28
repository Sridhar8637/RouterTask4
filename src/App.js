import "./App.css";
import Header from "./Components/Header/header.jsx";
import Rounting from "./rounting";
import { Provider } from 'react-redux'
import store from './Components/redux/store.jsx'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Rounting />
      </Provider>
    </div>
  );
}

export default App;
