import React from 'react';

import { Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';

export function GameCard({ app: { name, developer, js, thumbnail }, onPlay }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { onPlay(js) }}>
                <CardMedia
                    sx={{ height: 200, width: 300 }}
                    image={thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">{developer}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}