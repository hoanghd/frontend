import Link from "next/link";

export default async function Models({car_maker_id, car_name_id}) {
    const response = await fetch(`https://back-prd.ke001.kurumaerabi.com/catalog/models/${car_maker_id}/${car_name_id}`)
    const result = await response.json()

    return (
        <ul>
            {result.map(row => (
                <li key={`${row.full_start_date}_${row.full_end_date}_${row.img_update_date}`}>
                    <Link href={`/suspense/${car_maker_id}/${car_name_id}/${row.full_start_date}`}>
                        {row.full_start_date.replace(/^(\d{4})-(\d{2})/mg, "\$1年\$2月")}
                    </Link>
                </li>
            ))}
        </ul>
    )
}