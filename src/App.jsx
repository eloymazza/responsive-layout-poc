import { Routes, Route } from 'react-router-dom';
import DashboardPanel from "./components/DashboardPanel/DashboardPanel"
import Layout from './components/Layout/Layout';
import Dashboards from './pages/dashboards/dashboards';
import NotFound from './pages/notFound/notFound';
import './styles/main.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboards />} />
        <Route path='dashboard/:id' element={<DashboardPanel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}


export default App;
