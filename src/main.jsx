import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainPage from './pages/MainPage.jsx'
import ObjectsPage from './pages/ObjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import Menu from './pages/Menu.jsx'
import Townhouse from './pages/Townhouse.jsx'

import ErrorPage from './pages/ErrorPage.jsx'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/objects",
    element: <ObjectsPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contacts",
    element: <ContactsPage />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/objects/townhouse",
    element: <Townhouse />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
  </StrictMode>
)
