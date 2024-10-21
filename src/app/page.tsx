import { SkeletonTablesResult, SkeletonTablesForm } from "@/components/Skeleton"
import ResultList from "@/components/Tables/ResultList"
import FormServer from "@/components/Tables/FormServer"
import { Suspense } from "react"

export default async function Page({searchParams = {}}) {
  return <div>
    <h1 className="h3 mb-1 text-gray-800"></h1>
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="card mb-4">
          <div className="card-header">
            絞り込み
          </div>
          <div className="card-body">
            <Suspense fallback={<SkeletonTablesForm/>}>
              <FormServer {...{searchParams}} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="table-responsive">
          <Suspense fallback={<SkeletonTablesResult/>}>
            <ResultList {...{searchParams}} />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
}
