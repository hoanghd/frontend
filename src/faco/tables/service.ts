import { isset } from "@/faco"
import { TableClient } from "@/faco/tables/client"

export const TableService = {
     async formInit( searchParams: any ){
        let carnames = []
        const makers = await TableClient.maker()

        if( isset(searchParams.car_maker_id) ){
            carnames = await TableClient.carnames(searchParams.car_maker_id)
        }

        return { searchParams, makers, carnames }
    },

    makeUrl(searchParams: any){
        let url = `${process.env.BASE_API_URL}/ranking/`
        const params = new URLSearchParams({
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
    }
}