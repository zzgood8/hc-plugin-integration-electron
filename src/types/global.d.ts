interface anyObj {
  [key: string]: any
}

interface Window {
  isApp: boolean | undefined
  windowMin: () => void
  windowMax: () => void
  windowClose: () => void
  readExcel: (file: string) => {
    name: string
    data: unknown[]
  }[]
}

interface RouteMenu {
  id: number // 菜单id
  path: string // 菜单路径
  component?: string // 视图组件
  app: boolean // 是否app专属
  cache: boolean // 是否缓存
  type: number // 菜单类型 1=菜单项，2=菜单组
  title: string // 菜单标题
  children?: RouteMenu[] // 子菜单
  icon?: string // 菜单图标
  menuType?: number // 菜单项类型 1=页面路由 2=外链接 3=ifarme
}
