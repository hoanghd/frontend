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

    const end = Math.min(pageCount, (start + maxButtons - 1))
    const step = 1

    const ranges =  Array.from(
        { length: (end - start) / step + 1 },
        (value, index) => start + index * step
    )

    const onPage = (value) => {
        if( value < 1 || value == page || value > pageCount ) return
        replace('?' + new URLSearchParams({...searchParams, page: value}).toString())
    }

    return (
        <div className="row">
            <div className="col-sm-12 col-md-5">
                {count>0 && (
                    <>検索結果 {count}件 {(page-1) * perPage + 1}～{Math.min(page * perPage, count)}件を表示しています</>
                )}
            </div>
            <div className="col-sm-12 col-md-7">
                { pageCount>1 && (
                    <nav>
                        <ul className="pagination justify-content-end">
                            <li className={`page-item ` + (page == 1 ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                                <a className="page-link" onClick={() => onPage( page - 1 )}>前へ</a>
                            </li>
                            {ranges.map(value => (
                                <li key={value} className={`page-item ` + ((value == page) ? 'active' : '')} style={{cursor: 'pointer'}}>
                                    <a className="page-link" onClick={() => onPage(value)}>{value}</a>
                                </li>
                            ))}
                            <li className={`page-item ` + (page == pageCount ? 'disabled' : '')} style={{cursor: 'pointer'}}>
                                <a className="page-link" onClick={() => onPage( page + 1 )}>次へ</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    )
}