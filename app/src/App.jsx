import {BrowserRouter , Router ,Route, Switch} from 'react-router-dom'
import {createStore ,applyMiddleware } from 'redux'
import search from './connect/search';
import addStudent from './components/addSudent';
import { Provider } from 'react-redux';
import  reducers  from "./reducers";

import promisView from "redux-promise";

//add Store 
const creatStoreWtihMw = applyMiddleware(promisView)(createStore)
function App() {
  return (
    <Provider store={creatStoreWtihMw(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={search} /> 
        <Route path="add" exact component={addStudent} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
