import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import AppHeader from './components/common/header'
import { Content } from 'antd/lib/layout/layout'
import AppHome from './components/views/home'
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
      </Layout>
    </div>
  )
}

export default App
