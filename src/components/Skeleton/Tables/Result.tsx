export function SkeletonTablesResult() {
    return (
        <table className="table table-bordered bg-white loading-skeleton" width="100%" cellSpacing="0">
            <thead>
            <tr>
                <th>メーカー</th>
                <th>車名</th>
                <th>モデル</th>
                <th>支払総額 (税込)</th>
                <th>本体価格 (税込)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colSpan={5}></td>
            </tr>
            </tbody>
        </table>
    )
}