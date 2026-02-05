import './assets/styles/common.css'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <div className="app-layout">

      {/* Header 영역(임시) */}
      <header className="site-header">
        {/* 임시 */}
        Header 영역
      </header>

      {/* Main 영역 */}
      <main className="site-main">
        <h1>메인 콘텐츠 영역</h1>
        <p>Footer / Header 레이아웃 확인용</p>
      </main>

      {/* Footer 영역 */}
      <Footer />
      
    </div>
  )
}

export default App
