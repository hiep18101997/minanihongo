import React, { useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  SettingOutlined,
  QuestionOutlined,
  ReadOutlined,
} from '@ant-design/icons'
import VerbTable from './components/VerbTable'
import KanjiTable from './components/KanjiTable'
import Settings from './components/Settings'
import japanLogo from './assets/images/japan-logo.svg'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('1')

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <VerbTable />
      case '2':
        return <KanjiTable />
      case '3':
        return <Settings />
      default:
        return <div>Coming soon...</div>
    }
  }

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        className="fixed top-0 left-0 bottom-0 h-full w-96 bg-gray-900 shadow-lg"
      >
        <div className="h-18 px-6 flex items-center bg-gray-900 border-b border-gray-800">
          <img src={japanLogo} alt="Japanese Learning" className="h-8" />
          {!collapsed && <span className="ml-3 text-lg font-semibold text-white">Học tiếng Nhật</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="bg-transparent border-none p-3"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: '1',
              icon: <BookOutlined className="text-white" />,
              label: 'Bảng động từ',
            },
            {
              key: '2',
              icon: <ReadOutlined className="text-white" />,
              label: 'Học Kanji',
            },
            {
              key: '3',
              icon: <SettingOutlined className="text-white" />,
              label: 'Cài đặt',
            },
            {
              key: '4',
              icon: <QuestionOutlined className="text-white" />,
              label: 'Hướng dẫn',
            },
          ]}
        />
      </Sider>
      <Layout className="ml-72">
        
        <Content className="mt-18 p-8">
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
