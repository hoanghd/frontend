const alphaText: any = {
    en: '英数/他',
    aa: 'ア行',
    ka: 'カ行',
    sa: 'サ行',
    ta: 'タ行',
    na: 'ナ行',
    ha: 'ハ行',
    ma: 'マ行',
    ya: 'ヤ行',
    ra: 'ラ行',
    wa: 'ワ行',
    all: ''
}

export default async function CarNames({id}) {
    const response = await fetch(`https://back-prd.ke001.kurumaerabi.com/catalog/car_names/${id}`)
    const data = await response.json()
    return (
        <ul>
            {Object.entries(data).map(([key, rows]) => (
                <li key={key}>
                    {alphaText[key]}
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