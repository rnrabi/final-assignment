import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextApi from './contextApi/ContextApi.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full md:w-11/12 mx-auto'>
      <QueryClientProvider client={queryClient}>
        <ContextApi>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ContextApi>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
