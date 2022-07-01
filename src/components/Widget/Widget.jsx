import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './drag.css'

const Widget = (({data}) => {
  

  return (
    <div className='widget'>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={data} 
        allowChartUpdate={true}
        containerProps={{ style: { height: "100%" } }}
      />
    </div>
  )
})

export default Widget