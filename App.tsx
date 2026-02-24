
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Systems from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleResourceNavigate = (page: string, blogId?: string) => {
    if (blogId) setSelectedBlogId(blogId);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Systems onNavigate={setCurrentPage} />;
      case 'case-studies':
        return <CaseStudies />;
      case 'resources':
        return <Resources onNavigate={(page: string) => handleResourceNavigate(page)} onSelectBlog={(id) => handleResourceNavigate('blog-post', id)} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'blog-post':
        return selectedBlogId ? <BlogPost postId={selectedBlogId} onNavigate={setCurrentPage} /> : <Resources onNavigate={(page: string) => handleResourceNavigate(page)} onSelectBlog={(id) => handleResourceNavigate('blog-post', id)} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout activePage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
