import {Outlet} from 'react-router-dom'
import SkipToMain from './skip-to-main'

export default function AppShell() {
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <SkipToMain />
      <main
        id="content"
        className="overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 h-full"
      >
        <Outlet />
      </main>
    </div>
  )
}