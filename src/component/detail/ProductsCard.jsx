import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { ArrowOutward } from '@mui/icons-material';
import { Badge } from '@mui/joy';

export default function ProductCard({ item }) {
    // console.log(item.discount)
    const {price, discount} = item
    const discountPrice = price - (price * discount / 100)
    
    const defaultImage = 'https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x';


    return (
        <Badge badgeContent={`${discount}%`} badgeInset="10%" color='warning' >
            <Card size='sm'
                sx={{
                    m: 1,
                    boxShadow: 'lg',
                }}>
                <CardOverflow>
                    <AspectRatio>
                        <img
                            src={`${item?.imageUrl || defaultImage}`}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                
                <CardContent>
                    <Typography
                        sx={{
                            width: "140px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                        level="body-sm"
                        fontSize={14} >{item?.name}</Typography>
                </CardContent>
                <CardContent>
                    <Typography
                        component={'del'}
                        sx={{
                            width: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                        level="body-sm"
                        fontSize={14} >{`Rp.${price}`}</Typography>
                </CardContent>

                <CardOverflow>
                    <Button variant="solid" color="success" size="sm">
                        <Link
                            href={item?.productUrl}
                            color="neutral"
                            textColor="text.primary"
                            fontSize={16}
                            endDecorator={<ArrowOutward />}
                        >
                            {`Rp. ${discountPrice}`}
                        </Link>
                    </Button>
                </CardOverflow>
            </Card>
        </Badge>
    );
}
