'use client'

import { useRouter } from "next/navigation"

export default function Pagination({ count = 0, searchParams = {}, maxButtons = 5, perPage = 20 }) {
    const { replace } = useRouter()

    const pageCount = Math.max(1, Math.ceil(count / perPage))
    const page = Math.min( parseInt(searchParams.page) || 1, pageCount)

    const start = Math.max(
        Math.min(
            page - Math.floor(maxButtons / 2),
            pageCount - maxButtons + 1
        ),
        1
    )

    const end = start + maxButtons - 1
    const step = 1

    const ranges =  Array.from(
        { length: (end - start) / step + 1 },
        (value, index) => start + index * step
    )

    const onPage = (value) => {
        if(['...', page].includes(value)) return
        replace('?' + new URLSearchParams({...searchParams, page: value}).toString())
    }

    return (
        <>
            { pageCount>1 && (
                <nav>
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ` + (page == 1 ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                            <a className="page-link" onClick={() => onPage(Math.max(page - 1, 1))}>Previous</a>
                        </li>
                        {ranges.map(value => (
                            <li key={value} className={`page-item ` + ((value == page) ? 'active' : '')} style={{cursor: 'pointer'}}>
                                <a className="page-link" onClick={() => onPage(value)}>{value}</a>
                            </li>
                        ))}
                        <li className={`page-item ` + (page == pageCount ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                            <a className="page-link" onClick={() => onPage(Math.min(page + 1, pageCount))}>Next</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}