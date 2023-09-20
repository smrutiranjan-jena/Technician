import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/store/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>
)