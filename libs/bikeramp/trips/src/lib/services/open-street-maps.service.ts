import { Injectable } from '@nestjs/common';
import GeoCodingOSM from 'geocoding-osm';

@Injectable()
export class OpenStreetMapsService {
  async getCoordinates(address: string): Promise<{ lat: number; lon: number }> {
    const searchParams = {
      q: address
    };

    const geoCodingOSM = new GeoCodingOSM();
    const results = await geoCodingOSM.search(searchParams);
    const [{ lat, lon }] = results;

    return { lat: +lat, lon: +lon };
  }
}
