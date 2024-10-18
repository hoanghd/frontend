import { Suspense } from "react"
import CarNames from "@/components/CarNames"

export default async function Makers() {
    const response = await fetch('https://back-prd.ke001.kurumaerabi.com/catalog/car_maker_catalog', {  cache: 'no-store' })
    const {list = []} = await response.json()

    return (
        <ul>
            {list.map((row: any) => (
                <li key={row.car_maker_id}>
                    {row.car_maker_name}
                    <Suspense fallback={<p>Loading carname...</p>}>
                        <CarNames id={row.car_maker_id}/>
                    </Suspense>
                </li>
            ))}
        </ul>
    )
}