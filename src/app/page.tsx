import { Suspense } from "react"
import LoadingResult from "@/components/Tables/Loading/Result"
import LoadingForm from "@/components/Tables/Loading/Form"
import ResultList from "@/components/Tables/ResultList"
import FormServer from "@/components/Tables/FormServer"

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
            <Suspense fallback={<LoadingForm/>}>
              <FormServer {...{searchParams}} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="table-responsive">
          <Suspense fallback={<LoadingResult/>}>
            <ResultList {...{searchParams}} />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
}
