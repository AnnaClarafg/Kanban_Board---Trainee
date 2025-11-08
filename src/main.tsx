import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Kanban from './pages/KanbanBoard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Kanban/>
  </StrictMode>,
)
