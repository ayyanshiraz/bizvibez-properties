"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Pagination from '@/components/Pagination'; // Adjust the import path as needed

// --- TYPE DEFINITIONS for TypeScript ---
interface Tag {
    text: string;
    type: 'default' | 'featured';
}

interface Property {
    id: number;
    name: string;
    location: string;
    price: string;
    size: string;
    bedrooms: string;
    image: string[];
    tags: Tag[];
    description: string;
    amenities: string[];
    paymentPlan: {
        downPayment: string;
        duringConstruction: string;
        onHandover: string;
    };
}

// --- MOCK DATA for properties (with added details) ---
const properties: Property[] = [
    {
        id: 2,
        name: 'Binghatti Circle At Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '574,999',
        size: '376.7',
        bedrooms: 'Studio, 1, 2 & 3',
        image: [
            '/bl1.webp', '/bl2.webp', '/bl3.webp', '/bl4.webp', '/bl5.webp', '/bl6.webp', '/bl7.webp', '/bl8.webp', '/bl9.webp', '/bl10.webp', '/bl11.webp', '/bl12.webp', '/bl13.webp', '/bl14.webp'
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 3,
        name: 'DAMAC Chelsea Residences at Dubai Maritime City',
        location: 'Dubai Maritime City',
        price: ' 2,170,000',
        size: '773',
        bedrooms: 'Studio, 1, 2 & 3',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 4,
        name: 'Binghatti Amberhall at Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '745,000',
        size: ' 391',
        bedrooms: 'Studio, 1, & 2',
        image: [
            '/binghatti21.webp', '/binghatti22.webp', '/binghatti23.webp', '/binghatti24.webp', '/binghatti25.webp', '/binghatti26.webp', '/binghatti27.webp','/binghatti28.webp', '/binghatti29.webp', '/binghatti210.webp', '/binghatti211.webp'
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 5,
        name: 'Sobha Central at Sheikh Zayed Road',
        location: 'Sheikh Zayed Road',
        price: ' 1,520,000',
        size: ' 568',
        bedrooms: '1, & 2',
        image: [
            '/s11 front pic.webp', '/s11.webp', '/s12.webp', '/s13.webp', '/s14.webp', '/s15.webp', '/s16.webp','/s17.webp', '/s18.webp', '/s19.webp', '/s10.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 6,
        name: 'DAMAC Seacrest at Dubai Maritime City',
        location: 'Dubai Maritime City',
        price: ' 2,160,000',
        size: ' 775',
        bedrooms: '1,2 & 3',
        image: [
            '/d31.webp', '/d32.webp', '/d33.webp', '/d34.webp', '/d35.webp', '/d36.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 7,
        name: 'Binghatti Aquarise at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 999,000',
        size: ' 423',
        bedrooms: 'Studio, 1,2 & 3',
        image: [
            '/b31.webp', '/b32.webp', '/b33.webp', '/b34.webp', '/b35.webp', '/b36.webp', '/b37.webp', '/b38.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 8,
        name: 'Danube Sparklz at Al Furjan',
        location: 'Al Furjan',
        price: ' 900,000',
        size: '  446',
        bedrooms: 'Studio, 1,2 & 3',
        image: [
            '/danube1.webp', '/danube2.webp', '/danube3.webp', '/danube4.webp', '/danube5.webp', '/danube6.webp', '/danube7.webp', '/danube8.webp', '/danube9.webp', '/danube10.webp', '/danube11.webp', '/danube12.webp', '/danube13.webp', '/danube14.webp', '/danube15.webp', '/danube16.webp', '/danube17.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 9,
        name: 'Binghatti Starlight at Al Jaddaf, Dubai',
        location: 'Al Jaddaf',
        price: '  850,000',
        size: '  415',
        bedrooms: 'Studio, 1, & 2',
        image: [
            '/b41.webp', '/b42.webp', '/b43.webp', '/b44.webp', '/b45.webp', '/b46.webp', '/b47.webp', '/b48.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 10,
        name: 'Binghatti Skyhall at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 985,000',
        size: '   396',
        bedrooms: 'Studio & 1',
        image: [
            '/b51.webp', '/b52.webp', '/b53.webp', '/b54.webp', '/b55.webp', '/b56.webp', '/b57.webp', '/b58.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 11,
        name: 'Skyvue Spectra at Sobha Hartland 2, Dubai',
        location: 'Sobha Hartland 2',
        price: ' 1,270,000',
        size: '    506',
        bedrooms: '1,2 & 3',
        image: [
            '/s21.webp', '/s22.webp', '/s23.webp', '/s24.webp', '/s25.webp', '/s26.webp', '/s27.webp', '/s28.webp', '/s29.webp', '/s210.webp', '/s211.webp', '/s212.webp', '/s213.webp', '/s214.webp', '/s215.webp', '/s216.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 12,
        name: 'DAMAC Riverside Views at Dubai Investments Park',
        location: 'Dubai Investment Park',
        price: ' 888,000',
        size: '    650',
        bedrooms: '',
        image: [
            '/d41.webp', '/d42.webp', '/d43.webp', '/d44.webp', '/d45.webp', '/d46.webp', '/d47.webp', '/d48.webp',
        ], 
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 13,
        name: 'Binghatti Dawn at Jumeirah Village Circle (JVC) Dubai',
        location: 'Jumeirah Village Circle',
        price: ' 650,000',
        size: '     392.56',
        bedrooms: 'Studio, 1, & 2',
        image: [
            '/b61.webp', '/b62.webp', '/b63.webp', '/b64.webp', '/b65.webp', '/b66.webp', '/b67.webp', '/b68.webp', '/b69.webp', '/b610.webp', '/b611.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 14,
        name: 'The Element at Sobha One, Dubai',
        location: 'Sobha One (Sobha Hartland)',
        price: '1,820,000',
        size: '     729',
        bedrooms: '1,2,3 & 4',
        image: [
            '/s31.webp', '/s32.webp', '/s33.webp', '/s34.webp', '/s35.webp', '/s36.webp', '/s37.webp', '/s38.webp', '/s39.webp', '/s310.webp', '/s311.webp', '/s312.webp', '/s314.webp', '/s315.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 15,
        name: 'Timez by Danube at Dubai Silicon Oasis',
        location: 'Dubai Silicon Oasis',
        price: ' 800,000',
        size: '      380',
        bedrooms: 'Studio, 1,2, & 3',
        image: [
            '/danube21.webp', '/danube22.webp', '/danube23.webp', '/danube24.webp', '/danube25.webp', '/danube26.webp', '/danube27.webp', '/danube28.webp', '/danube29.webp', '/danube210.webp', '/danube211.webp', '/danube212.webp','/danube213.webp','/danube214.webp','/danube215.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 16,
        name: 'Sobha SeaHaven at Dubai Harbour Waterfront Living',
        location: 'Dubai Harbour',
        price: '4,400,000',
        size: '      841',
        bedrooms: 'Studio, 1,2, 3 & 4',
        image: [
            '/s41.webp', '/s42.webp', '/s43.webp', '/s44.webp', '/s45.webp', '/s46.webp', '/s47.webp', '/s48.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 17, //id15/14,id16,id17 add image
        name: 'Skyvue Solair at Sobha Hartland 2 by Sobha Group',
        location: 'Sobha Hartland 2',
        price: '1,280,000',
        size: '      660.80',
        bedrooms: '1, 1.5, & 2',
        image: [
            '/s51.webp', '/s52.webp', '/s53.webp', '/s54.webp', '/s55.webp', '/s56.webp','/s57.webp','/s58.webp','/s59.webp','/s510.webp','/s511.webp','/s512.webp','/s513.webp','/s514.webp','/s515.webp','/s516.webp','/s517.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 18,
        name: 'Damac Sun City at Dubailand',
        location: 'Dubailand',
        price: ' 2,250,000',
        size: '      2,319',
        bedrooms: '4 & 5',
        image: [
            '/d51.webp', '/d52.webp', '/d53.webp', '/d54.webp', '/d55.webp', '/d56.webp','/d57.webp','/d58.webp','/d59.webp','/d510.webp','/d511.webp','/d512.webp', '/d513.webp','/d514.webp','/d515.webp','/d516.webp','/d517.webp','/d518.webp','/d519.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 19,
        name: 'Sobha Solis by Sobha Realty at Motor City',
        location: 'Motor City',
        price: ' 1,070,000',
        size: '     536',
        bedrooms: '1,1.5,2, & 3',
        image: [
            '/s61.webp', '/s62.webp', '/s63.webp', '/s64.webp', '/s65.webp', '/s66.webp','/s67.webp','/s68.webp','/s69.webp','/s610.webp','/s611.webp','/s612.webp','/s613.webp','/s614.webp','/s615.webp','/s616.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 20,
        name: 'BAYZ 102 by Danube Properties at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 1,270,000',
        size: '',
        bedrooms: 'Studio, 1,2,3 & 4',
        image: [
            '/danube31.webp', '/danube32.webp', '/danube33.webp', '/danube34.webp', '/danube35.webp', '/danube36.webp','/danube37.webp','/danube38.webp','/danube39.webp','/danube310.webp','/danube311.webp','/danube312.webp','/danube313.webp','/danube314.webp','/danube315.webp','/danube316.webp','/danube317.webp','/danube318.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 21,
        name: 'Sobha Elwood at Dubailand by SOBHA REALTY',
        location: 'Dubailand',
        price: ' 7,930,000',
        size: '4958',
        bedrooms: '4,5 & 6',
        image: [
            '/s71.webp', '/s72.webp', '/s73.webp', '/s74.webp', '/s75.webp', '/s76.webp','/s77.webp','/s78.webp','/s79.webp','/s710.webp','/s711.webp','/s712.webp','/s713.webp','/s714.webp','/s715.webp','/s716.webp','/s717.webp','/s718.webp','/s719.webp','/s720.webp','/s721.webp','/s722.webp','/s723.webp','/s724.webp','/s725.webp','/s726.webp','/s727.webp','/s728.webp','/s729.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 22,
        name: 'Sobha SeaHaven at Dubai Harbour Waterfront Living',
        location: 'Dubai Harbour',
        price: '4,400,000',
        size: ' 841 ',
        bedrooms: '1,2,3 & 4',
        image: [
            '/s81.webp', '/s82.webp', '/s83.webp', '/s84.webp', '/s85.webp', '/s86.webp','/s87.webp','/s88.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 23,
        name: 'Damac Sun City at Dubailand',
        location: 'Dubailand',
        price: '2,250,000',
        size: ' 2,319 ',
        bedrooms: 'Studio, 4 & 5',
        image: [
            '/d61.webp', '/d62.webp', '/d63.webp', '/d64.webp', '/d65.webp', '/d66.webp','/d67.webp','/d68.webp','/d69.webp','/d610.webp','/d611.webp','/d612.webp','/d613.webp','/d614.webp','/d615.webp','/d616.webp','/d617.webp','/d618.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id: 24,
        name: 'Sobha Solis by Sobha Realty at Motor City',
        location: 'Motor City',
        price: '1,070,000',
        size: ' 536 ',
        bedrooms: '1, 1.5, 2 & 3',
        image: [
            '/s91.webp', '/s92.webp', '/s93.webp', '/s94.webp', '/s95.webp', '/s96.webp','/s97.webp','/s98.webp','/s99.webp','/s910.webp','/s911.webp','/s912.webp','/s13.webp','/s914.webp','/s915.webp','/s916.webp','/s917.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 25,
        name: 'BAYZ 102 by Danube Properties at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 1,270,000',
        size: ' ',
        bedrooms: 'Studio, 1, 2 , 3 & 4',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 26,
        name: 'Sobha Elwood at Dubailand by SOBHA REALTY',
        location: 'Dubailand',
        price: '  7,930,000',
        size: ' 4958',
        bedrooms: 'Studio, 4, 5, & 6',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 27,
        name: 'Damac Lagoon Views 3 by Damac',
        location: 'Damac lagoons',
        price: '  1,140,000',
        size: '  698',
        bedrooms: 'Studio, 1 & 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 28,
        name: 'Violet at Damac Hills 2 by Damac Properties',
        location: 'Damac Hills 2',
        price: '  1,869,000',
        size: ' 2,352',
        bedrooms: 'Studio, 4',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id: 29,
        name: 'Aurora By Binghatti At Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '  666,666',
        size: ' 382.44',
        bedrooms: 'Studio, 1 & 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id:30,
        name: 'Sobha Skyscape Altius at Sobha Hartland 2',
        location: 'Sobha Hartland 2',
        price: ' 1,560,000',
        size: ' 634.96',
        bedrooms: 'Studio, 1 , 1.5 , 2 , 2.5 & 3',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id:31,
        name: 'Sobha Orbis at Motor City, Dubai',
        location: 'Motor City',
        price: ' 985,000',
        size: '536.15',
        bedrooms: 'Studio, 1 , 1.5 , & 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id:32,
        name: 'Elitz 2 by Danube at Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '  650,000',
        size: '385.99',
        bedrooms: 'Studio, 1 , 2 , & 3',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id:33,
        name: 'DAMAC Riverside Dubai',
        location: '',
        price: ' 1,990,000',
        size: '2,297.34 to 3,407.42',
        bedrooms: 'Studio, 4-5',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },

     {
        id:34,
        name: 'Binghatti Hills at Dubai Science Park',
        location: 'Dubai Science Park',
        price: ' 777,777',
        size: '446 to 4,200.17 ',
        bedrooms: 'Studio, 1 & 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
    {
        id:35,
        name: 'DAMAC Lagoon Views 2',
        location: 'Damac lagoons',
        price: ' 1,100,000',
        size: '672 to 1,797 ',
        bedrooms: 'Studio, 1 - 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },

    {
        id:36,
        name: 'Autograph Collection Damac Hills',
        location: 'Damac Hills',
        price: '5,100,000',
        size: '',
        bedrooms: 'Studio, 4, 5, 6, & 7',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id:37,
        name: 'The Sapphire by DAMAC',
        location: 'Sheikh Zayed Road',
        price: '1,200,000',
        size: 'Various Sizes Available ',
        bedrooms: 'Studio, 1 - 3',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id:38,
        name: 'Binghatti Azure ',
        location: 'Jumeirah Village Circle',
        price: ' 593,000',
        size: ' 338.63',
        bedrooms: 'Studio, 1 & 2',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },
     {
        id:39,
        name: 'Binghatti Mercedes Benz places',
        location: 'Downtown Dubai',
        price: '10,499,999',
        size: '1,846 ',
        bedrooms: 'Studio, 2 - 4',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'OFF PLAN', type: 'default' }],
        description: 'Binghatti Circle offers a unique blend of modern architecture with traditional ideas. The project is located in the heart of JVC and provides a range of apartments with spacious interiors and premium finishes.',
        amenities: ['Retail Outlets', 'Landscaped Gardens', 'Cafe and Restaurants', 'Fitness Center', 'Ample Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '30%', onHandover: '50%' }
    },

];

// --- Reusable Property Card Component ---
const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (property.image.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % property.image.length);
            }, 1200); // Carousel speed: 1.2 seconds
        }
    };

    const handleMouseLeave = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setCurrentImageIndex(0); // Reset to the first image
    };

    // Cleanup interval on component unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const getTagClass = (type: string) => {
        switch (type) {
            case 'featured': return 'featured-tag';
            default: return '';
        }
    };

    return (
        <a
            href={`/off-plan/${property.id}`} // This URL is used for "Open in new tab"
            className="property-card bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out cursor-pointer h-full flex flex-col"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative">
                {/* Display carousel image */}
                <img src={property.image[currentImageIndex]} alt={property.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                
                {/* MODIFICATION START */}
                {/* --- TAGS SECTION --- */}
                <div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center">
                    {/* Featured Tag (Left) */}
                    <div>
                        {property.tags
                            .filter(tag => tag.type === 'featured')
                            .map(tag => (
                                <span key={tag.text} className={`tag ${getTagClass(tag.type)}`}>{tag.text}</span>
                            ))}
                    </div>

                    {/* Other Tags (Right, grouped together) */}
                    <div className="flex items-center space-x-2">
                        {property.tags
                            .filter(tag => tag.type !== 'featured') // Get all tags that are NOT featured
                            .map(tag => (
                                <span key={tag.text} className={`tag ${getTagClass(tag.type)}`}>{tag.text}</span>
                            ))}
                    </div>
                </div>
                {/* MODIFICATION END */}

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-lg">Start From AED {property.price}</p>
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col transition-colors duration-300 group-hover:bg-[#891e6d]">
                <h3 className="text-xl font-bold mb-1 flex-grow text-gray-800 group-hover:text-white">{property.name}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-200">{property.location}</p>
                <div className="border-t pt-4 flex items-center justify-between text-sm mt-auto group-hover:border-gray-500">
                    {property.bedrooms && (
                        <div className="flex items-center text-gray-700 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 group-hover:text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 5h10v10H5V5z" /><path d="M7 7h6v2H7V7zm0 4h6v2H7v-2z" /></svg>
                            <span><strong>{property.bedrooms}</strong> Bedrooms</span>
                        </div>
                    )}
                    <div className="flex items-center text-gray-700 group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 group-hover:text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" /><path d="M6 6h8v8H6V6z" /></svg>
                        <span>From <strong>{property.size}</strong> Sq.Ft.</span>
                    </div>
                </div>
            </div>
        </a>
    );
};

// --- Listing Page Component ---
const OffPlanPage: React.FC = () => {    // Add state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;

    // Calculate total pages
    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    // Get the properties for the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Optional: Scroll to the top of the properties section when the page changes
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <React.Fragment>
            <div className="relative w-full h-screen bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <main className="relative z-10 h-full flex items-center text-left">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl">
                            <p className="text-sm md:text-base font-medium tracking-wider uppercase text-shadow mb-4 text-white">Dubai Off Plan Properties</p>
                            <h1 className="font-playfair text-4xl md:text-6xl font-extrabold leading-tight text-shadow mb-8 text-white">
                                Investing In Tomorrow: Exploring Dubai&apos;s Off-Plan Real Estate
                            </h1>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                {/* This link is correctly pointing to the /rent page */}
                                <Link href="/rent" className="hero-btn">
                                    Properties for Rent
                                </Link>
                                
                                {/* This link is correctly pointing to the /contact page */}
                                <Link href="/contact" className="hero-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


            <section id="properties" className="bg-white text-gray-800 py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Off-Plan Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map over the filtered properties */}
                        {currentProperties.map(property => (
                        <Link href={`/off-plan/${property.id}`} key={property.id}>
                            <PropertyCard property={property} />
                        </Link>                        ))}
                    </div>
                    {/* Add the Pagination component here */}
                    <div className="flex justify-center mt-12">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};



export default OffPlanPage;