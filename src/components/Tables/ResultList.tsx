import { empty } from "@/faco"
import { makeUrl } from "@/faco/services/tables"

export default async function ResultList({searchParams}) {
    const response = await fetch( makeUrl(searchParams) )
    const { rows = [] } = await response.json()

    return (
        <>
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

                {rows.map((row, index) => (
                    <tr key={`${index}_${row.car_maker_name}_${row.car_name}_${row.grade}`}>
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

            <nav aria-label="navigation">
                <ul className="pagination justify-content-end">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}