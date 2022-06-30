import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './dashboards.module.css'

const Dashboards = () => {

  const initialDashboards = useMemo(() => {
    return JSON.parse(localStorage.getItem('dashboards')) || [{  id: 0, name: 'Example dashboard'}]
  }, [])
  
  const initialDashboardId = JSON.parse(localStorage.getItem('dashboardLastId')) || 1

  const [dashboads, setDashboards] = useState(initialDashboards)
  const [dashboardId, setDashobardId] = useState(initialDashboardId)

  const addDashboard = () => {
    const newDashboards = [...dashboads, {id: dashboardId, name: `Dashboard ${dashboardId}` }]
    const newDashboardId = dashboardId + 1
    localStorage.setItem('dashboards', JSON.stringify(newDashboards))
    localStorage.setItem('dashboardLastId', JSON.stringify(newDashboardId))
    setDashboards(newDashboards)
    setDashobardId(newDashboardId)
  }

  const removeDashboard = (id) => {
    const remainingDashboards = dashboads.filter(dashboard => dashboard.id !== id)
    localStorage.setItem('dashboards', JSON.stringify(remainingDashboards))
    setDashboards(remainingDashboards)
  }

  return (
    <>
      <h1>Dashboards!</h1>
      <div className={classes.linksContainer}>
        {dashboads.map(({id, name}) => (
          <div key={id} className={classes.dashboardLinkContainer}>
            <Link to={`/dashboard/${id}`}>{name}</Link>
            <button onClick={() => removeDashboard(id)}> X </button>
          </div>
        ))}
        <button className={classes.addDashboardBtn} onClick={addDashboard}>Add new Dashboard</button>
      </div>
    </>
  )

} 

export default Dashboards;
