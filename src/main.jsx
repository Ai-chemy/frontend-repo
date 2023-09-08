import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// StrictMode가 존재하면 두번 랜더링
// strictMode는 검사 도구라고 생각하면되고 개발 모드에서는 오류를 잘잡기위해 두번씩 렌더링을 한다고 한다.
// 우선 strict 모드는 개발 과정 중에만 적용, 배포가 되고나면 strict 모드는 저절로 작동하지 않음

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
