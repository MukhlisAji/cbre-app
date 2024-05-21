import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BUILDINGDATADUMMY from '../lib/const/DataEntryDummy';

const columns = [
  { field: 'buildingName', headerName: 'Building Name', flex: 1, editable: true },
  { field: 'postalCode', headerName: 'Postal Code', flex: 1, editable: true },
  { field: 'buildingOwner', headerName: 'Building Owner', flex: 1, editable: true },
  { field: 'landAreaRemark', headerName: 'Land Area Remark', flex: 1, editable: true },
  { field: 'errorMessage', headerName: 'Error Message', flex: 1 },
];

export default function ContainterTest() {
  const [rows, setRows] = useState(BUILDINGDATADUMMY);

  const handleEditCellChange = React.useCallback(
    ({ id, field, props }) => {
      setRows((prevRows) => {
        const row = prevRows.find((r) => r.id === id);
        if (!row) return prevRows;
        return prevRows.map((r) => {
          if (r.id === id) {
            return { ...r, [field]: props.value };
          }
          return r;
        });
      });
    },
    [setRows]
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onEditCellChange={handleEditCellChange}
      />
    </div>
  );
}
