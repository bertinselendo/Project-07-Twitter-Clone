import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Profile from './pages/profile'
import NotFound from './pages/404'
import UnderConstruction from './pages/underConstruction'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/explore",
				element: <UnderConstruction />
			},
			{
				path: "/notifications",
				element: <UnderConstruction />
			},
			{
				path: "/bookmarks",
				element: <UnderConstruction />
			},
			{
				path: "/lists",
				element: <UnderConstruction />
			},
			{
				path: "/profile",
				element: <Profile />
			},
			{
				path: "*",
				element: <NotFound />
			}
		]
	},
	{
		path: "/messages",
		element: <UnderConstruction />,
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)