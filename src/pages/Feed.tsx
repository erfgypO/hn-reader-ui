import {createSignal, For, onMount} from "solid-js";
import {Item} from "../models/Item";
import {Container, Stack} from "@suid/material";
import ItemCard from "../components/ItemCard";
export default function Feed() {
    const [items, setItems] = createSignal([] as Item[]);

    onMount(async () => {
        const res = await fetch('https://hn-api.azurewebsites.net/api/topstories?count=25');
        setItems(await res.json() as Item[]);
    })
    return (
        <Stack spacing={2}>
            <For each={items()}>{(item) =>
                <ItemCard item={item} ></ItemCard>
            }</For>
        </Stack>
    )
}
