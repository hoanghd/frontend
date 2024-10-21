export default async function LoadingForm() {
    return (
        <form className="form-inline">
            <div className="form-group">
                <label className="mr-1">メーカー</label>
                <select name="car_maker_id" placeholder="Loading..." className="form-control">
                    <option value="">Loading...</option>
                </select>
            </div>
            <div className="form-group mx-sm-3">
                <label className="mr-1">車名</label>
                <select name="car_name_id" placeholder="Loading..." className="form-control">
                    <option value="">Loading...</option>
                </select>
            </div>
            <button type="button" className="btn btn-primary">絞込</button>
        </form>
    )
}