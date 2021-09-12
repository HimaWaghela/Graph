import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return(
        <div>
            <Bar 
                data={{ 
                 labels: ['Madhya Pradesh','Uttarakhand','Tamil Nadu','Kerala','Andra Pradesh','Karnataka'],
              }}
              height={300}
              width={600}
              options={{
                  maintainAspectRatio: false,
              }}
            />
        </div>
    )
}

export default BarChart