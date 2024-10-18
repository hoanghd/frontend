import { Suspense } from 'react'
import Grades from "@/components/Suspense/Grades"
import Makers from "@/components/Suspense/Makers"
import Models from "@/components/Suspense/Models"
import CarNames from "@/components/Suspense/CarNames"

export default function Page({ params: { car_maker_id, car_name_id, full_start_date }}) {
    return <div>
        <h1 className="h3 mb-1 text-gray-800"></h1>
        <div className="row">
            <div className="col-lg-4">
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
                        <h6 className="m-0 font-weight-bold text-primary">車種</h6>
                    </div>
                    <div className="card-body">
                        <Suspense fallback={<p>Loading carname...</p>}>
                            <CarNames {...{car_maker_id}}/>
                        </Suspense>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">モデル</h6>
                    </div>
                    <div className="card-body">
                        <Suspense fallback={<p>Loading model...</p>}>
                            <Models {...{car_maker_id, car_name_id}}/>
                        </Suspense>
                    </div>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">グレード</h6>
                    </div>
                    <div className="card-body">
                        <Suspense fallback={<p>Loading grade...</p>}>
                            <Grades {...{car_maker_id, car_name_id, full_start_date}}/>
                        </Suspense>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
