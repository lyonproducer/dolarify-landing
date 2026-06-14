export interface RateSnapshot {
  code: 'USD' | 'EUR' | 'USDT';
  flag: string;
  name: string;
  value: number;
  source: 'BCV' | 'Binance P2P';
  change?: number;
}

export const liveRates: RateSnapshot[] = [
  { code: 'USD', flag: '🇺🇸', name: 'Dólar BCV', value: 130.45, source: 'BCV', change: 0.42 },
  { code: 'EUR', flag: '🇪🇺', name: 'Euro BCV', value: 142.18, source: 'BCV', change: 0.18 },
  { code: 'USDT', flag: '💲', name: 'Tether', value: 138.92, source: 'Binance P2P', change: 0.31 },
];
