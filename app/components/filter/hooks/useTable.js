import React, { useState, useEffect } from 'react';
import { createColumnHelper } from "@tanstack/react-table";
import CustomCheckbox from '../../common/CutomCheckBox';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { CiCircleAlert } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { table1 } from '@/app/static data/table';
import Badge from '../../button/Badge';
import Pagination from '../../table/Pagination';

export default function useTable() {
    const columnHelper = createColumnHelper();
    const [isLoading, setLoading] = useState(true);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const [columnVisibility, setColumnVisibility] = useState({
        createdOn: true,
        payer: true,
        lead: true,
        email: true,
        payerPhoneNumber: true,
        service: true,
        scheduleDate: true,
    });

    const handleCheckChange = (columnId) => {
        setColumnVisibility((prevVisibility) => ({
            ...prevVisibility,
            [columnId]: !prevVisibility[columnId],
        }));
    };

    const tableColumn = [
        columnHelper.display({
            id: 'sr_no',
            cell: props => <span className="min-w-[50px] flex justify-center items-center text-[#000000]"><SelectPayer /></span>,
            header: () => <span className="min-w-[50px] text-[#000000]">
                <CustomCheckbox
                    isChecked={columnVisibility['sr_no']}
                    checkedStyle="bg-black text-white"
                    uncheckedStyle="bg-white"
                    onCheckChange={() => handleCheckChange('sr_no')}
                />
            </span>,
            size: 50,
        }),
        columnHelper.accessor('createdOn', {
            id: 'createdOn',
            cell: props => {
                return (<span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>)
            },
            header: () => <span className='flex gap-2 text-[#000000]'><MdOutlineCreateNewFolder size={20} color='#000000' /><span>Created On</span></span>,
            size: 400,
        }),
        columnHelper.accessor('payer', {
            id: 'payer',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><RxAvatar size={20} color='#000000' /> <span>Payer</span></span>,
            size: 100,
        }),
        columnHelper.accessor('lead', {
            id: 'lead',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{<Badge status={props.getValue()} />}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><CiCircleAlert size={20} color='#000000' /><span>Lead</span></span>,
            size: 100,
        }),
        columnHelper.accessor('email', {
            id: 'email',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><FaHashtag size={20} color='#000000' /> <span>Email</span></span>,
            size: 100,
        }),
        columnHelper.accessor('payerPhoneNumber', {
            id: 'payerPhoneNumber',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><FaHashtag size={20} color='#000000' /> <span>Phone No</span></span>,
            size: 100,
        }),
        columnHelper.accessor('service', {
            id: 'service',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><FaHashtag size={20} color='#000000' /> <span>Service</span></span>,
            size: 100,
        }),
        columnHelper.accessor('scheduleDate', {
            id: 'scheduleDate',
            cell: props => <span className='min-w-[120px] flex justify-center items-center text-center text-[#000000]'>{props.getValue()}</span>,
            header: () => <span className='flex gap-2 text-[#000000]'><GrSchedule size={20} color='#000000' /><span>Schedule Date</span></span>,
            size: 400,
        })
    ];

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLoading(false);
            setTableData(table1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleApplyChanges = () => {
        console.log("Applying changes...");
        const updatedVisibility = {};
        tableColumn.forEach(column => {
            updatedVisibility[column.id] = columnVisibility[column.id];
        });
        setColumnVisibility(updatedVisibility);
    };

    const resetToDefault = () => {
        setColumnVisibility({
            createdOn: true,
            payer: true,
            lead: true,
            email: true,
            payerPhoneNumber: true,
            service: true,
            scheduleDate: true,
        });
    };

    const SelectPayer = () => {
        return (
            <React.Fragment>
                <CustomCheckbox
                    isChecked={false}
                    checkedStyle="bg-black text-white"
                    uncheckedStyle="bg-white"
                    onCheckChange={() => handleCheckChange('sr_no')}
                />
            </React.Fragment>
        );
    };

    const paginatedTableData = tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return {
        tableData: paginatedTableData,
        isLoading,
        tableColumn,
        currentPage,
        columnVisibility,
        handleColumnToggle: handleCheckChange,
        totalPages: Math.ceil(tableData.length / pageSize),
        onPageChange: handlePageChange,
        handleApplyChanges,
        resetToDefault,
    };
}