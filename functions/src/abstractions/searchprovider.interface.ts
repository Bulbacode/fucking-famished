export interface ISearchProvider {

  searchByLatLong(lat: string, long: string, rad: string, price_range: string, is_urgent: string, open_to_all: boolean, neutral_restrooms: boolean, wheelchair_accessible: boolean): any;
}