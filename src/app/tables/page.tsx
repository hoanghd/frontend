import { Suspense } from 'react'
import List from "@/components/Tables/List"
import Search from "@/components/Tables/Search"

export default function Page({searchParams = {}}) {
  return <div>
    <h1 className="h3 mb-1 text-gray-800"></h1>
    <div className="row">
      <Search {...{searchParams}}/>
      <div className="col-sm-12 col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered bg-white" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>メーカー</th>
                <th>車名</th>
                <th>モデル</th>
                <th>支払総額 (税込)</th>
                <th>本体価格 (税込)</th>
              </tr>
            </thead>
            <Suspense fallback={<tbody><tr><td rowSpan={5}>Loading...</td></tr></tbody>}>
              <List {...{searchParams}}/>
            </Suspense>
          </table>
        </div>
      </div>
    </div>
  </div>
}
