
export type ScreenSize = '32' | '40' | '43' | '50' | '55+';
export type OS = 'Android TV' | 'Google TV' | 'Roku TV' | 'Tizen' | 'WebOS' | 'VIDAA';
export type PriceRange = 'under1000' | '1000to1500' | '1500to2500' | 'above2500';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  sales: number;
  rating: number;
  screenSize: ScreenSize;
  os: OS;
  imageUrl: string;
  affiliateUrl: string;
  isBestSeller?: boolean;
  isBestValue?: boolean;
  isTopRated?: boolean;
}

export interface Filters {
  size: ScreenSize | null;
  price: PriceRange | null;
  os: OS | null;
  highlight: 'bestSeller' | 'bestValue' | 'topRated' | null;
}
