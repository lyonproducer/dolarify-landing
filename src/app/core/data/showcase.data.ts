export interface IosShowcaseSlide {
  image: string;
  title: string;
  caption: string;
  version?: string;
}

export const iosShowcase: IosShowcaseSlide[] = [
  {
    image: 'screenshots/ios/calculadora.webp',
    title: 'Calculadora multi-moneda',
    caption: 'Convierte entre VES, USD, EUR y USDT en tiempo real.',
    version: 'v1.0.0',
  },
  {
    image: 'screenshots/ios/indicadores-lista.webp',
    title: 'Tasas siempre actualizadas',
    caption: 'BCV y Binance P2P, refrescadas al instante.',
    version: 'v1.2.0',
  },
  {
    image: 'screenshots/ios/indicadores-cuadros.webp',
    title: 'Vista en cuadros',
    caption: 'Cambia entre lista y cuadros según tu preferencia.',
    version: 'v1.2.0',
  },
  {
    image: 'screenshots/ios/marcadores.webp',
    title: 'Tus marcadores siempre a mano',
    caption: 'Guarda cotizaciones y presupuestos para después.',
    version: 'v1.2.0',
  },
  {
    image: 'screenshots/ios/presupuesto.webp',
    title: 'Presupuestos multi-concepto',
    caption: 'Varios items, varias monedas, un solo total.',
    version: 'v1.1.0',
  },
  {
    image: 'screenshots/ios/cotizacion-guardada.webp',
    title: 'Compara con el tiempo',
    caption: 'Mira cómo han cambiado las tasas desde que guardaste.',
    version: 'v1.2.0',
  },
];

export interface AndroidShowcaseSlide {
  image: string;
  title: string;
}

export const androidShowcase: AndroidShowcaseSlide[] = [
  { image: 'screenshots/android/saca-presupuestos.webp', title: 'Saca presupuestos' },
  { image: 'screenshots/android/tu-calculadora-favorita.webp', title: 'Tu calculadora favorita' },
  { image: 'screenshots/android/guarda-tus-calculos.webp', title: 'Guarda tus cálculos' },
  { image: 'screenshots/android/tasas-en-vivo.webp', title: 'Tasas en vivo' },
];
