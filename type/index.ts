export interface Auction {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    flag?: string;
    imageUrl: string;
    rating: number;
    ratingCount: number;
    description: string;
    images: AuctionImage[];
}

export interface AuctionImage {
    id: number;
    src: string;
    alt?: string;
}