import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout className="min-h-screen">
      <Header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              Nihongo
            </Link>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Trang chủ
              </Link>
              <Link to="/dialogue" className="text-gray-600 hover:text-gray-900">
                Hội thoại
              </Link>
            </nav>
          </div>
        </div>
      </Header>
      <Content className="bg-gray-50">
        {children}
      </Content>
    </AntLayout>
  );
};

export default Layout; 