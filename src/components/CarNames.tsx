export default async function CarNames({id}: any) {
    const response = await fetch(`https://back-prd.ke001.kurumaerabi.com/catalog/car_names/${id}`, {  cache: 'no-store' })
    const data = await response.json()
    return (
        <ul>
            {Object.entries(data).map(([key, rows]) => (
                <li key={key}>
                    {key}
                    <ul>
                        {rows.map(row => (
                            <li key={row.car_name_id}>{row.name}</li>
                        ))}
                    </ul>
                </li>
                ))}
        </ul>
    )
}