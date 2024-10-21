import { isset } from "@/faco"

export const TableService = {
     async formFilterInit( searchParams ){
        let carnames = []

        const response = await fetch(`${process.env.BASE_API_URL}/catalog/car_maker`)
        const { list: makers = [] } = await response.json()

        if( isset(searchParams.car_maker_id) ){
            const response = await fetch(`${process.env.BASE_API_URL}/ranking/syasyu/car_name?id=${searchParams.car_maker_id}`)
            carnames = await response.json()
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