import { empty, isset } from "@/faco"

export default async function ResultList({searchParams}) {
    let url = `${process.env.BASE_API_URL}/ranking/`

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
    const { rows = [] } = await response.json()

    return (
        <table className="table table-bordered bg-white" width="100%" cellSpacing="0">
            <thead>
            <tr>
                <th>メーカー</th>
                <th>車名</th>
                <th>モデル</th>
                <th>支払総額 (税込)</th>
                <th>本体価格 (税込)</th>
            </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr key={`${row.car_maker_name}_${row.car_name}_${row.grade}`}>
                        <td>{row.car_maker_name}</td>
                        <td>{row.car_name} {row.grade}</td>
                        <td>{row.first_registration_date.replace(/^(\d{4})-(\d{2}).+$/mg, "\$1年\$2月")}</td>
                        <td>{row.car_data.total_payment}万円</td>
                        <td>{row.car_data.sales_price_intax}万円</td>
                    </tr>
                ))}

                {empty(rows) && (
                    <tr>
                        <td colSpan={5}>No data</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}