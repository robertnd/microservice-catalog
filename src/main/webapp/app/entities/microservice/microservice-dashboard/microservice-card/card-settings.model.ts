export interface ICardSettings {
  previewWidth: number;
  previewHeight: number;
  fallbackImage: string;
}

export class CardSettings implements ICardSettings {
  static DEFAULT: CardSettings = new CardSettings(65, 45, '/content/images/saf/logo_saf_navbar.png');

  constructor(public previewWidth: number, public previewHeight: number, public fallbackImage: string) {}
}
