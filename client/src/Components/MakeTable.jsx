import { useMemo } from "react";
import { useTable } from "react-table";

export default function MakeTable({ data }) {

    const columns = useMemo(() => [
        {
            Header: "Topic",
            accessor: "topic"
        },
        {
            Header: "Sector",
            accessor: "sector"
        },
        {
            Header: "Country",
            accessor: "country"
        },
        {
            Header: "Region",
            accessor: "region"
        },
        {
            Header: "End Year",
            accessor: "end_year"
        },
        {
            Header: "Intensity",
            accessor: "intensity"
        },
        {
            Header: "Likelihood",
            accessor: "likelihood"
        },
        {
            Header: "Pestle",
            accessor: "pestle"
        },
        {
            Header: "Relevance",
            accessor: "relevance"
        },
        {
            Header: "Source",
            accessor: "source"
        },
        {
            Header: "URL",
            accessor: "url"
        },
    ], [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <div className="px-[5.125rem] text-center">
            <table {...getTableProps()} className="w-full border border-gray-900">
                <thead>
                    {headerGroups.map(hg => (
                        <tr {...hg.getHeaderGroupProps()}>
                            {hg.headers.map(column => (
                                <th {...column.getHeaderProps()} className="border border-gray-900">
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="border border-gray-500">
                                        {cell.column.id === 'url' ? (
                                            <a href={cell.value} target="_blank" rel="noopener noreferrer" className="text-blue-700">URL</a>
                                        ) : (
                                            // Render other cell contents normally
                                            cell.render('Cell')
                                        )}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}