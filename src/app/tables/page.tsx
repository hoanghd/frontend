import { Suspense } from "react"
import ResultList from "@/components/Tables/ResultList"
import FormFilter from "@/components/Tables/FormFilter"
import { formFilterInit } from "@/faco/services/tables"
import Loading from "@/components/Tables/Loading"

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
            <FormFilter {...(await formFilterInit(searchParams))}/>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="table-responsive">
          <Suspense fallback={<Loading/>}>
            <ResultList {...{searchParams}} />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
}
