import { TableService } from "@/faco/tables/service"

export const TableClient = {
    async maker(){
        const response = await fetch(`${process.env.BASE_API_URL}/catalog/car_maker`)
        const result = await response.json()
        return result.list
    },

    async carnames(car_maker_id: any){
        const response = await fetch(`${process.env.BASE_API_URL}/ranking/syasyu/car_name?id=${car_maker_id}`)
        return await response.json()
    },

    async find( searchParams: any ){
        const response = await fetch( TableService.makeUrl(searchParams) )
        return await response.json()
    }
}