import { ref, computed } from 'vue'

export interface MenuState {
  id: string
  isOpen: boolean
  level: number
  parentId?: string
}

const menuStates = ref<Map<string, MenuState>>(new Map())
let menuIdCounter = 0

export function useMenu(parentId?: string | undefined) {
  const menuId = `menu-${++menuIdCounter}`
  const isOpen = ref(false)
  
  const parentMenu = parentId ? menuStates.value.get(parentId) : undefined
  const level = parentMenu ? parentMenu.level + 1 : 0

  // Initialize menu state
  const menuState: MenuState = {
    id: menuId,
    isOpen: false,
    level,
    parentId
  }
  
  menuStates.value.set(menuId, menuState)

  // Computed to track if this menu is open
  const open = computed({
    get: () => isOpen.value,
    set: (value: boolean) => {
      if (value) {
        openMenu()
      } else {
        closeMenu()
      }
    }
  })

  function openMenu() {
    // Close sibling menus at the same level
    closeSiblingMenus()
    
    // If this is a root menu (level 0), close all other root menus
    if (level === 0) {
      closeAllRootMenus()
    }
    
    isOpen.value = true
    const state = menuStates.value.get(menuId)
    if (state) {
      state.isOpen = true
    }
  }

  function closeMenu() {
    isOpen.value = false
    const state = menuStates.value.get(menuId)
    if (state) {
      state.isOpen = false
    }
    
    // Close all child menus
    closeChildMenus()
  }

  function closeSiblingMenus() {
    for (const [id, state] of menuStates.value.entries()) {
      if (id !== menuId && state.parentId === parentId && state.level === level) {
        state.isOpen = false
        // Also update the ref if it exists
        const siblingMenu = getMenuById(id)
        if (siblingMenu) {
          siblingMenu.isOpen.value = false
        }
        // Close children of siblings
        closeChildrenOfMenu(id)
      }
    }
  }

  function closeAllRootMenus() {
    for (const [id, state] of menuStates.value.entries()) {
      if (id !== menuId && state.level === 0) {
        state.isOpen = false
        // Also update the ref if it exists
        const rootMenu = getMenuById(id)
        if (rootMenu) {
          rootMenu.isOpen.value = false
        }
        // Close all children
        closeChildrenOfMenu(id)
      }
    }
  }

  function closeChildMenus() {
    closeChildrenOfMenu(menuId)
  }

  function closeChildrenOfMenu(parentMenuId: string) {
    for (const [id, state] of menuStates.value.entries()) {
      if (state.parentId === parentMenuId) {
        state.isOpen = false
        // Also update the ref if it exists
        const childMenu = getMenuById(id)
        if (childMenu) {
          childMenu.isOpen.value = false
        }
        // Recursively close grandchildren
        closeChildrenOfMenu(id)
      }
    }
  }

  function getMenuById(id: string) {
    // This is a simple way to track menu instances
    // In a real implementation, you might want a more sophisticated registry
    return menuInstances.get(id)
  }

  // Cleanup when menu is unmounted
  function cleanup() {
    menuStates.value.delete(menuId)
    menuInstances.delete(menuId)
  }

  // Register this menu instance
  menuInstances.set(menuId, { isOpen, close: closeMenu })

  return {
    menuId,
    open,
    level,
    openMenu,
    closeMenu,
    cleanup
  }
}

// Simple registry to track menu instances
const menuInstances = new Map<string, { isOpen: any, close: () => void }>()

// Global function to close all menus (useful for escape key, outside clicks, etc.)
export function closeAllMenus() {
  for (const [id, state] of menuStates.value.entries()) {
    state.isOpen = false
    const menuInstance = menuInstances.get(id)
    if (menuInstance) {
      menuInstance.isOpen.value = false
    }
  }
}

// Get all open menus (useful for debugging or other utilities)
export function getOpenMenus() {
  return Array.from(menuStates.value.values()).filter(state => state.isOpen)
}