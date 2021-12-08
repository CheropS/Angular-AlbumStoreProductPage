import { Track } from "./track";

export interface Album {
    album: {
        name: string;
        releaseDate: string;
        coverImage: string;
        tracks: | Track[];
},
                
    
}
