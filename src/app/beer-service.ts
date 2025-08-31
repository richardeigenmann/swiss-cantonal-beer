// src/app/canton-beer.service.ts
import { Injectable, signal, Signal } from '@angular/core';

export interface Beer {
  name: string;
  brewery: string;
  imageUrl?: string;
}

export type CantonBeerMap = Record<string, Beer[]>;

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly _cantonBeers = signal<CantonBeerMap>({
    'AG': [
      { name: 'Feldblume', brewery: 'Brauerei LägereBräu', imageUrl: 'https://bieronlineshop.ch/media/40/f2/5d/1731398591/Lgere%20Bru%20Naturradler%2033%20cl.png?1731398591' },
      { name: 'Warteck', brewery: 'Brauerei Warteck', imageUrl: 'https://bieronlineshop.ch/media/79/15/7a/1723533078/Warteck%20Lager%2033%20cl.png?1723533078' }
    ],
    'AI': [
      { name: 'Quöllfrisch', brewery: 'Brauerei Locher', imageUrl: 'https://static01.galaxus.com/productimages/5/2/2/9/9/7/8/7/9/5/0/5/5/2/0/7/6/2/7/55ebabdf-a7e3-44e8-b999-8c1c24a986aa.jpg_720.avif' }
    ],
    'AR': [
      { name: 'Klostermann', brewery: 'Brauerei Schützengarten', imageUrl: 'https://www.schuetzengarten.ch/bier/58/image-thumb__58__product_header_product_carousel/lager-hell.f4b8f8df.png' }
    ],
    'BE': [
      { name: 'Eichhof', brewery: 'Brauerei Eichhof', imageUrl: 'https://www.eichhof.ch/product_assets/Eichhof_lager_33cl_glas_201125.png' },
      { name: 'Felsenau', brewery: 'Brauerei Felsenau', imageUrl: 'https://www.greinergetraenke.ch/shop/images/artikel/large/6202/0/felsenau-lager-bier-10er.jpg' }
    ],
    'BL': [
      { name: 'Rössli Bier', brewery: 'Brauerei Rössli-Bier', imageUrl: 'https://roessli-versam.ch/wp-content/uploads/2024/09/IMG_6382.jpeg'}
    ],
    'BS': [
      { name: 'Ueli', brewery: 'Brauerei Fischerstube', imageUrl: 'https://d1q9atv66skeoi.cloudfront.net/image/961033245606/image_999jr7drb17813ndr6ov2f065e/-S1920x1920-FWEBP' },
      { name: 'Ziegelhof', brewery: 'Brauerei Ziegelhof', imageUrl: 'https://bieronlineshop.ch/media/78/69/10/1722846747/Ziegelhof%20Lager.png?1722846747' }
    ],
    'FR': [
      { name: 'Cardinal', brewery: 'Brauerei Cardinal', imageUrl: 'https://www.schuewo.ch/shopimage/artikel/detail/9621/0/cardinal-blonde-24er-harass.webp' }
    ],
    'GE': [
      { name: 'La Genevoise', brewery: 'Brasserie des Murailles', imageUrl: 'https://www.la-genevoise.ch/web/image/product.template/565/image_1024?unique=b79fcd8' }
    ],
    'GL': [
      { name: 'Sagenbier', brewery: 'Brauerei Adler', imageUrl: 'https://www.brauereiadler.ch/imager/bilder/Biere_2022/58644/AB_2021_Sagenbiere_Geisser_400x600_f1e6491fa41704424d1d7e5501d3ca2f.jpg' }
    ],
    'GR': [
      { name: 'Calanda', brewery: 'Brauerei Calanda', imageUrl: 'https://www.calanda.com/imager/images/Sortiment/9503/Website_Beer_Teaser_Image_Original_6c0c164bd2b597ee32b68b8b5755bd2e.webp' },
      { name: 'Moonstein', brewery: 'Brauerei Monstein', imageUrl: 'https://monsteiner.ch/wp-content/uploads/2021/08/monsteiner-flasche-33cl-mockup-schwarzbaer.webp' }
    ],
    'JU': [
      { name: 'BFM', brewery: 'Brasserie BFM, Saignelégier', imageUrl: 'https://www.brasseriebfm.ch/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIwNiwicHVyIjoiYmxvYl9pZCJ9fQ==--1155e35ec067b3066750ae75bc14451343638576/BFM-meule-web.jpg' }
    ],
    'LU': [
      { name: 'Lager', brewery: 'Brauerei Luzern', imageUrl: 'https://www.schurch.ch/shop/images/artikel/detail/9864886/0/luzerner-bier-weizen.webp?dpr=2' }
    ],
    'NE': [
      { name: 'Bière du Donjon', brewery: 'Brasserie du Donjon', imageUrl: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/30185/bi%C3%A8res-artisanales-%C3%A0-Semur-en-Auxois-blancheDuDonjon.jpg'}
    ],
    'NW': [
      { name: 'Migi Bräu', brewery: 'Getränke Lussi AG, Stans', imageUrl: 'https://www.bote.ch/storage/image/8/1/4/0/1600418_detailelement-top_1Au6H1_FGbaB7.jpg'}
    ],
    'OW': [
      { name: 'Ponäly', brewery: 'Ponäly Gmbh', imageUrl: 'https://beertasting.app/storage/media/30f05e1ecd02c725e23468f73a52c585/conversions/edhi1qccpuwloosmzeo0-optimized.jpg' }
    ],
    'SG': [
      { name: 'St. Galler', brewery: 'Brauerei Schützengarten', imageUrl: 'https://www.schuetzengarten.ch/bier/58/image-thumb__58__product_header_product_carousel/lager-hell.f4b8f8df.png' }
    ],
    'SH': [
      { name: 'Falken', brewery: 'Brauerei Falken', imageUrl: 'https://www.getraenkeweibel.ch/ShopImage/artikel/detail/9999833/0/falken-lager-hell.jpg' }
    ],
    'SO': [
      { name: 'Öufi', brewery: 'Brauerei Öufi', imageUrl: 'https://bierliebe.ch/wp-content/uploads/2024/05/Bierliebe-Webshop_Oeufi-Bier_Helles-640x640-1.png' }
    ],
    'SZ': [
      { name: 'Schwyzer Lager', brewery: 'Brauerei Rosengarten', imageUrl: 'https://www.einsiedlerbier.ch/images/biere/radler_gross.jpg' }
    ],
    'TG': [
      { name: 'Thurbräu', brewery: 'Brauerei Thurbräu', imageUrl: 'https://www.thorbraeu.de/animations/slider_beer2/slider_beer2.hyperesources/bottle_beer_hopfenzauber.jpg' }
    ],
    'TI': [
      { name: 'Vallemaggia', brewery: 'Birrificio Vallemaggia', imageUrl: 'https://www.ccat.ch/dam/jcr:e2f35125-471d-4001-b18d-09e1ac3f2d86/birrificio_vallemaggia_birre.jpg' }
    ],
    'UR': [
      { name: 'Seiler', brewery: 'Brauerei Seiler', imageUrl: 'https://rewe-group.at/assets/newsroom/bild-04-1726814398.png' }
    ],
    'VS': [
      { name: 'Valaisanne', brewery: 'Brasserie Valaisanne, Sion', imageUrl: 'https://ilovebeer.ch/uploads/thumbs/5e7e9c37db4cd5ff4f44a4f0637de96871c3e9a2_1553854442.png' }
    ],
    'VD': [
      { name: 'Alternative', brewery: 'La Nebuleuse', imageUrl: 'https://lanebuleuse.ch/cdn/shop/files/EPH_-_Badge_limited_stock.png?crop=center&height=1228&v=1748273097&width=1024' }
    ],
    'ZG': [
      { name: 'Goldmandli', brewery: 'Brauerei Baar', imageUrl: 'https://www.brauereibaar.ch/fileadmin/_processed_/0/7/csm_Goldmandli_Premium_Hell_Flasche-Freigestellt_183b785162.png' }
    ],
    'ZH': [
      { name: 'Turbinenbräu', brewery: 'Turbinenbräu', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyF62IxWeJNxOf30tRFH8OG-r__aSYdVsdg&s' },
      { name: 'Haldengut', brewery: 'Brauerei Haldengut', imageUrl: 'https://www.heinekenswitzerland.com/_Resources/Persistent/7/7/d/2/77d23f6ea786794f0f9194bae8dc8e40845b79bc/xhaldengut_brand-457x457.jpg.pagespeed.ic.hQFq_ESmdI.jpg'},
      { name: 'Chopfab', brewery: 'Chopfab Boxer AG, Winterthur', imageUrl: 'https://www.schuewo.ch/shopimage/artikel/detail/56711/0/chopfab-draft-dose-50-cl.webp' }
    ]
  });

  // Expose the signal as read-only for use in components
  readonly cantonBeers: Signal<CantonBeerMap> = this._cantonBeers.asReadonly();

  // Method to get a specific canton's beers
  getBeersByCanton(cantonCode: string): Beer[] | undefined {
    return this._cantonBeers()[cantonCode];
  }

}