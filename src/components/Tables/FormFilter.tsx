'use client'

import { ChangeEvent, useState } from "react"
import { empty } from "@/faco"

export default function FormFilter({searchParams = {}, makers = [], carnames = []}) {
    const [state, setState] = useState({
        car_maker_id: '',
        car_name_id: '',
        ...searchParams,
        carnames
    })

    const setValue = async ({ target:{ name, value } }: ChangeEvent<{  name:string, value:string }>) => {
        switch (name){
            case 'car_maker_id':
                setState( state => ({...state, [name]: value, car_name_id: ''}))

                if( !empty(value) ){
                    const response = await fetch(`${process.env.BASE_API_URL}/ranking/syasyu/car_name?id=${value}`)
                    carnames = await response.json()
                    setState( state => ({...state, carnames}))
                }
                break

            case 'car_name_id':
                setState( state => ({...state, [name]: value}))
                break
        }
    }

    return (
        <form>
            <div className="form-group">
                <label>メーカー</label>
                <select name="car_maker_id" onChange={setValue} value={state.car_maker_id} placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {makers && makers.map(row =>
                        <option key={row.car_maker_id} value={row.car_maker_id}>{row.car_maker_name}</option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label>車名</label>
                <select name="car_name_id" onChange={setValue} value={state.car_name_id} placeholder="すべて" className="form-control">
                    <option value="">すべて</option>
                    {state.carnames && state.carnames.map(row =>
                        <option key={row.car_name_id} value={row.car_name_id}>{row.name}</option>
                    )}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">絞込</button>
        </form>
    )
}