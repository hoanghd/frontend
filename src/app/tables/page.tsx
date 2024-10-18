export default function Page({searchParams = {}}) {
  return <div>
    <h1 className="h3 mb-1 text-gray-800"></h1>
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="card mb-4">
          <div className="card-header">
            絞り込み
          </div>
          <div className="card-body">

          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12">
        <div className="table-responsive bg-white">
          <table className="table table-bordered" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>メーカー</th>
                <th>車名</th>
                <th>グレード</th>
                <th>モデル</th>
                <th>支払総額 (税込)</th>
                <th>本体価格 (税込)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}
