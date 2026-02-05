import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'

const App = () => <div>Hello World</div>

const root = createRoot(document.getElementById('main'))
root.render(<App />)
