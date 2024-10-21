import { isset } from "@/faco"
import { TableClient } from "@/faco/tables/client"

export const TableService = {
     async formFilterInit( searchParams ){
        let carnames = []
        const makers = await TableClient.maker()

        if( isset(searchParams.car_maker_id) ){
            carnames = await TableClient.carnames(searchParams.car_maker_id)
        }

        return { searchParams, makers, carnames }
    },

    makeUrl(searchParams){
        let url = `${process.env.BASE_API_URL}/ranking/`
        let params = new URLSearchParams({
            page: searchParams.page || 1
        })

        if( isset(searchParams.car_maker_id) ) {
            if( isset(searchParams.car_name_id) ) {
                params.set('category', `${searchParams.car_maker_id}_${searchParams.car_name_id}`)
                url += `syasyu`
            } else {
                params.set('category', searchParams.car_maker_id)
                url += `maker`
            }
        } else {
            url += 'category'
        }

        return url + '?' + params.toString()
    },

    pager(page, total, maxButtons = 5, perPage = 20 ) {
        const pageCount = Math.max(1, Math.ceil(total / perPage))
        const current = Math.min(page || 1, pageCount)

        const start = Math.max(
            Math.min(
                current - Math.floor(maxButtons / 2),
                pageCount - maxButtons + 1
            ),
            1
        )

        const end = start + maxButtons - 1
        const step = 1

        return {
            current,
            pageCount,
            ranges: Array.from(
                { length: (end - start) / step + 1 },
                (value, index) => start + index * step
            )
        }
    }
}