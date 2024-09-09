import './styles/index.less';
import './mock';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
// import store from './stores';
import store from './stores_l';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <Provider store={store}>
    <h1>hello</h1>
  </Provider>,
  document.getElementById('root'),
);
