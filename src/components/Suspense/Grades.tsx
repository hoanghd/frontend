export default async function Grades({car_maker_id, car_name_id, full_start_date}) {
    const response = await fetch(`https://back-prd.ke001.kurumaerabi.com/catalog/grades/${car_maker_id}/${car_name_id}/${full_start_date}`)
    const result = await response.json()
    return (
        <ul>
            {result.map(([key, rows]) => (
                <li key={key}>
                    {key.replace(/^(\d{4})-(\d{2})/mg, "\$1年\$2月")}
                    <ul>
                        {rows.map(row => (
                            <li key={`${row.id}`}>{row.name}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}