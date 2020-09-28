import { MyLocation } from './location';

export interface MyEvent {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    imageUrl: string;
    location?: MyLocation;
    onlineUrl?: string;
    sessions?: any;
}