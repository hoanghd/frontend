import { Suspense } from 'react'
import Makers from "@/components/Makers"

export default function Color() {
  return <div>
    <h1 className="h3 mb-1 text-gray-800"></h1>
    <div className="row">
      <div className="col-lg-8">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">メーカー</h6>
          </div>
          <div className="card-body">
            <Suspense fallback={<p>Loading makers...</p>}>
              <Makers/>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
            </h6>
          </div>
          <div className="card-body">

          </div>
        </div>
      </div>

    </div>
  </div>
}
