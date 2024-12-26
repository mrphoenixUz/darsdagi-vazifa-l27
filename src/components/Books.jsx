import React from 'react';
import { useGetBooksQuery } from '../features/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books</div>;
    const handleDownload = (filePath) => {
        const downloadUrl = `http://localhost:3000/${filePath}`;
        window.location.href = downloadUrl; // Redirect to download URL
    };

    return (
        <div className="book-list m-5 grid-cols-4">
            {books.map((book) => (
                <Card sx={{ maxWidth: 345 }} key={book.id} elevation={7}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {book.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {book.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => handleDownload(book.filePath)} size="small" color="primary">
                            See book
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Books;
