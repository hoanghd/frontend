import FormClient from "@/components/Tables/FormClient"
import { TableService } from "@/faco/tables/service"

export default async function FormServer({searchParams = {}}) {
    return (
        <FormClient {...(await TableService.formInit(searchParams))}/>
    )
}