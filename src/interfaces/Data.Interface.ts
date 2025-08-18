
interface ImageFormate {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
}

export interface DataFormate {
       image: ImageFormate 
       name: string,
       category: string,
       price: number
}