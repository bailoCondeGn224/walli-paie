import { useState, useEffect } from 'react'
import { Navbar } from '../sidebar.type'
import { useLocation } from 'react-router-dom'

export function useSidebarHooks(subMenu: Navbar[]) {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>(() =>
    subMenu.reduce((acc, item) => ({ ...acc, [item.title]: false }), {})
  )
  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }
  useEffect(() => {
    setOpenMenus(() =>
      subMenu.reduce((acc, item) => {
        const isActive = item.url === location.pathname
        return { ...acc, [item.title]: isActive || false }
      }, {})
    )
  }, [subMenu, location.pathname])

  const checkIsActiveMenu = (item: Navbar) => {
    return item.url === location.pathname
  }

  return {
    openMenus,
    toggleMenu,
    checkIsActiveMenu
  }
}
