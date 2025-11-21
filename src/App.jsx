import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Developments from './pages/Developments'
import Team from './pages/Team'
import Communities from './pages/Communities'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/developments" element={<Developments />} />
        <Route path="/team" element={<Team />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
