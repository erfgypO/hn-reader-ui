import {Item} from "../models/item";
import {Box, Card, Typography} from "@suid/material";
import "./ItemCard.css";
import {Show} from "solid-js";

const separator = () => (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", fontWeight: "bolder" }}>
        •
    </Box>
);

export default function ItemCard({ item } : { item: Item }) {
    const hostname = item.url ? new URL(item.url).hostname : "";
    return (
        <a href={item.url ?? `/item/${item.id}`} target={item.url ? "_blank" : ""} rel="noreferrer" style="text-decoration: none">
        <Card sx={{minWidth: 275, px: 2, py: 1}}>
            <Show when={item.url}>
                <Typography sx={{fontSize: 12}} color="text.secondary" gutterBottom class={"link"}>
                    {hostname}
                </Typography>
            </Show>
            <Typography variant="h6" component="div">
                {item.title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {item.by} {separator()} {item.score} points {separator()} <a class={"link"} href={`/item/${item.id}`} style="text-decoration: none">{item.descendants} comments</a>
            </Typography>
            </Card>
        </a>
    )
}
