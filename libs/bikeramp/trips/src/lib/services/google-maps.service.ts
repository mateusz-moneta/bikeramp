import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, LatLngLiteral } from '@googlemaps/google-maps-services-js';

@Injectable()
export class GoogleMapsService {
  private readonly client: Client;
  private readonly accessKey: string;

  constructor(private config: ConfigService) {
    this.client = new Client({});
    this.accessKey = this.config.get('GOOGLE_MAPS_ACCESS_KEY');
  }

  getClient() {
    return this.client;
  }

  getKey() {
    return this.accessKey;
  }

  async getCoordinates(address: string): Promise<LatLngLiteral> {
    const googleRes = await this.getClient().geocode({
      params: {
        address, key: this.getKey()
      }
    });

    const { lng, lat } = googleRes.data.results[0].geometry.location;
    return { lng, lat };
  }
}
