'use client'

import { TableClient } from "@/faco/tables/client"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { isset } from "@/faco"
import { pick } from "lodash"

export default function FormClient({searchParams = {}, makers = [], carnames = []}) {
    const { replace } = useRouter()

    const [state, setState] = useState({
        car_maker_id: '',
        car_name_id: '',
        ...searchParams,
        carnames
    })

    const setValue = async ({ target:{ name, value } }: ChangeEvent<{  name:string, value:string }>) => {
        switch (name){
            case 'car_maker_id':
                setState( state => ({...state, [name]: value, car_name_id: '', carnames: []}))

                if( isset(value) ){
                    carnames = await TableClient.carnames(value)
                    setState( state => ({...state, carnames}))
                }
                break

            case 'car_name_id':
                setState( state => ({...state, [name]: value}))
                break
        }
    }

    const onSubmit = () => replace( `?` + new URLSearchParams({
        ...searchParams,
        ...pick(state, ['car_maker_id', 'car_name_id']),
        page: 1
    }).toString())

    return (
        <form className="form-inline">
            <div className="form-group">
                <label className="mr-1">メーカー</label>
                <select name="car_maker_id" onChange={setValue} value={state.car_maker_id} placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {makers && makers.map(row =>
                        <option key={row.car_maker_id} value={row.car_maker_id}>{row.car_maker_name}</option>
                    )}
                </select>
            </div>
            <div className="form-group mx-sm-3">
                <label className="mr-1">車名</label>
                <select name="car_name_id" onChange={setValue} value={state.car_name_id} placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {state.carnames && state.carnames.map(row =>
                        <option key={row.car_name_id} value={row.car_name_id}>{row.name}</option>
                    )}
                </select>
            </div>
            <button onClick={onSubmit} type="button" className="btn btn-primary">絞込</button>
        </form>
    )
}