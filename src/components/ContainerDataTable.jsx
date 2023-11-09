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
    <div className='bg-white p-5 rounded-lg shadow'>
        <DataTable 
            customStyles={customStyles}
            columns={columns}
            data={data}
            pagination
        />
    </div>
  )
}
