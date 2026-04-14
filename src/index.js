import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './styles.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Canvas 
        dpr={[1, 1.5]} 
        shadows
    >
        <App />
    </Canvas>
)