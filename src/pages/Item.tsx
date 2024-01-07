import {useParams} from "@solidjs/router";

export default function Item() {
    const params = useParams();

    console.log(params.id)
    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}
