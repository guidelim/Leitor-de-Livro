export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
    };
    mainCategory?: string;
    pageCount?: number;
    saleInfo?: {
        country?: string,
        saleability?: string,
        isEbook?: boolean,
        listPrice?: {
         amountw?: number,
         currencyCode?: string
        },
        retailPrice?: {
         amount?: number,
         currencyCode?: string
        },
        buyLink?: string
    },
  }
  
  export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
  }
  
  export interface BookSearchResult {
    items: Book[];
  }
  