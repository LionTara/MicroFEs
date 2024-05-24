import React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Checkbox from '@mui/joy/Checkbox';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CompletedList({ items, onUncheck, onDelete }) {
    return (
        <Box>
            <Typography
                id="decorated-list-demo"
                level="body-xs"
                textTransform="uppercase"
                fontWeight="lg"
                mb={1}
            >
                Completed:
            </Typography>
            <Divider />
            <List aria-labelledby="decorated-list-demo" sx={{ mt: 2 }}>
                {items.map((item) => (
                    <ListItem
                        key={item.id} 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    >
                        <Checkbox
                            checked
                            onChange={() => onUncheck(item.id)}
                            sx={{ marginRight: '16px' }}
                        />
                        <Typography sx={{ flexGrow: 1 }}>{item.item}</Typography>
                        <IconButton onClick={() => onDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
