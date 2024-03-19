import { Route, Routes } from 'react-router-dom'
import { route } from '../routes'
import { ProposalRegisterPage } from '../../pages/proposal'

export function AppRoutes() {
  return (
    <Routes>
      <Route path={route.mainPage} element={<ProposalRegisterPage />} />
    </Routes>
  )
}
