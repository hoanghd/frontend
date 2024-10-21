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

    pager(c, m) {
        const current = c,
            last = m,
            delta = 2,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = []
        let l

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }
}