import { type FC } from "react"
import { useParams } from "react-router-dom"



const Articles: FC = () => {
    const { id } = useParams<string>()
    return <div>
        Articles {id}
    </div>
}


export default Articles