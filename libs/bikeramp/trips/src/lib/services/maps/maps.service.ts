import { Injectable } from '@nestjs/common';

import { CoordinatesDto } from '../../dto/coordinates.dto';

@Injectable()
export class MapsService {
   calcCrow(startAddressCoordinates: CoordinatesDto, destinationAddressCoordinates: CoordinatesDto): number {
    const R = 6371;
    const dLat = this.toRad(destinationAddressCoordinates.lat - startAddressCoordinates.lat);
    const dLon = this.toRad(destinationAddressCoordinates.lon - startAddressCoordinates.lon);
    const startAddressLat = this.toRad(startAddressCoordinates.lat);
    const endAddressLat = this.toRad(destinationAddressCoordinates.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(startAddressLat) * Math.cos(endAddressLat);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(value: number): number {
    return value * Math.PI / 180;
  }
}
