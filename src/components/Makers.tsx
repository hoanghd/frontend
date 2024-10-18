import { Suspense } from "react"
import CarNames from "@/components/CarNames"
import Link from "next/link";

export default async function Makers() {
    const response = await fetch('https://back-prd.ke001.kurumaerabi.com/catalog/car_maker_catalog')
    const {list = []} = await response.json()

    return (
        <ul>
            {list.map((row: any) => (
                <li key={row.car_maker_id}>
                    <Link href={`/suspense/${row.car_maker_id}/`}>
                        {row.car_maker_name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}