'use client'

import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useRouter } from "next/navigation"

export default function Pagination({ count = 0, searchParams = {} }) {
    const { replace } = useRouter()


    return (
        <PaginationControl
            page={searchParams.page || 1}
            between={4}
            total={count}
            limit={20}
            changePage={page => {
                let url = new URLSearchParams(searchParams)
                url.set('page', page)
                replace(`/?` + url.toString())
            }}
            ellipsis={1}
        />
    )
}