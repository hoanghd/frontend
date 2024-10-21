import { isset } from "@/faco"

export async function formFilterInit( searchParams ){
    let carnames = []

    const response = await fetch(`${process.env.BASE_API_URL}/catalog/car_maker`)
    const { list: makers = [] } = await response.json()

    if( isset(searchParams.car_maker_id) ){
        const response = await fetch(`${process.env.BASE_API_URL}/ranking/syasyu/car_name?id=${searchParams.car_maker_id}`)
        carnames = await response.json()
    }

    return { searchParams, makers, carnames }
}