import { Injectable } from '@nestjs/common';
import GeoCodingOSM from 'geocoding-osm';

import { Coordinates } from '../../models/coordinates.model';

@Injectable()
export class OpenStreetMapsService {
  async getCoordinates(address: string): Promise<Coordinates> {
    const searchParams = {
      q: address
    };

    try {
      const geoCodingOSM = new GeoCodingOSM();
      const results = await geoCodingOSM.search(searchParams);
      const [{ lat, lon }] = results;

      return { lat: +lat, lon: +lon };
    } catch (error) {
      console.error(error);
    }
  }
}
