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

        if( isset(searchParams.car_maker_id) ) {
            if( isset(searchParams.car_name_id) ) {
                url += `syasyu?category=${searchParams.car_maker_id}_${searchParams.car_name_id}`
            } else {
                url += `maker?category=${searchParams.car_maker_id}`
            }
        } else {
            url += 'category'
        }

        return url
    }
}