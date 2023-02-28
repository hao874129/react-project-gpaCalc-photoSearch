import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Picture = ({ photo }) => {
  return (
    <div className='picture'>
      <Card sx={{ maxWidth: 300 }} >
        <div className='imageContainer'>
          <CardMedia
            sx={{ height: 345 }}
            // image={photo.src.large}
            component="img"
            height="345"
            image={photo.src.large}
            alt={photo.photographer}
          />
        </div>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {photo.photographer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            photographer_id: {photo.photographer_id}
            <br />
            avg_color: {photo.avg_color}
          </Typography>
        </CardContent>
        <CardActions>

          <a target="_blank" href={photo.src.large} rel="noreferrer">
            <Button size="small">
              點此下載圖片
            </Button>
          </a>

        </CardActions>
      </Card>
    </div>
  );
}

export default Picture