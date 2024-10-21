'use client'

import { useRouter } from "next/navigation"
import { TableService } from "@/faco/tables/service"

export default function Pagination({ count = 0, searchParams = {} }) {
    const { replace } = useRouter()
    const { current, pageCount, ranges } = TableService.pager(searchParams.page, count)

    const onPage = (value) => {
        if(['...', current].includes(value)) return
        replace('?' + new URLSearchParams({...searchParams, page: value}).toString())
    }

    return (
        <>
            { pageCount>1 && (
                <nav>
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ` + (current == 1 ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                            <a className="page-link" onClick={() => onPage(1)}>Previous</a>
                        </li>
                        {ranges.map(value => (
                            <li key={value} className={`page-item ` + ((value == current) ? 'active' : '')} style={{cursor: 'pointer'}}>
                                <a className="page-link" onClick={() => onPage(value)}>{value}</a>
                            </li>
                        ))}
                        <li className={`page-item ` + (current == pageCount ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                            <a className="page-link" onClick={() => onPage(pageCount)}>Next</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}