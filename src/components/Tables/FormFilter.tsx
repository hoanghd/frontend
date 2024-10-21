'use client'

export default function FormFilter({searchParams = {}, makers = [], carnames = []}) {
    return (
        <form>
            <div className="form-group">
                <label>メーカー</label>
                <select name="car_maker_id" placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {makers && makers.map(row =>
                        <option key={row.car_maker_id}
                                value={row.car_maker_id}>{row.car_maker_name}</option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label>車名</label>
                <select name="car_name_id" placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {carnames && carnames.map(row =>
                        <option key={row.car_name_id} value={row.car_name_id}>{row.name}</option>
                    )}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">絞込</button>
        </form>
    )
}