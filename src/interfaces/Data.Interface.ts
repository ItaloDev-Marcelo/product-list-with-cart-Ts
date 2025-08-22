
interface ImageFormate {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string
}

export interface CountData {
       image: ImageFormate 
       name: string;
       category: string;
       price: number;
       count:number;
       isActive: boolean
}
