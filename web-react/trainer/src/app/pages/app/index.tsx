import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/app'

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
