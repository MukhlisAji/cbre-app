import { FaSort } from 'react-icons/fa';
import {
    Typography,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function CustomTableMUI({ tableHead, tableRows }) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // Function to handle checkbox change
    const handleCheckboxChange = (rowIndex) => {
        if (selectedRows.includes(rowIndex)) {
            setSelectedRows(selectedRows.filter(index => index !== rowIndex));
        } else {
            setSelectedRows([...selectedRows, rowIndex]);
        }
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(tableRows.map((_, index) => index));
        }
        setSelectAll(!selectAll);
    };

    return (
        <table className="ml-2 w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    <th
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                        <div className="flex items-center justify-center">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                                className="form-checkbox h-4 w-4 text-c-teal focus:ring-c-teal"
                            />
                        </div>
                    </th>
                    {tableHead.map((head, index) => (
                        <th
                            key={index}
                            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                            >
                                {head}{" "}
                                {index !== tableHead.length - 1 && (
                                    <FaSort className="h-4 w-4" />
                                )}
                            </Typography>
                        </th>
                    ))}
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors"
                    ></th>
                </tr>
            </thead>
            <tbody>
                {tableRows.map((row, rowIndex) => {
                    const isLast = rowIndex === tableRows.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={rowIndex}>
                            <td className={classes}>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(rowIndex)}
                                        onChange={() => handleCheckboxChange(rowIndex)}
                                        className="form-checkbox h-4 w-4 text-c-teal focus:ring-c-teal"
                                    />
                                </div>
                            </td>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex} className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {cell}
                                    </Typography>
                                </td>
                            ))}
                            <td className={classes}>
                                <Tooltip content="Edit">
                                    <IconButton variant="text">
                                        <HiOutlineDotsVertical className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CustomTableMUI;
