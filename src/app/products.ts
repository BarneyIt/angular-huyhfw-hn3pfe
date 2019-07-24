export const products: Product[] = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    name: 'Xiao Mi',
    price: 500,
    description: 'E\' il Cellulare di Aldo '
  }
];

export interface Product {
  name: string,
  price: number,
  description: string
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/