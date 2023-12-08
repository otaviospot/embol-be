import type { Schema, Attribute } from '@strapi/strapi';

export interface BannersBanners extends Schema.Component {
  collectionName: 'components_banners_banners';
  info: {
    displayName: 'banners';
    icon: 'landscape';
  };
  attributes: {
    single_small_banner: Attribute.Media;
    single_small_banner_url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banners.banners': BannersBanners;
    }
  }
}
