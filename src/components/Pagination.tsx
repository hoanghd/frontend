'use client'

import { useRouter } from "next/navigation"
import { TableService } from "@/faco/tables/service"

export default function Pagination({ count = 0, searchParams = {} }) {
    const { replace } = useRouter()

    const page = searchParams.page || 1
    const pages = Math.ceil(count / 20)
    const ranges = TableService.pager(page, pages)

    const onPage = (value) => {
        if(['...', page].includes(value)) return
        replace('?' + new URLSearchParams({...searchParams, page: value}).toString())
    }

    return (
        <>
            { pages>1 && (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ` + (page == 1 ? 'disabled' : '')}>
                            <a className="page-link" onClick={() => onPage(1)}>Previous</a>
                        </li>
                        {ranges.map(value => (
                            <li key={value} className={`page-item ` + ((value == page) ? 'active' : '')}>
                                <a className="page-link" onClick={() => onPage(value)}>{value}</a>
                            </li>
                        ))}
                        <li className={`page-item ` + (page == pages ? 'disabled' : '')}>
                            <a className="page-link" onClick={() => onPage(pages)}>Next</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}