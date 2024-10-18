import {empty, isset} from "@/faco"
import Link from "next/link";

export default async function List({searchParams}) {
    let url = 'https://back-prd.ke001.kurumaerabi.com/ranking/'

    if( empty(searchParams) ){
        url += 'category'
    }
    else if( isset(searchParams.car_maker_id) ) {
        if( isset(searchParams.car_name_id) ) {
            url += `syasyu?category=${searchParams.car_maker_id}_${searchParams.car_name_id}`
        } else {
            url += `maker?category=${searchParams.car_maker_id}`
        }
    }

    const response = await fetch(url)
    const {rows = []} = await response.json()

    return (
        <tbody>
            {rows.map(row => (
                <tr key={`${row.car_maker_name}_${row.car_name}_${row.grade}`}>
                    <td>{row.car_maker_name}</td>
                    <td>{row.car_name} {row.grade}</td>
                    <td>{row.first_registration_date.replace(/^(\d{4})-(\d{2}).+$/mg, "\$1年\$2月")}</td>
                    <td>{row.car_data.total_payment}万円</td>
                    <td>{row.car_data.sales_price_intax}万円</td>
                </tr>
                )
            )}
        </tbody>
    )
}