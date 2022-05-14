import ReactDOM from 'react-dom'
import { Canvas,useFrame } from '@react-three/fiber'
import React from 'react'
import './styles.css'
import App from './App'

ReactDOM.render(
    <Canvas
    dpr={[1, 1.5]} shadows
    >
<App /></Canvas>, document.getElementById('root'))
