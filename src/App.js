import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import AppHeader from './components/common/header'
import { Content, Footer } from 'antd/lib/layout/layout'
import AppHome from './components/views/home'
import Footer1 from './components/common/footer'

const { Header } = Layout

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <Footer1 />
        </Footer>
      </Layout>
    </div>
  )
}

export default App
