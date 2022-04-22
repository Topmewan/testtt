import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/App.tsx'
import './styles.scss'
import UsersProvider from './context/UsersContext'


ReactDOM.render(
  <UsersProvider>
    <App />
  </UsersProvider>,
  document.getElementById('root'))