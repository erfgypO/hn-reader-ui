import {useParams} from "@solidjs/router";
import {createSignal, onMount, Show} from "solid-js";
import {ItemDetails} from "../models/itemDetails";
import {Stack, Typography} from "@suid/material";

export default function Item() {
    const [item, setItem] = createSignal({} as ItemDetails);
    const { id } = useParams();

    onMount(async () => {
        const res = await fetch(`https://hn-api.azurewebsites.net/api/details/${id}`);
        setItem(await res.json() as ItemDetails);
    });

    return (
        <Show when={item()}>
        <Stack>
            <div>
                <Typography variant="h3">
                    <a href={item().url} target="_blank" rel="noreferrer" style="text-decoration: none; color: unset">{item().title}</a>
                </Typography>
                <Typography variant="h6" color={"text.secondary"}>
                    {item().by} - {item().score} points
                </Typography>
            </div>
            <Typography variant="h6" color={"text.secondary"}>Comments</Typography>
        </Stack>
        </Show>
    )
}
