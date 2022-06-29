import classes from './DashboardPanel.module.css'
import './drag.css'
import '../../../node_modules/react-resizable/css/styles.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from "react-grid-layout"
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { setSelectionRange } from '@testing-library/user-event/dist/utils'

const ResponsiveGridLayout = WidthProvider(Responsive);

// const defaultItems = [
//   { i: "a", x: 0, y: 0, w: 2, h: 2 },
//   { i: "b", x: 2, y: 0, w: 2, h: 2 },
//   { i: "c", x: 4, y: 0, w: 2, h: 2 }
// ];

const DashboardPanel = () => {

  const params = useParams()

  const initialItems = useMemo(() => {
    const dashboard = localStorage.getItem('dashboard' + params.id)
    if(dashboard) {
     return JSON.parse(dashboard)
    }
    else {
      return []
    }
  }, [params.id])

  const [items, setItems] = useState(initialItems)

  const addItem = () => {
    const temp = [...items]
    temp.push({ i: uuidv4(), x: 0, y: 0, w: 2, h: 2 })
    setItems(temp)
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.i !== id))
  }

  const savePositions = (newPositions) => {
    setItems(newPositions)
    localStorage.setItem('dashboard' + params.id, JSON.stringify(newPositions))
  }

  return (
    <>
      <h1> Dashboard {params.id}</h1>
      <button onClick={addItem} className={classes.addButton}>Add Widget</button>
      <Link to="/">Back</Link>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: items }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        draggableCancel='.widget'
        onLayoutChange={savePositions}
      >
        {items.map(({i}) => (
          <div key={i} className={classes.widgetWrapper}>
            <button className={classes.removeButton} onClick={() => removeItem(i)}>X</button>
            <div className='widget'>{i}</div>
          </div>
        ))}
        {/* <div key="a" className={classes.widgetWrapper}>  
          <div className='widget'>A</div>
        </div>
        <div key="b" className={classes.widgetWrapper}>
          <div className='widget'>B</div>
        </div>
        <div key="c" className={classes.widgetWrapper}>
          <div className='widget'>C</div>
        </div> */}
      </ResponsiveGridLayout>
    </>
  );
}

export default DashboardPanel