/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

interface IFruit {
    fruitId: number;
    fruitName: string;
    fruitType: 'IMPORT' | 'LOCAL';
    stock: number;
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10,
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20,
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50,
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100,
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10,
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20,
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150,
    },
];

@Controller('fruit')
export class Case1Controller {
    @Get()
    getAllFruits(): any {
        const allFruits = fruits.map((fruit) => fruit.fruitName.toLowerCase());
        const Fruits = [...new Set(allFruits)];

        const fruitContainers: { [key: string]: string[] } = {};
        const stockByContainer: { [key: string]: number } = {};

        fruits.forEach((fruit) => {
            if (!fruitContainers[fruit.fruitType]) {
                fruitContainers[fruit.fruitType] = [];
            }
            if (!stockByContainer[fruit.fruitType]) {
                stockByContainer[fruit.fruitType] = 0;
            }
            fruitContainers[fruit.fruitType].push(fruit.fruitName);
            stockByContainer[fruit.fruitType] += fruit.stock;
        });

        const formattedContainers = Object.entries(fruitContainers).map(([type, fruits]) => ({
            type,
            fruits,
        }));

        const formattedStock = Object.entries(stockByContainer).map(([type, stock]) => ({
            type,
            stock,
        }));

        return {
            success: true,
            fruits: {
                name: Fruits,
                wadah: formattedContainers,
                stock: formattedStock,
                comment: 'Terdapat duplikat dalam properti fruitId pada array fruits, sebaiknya properti fruitId bersifat unik.'
            }
        };
    }
}
