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
    const { lat, lon } = results[0];

    return { lat: +lat, lon: +lon };
  }

  async calcCrow(startAddressCoordinates: { lat: number; lon: number }, destinationAddressCoordinates: { lat: number; lon: number }): Promise<number> {
    const R = 6371;
    const dLat = this.toRad(destinationAddressCoordinates.lat - startAddressCoordinates.lat);
    const dLon = this.toRad(destinationAddressCoordinates.lon - startAddressCoordinates.lon);
    const startAddressLat = this.toRad(startAddressCoordinates.lat);
    const endAddressLat = this.toRad(destinationAddressCoordinates.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(startAddressLat) * Math.cos(endAddressLat);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Converts numeric degrees to radians
  private toRad(Value) {
    return Value * Math.PI / 180;
  }
}
