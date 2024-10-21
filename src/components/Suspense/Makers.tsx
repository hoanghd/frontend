import Link from "next/link"

export default async function Makers() {
    const response = await fetch(`${process.env.BASE_API_URL}/catalog/car_maker_catalog`)
    const {list = []} = await response.json()

    return (
        <ul>
            {list.map(row => (
                <li key={row.car_maker_id}>
                    <Link href={`/suspense/${row.car_maker_id}/`}>
                        {row.car_maker_name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}