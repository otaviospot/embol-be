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

export interface LojasLojas extends Schema.Component {
  collectionName: 'components_lojas_lojas';
  info: {
    displayName: 'Lojas';
    description: '';
  };
  attributes: {
    endereco: Attribute.String;
    cidade_estado: Attribute.String;
    telefone: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banners.banners': BannersBanners;
      'lojas.lojas': LojasLojas;
    }
  }
}
