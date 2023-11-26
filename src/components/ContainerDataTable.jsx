import React from 'react'
import DataTable from 'react-data-table-component';

export const ContainerDataTable = ({columns,data}) => { 

    
    const customStyles = {
        rows: {
            style: {
              
            },
        },
        headCells: {
            style: {
                paddingLeft: '30px',
                paddingRight: '30px',
                
            },
        },
        cells: {
            style: {

                paddingLeft: '30px', 
                paddingRight: '30px',
            },
        },
    };

  return (
    <div className='bg-white p-5 mt-5 rounded-lg'>
        <h2 className='font-semibold text-center mb-5 py-3 rounded-lg'>Humedad y temperatura</h2>
        <DataTable 
            customStyles={customStyles}
            columns={columns}
            data={data}
            pagination
        />
    </div>
  )
}
