
export interface ShippingPattern {
  route: string;
  count: number;
}

export interface ClientData {
   id: string;
  name: string;
  winRate: number;
  carriers: string[];
  contactPerson: string;
  contactEmail: string;
  industry: string;
  communicationStyle: string;
  shippingPatterns: ShippingPattern[];
   overrides: string[]; 
}
