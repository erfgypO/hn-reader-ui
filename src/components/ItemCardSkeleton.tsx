import {Card, Skeleton, Stack} from "@suid/material";

export default function ItemCardSkeleton() {
    return (
        <Card sx={{minWidth: 275, px: 2, py: 1}}>
            <Stack spacing={1}>
                <Skeleton variant="text" width="15%" />
                <Skeleton variant="text" width="75%" height="35px" />
                <Skeleton variant="text" width="50%" />
            </Stack>
        </Card>
    )
}
