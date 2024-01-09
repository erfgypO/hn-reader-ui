import {createEffect, createSignal, For, onMount, Show} from "solid-js";
import {Item} from "../models/Item";
import {Container, Stack, ButtonGroup, Button, Box, LinearProgress} from "@suid/material";
import ItemCard from "../components/ItemCard";
import ItemCardSkeleton from "../components/ItemCardSkeleton";
import {Repeat} from "@solid-primitives/range";

function Loader() {
    return (
        <Stack spacing={2}>
        <Box sx={{ width: "100%" }}>
            <LinearProgress />
        </Box>
            <Repeat times={30}>
                <ItemCardSkeleton />
            </Repeat>
        </Stack>

    );
}

export default function Feed() {
    const [page, setPage] = createSignal(0);
    const [items, setItems] = createSignal([] as Item[]);
    const [loading, setLoading] = createSignal(false);

    async function loadItems(forPage: number) {
        const res = await fetch(`https://hn-api.azurewebsites.net/api/topstories?page=${forPage}`);
        return await res.json() as Item[];
    }

    createEffect(async () => {
        console.log("Page changed to", page());
        setLoading(true)
        setItems(await loadItems(page()));
        setLoading(false)
    })

    /* onMount(async () => {
        setLoading(true)
        setItems(await loadItems(page()));
        setLoading(false)
    }) */

    return (
        <Stack spacing={2}>
            <Show when={!loading()} fallback={Loader()}>
            <For each={items()}>{(item) =>
                <ItemCard item={item} />
            }</For>
            <ButtonGroup variant="text" style="margin: auto; margin-top: 10px">
                <Button disabled={page() === 0} onClick={() => setPage(page() - 1)}>Prev</Button>
                <Button>Page {page() + 1}</Button>
                <Button onClick={() => setPage(page() + 1)}>Next</Button>
            </ButtonGroup>
            </Show>
        </Stack>
    )
}
