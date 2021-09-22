import { ReactComponent as pen } from '../assets/SVG/pen.svg'
import { ReactComponent as list } from '../assets/SVG/list.svg'
import { ReactComponent as doc } from '../assets/SVG/doc.svg'
import { ReactComponent as grid } from '../assets/SVG/grid.svg'
import { ReactComponent as panel } from '../assets/SVG/panel.svg'
import { ReactComponent as person } from '../assets/SVG/person.svg'
import { ReactComponent as error } from '../assets/SVG//error.svg'
import CarSettingTab from '../components/tabs/carSettingTab'
import OrdersTab from '../components/tabs/ordersTab'

export const panelList = [
  { icon: pen, title: 'Карточка автомобиля', component: CarSettingTab },
  { icon: list, title: 'Список авто', component: CarSettingTab },
  { icon: doc, title: 'Заказы', component: OrdersTab },
  { icon: grid, title: 'Menu 4', component: CarSettingTab },
  { icon: panel, title: 'Menu 5', component: CarSettingTab },
  { icon: person, title: 'Menu 6', component: CarSettingTab },
  { icon: error, title: 'Menu 7', component: CarSettingTab },
]
