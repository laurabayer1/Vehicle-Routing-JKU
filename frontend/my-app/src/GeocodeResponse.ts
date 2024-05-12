export interface GeocodeResponse {
  geocoding: {
    version: string;
    attribution: string;
    query: {
      text: string;
      parser: string;
      parsed_text: {
        subject: string;
        locality: string;
      };
      size: number;
      layers: string[];
      private: boolean;
      lang: {
        name: string;
        iso6391: string;
        iso6393: string;
        via: string;
        defaulted: boolean;
      };
      querySize: number;
    };
    warnings: string[];
    engine: {
      name: string;
      author: string;
      version: string;
    };
    timestamp: number;
  };
  type: string;
  features: Feature[];
  bbox: number[];
}

export class Feature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    id: string;
    gid: string;
    layer: string;
    source: string;
    source_id: string;
    name: string;
    accuracy: string;
    country: string;
    country_gid: string;
    country_a: string;
    continent?: string;
    continent_gid?: string;
    label: string;
    addendum?: any;
  };
  bbox?: number[];

  constructor(
    type: string,
    geometryType: string,
    coordinates: number[],
    properties: {
      id: string;
      gid: string;
      layer: string;
      source: string;
      source_id: string;
      name: string;
      accuracy: string;
      country: string;
      country_gid: string;
      country_a: string;
      label: string;
      continent?: string;
      continent_gid?: string;
      addendum?: any;
    },
    bbox?: number[]
  ) {
    this.type = type;
    this.geometry = {
      type: geometryType,
      coordinates: coordinates
    };
    this.properties = properties;
    if (bbox) {
      this.bbox = bbox;
    }
  }
}

