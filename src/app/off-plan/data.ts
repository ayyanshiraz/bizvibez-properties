// --- TYPE DEFINITIONS for TypeScript ---
export interface Tag {
    text: string;
    type: 'default' | 'featured' | 'new_launch';
}

export interface Property {
    id: number;
    name: string;
    location: string;
    price: string;
    size: string;
    bedrooms: string;
    image: string[];
    tags: Tag[];
    description: {
        intro: string;
        sections: { title: string; content: string }[];
    };
    features: string[];
    paymentPlan: {
        downPayment: string;
        duringConstruction: string;
        onHandover: string;
    };
    propertyId: string;
    propertyType: string;
    propertyStatus: string;
    lastUpdated: string;
    address: {
        city: string;
        area: string;
    };
    developer: string;
}

// --- MOCK DATA ---
export const properties: Property[] = [
    {
        id: 2,
        developer: 'Binghatti',
        name: 'Binghatti Circle At Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '674,999',
        size: '376.7',
        bedrooms: 'Studio, 1, 2 & 3',
        image: [
            '/bl1.webp', '/bl2.webp', '/bl3.webp', '/bl4.webp', '/bl5.webp', '/bl6.webp', '/bl7.webp', '/bl8.webp', '/bl9.webp', '/bl10.webp', '/bl11.webp', '/bl12.webp', '/bl13.webp', '/bl14.webp',
        ],
        tags: [{ text: 'OFF PLAN', type: 'default' }],
        description: {
            intro: "Binghatti Circle marks a bold addition to Dubai's residential skyline, developed by one of the UAE's fastest-growing real estate brands. This iconic tower represents the developer's inaugural high-rise venture in Jumeirah Village Circle (JVC) and currently holds the distinction of being the tallest residential structure in the district.",
            sections: [
                {
                    title: 'Contemporary Living Spaces With Panoramic Views',
                    content: 'Binghatti Circle presents an appealing selection of modern studios, along with 1-, 2-, and 3-bedroom apartments, each offering expansive views of Dubai\'s city skyline. With a variety of unit sizes, the development caters to a wide spectrum of residents and investors.'
                },
                {
                    title: 'Prime Location With Urban Convenience',
                    content: "Nestled within the heart of Jumeirah Village Circle, Binghatti Circle enjoys a strategic location in one of Dubai's most popular residential and investment communities. Residents benefit from a well-planned environment rich in green spaces, with more than 30 parks, various sports facilities, and walking trails."
                }
            ]
        },
        features: ['Covered Parking', 'Lounges', 'Swimming Pool', 'Fitness Centre', 'Running track', 'Kids Play Area', 'Security'],
        paymentPlan: { downPayment: '20%', duringConstruction: '50%', onHandover: '30%' },
        propertyId: 'Binghatti Circle (JVC)',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'July 4, 2025 at 11:56 am',
        address: {
            city: 'Dubai',
            area: 'Jumeirah Village Circle'
        }
    },
    {
        id: 3,
        name: 'DAMAC Chelsea Residences',
        location: 'Dubai Maritime City',
        price: '2,170,000',
        size: '773',
        bedrooms: '1, 2, 3 BR',
        developer: 'DAMAC',
        image: [
            '/d21.webp', '/d22.webp', '/d23.webp', '/d24.webp', '/d25.webp', '/d26.webp',
        ],
        tags: [
            { text: 'FEATURED', type: 'featured' },
            { text: 'OFF PLAN', type: 'default' },
            { text: 'NEW LAUNCH', type: 'new_launch' }
        ],
        description: {
            intro: "DAMAC Properties is set to launch an innovative residential project, Chelsea Residences, strategically located in the heart of Dubai Maritime City. This exclusive development is the world’s first Chelsea FC-branded residential community, combining luxury waterfront living with a lifestyle centered on wellness and fitness. With more than 1,400 upscale units, the project is designed to offer a premium residential experience.Prospective buyers can choose from a selection of 1, 2, and 3-bedroom apartments. The 1-bedroom units start at 775 square feet (72 m²), 2-bedroom layouts begin at 1369 square feet (127 m²), while 3-bedroom apartments span from 2027 square feet (188 m²). DAMAC provides a convenient 60/40 interest-free payment plan, requiring just a 20% initial payment, making property ownership more accessible in this prestigious Dubai location.The development is scheduled for handover in the third quarter of 2029. Combining strategic location advantages, modern amenities, and robust investment returns, DAMAC Chelsea Residences at Dubai Maritime City stands out as a compelling choice for both homeowners and investors alike.",
            sections: [
                {
                    title: 'A New Wave of Waterfront Living',
                    content: "DAMAC Chelsea Residences introduces a new era of waterfront living, where modern design meets maritime bliss. The development is meticulously crafted to provide a serene and sophisticated lifestyle, with every detail thoughtfully considered to enhance the resident experience. The architecture reflects a contemporary aesthetic, with clean lines, expansive glass panels, and spacious balconies that maximize the stunning sea views."
                },
                {
                    title: 'Premium Interiors and High-End Finishes',
                    content: "Every residence is thoughtfully designed with expansive floor-to-ceiling windows and private balconies, ensuring abundant natural light and panoramic views. The interiors boast modern features such as central air conditioning, elegant porcelain flooring, built-in wardrobes, and tastefully finished walls and ceilings. Kitchens come fully equipped with essential appliances, including a refrigerator, stove, and dishwasher. The building infrastructure includes high-speed elevators and a secure access system to enhance safety and convenience."
                },
                {
                    title: 'Lifestyle Amenities for Residents',
                    content: "Residents will benefit from an extensive list of on-site amenities that cater to a balanced lifestyle. These include multiple swimming pools, a fully equipped gym, a spa, and dedicated yoga rooms. Families will appreciate the children’s play areas and private club facilities, while adults can unwind in lounges, private cinemas, and restaurants. Outdoor fitness enthusiasts can make use of a running track, an outdoor gym, and a unique football simulator.."
                },
                 {
                    title: 'Prime Location with Excellent Connectivity',
                    content: "Located between Port Rashid and Dubai Dry Docks, Dubai Maritime City offers seamless access to key areas across the emirate. The location is well-connected to Dubai’s major road networks and public transportation systems. Travel times include approximately 10 minutes to Downtown Dubai and DIFC, and just 15 minutes to Dubai International Airport.The broader Dubai Maritime City area is home to an array of upscale facilities such as yacht clubs, marinas, retail outlets, fine dining establishments, and luxury hotels. Residents will also find a range of health and education services in close proximity, making it a self-sufficient and vibrant urban community."
                },
                 {
                    title: 'Investment Perspective',
                    content: "From an investor’s viewpoint, the project offers strong earning potential. Expected rental yields range from 5% to 7% annually, with capitalization rates projected to reach 8% to 12% within five years. These metrics position Chelsea Residences as an attractive option for those looking to invest in Dubai real estate."
                },
                
                
            ]
        },
        features: ['Sea Views', 'Waterfront Promenade', 'Infinity Pool', 'Modern Gym', 'Landscaped Gardens', 'Retail Outlets', 'Covered Parking'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'DAMAC Chelsea',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Maritime City'
        }
    },
     {
        id: 4,
         name: 'Binghatti Amberhall at Jumeirah Village Circle (JVC)',
        location: 'Jumeirah Village Circle',
        price: '745,000',
        size: ' 391',
        bedrooms: 'Studio, 1, & 2',
        developer: 'DAMAC',
        image: [
             '/binghatti21.webp', '/binghatti22.webp', '/binghatti23.webp', '/binghatti24.webp', '/binghatti25.webp', '/binghatti26.webp', '/binghatti27.webp','/binghatti28.webp', '/binghatti29.webp', '/binghatti210.webp', '/binghatti211.webp'
        ],
        tags: [
            { text: 'FEATURED', type: 'featured' },
            { text: 'OFF PLAN', type: 'default' },
           
        ],
        description: {
            intro: "Binghatti Amberhall is a contemporary residential complex being developed by Binghatti Developers in the vibrant community of Jumeirah Village Circle (JVC), Dubai. This thoughtfully planned development will comprise a total of 630 residential units, including 230 studio apartments, 322 one-bedroom apartments, and 78 two-bedroom residences. Additionally, the ground floor will house 14 retail outlets and 39 office units, enhancing the project’s mixed-use appeal.",
            sections: [
                {
                    title: 'Contemporary Architecture with Functional Design',
                    content: "The design of Binghatti Amberhall features a modern architectural approach, characterised by sleek façades and expansive glass windows. Each residence is crafted to balance visual appeal with functionality. The one-bedroom apartments span from 727 sq. ft. (68 m²) to 896 sq. ft. (83 m²), offering residents well-planned interiors suited for modern urban living.The interiors are curated in a clean, minimalist style with premium finishes and fittings. The apartments offer open-plan living areas, fully equipped kitchens, and elegant bathrooms. Generously sized windows allow for an abundance of natural light and offer views of the lush green surroundings within JVC."
                },
                {
                    title: 'Exclusive Lifestyle Amenities',
                    content: "Residents of Binghatti Amberhall will benefit from a range of premium amenities designed to enhance everyday living. These include a temperature-controlled swimming pool, a state-of-the-art fitness centre, children’s recreational areas, and landscaped gardens. Additional facilities include 24-hour security with CCTV surveillance, dedicated parking, business lounges ideal for remote work, and barbecue zones perfect for social gatherings."
                },
                {
                    title: 'Prime Location with Access to Key Conveniences',
                    content: "Strategically located in Jumeirah Village Circle, Binghatti Amberhall offers easy access to essential services and facilities. The area is home to educational institutions, medical centres, retail stores, restaurants, and supermarkets. Circle Mall, featuring retail boutiques, cafes, a cinema, and fitness facilities, is just a short drive away. Families can take advantage of nearby schools such as JSS International School, while healthcare needs are served by Karama Medical Centre and Mediclinic Parkview Hospital.JVC’s well-connected road network provides swift access to major destinations across Dubai. Dubai Marina and the Mall of the Emirates are approximately 10 minutes away, with Downtown Dubai and Burj Khalifa reachable within 15 minutes. Dubai International Airport is a 25-minute drive, and Al Maktoum International Airport is accessible in around 30 minutes. Key highways such as Sheikh Mohammed Bin Zayed Road and Al Khail Road offer seamless connectivity to other parts of the city."
                },
                 {
                    title: 'Attractive Investment Opportunity',
                    content: "With strong rental demand in the JVC area and an average rental return of 5.39%, Binghatti Amberhall represents a promising investment. The blend of modern design, high-quality amenities, and strategic location positions it as a desirable asset for both investors and end-users.Combining contemporary living standards with excellent investment prospects, Binghatti Amberhall caters to a diverse range of buyers. Its variety of apartment layouts, on-site amenities, favourable payment plans, and central location make it an ideal choice for those seeking either a primary residence or a high-performing investment property in Dubai."
                },
                
                
            ]
        },
        features: ['Barbecue Area', 'Fitness Centre', 'Security', 'CCTV Cameras', 'Gym', 'Swimming Pool', 'Children-PlayArea', 'Landscaped Greens', 'Covered Parking' , 'Retail Outlets' ],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Binghatti Amberhall at Jumeirah Village Circle (JVC)',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Jumeirah Village Circle'
        }
    },
    {
        id: 5,
         name: 'Sobha Central at Sheikh Zayed Road',
        location: 'Sheikh Zayed Road',
        price: ' 1,520,000',
        size: ' 568',
        bedrooms: '1, & 2',
        developer: 'DAMAC',
        image: [
           '/s11 front pic.webp', '/s11.webp', '/s12.webp', '/s13.webp', '/s14.webp', '/s15.webp', '/s16.webp','/s17.webp', '/s18.webp', '/s19.webp', '/s10.webp'
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "Sobha Central is a landmark residential project spearheaded by the acclaimed Sobha Realty. Ideally positioned on Sheikh Zayed Road, next to Jumeirah Lake Towers, the development offers unparalleled access to Dubai’s key commercial and lifestyle districts, including Downtown Dubai, Business Bay, DIFC, and Dubai Marina, all reachable within 10 to 15 minutes.",
            sections: [
                {
                    title: 'A Skyline-Changing Development',
                    content: "This expansive residential complex will consist of six architecturally advanced skyscrapers. Among them is a towering 360-meter structure featuring 95 floors, set to become the tallest residential tower in the JLT area and among the tallest along Sheikh Zayed Road. Each tower in the development will bear a distinct name and will be introduced in phases. The first tower, Horizon, is a sophisticated 74-storey building that offers sweeping views of the Arabian Gulf, Bluewaters Island, Emirates Hills, and the glittering skyline along Sheikh Zayed Road.Sobha Central adheres to Sobha Realty’s renowned Backward Integration philosophy, ensuring strict control over quality at every stage, from initial design and construction materials to final interior finishing. The towers will be unified by a luxurious podium, topped with a private park offering walking trails and recreational spaces, an exceptional amenity in a high-density urban environment."
                },
                {
                    title: 'Sophisticated Living Spaces & Integrated Lifestyle Amenities',
                    content: "Horizon at Sobha Central features a curated selection of 1 and 2-bedroom residences, with areas ranging from 568 sq. ft. (53 m²) to 1,552 sq. ft. (144 m²). Each apartment is thoughtfully planned with practical layouts, strategic zoning, abundant natural light, and picturesque views. Residences come with balconies, and select units include features such as walk-in closets, dedicated laundry spaces, and pantries. The interior palette incorporates natural textures and warm tones, while bathrooms and kitchens are appointed with premium ceramic fittings and European-brand built-in appliances.Sobha Central goes beyond standard residential offerings by integrating multiple lifestyle and commercial zones within the community. The development hosts a fully equipped business center, co-working zones, wellness facilities such as fitness studios, spa areas, yoga lawns, and a full-scale shopping mall. Residents can also enjoy an indoor promenade with cinema access, a children’s club, and a medical clinic. For families, the project offers child-friendly outdoor spaces including playgrounds, shaded leisure paths, and unique attractions like a bubble lounge.Active residents will appreciate the sports infrastructure, which features jogging tracks, outdoor pools, a jacuzzi, cricket nets, a mini-golf course, and fitness zones. Tranquil areas such as meditation pods, garden retreats with aromatic plants, picnic lawns, an amphitheatre, and a large prayer room contribute to the serene, all-encompassing community environment."
                },
                {
                    title: 'Strategic Connectivity & Convenience',
                    content: "One of Sobha Central’s standout features is its direct connection to Sheikh Zayed Road, complemented by a dedicated bridge from the second-level podium for seamless access across Dubai. Residents benefit from proximity to Jebel Ali Metro Station, business hubs, schools, clinics, and major retail destinations such as Ibn Battuta Mall, Mall of the Emirates, and Nakheel Mall. Dubai International Airport is just 30 minutes away by car."
                },
                 {
                    title: 'Investment Potential',
                    content: "Positioned as a premier investment opportunity, Sobha Central offers a rare combination of prime location, luxury living, and the trusted Sobha brand. Horizon, the inaugural tower of the development, is on track for completion in the fourth quarter of 2029, making it a forward-looking choice for investors and end-users alike."
                },
                
                
            ]
        },
        features: ['Barbecue Area' ,
'Children Play Area',
'Football field',
'Gym',
'Indoor Cinema',
'Jogging and Cycling Track',
'Meditation',
'Mini Golf',
'Outdoor Cinema',
'Retail Outlets',
'Sauna & Steam Room',
'Shopping Mall',
'Spa',
'Supermarket',
'Swimming Pool',
'Yoga Studio' ],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha Central at Sheikh Zayed Road',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Sheikh Zayed Road'
        }
    },
     {
        id: 6,
         name: 'DAMAC Seacrest at Dubai Maritime City',
        location: 'Dubai Maritime City',
        price: ' 2,160,000',
        size: ' 775',
        bedrooms: '1,2 & 3',
        developer: 'DAMAC',
        image: [
           '/d31.webp', '/d32.webp', '/d33.webp', '/d34.webp', '/d35.webp', '/d36.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "DAMAC Properties introduces Seacrest, a contemporary residential development nestled within Dubai Maritime City. This newly launched project features a curated selection of 1, 2, and 3-bedroom apartments that offer expansive views of the Arabian Gulf, seamlessly paired with the area’s modern conveniences and robust infrastructure. Seacrest caters to both investors and homebuyers seeking a well-connected, urban lifestyle in Dubai.",
            sections: [
                {
                    title: 'Strategic Location within a Revitalized Urban Hub',
                    content: "Dubai Maritime City stands as a dynamic mixed-use district integrating residential and commercial developments. Positioned adjacent to Port Rashid—one of the UAE’s largest cruise ports—the community enjoys proximity to key destinations including DIFC, Downtown Dubai, Deira, and Bur Dubai, all within a 10–15 minute drive. As a focal point of the Old Dubai revitalization initiative, the district is benefiting from major public investment aimed at enhancing transport infrastructure, expanding public green areas, and upgrading coastal amenities, including future Blue Flag-certified beaches.The area offers a full spectrum of lifestyle conveniences, from top-tier retail destinations such as Wafi Mall and Dubai Mall to the cultural charm of the Al Seef waterfront promenade. Educational institutions, healthcare facilities like Dubai Healthcare City, and commercial hubs including the Dubai World Trade Centre are all within easy reach, enhancing everyday living for residents."
                },
                {
                    title: 'Contemporary Apartment Designs with Nautical Influences',
                    content: "Residences at Seacrest are thoughtfully planned to maximize space and comfort. The apartments range in size from approximately 775 sq. ft. (72 m²) for one-bedroom units to 2,842 sq. ft. (264 m²) for three-bedroom configurations. Architectural design emphasizes modernity, with interiors featuring a soothing, neutral color palette complemented by natural wood and stone finishes, echoing the surrounding marine environment. Floor-to-ceiling windows, open-plan living areas, and fully fitted kitchens contribute to a sophisticated, yet cozy, atmosphere."
                },
                {
                    title: 'Exclusive Lifestyle Amenities',
                    content: "Residents of DAMAC Seacrest enjoy a wealth of upscale facilities, including a panoramic infinity pool overlooking the Gulf, a wellness center with spa facilities, a state-of-the-art fitness area, children’s play zones, and direct access to Coral Beach—offering an ideal balance between relaxation and recreation.."
                },
                 {
                    title: 'Robust Investment Outlook',
                    content: "Dubai Maritime City is emerging as a high-demand property destination due to its role in supporting Dubai’s maritime economy. Home to numerous companies in logistics, legal, and marine services, the area is experiencing a residential supply gap. With a current population of over 14,000 expected to rise to more than 26,000, an estimated 4,000 new units are needed to meet demand—positioning Seacrest as a smart choice for investors anticipating capital appreciation and strong rental returns.Seacrest by DAMAC is more than just a residential address; it represents a strategic investment opportunity with long-term value. With its prime location, superior construction quality, excellent amenities, and growth potential, this development is well-suited for both end-users and investors seeking secure and high-performing real estate assets in Dubai."
                },
                
                
            ]
        },
        features: ['Balcony',
'Barbecue Area',
'Beacharea',
'Children Play Area',
'Concierge Service',
'Fitness Centre',
'Gym',
'Infinity Pool',
'Jogging and Cycling Track',
'Swimming Pool',
'View of Water'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'DAMAC Seacrest at Dubai Maritime City',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Maritime City'
        }
    },
    {
        id: 7,
        name: 'Binghatti Aquarise at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 999,000',
        size: ' 423',
        bedrooms: 'Studio, 1,2 & 3',
        developer: 'DAMAC',
        image: [
            '/b31.webp', '/b32.webp', '/b33.webp', '/b34.webp', '/b35.webp', '/b36.webp', '/b37.webp', '/b38.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "Binghatti Aquarise is a visionary development by the reputable Binghatti group. Strategically located in the heart of Business Bay, this striking high-rise offers an array of residences—from studios to expansive four-bedroom apartments—as well as prime retail spaces. The development’s design prioritizes both functionality and luxury, with select residences featuring private pools, making it one of the most anticipated launches in the area.",
            sections: [
                {
                    title: 'An Elevated Standard of Urban Living',
                    content: "Binghatti Aquarise redefines contemporary living with thoughtfully integrated private pools in select units, providing residents with a refined and exclusive lifestyle. Nestled in one of Dubai’s most prestigious locations, this project is expected to yield high returns on investment due to its premium positioning and state-of-the-art design. Residents benefit from seamless access to iconic city landmarks including Burj Khalifa, Dubai Mall, and Dubai Canal—balancing privacy with urban connectivity."
                },
                {
                    title: 'Key Highlights of Binghatti Aquarise',
                    content: "Prestigious Address: Located in the dynamic hub of Business Bay, the development enjoys strong demand from both tenants and investors, supported by the area’s consistent growth trajectory.  Developer Credibility: Developed by Binghatti—known for architectural innovation and commitment to timely delivery—Aquarise embodies quality and design excellence.  Signature Lifestyle Elements: Select units boast private pools and royal suite options, complemented by sophisticated interiors and high-end finishes.  Integrated Community Vision: The master plan merges residential and retail elements, forming a vertical community that supports a convenient and connected urban lifestyle.  Premium Amenities: A comprehensive range of wellness-driven and technologically advanced facilities cater to every aspect of modern city life.  Investor Appeal: Flexible payment plans, paired with promising rental yields, make Aquarise a strategic choice for long-term investors.  Proximity to Major Landmarks: With swift access to Downtown Dubai, DIFC, and Dubai Canal, the location ensures a smooth and efficient daily routine.Set within Dubai’s bustling commercial district, Binghatti Aquarise benefits from unparalleled connectivity. Whether it’s for business meetings, upscale shopping, or world-class dining, everything is conveniently close. Residents enjoy proximity to major business zones and entertainment venues, making it an ideal setting for professionals and families alike."
                },
                {
                    title: 'Business Bay: A Lifestyle Destination',
                    content: "Business Bay continues to attract global interest as one of Dubai’s premier residential and commercial zones. Known for its sleek skyline, canal-facing views, and exceptional infrastructure, it remains a hotspot for those seeking luxury and long-term value."
                },
                 {
                    title: 'Connectivity at a Glance:',
                    content: "10 minutes to Downtown Dubai  10 minutes to DIFC  15 minutes to Dubai World Trade Center  15 minutes to Jumeirah Beach  19 minutes to Dubai Marina"
                },
                
                
            ]
        },
        features: ['Balcony',
'Barbecue Area',
'Childrens Play Area',
'Co-working Space',
'Fitness Centre',
'Gym',
'Infinity Pool',
'Jogging and Cycling Track',
'Landscaped Greens',
'Private Pool',
'Retail Outlets',
'Spa',
'Swimming Pool',
'View of Landmark'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Binghatti Aquarise',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Business Bay'
        }
    },
    {
        id: 8,
         name: 'Danube Sparklz at Al Furjan',
        location: 'Al Furjan',
        price: ' 900,000',
        size: '  446',
        bedrooms: 'Studio, 1,2 & 3',
        developer: 'DAMAC',
        image: [
             '/danube1.webp', '/danube2.webp', '/danube3.webp', '/danube4.webp', '/danube5.webp', '/danube6.webp', '/danube7.webp', '/danube8.webp', '/danube9.webp', '/danube10.webp', '/danube11.webp', '/danube12.webp', '/danube13.webp', '/danube14.webp', '/danube15.webp', '/danube16.webp', '/danube17.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "Danube Sparklz is the latest residential venture by the reputable Danube Properties, strategically situated in the rapidly evolving Al Furjan district of Dubai. This contemporary development blends a prime location, smart architectural planning, and a diverse selection of housing options. The project includes fully finished and furnished studio, 1, 2, and 3-bedroom apartments, starting from 446 sqft (approximately 41 sqm). Each unit is outfitted with top-tier appliances and modern kitchens, eliminating the need for additional setup or furnishing expenses.The project is anticipated to be completed by the second quarter of 2028. It features a buyer-centric payment structure that allows for flexibility and ease of ownership. Given the increasing popularity of Al Furjan and its upward rental trends, investing in Danube Sparklz presents a financially strategic opportunity for both investors and end users.",
            sections: [
                {
                    title: 'Connectivity and Accessibility',
                    content: "Al Furjan stands out as a dynamic and well-connected community. The residence enjoys proximity to Al Furjan Metro Station, with Gardens Metro Station just 650 meters away. Major routes such as Sheikh Zayed Road and Mohammed Bin Zayed Road are easily accessible, streamlining commutes across the city. Local conveniences like Al Furjan Pavilion West are a mere 2-minute drive, while destinations such as Ibn Battuta Mall, Dubai Marina, and key airports (DWC and DXB) are all reachable within 10 to 30 minutes."
                },
                {
                    title: 'Balanced Living and Smart Investment',
                    content: "Danube Sparklz is designed for both lifestyle seekers and investors. The development’s thoughtful design, strategic location, and comprehensive amenities make it ideal for personal use as well as rental income. As Al Furjan continues to expand, the value of properties in the area is expected to grow steadily, adding long-term investment appeal."
                },
                {
                    title: 'Comprehensive Amenities for Modern Living',
                    content: "The community offers an extensive range of over 30 lifestyle and recreational facilities. These include a spacious swimming pool, state-of-the-art fitness center, dedicated barbecue spaces, children’s play areas, retail outlets, cafés, and landscaped walkways. The complex is secured with 24/7 surveillance and staffed security personnel. With eight elevators (four on each side), residents enjoy efficient vertical access even during peak hours. Bathrooms feature high-end sanitary fittings from Casa Milano, and the on-site infrastructure caters to all daily needs, creating a self-sufficient environment."
                },
                 {
                    title: 'Smart Investment Opportunity',
                    content: "Danube Sparklz at Al Furjan stands out due to its advantageous location, strong brand association, and high tenant demand. The project offers an appealing entry point for a broad segment of buyers, thanks to its competitive pricing and accessible payment terms. It’s an ideal choice for those looking to secure rental income or own a home in one of Dubai’s most promising neighborhoods."
                },
                
                
            ]
        },
        features: ['Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Landscaped Greens',
'Outdoor Cinema',
'Restaurants & Cafes',
'Retail Outlets',
'Security',
'Swimming Pool',],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Danube Sparklz at Al Furjan',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Al Furjan'
        }
    },
    {
        id: 9,
         name: 'Binghatti Starlight at Al Jaddaf, Dubai',
        location: 'Al Jaddaf',
        price: '  850,000',
        size: '  415',
        bedrooms: 'Studio, 1, & 2',
        developer: 'DAMAC',
        image: [
             '/b41.webp', '/b42.webp', '/b43.webp', '/b44.webp', '/b45.webp', '/b46.webp', '/b47.webp', '/b48.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "The Starlight residential project by Binghatti Developers is a new 25-storey development taking shape in the vibrant Al Jaddaf neighborhood of Dubai. This contemporary project features a selection of studio, one-, and two-bedroom apartments, with sizes ranging from 415 sq. ft. (39 m²) to 1,190 sq. ft. (111 m²), catering to diverse lifestyle preferences.",
            sections: [
                {
                    title: 'Completion Timeline and Payment Flexibility',
                    content: "Binghatti Starlight is set for completion in the first quarter of 2026. Buyers can take advantage of the developer’s flexible payment plan, making property ownership in Al Jaddaf more accessible and financially favorable."
                },
                {
                    title: 'Architectural Elegance and Interior Comfort',
                    content: "Binghatti Starlight stands out with its distinctive architectural design, featuring stylish geometric patterns and expansive panoramic windows that enhance natural lighting and insulation. The interiors are meticulously planned to maximize comfort, boasting high ceilings, spacious balconies, and kitchens equipped with built-in appliances, offering a seamless blend of luxury and functionality."
                },
                {
                    title: 'World-Class Amenities for Residents',
                    content: "Future residents of Binghatti Starlight will enjoy an extensive range of premium amenities, including:Swimming pools, A fully equipped fitness center,Sauna and Jacuzzi facilities,Children’s ,playgrounds,Lounge areas for relaxation,Landscaped gardens and dedicated barbecue spaces,Security is a top priority, with 24-hour surveillance and CCTV monitoring. Additionally, a multi-level parking facility is available to ensure convenience for vehicle owners."
                },
                 {
                    title: 'Prime Location with Seamless Connectivity',
                    content: "Situated in Al Jaddaf, a strategically positioned neighborhood bordering Dubai Creek, the development benefits from excellent infrastructure and accessibility. Residents will enjoy seamless connectivity via Al Khail Road, Sheikh Rashid Road, and the Al Jaddaf Metro Station, providing easy access to Dubai’s key destinations. Dubai International Airport is just a 10-15 minute drive away, further enhancing the area’s appeal."
                },
                 {
                    title: 'Proximity to Dubai’s Iconic Attractions',
                    content: "Binghatti Starlight’s location offers the added advantage of being near Dubai’s most renowned landmarks. Residents can reach Burj Khalifa, The Dubai Mall, and Dubai Opera within 10 minutes, while Jumeirah Beach is just a 20-minute drive away. The neighborhood also features attractions such as Dubai Festival City Mall, Jameel Arts Centre, and the Swiss International Scientific School."
                },
                 {
                    title: 'A Lucrative Investment Opportunity',
                    content: "Al Jaddaf is rapidly emerging as one of Dubai’s most promising investment destinations. Apartment rental yields in the area range between 6.3% and 6.7% annually, making Binghatti Starlight a valuable asset for both long-term ownership and passive income generation."
                },
                 {
                    title: 'Growing Demand and Future Prospects',
                    content: "The area’s dynamic growth in both commercial and residential sectors is driving property value appreciation. Its proximity to key infrastructure hubs like Dubai Healthcare City and The Royal Za’abeel Community further increases demand for rental properties, attracting professionals and families alike."
                },
                
                
            ]
        },
        features: ['Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Sauna & Steam Room',
'Swimming Pool'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Binghatti Starlight at Al Jaddaf',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Al Jaddaf'
        }
    },
     {
        id: 10,
       name: 'Binghatti Skyhall at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 985,000',
        size: '   396',
        bedrooms: 'Studio & 1',
        developer: 'DAMAC',
        image: [
             '/b51.webp', '/b52.webp', '/b53.webp', '/b54.webp', '/b55.webp', '/b56.webp', '/b57.webp', '/b58.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "Binghatti Skyhall, an upcoming residential project by Binghatti Developers, is set to redefine urban living in Business Bay. The development features contemporary studios and 1-bedroom apartments, with unit sizes ranging from 37 m² (396 sqft) to 96 m² (1,032 sqft). Scheduled for completion in Q4 2026, the project offers a flexible 70/30 payment plan, requiring a 20% down payment.",
            sections: [
                {
                    title: 'Prime Location in Dubai’s Business Hub',
                    content: "Situated in one of Dubai’s most prestigious districts, Business Bay, Binghatti Skyhall places residents in the heart of the city’s commercial and residential core. This vibrant area is renowned for its iconic skyscrapers, luxury hotels, corporate hubs, and excellent transport connectivity. The development seamlessly integrates business opportunities with urban comforts, making it an ideal choice for professionals and families alike.Residents of Binghatti Skyhall enjoy exceptional proximity to Dubai’s key landmarks. The Burj Khalifa, Dubai Mall, and Dubai Opera are just five minutes away, while Dubai Design District and the DIFC can be reached in seven minutes. Additionally, Dubai International Airport is a convenient 20-minute drive, ensuring seamless connectivity for frequent travelers."
                },
                {
                    title: 'World-Class Amenities for a Modern Lifestyle',
                    content: "Binghatti Skyhall is designed to cater to a dynamic and active lifestyle. The development offers an array of high-end amenities, including adult and children’s swimming pools, a dedicated poolside area, basketball and volleyball courts, a fully equipped fitness center, and designated children’s play areas. Outdoor lounge spaces further enhance the living experience, providing residents with comfortable and stylish communal areas to unwind."
                },
                {
                    title: 'A Thriving Investment Opportunity',
                    content: "Business Bay continues to experience rapid growth, attracting both residents and investors. The area boasts an impressive rental yield of 6-9% per year, positioning Binghatti Skyhall as a lucrative asset for long-term investment. With ongoing infrastructure developments, new commercial projects, and enhanced transportation networks, property values in Business Bay are expected to appreciate significantly in the coming years.Skyhall by Binghatti Developers presents a unique blend of modern living, panoramic city views, and access to premium infrastructure. As one of Dubai’s most desirable residential destinations, it offers a compelling opportunity for homeowners and investors looking to secure a property in a flourishing urban hub."
                },
                 
                
            ]
        },
        features: ['Basketball Court',
'Childrens Play Area',
'Childrens Pool',
'Concierge Service',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Swimming Pool',
'View of Landmark'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Binghatti Skyhall at Business Bay, Dubai',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Business Bay'
        }
    },
    {
        id: 11,
      name: 'Skyvue Spectra at Sobha Hartland 2, Dubai',
        location: 'Sobha Hartland 2',
        price: ' 1,270,000',
        size: '    506',
        bedrooms: '1,2 & 3',
        developer: 'DAMAC',
        image: [
             '/s21.webp', '/s22.webp', '/s23.webp', '/s24.webp', '/s25.webp', '/s26.webp', '/s27.webp', '/s28.webp', '/s29.webp', '/s210.webp', '/s211.webp', '/s212.webp', '/s213.webp', '/s214.webp', '/s215.webp', '/s216.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
           
        ],
        description: {
            intro: "Skyvue Spectra is an upcoming residential development by Sobha Realty, situated in the Sobha Hartland II community within Mohammed Bin Rashid City, Dubai.This vibrant neighborhood offers well-developed infrastructure, featuring schools, hospitals, and supermarkets within walking distance. Residents will enjoy lush green parks, artificial lagoons, and pedestrian-friendly pathways. The community’s strategic location near Al Khail Road and Financial Centre Road ensures seamless access to Dubai’s key destinations. Downtown Dubai is a mere 10-minute drive, while Dubai International Airport can be reached in approximately 25 minutes. Additionally, the Creek Metro Station and nearby bus stops are just a 10-minute walk away, enhancing connectivity.Skyvue Spectra at Sobha Hartland II offers a range of 1, 2, and 3-bedroom apartments. The unit sizes vary from 506 sq. ft. (47 m²) for a 1-bedroom apartment to 1,489 sq. ft. (138 m²) for a 3-bedroom residence, catering to diverse lifestyle needs.The interiors of Skyvue Spectra reflect modern architectural trends, incorporating high-quality materials for superior finishes. The kitchens are thoughtfully designed and come equipped with state-of-the-art appliances, ensuring convenience and functionality for residents.",
            sections: [
                {
                    title: 'World-Class Amenities for a Luxurious Lifestyle',
                    content: "Residents will have access to a wide range of premium amenities, including a swimming pool, gym, yoga studio, and treadmills for maintaining an active lifestyle. Children can enjoy dedicated playgrounds, while adults can relax in lounges and party plazas. The development also boasts indoor and outdoor cinemas, a skate park, event halls, a library, reading rooms, and art and music studios. For outdoor enthusiasts, barbecue areas, spacious terraces, and communal gardens offer an ideal setting. Additionally, a jacuzzi, sauna, and spa provide ultimate relaxation, while a multi-purpose hall serves as a venue for social gatherings and events."
                },
                {
                    title: 'Proximity to Dubai’s Landmarks',
                    content: "Residents of Sobha Skyvue Spectra will benefit from close proximity to some of Dubai’s most iconic attractions. The Ras Al Khor Wildlife Sanctuary, home to flamingos and rare bird species, is just a 5-minute drive away. Meydan Racecourse can be reached within 10 minutes, while the Burj Khalifa and Dubai Mall are a short 15-minute drive away, ensuring an array of entertainment and leisure options."
                },
                {
                    title: 'Investment Potential and Growth Prospects',
                    content: "Investing in Sobha Skyvue Spectra presents a lucrative opportunity due to its prime location, superior construction quality, and extensive amenities. The demand for properties in Sobha Hartland II continues to rise, leading to steady appreciation in property values and attractive rental returns. Estimated rental yields in the area range from 6% to 8% per annum, making it a highly desirable investment.A Highly Desirable Residential Choice"
                },
                  {
                    title: 'A Highly Desirable Residential Choice',
                    content: "With its contemporary architectural style, well-planned layouts, exceptional comfort, and prime location, Sobha Skyvue Spectra stands out as one of the most sought-after residential developments in Sobha Hartland II. The project is set for completion in Q1 2029, promising a premium living experience for future residents."
                },
                 
                
            ]
        },
        features: ['Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Indoor Cinema',
'Jacuzzi',
'Jogging and Cycling Track',
'Landscaped Greens',
'Outdoor Cinema',
'Restaurants & Cafes',
'Retail Outlets',
'Sauna & Steam Room',
'Yoga Studio'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Skyvue Spectra at Sobha Hartland 2',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Sobha Hartland 2'
        }
    },
 {
        id: 12,
     name: 'DAMAC Riverside Views at Dubai Investments Park',
        location: 'Dubai Investment Park',
        price: ' 888,000',
        size: '    650',
        bedrooms: '',
        developer: 'DAMAC',
        image: [
              '/d41.webp', '/d42.webp', '/d43.webp', '/d44.webp', '/d45.webp', '/d46.webp', '/d47.webp', '/d48.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
          
           
        ],
        description: {
            intro: "DAMAC Riverside Views, an upscale residential development by DAMAC Properties, is situated in Dubai Investments Park 2 within the Jebel Ali District. The project features contemporary 1-bedroom and 2-bedroom apartments, expertly designed to combine functionality, comfort, and aesthetic charm. With superior finishes and well-thought-out layouts, these residences are an excellent choice for both investors and individuals seeking high-quality living spaces in Dubai.The development offers thoughtfully crafted units, with sizes ranging between 650-850 sq. ft. (60-79 m²) for 1-bedroom apartments and 1,000-1,200 sq. ft. (93-111 m²) for 2-bedroom apartments.1-Bedroom Apartments: These units feature open-plan kitchens, stylish interiors, and expansive balconies that provide stunning views of the river or community.2-Bedroom Apartments: Perfect for families or individuals requiring additional space, these units come with en-suite bathrooms for every bedroom, designated dining areas, and premium-quality finishes.",
            sections: [
                {
                    title: 'World-Class Amenities for a Unique Lifestyle',
                    content: "Residents of DAMAC Riverside Views have access to an impressive selection of amenities that blend nature-inspired and water-focused facilities. Key features include:Floating Sports Venues: Innovative spaces for recreational activities on water.Relaxation Facilities: Zen spas, callisthenics stations, and dedicated proposal decks for tranquil experiences.Entertainment Options: A floating opera stage and an outdoor cinema on water offer unmatched leisure activities.Family-Friendly Zones: Children’s play areas, adventure zones, and games hubs ensure entertainment for all age groups.Gourmet Dining: Island restaurants and lakes infused with essential oils add a unique culinary appeal.These amenities are designed to enhance the living experience, catering to both relaxation and entertainment needs."
                },
                {
                    title: 'Prime Location with Excellent Connectivity',
                    content: "Strategically located between Jebel Ali Al Hibab Road and Emirates Road, DAMAC Riverside Views offers seamless connectivity to Dubai’s major landmarks and destinations:Al Maktoum International Airport: Just 15 minutes away.Expo City: Accessible within 10 minutes.Global Village and Dubai Marina: Reachable in approximately 20 minutes.With its proximity to key transportation hubs, the development ensures hassle-free commuting for residents and easy access for frequent travelers.Dubai Investments Park is a growing residential hub, offering strong potential for rental yields and long-term appreciation. Apartments at DAMAC Riverside Views present an attractive return on investment, with yields ranging between 6% and 8%, depending on property size, rental demand, and prevailing market trends.The combination of modern architecture, exclusive amenities, and a prime location positions DAMAC Riverside Views as a highly sought-after property in Dubai’s dynamic real estate market. For investors and homeowners alike, it represents both a lifestyle upgrade and a solid financial opportunity."
                },
                
                 
                
            ]
        },
        features: ['Balcony',
'Barbecue Area',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Kids Play Area',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Sauna & Steam Room',
'Swimming Pool',
'View of Water',],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'DAMAC Riverside Views at Dubai Investments Park',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Investment Park'
        }
    },
     {
        id: 13,
      name: 'Binghatti Dawn at Jumeirah Village Circle (JVC) Dubai',
        location: 'Jumeirah Village Circle',
        price: ' 650,000',
        size: '     392.56',
        bedrooms: 'Studio, 1, & 2',
        developer: 'DAMAC',
        image: [
              '/b61.webp', '/b62.webp', '/b63.webp', '/b64.webp', '/b65.webp', '/b66.webp', '/b67.webp', '/b68.webp', '/b69.webp', '/b610.webp', '/b611.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
          
           
        ],
        description: {
            intro: "Situated in the heart of Jumeirah Village Circle (JVC), Dubai, Binghatti Dawn is a testament to contemporary luxury and architectural excellence. Developed by Binghatti Developers, this prestigious project offers an exclusive selection of premium studios, as well as one- and two-bedroom apartments. Designed to redefine modern living, every aspect of this hyper-tower embodies sophistication, from its thoughtfully curated amenities to its exquisite finishes, ensuring an unparalleled residential experience.",
            sections: [
                {
                    title: 'Prime Location & Seamless Connectivity',
                    content: "Nestled within one of Dubai’s most desirable communities, Binghatti Dawn boasts a strategic location that enhances convenience and accessibility. Its proximity to major highways, including Sheikh Mohammed Bin Zayed Road and Al Khail Road, ensures effortless connectivity to key destinations across the city. Residents can enjoy quick access to Downtown Dubai, Dubai Marina, and Dubai International Airport, making travel and daily commutes remarkably convenient. Moreover, premier shopping destinations like the Mall of the Emirates and a diverse selection of fine dining establishments are just moments away, offering a dynamic urban lifestyle."
                },
                {
                    title: 'Architectural Brilliance & Timeless Design',
                    content: "The distinctive façade of Binghatti Dawn is inspired by the first light of day, symbolizing new beginnings and boundless opportunities. The design seamlessly captures the transition from night to day, incorporating natural architectural elements that radiate warmth and sophistication. The avant-garde exterior is crafted to reflect fleeting yet impactful moments of brilliance, creating a striking visual presence. Every detail of the structure has been meticulously curated to evoke a sense of renewal, making it not just a residence but a sanctuary of elegance and inspiration.."
                },
                {
                    title: 'Exquisite Interiors & Unparalleled Craftsmanship',
                    content: "Step inside, and you will be welcomed by interiors that exude warm luxury and masterful craftsmanship. The development is adorned with premium materials and bespoke finishes, transforming ordinary spaces into exquisite living environments. The grand lobby, meticulously designed with a selection of high-end materials, sets the tone for the entire residence. With sleek lines and fluid transitions, the interiors create a harmonious blend of sophistication and comfort, offering residents a refined living experience."
                },
                {
                    title: 'World-Class Amenities for an Elevated Lifestyle',
                    content: "Binghatti Dawn presents an exceptional array of leisure and wellness amenities that cater to every aspect of a luxurious lifestyle. Residents can indulge in expansive swimming pools, state-of-the-art fitness facilities, and dedicated play areas for children. The development also features an outdoor yoga and aerobics space, a scenic pavilion, and a jogging path, ensuring a well-balanced and fulfilling lifestyle."
                },
                  {
                    title: 'Key Highlights:',
                    content: "A total of 95 residential units, including studios, one-bedroom, and two-bedroom apartments, providing a variety of living options.Prime location in Jumeirah Village Circle (JVC), one of Dubai’s most sought-after residential communities with excellent connectivity to key city attractions.A distinctive architectural design, featuring two basements, a ground floor, four residential floors, and a rooftop, exemplifying modern construction excellence.Apartments equipped with high-quality materials and bespoke finishes, transforming living spaces into luxurious sanctuaries of comfort and style.A vibrant community enriched with wellness-centric amenities, catering to diverse recreational and relaxation needs.An extensive range of premium facilities, including swimming pools, a dedicated kids’ play area, an outdoor yoga/aerobics space, a pavilion, and a jogging track.Binghatti Dawn is not just a residence—it is a statement of refined living, offering an extraordinary lifestyle in one of Dubai’s most desirable neighborhoods. With its prime location, exceptional design, and world-class amenities, this development presents a unique investment opportunity for those seeking luxury, comfort, and convenience in one remarkable destination.."
                },
                 
                
            ]
        },
        features: ['Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Kids Play Area',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Security',
'Swimming Pool'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Binghatti Dawn at JVC Dubai',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Jumeirah Village Circle'
        }
    },
     {
        id: 14,
      name: 'The Element at Sobha One, Dubai',
        location: 'Sobha One (Sobha Hartland)',
        price: '1,820,000',
        size: '     729',
        bedrooms: '1,2,3 & 4',
        developer: 'DAMAC',
        image: [
              '/s31.webp', '/s32.webp', '/s33.webp', '/s34.webp', '/s35.webp', '/s36.webp', '/s37.webp', '/s38.webp', '/s39.webp', '/s310.webp', '/s311.webp', '/s312.webp', '/s314.webp', '/s315.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
          
           
        ],
        description: {
            intro: "The Element at Sobha One, an exclusive residential project by Sobha Realty, is situated in the prestigious Sobha Hartland community. This 69-story high-rise features a sleek glass façade and embodies a minimalist design that exudes sophistication. Its architectural concept maximizes natural light, allowing residents to enjoy breathtaking views of Downtown Dubai, Dubai Creek Harbour, Ras Al Khor Wildlife Sanctuary, and a private golf course.",
            sections: [
                {
                    title: 'Elegant Living Spaces',
                    content: "Offering a selection of stylish 1 to 4-bedroom apartments, The Element at Sobha One presents residences ranging from 729 sq. ft. (68 m²) to 2,445 sq. ft. (227 m²). The interiors are crafted in refined, neutral tones, incorporating premium natural materials and contemporary design elements. These residences are thoughtfully designed with high ceilings, panoramic windows, and minimalist finishes featuring natural stone and glass. Every aspect, from built-in storage solutions to soft ambient lighting, is meticulously planned to enhance both comfort and functionality. The Element at Sobha One reflects Sobha Realty’s vision of blending elegant style, modern innovations, and sustainability."
                },
                {
                    title: 'Exceptional Amenities for an Elevated Lifestyle',
                    content: "Residents of The Element at Sobha One will have access to an extensive array of world-class amenities. The development features infinity pools with lounge areas, a state-of-the-art gym with a dedicated cardio zone, and spaces for yoga and Pilates. Additionally, a luxurious spa complex and indoor relaxation areas provide the perfect retreat. Families can enjoy dedicated children’s playgrounds, barbecue areas, a co-working space, and a library. Fitness enthusiasts will appreciate the inclusion of CrossFit zones, jogging tracks, and both indoor and outdoor sports facilities. One of the standout features of the development is the exclusive 18-hole Pitch & Putt golf course, a rarity among residential communities in Dubai."
                },
                {
                    title: 'Prime Location with Seamless Connectivity',
                    content: "Located in the thriving Sobha Hartland community, The Element at Sobha One offers the perfect blend of tranquility and urban convenience. Residents can enjoy a peaceful environment while being just minutes away from the city’s vibrant hubs. Dubai Creek Harbour is a mere five-minute drive, while Downtown Dubai and Business Bay can be reached within 15 minutes. Palm Jumeirah is accessible in 25 minutes, and Dubai International Airport is just 15 minutes away. The area is well-developed with essential infrastructure, including reputable international schools such as Hartland International and North London Collegiate, healthcare centers, shopping boutiques, and supermarkets. Additionally, nature lovers will appreciate the proximity to Ras Al Khor Wildlife Sanctuary, where they can witness stunning landscapes and rare bird species in their natural habitat.."
                },
                {
                    title: 'A Lucrative Investment Opportunity',
                    content: "Investing in The Element at Sobha One presents a highly promising opportunity. Sobha Hartland is rapidly developing, and the demand for premium residential properties continues to rise. Currently, rental yields in the area range between 6-8% per annum, with strong potential for capital appreciation as the supply remains limited. Prospective buyers can benefit from a flexible payment plan, with 60% of the property value payable during construction and the remaining 40% upon handover. The completion of The Element at Sobha One is scheduled for Q4 2028, making it an ideal choice for investors looking to capitalize on Dubai’s thriving real estate market."
                },
                  
                 
                
            ]
        },
        features: ['Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Jacuzzi',
'Jogging and Cycling Track',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Security',
'Swimming Pool',
'View of Landmark'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'The Element at Sobha One, Dubai',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Sobha One (Sobha Hartland)'
        }
    },
    {
        id: 15,
     name: 'Timez by Danube at Dubai Silicon Oasis',
        location: 'Dubai Silicon Oasis',
        price: ' 800,000',
        size: '      380',
        bedrooms: 'Studio, 1,2, & 3',
        developer: 'DAMAC',
        image: [
              '/danube21.webp', '/danube22.webp', '/danube23.webp', '/danube24.webp', '/danube25.webp', '/danube26.webp', '/danube27.webp', '/danube28.webp', '/danube29.webp', '/danube210.webp', '/danube211.webp', '/danube212.webp','/danube213.webp','/danube214.webp','/danube215.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
          
           
        ],
        description: {
            intro: "Danube Properties introduces Timez, a contemporary residential development situated in Dubai Silicon Oasis (DSO). This project offers a selection of elegantly designed studios, as well as one- to three-bedroom apartments. Certain units also feature private swimming pools, enhancing the luxury living experience.Timez by Danube at Dubai Silicon Oasis boasts a sleek, modern architectural design, featuring high-glass facades and floor-to-ceiling windows that allow an abundance of natural light. The interiors are inspired by the Art Nouveau style, incorporating minimalist forms, eco-friendly materials, and ergonomic design solutions to create a sophisticated living space.The apartments at Danube Timez are thoughtfully designed with open-plan kitchens, fully equipped with built-in appliances and functional furniture. Each residence is integrated with a smart home system, enabling residents to control lighting, temperature, and security settings conveniently through a mobile application.",
            sections: [
                {
                    title: 'Premium Amenities and Facilities',
                    content: "Residents of Timez by Danube enjoy access to an array of high-end amenities, including an infinity pool with sun loungers, a fully equipped gym, children’s play areas, and beautifully landscaped gardens with walking trails. To ensure a safe and secure environment, the development features 24-hour security and video surveillance. Additionally, concierge services, restaurants, and retail outlets will be available within the community."
                },
                {
                    title: 'Strategic Location and Connectivity',
                    content: "Located in Dubai Silicon Oasis, this development offers excellent transport connectivity. Quick access to Sheikh Mohammed Bin Zayed Road facilitates easy travel to key business and tourist hubs. Additionally, Dubai-Al Ain Road provides a direct route to Dubai International Airport.Dubai Silicon Oasis boasts a robust public transportation network, including efficient bus routes. Downtown Dubai is reachable in approximately 20 minutes, while Dubai International Airport is just a 15-minute drive away. The neighborhood is a thriving technological and business hub, featuring a mix of residential, commercial, and recreational spaces. Prominent educational institutions such as GEMS Wellington Academy and Indian International School, along with healthcare centers, fitness clubs, supermarkets, and shopping malls, are all within easy reach.Silicon Central Mall serves as a major shopping and entertainment destination within Dubai Silicon Oasis, offering a variety of retail stores, cafes, and recreational facilities. Outdoor enthusiasts can explore North Park, ideal for picnics, or enjoy the scenic pathways at Silicon Park."
                    
                },
                {
                    title: 'Investment Potential and Completion Timeline',
                    content: "Danube Timez at Dubai Silicon Oasis presents an attractive investment opportunity, with an average rental yield of 7.7% per annum. The completion of the project is scheduled for Q2 2028, allowing prospective buyers ample time to plan their move into this distinguished community."
                },
                
                 
                
            ]
        },
        features: ['Childrens Play Area',
'Concierge Service',
'Fitness Centre',
'Infinity Pool',
'Jogging and Cycling Track',
'Landscaped Greens',
'Private Pool',
'Restaurants & Cafes',
'Retail Outlets',
'Security',
'Swimming Pool'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Timez by Danube at Dubai Silicon Oasis',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Silicon Oasis'
        }
    },
    {
        id: 16,
    name: 'Sobha SeaHaven at Dubai Harbour Waterfront Living',
        location: 'Dubai Harbour',
        price: '4,400,000',
        size: '      841',
        bedrooms: 'Studio, 1,2, 3 & 4',
        developer: 'DAMAC',
        image: [
              '/s41.webp', '/s42.webp', '/s43.webp', '/s44.webp', '/s45.webp', '/s46.webp', '/s47.webp', '/s48.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
            
          
           
        ],
        description: {
            intro: "Sobha SeaHaven is a premier sea-facing development located in the vibrant Dubai Harbour, offering ultra-luxury apartments with 1 to 4 bedrooms. Boasting exquisite amenities and lush green landscapes, it provides a sanctuary of elegance, tranquility, and scenic beauty. Positioned strategically at a key maritime gateway, Sobha SeaHaven allows residents to effortlessly explore the most sought-after destinations in the region.",
            sections: [
                {
                    title: 'Breathtaking Views of Iconic Landmarks',
                    content: "Nestled in the heart of Dubai Harbour, Sobha SeaHaven presents an awe-inspiring vista of some of Dubai’s most cherished landmarks, including Ain Dubai, Palm Jumeirah, the Marina skyline, and the expansive ocean horizon. These iconic views are seamlessly integrated into the luxurious living experience."
                },
                {
                    title: 'Prime Location with Iconic Connections',
                    content: "Every day begins with unparalleled views of the Palm Jumeirah, Ain Dubai, and the sparkling Marina skyline. Adding to the allure are glimpses of the iconic Burj Al Arab and the serene Arabian Gulf.This prime location ensures seamless access to a host of world-class amenities, including luxury shopping destinations, gourmet dining options, and premium entertainment venues. Here, Dubai’s most celebrated landmarks are not just nearby—they are part of your daily life."
                    
                },
                {
                    title: 'Exceptional Amenities for Modern Living',
                    content: "Sobha SeaHaven is designed with the finest details to enhance your lifestyle:Luxurious Interiors: Leatherette and rich veneer-finished wardrobes.Spacious Design: Floor-to-floor height of 3.6 meters.Smart Living: Home automation systems and flexible track lighting.State-of-the-Art Kitchens: Fully fitted kitchens equipped with premium appliances.Advanced Sanitation: Smart WC systems for added convenienc."
                },
                 {
                    title: 'Unmatched Proximity to Key Destinations',
                    content: "Living at Sobha SeaHaven places you close to essential attractions and facilities:Two international airports.A retail mall and fine dining establishments.The International Cruise Terminal and Ain Dubai.Public beaches, leisure hotspots, and world-class entertainment.A fully equipped marina and harbour.Sobha SeaHaven is not just a residence; it is a lifestyle that epitomizes luxury and connectivity at its finest."
                },
                
                 
                
            ]
        },
        features: ['Balcony',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Infinity Pool',
'Jogging and Cycling Track',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Swimming Pool',
'View of Water'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha SeaHaven at Dubai Harbour Waterfront Living',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Harbour'
        }
    },
     {
        id: 17,
     name: 'Skyvue Solair at Sobha Hartland 2 by Sobha Group',
        location: 'Sobha Hartland 2',
        price: '1,280,000',
        size: '      660.80',
        bedrooms: '1, 1.5, & 2',
        developer: 'DAMAC',
        image: [
             '/s51.webp', '/s52.webp', '/s53.webp', '/s54.webp', '/s55.webp', '/s56.webp','/s57.webp','/s58.webp','/s59.webp','/s510.webp','/s511.webp','/s512.webp','/s513.webp','/s514.webp','/s515.webp','/s516.webp','/s517.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
            
          
           
        ],
        description: {
            intro: "Skyvue Solair Stands As The Inaugural Masterpiece Of The Esteemed Skyvue Cluster, Heralding A Future Of Limitless Possibilities. This Iconic 58-Story Tower Offers A Curated Selection Of 1, 1.5, And 2-Bedroom Residences, Seamlessly Blending Contemporary Luxury With Unparalleled Amenities. Positioned At The Heart Of Sobha Hartland Ii, The Development Provides Residents With Breathtaking Views Of Serene Lagoons And Dubai’S Dynamic Skyline, Catering To Refined Tastes And Modern Sensibilities.",
            sections: [
                {
                    title: 'A Lifestyle Designed for Passion and Elegance',
                    content: "As the epitome of evolving luxury, Skyvue Solair transforms the concept of opulent living. At its core lies a stunning amphitheater set against adaptive water levels, complemented by a vibrant community teeming with life. Residents can enjoy gourmet dining, open-air theaters, barbecue zones, sensory gardens, and picturesque cycling paths. Every aspect of this development is thoughtfully crafted to create experiences that inspire joy and fulfillment, ensuring each day feels like an extraordinary celebration of life."
                },
                {
                    title: 'Architectural Excellence and Unmatched Sophistication',
                    content: "Rising majestically against Dubai’s northern skyline, Skyvue Solair redefines urban luxury with its rhythmic zig-zag façade and innovative triangular floor designs. These architectural features enhance the flow of natural light and offer panoramic views, merging functionality with artistic brilliance. Meticulously crafted, the residences embody modern sophistication, providing a tranquil haven while pulsating with the vibrancy of urban life."
                    
                },
                {
                    title: 'An Idyllic Community in Sobha Hartland II',
                    content: "Nestled within the expansive 8-million-square-foot Sobha Hartland II community, Skyvue Solair offers a harmonious blend of nature and luxury. Strategically positioned, the development ensures seamless connectivity to Dubai’s iconic landmarks, including Downtown Dubai, the Burj Khalifa, Dubai Opera, and Meydan Racecourse. Despite its proximity to the city’s bustling core, the community serves as a serene retreat, featuring lush landscapes, crystal-clear lagoons, and shaded tree-lined pathways."
                },
                 {
                    title: 'Panoramic Views: A Gateway to Dubai’s Grandeur',
                    content: "Every residence at Skyvue Solair is designed to offer unobstructed views, stretching from the vibrant heart of Downtown Dubai to the peaceful Ras Al Khor Wildlife Sanctuary. These awe-inspiring vistas underscore the diversity and beauty of Dubai’s skyline, creating an ever-evolving tapestry of urban and natural magnificence. At the center of it all is a captivating water feature surrounded by curated dining experiences, forming a dynamic amphitheater-like setting ideal for social gatherings and memorable moments."
                },
                 {
                    title: 'Elevated Amenities for a Refined Lifestyle',
                    content: "Skyvue Solair is more than a residence—it’s an experience. The development boasts an extensive range of amenities that cater to diverse passions and lifestyles. From sensory gardens and open-air cinemas to state-of-the-art fitness centers and meditation lounges, every space is designed with meticulous attention to detail. Whether hosting a barbecue on the party terrace, indulging in an infinity pool, or exploring the central water feature, residents can embrace a lifestyle of unparalleled luxury."
                },
                 {
                    title: 'Key Highlights',
                    content: "Residences: Thoughtfully designed 1, 1.5, and 2-bedroom apartments with superior craftsmanship and modern elegance.Prime Location: Situated within Sobha Hartland II, offering easy access to key destinations like Downtown Dubai and Meydan Racecourse.Architectural Brilliance: The tower’s zig-zag façade and triangular floor plan maximize natural light and offer panoramic views.Nature Meets Urban: A tranquil retreat combining natural serenity with the convenience of city living.Stunning Views: Unobstructed vistas of Dubai’s iconic skyline and the Ras Al Khor Wildlife Sanctuary.World-Class Amenities: Infinity pools, yoga zones, music rooms, executive lounges, sensory gardens, and more.Skyvue Solair at Sobha Hartland II is where architectural innovation meets luxury living, offering residents a perfect blend of urban vibrancy and natural tranquility. This is not just a home—it’s a lifestyle reimagined."
                },
                
                 
                
            ]
        },
        features: ['Balcony',
'Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Infinity Pool',
'Jacuzzi',
'Jogging and Cycling Track',
'Landscaped Greens',
'Meditation',
'Outdoor Cinema',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Security',
'wimming Pool'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Skyvue Solair at Sobha Hartland 2 by Sobha Group',
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Sobha Hartland 2'
        }
    },
    {
        id: 18,
      name: 'Damac Sun City at Dubailand',
        location: 'Dubailand',
        price: ' 2,250,000',
        size: '      2,319',
        bedrooms: '4 & 5',
        developer: 'DAMAC',
        image: [
             '/d51.webp', '/d52.webp', '/d53.webp', '/d54.webp', '/d55.webp', '/d56.webp','/d57.webp','/d58.webp','/d59.webp','/d510.webp','/d511.webp','/d512.webp', '/d513.webp','/d514.webp','/d515.webp','/d516.webp','/d517.webp','/d518.webp','/d519.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
            
          
           
        ],
        description: {
            intro: "Welcome to a realm where each day is illuminated by the gentle embrace of sunlight. DAMAC Sun City harmoniously combines luxury with wellness, presenting residences that deepen your bond with nature. Thoughtfully designed with expansive balconies and terraces, each home is intended to elevate comfort and foster outdoor living, transforming your space into a haven that nurtures health and happiness.",
            sections: [
                {
                    title: 'A Commitment to Wellness',
                    content: "DAMAC Sun City transcends the concept of mere housing; it represents a dedication to enriching your body, mind, and spirit. Every facet of this community, from productive workspaces to tranquil relaxation areas, is meticulously crafted with your holistic well-being in focus. Inspired by the natural beauty surrounding it and the invigorating power of the sun, this environment encourages a balanced lifestyle."
                },
                {
                    title: 'A Tranquil Community',
                    content: "Nestled in the heart of Dubailand, DAMAC Sun City serves as a serene escape from the frenetic pace of urban life while still providing easy access to major thoroughfares. Benefit from close proximity to Al Maktoum International Airport and a variety of local amenities that cater to your daily needs."
                    
                },
                {
                    title: 'Exceptional Amenities:',
                    content: "Outdoor Sauna CabinsFully Equipped Gym & Yoga Studio,Wild Garden Amphitheatre,Scenic Forest Hiking Trail,Tennis Court,Multi-Sport Court,Children’s Outdoor Play Area,Outdoor Camping Facilities"
                },
                 {
                    title: 'An Ideal Location',
                    content: "10 minutes to The Village Community Mall,18 minutes to South View School Dubai,23 minutes to Health Connect Clinic,23 minutes to Al Maktoum International Airport,24 minutes to GEMS Winchester ,School Dubai28 minutes to Dubai International Airport"
                },
                 {
                    title: 'Key Features',
                    content: "Discover a new master community development featuring a premium collection of 4 and 5-bedroom townhouses, where every moment is filled with adventure. Located at a prime hotspot in Dubailand, these homes offer seamless access to renowned landmarks and exquisite leisure venues.The townhouses embody a modern aesthetic complemented by natural materials, featuring expansive glass facades that merge indoor and outdoor environments harmoniously."
                },
                 {
                    title: 'Nature-Inspired Wellness',
                    content: "This tranquil community is designed to enhance well-being by blending nature-inspired spaces with state-of-the-art amenities. Outdoor yoga areas, forest hiking trails, and a wild garden amphitheatre create an integrated experience of nature and luxury living.Unique Amenities for Holistic Health"
                },
                 {
                    title: 'Unique Amenities for Holistic Health',
                    content: "Enjoy exclusive features such as an ice bath station and outdoor sauna cabins, along with a gym that aligns with natural rhythms. Engage in dynamic workouts at the monkey bar area, an outdoor fitness space that promotes movement, agility, and comprehensive wellness."
                },
                
                 
                
            ]
        },
        features: ['Balcony',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Landscaped Greens',
'Meditation',
'Parks & Open spaces',
'Sauna & Steam Room',
'Yoga Studio'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Damac Sun City at Dubailand', //add image id18
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubailand'
        }
    },
    {
        id: 19,
      name: 'Sobha Solis by Sobha Realty at Motor City',
        location: 'Motor City',
        price: ' 1,070,000',
        size: '     536',
        bedrooms: '1,1.5,2, & 3',
        developer: 'DAMAC',
        image: [
             '/s61.webp', '/s62.webp', '/s63.webp', '/s64.webp', '/s65.webp', '/s66.webp','/s67.webp','/s68.webp','/s69.webp','/s610.webp','/s611.webp','/s612.webp','/s613.webp','/s614.webp','/s615.webp','/s616.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
            
          
           
        ],
        description: {
            intro: "Discover a unique blend of luxury and adventure in this urban retreat. This exclusive community features a range of 1 to 3-bedroom residences, beautifully situated across four distinct towers. Each tower is interconnected by a shared podium, designed solely for residents. The apartments boast spacious layouts, large windows, and private balconies, filling your home with an abundance of natural light and offering captivating views. Immerse yourself in the lush greenery of vibrant gardens and the dynamic excitement of the nearby racetrack, all while enjoying the serenity of your private space.",
            sections: [
                {
                    title: 'Explore Modern Amenities',
                    content: "Indulge in a variety of world-class amenities that elevate your lifestyle. From indoor racetrack viewing decks and a lap pool to an outdoor cinema and sunken pool deck, there is something for everyone. Whether you’re looking to relax at the sports bar, entertain at the seating court, or enjoy the interactive play fountain, every detail is designed to cater to your diverse interests."
                },
                {
                    title: 'Quiet Luxury at Motor City, Dubai',
                    content: "Motor City is known for its energy and vitality, but the constant background noise can sometimes disrupt the peaceful environment you desire at home. Understanding this, Sobha Realty has collaborated with an acoustic expert to enhance the soundscape of your living space. By transforming the lively buzz of the community into a calming atmosphere, we ensure that your home becomes the tranquil refuge you deserve. Experience the serene luxury of a quiet, comfortable home, where the gentle sounds of nature replace the noise of the outside world."
                    
                },
                {
                    title: 'A Sanctuary for Wellness',
                    content: "At Sobha Solis, we cater to both the mind and spirit. Book lovers will find joy in our carefully curated library, while nature enthusiasts can unwind in our beautifully landscaped zen gardens and jogging paths. Our dedicated Yoga and Meditation Zone within the indoor gym provides a space for introspection, allowing you to reconnect with yourself and rejuvenate your soul. Whether you’re engaging in mindful practice or simply seeking peace, this tranquil environment is designed to promote balance and inner harmony."
                },
                 {
                    title: 'A Perfect Location',
                    content: "Positioned in the heart of the city, this community offers easy access to some of Dubai’s most popular destinations:1 minute to Dubai Autodrome,15 minutes to Dubai Hills Mall,20 minutes to Global Village and Mall of the Emirates,27 minutes to Palm Jumeirah,32 minutes to Dubai International Airport"
                },
                 {
                    title: 'Additional Features',
                    content: "Club lounge and creative zone,Arsenal-branded fitness centre,Retail shops and dining outlets,Kid’s play area and supermarket,Zen garden and barbecue areas,With these modern conveniences and thoughtfully designed spaces, this urban sanctuary ensures that every aspect of your lifestyle is catered to, offering a balanced and luxurious living experience."
                },
                
                
                 
                
            ]
        },
        features: ['Barbecue Area',
'Clubhouse',
'Fitness Centre',
'Jogging and Cycling Track',
'Kids Play Area',
'Outdoor Cinema',
'Retail Outlets'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha Solis by Sobha Realty at Motor City',  //add image id19   
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Motor City'
        }
    },
    {
        id: 20,
      name: 'BAYZ 102 by Danube Properties at Business Bay, Dubai',
        location: 'Business Bay',
        price: ' 1,270,000',
        size: '',
        bedrooms: 'Studio, 1,2,3 & 4',
        developer: 'DAMAC',
        image: [
             '/danube31.webp', '/danube32.webp', '/danube33.webp', '/danube34.webp', '/danube35.webp', '/danube36.webp','/danube37.webp','/danube38.webp','/danube39.webp','/danube310.webp','/danube311.webp','/danube312.webp','/danube313.webp','/danube314.webp','/danube315.webp','/danube316.webp','/danube317.webp','/danube318.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
            
          
           
        ],
        description: {
            intro: "Following the success of Bayz 101, Danube Properties proudly presents Bayz 102, a new luxurious residential development situated in Business Bay. This contemporary tower boasts a wide range of premium living options, including studios, one to five-bedroom apartments, presidential suites, and penthouses. Crafted with sophistication and comfort in mind, Bayz 102 features top-tier finishes, expansive layouts, and breathtaking views of Dubai’s skyline and the canal. Its strategic location and elegant design make it a benchmark for urban luxury living.",
            sections: [
                {
                    title: 'World-Class Amenities for a Complete Lifestyle',
                    content: "Bayz 102 offers an extensive array of world-class amenities, ensuring that residents can fully embrace a complete and convenient lifestyle. Facilities include a swimming pool, state-of-the-art gym, outdoor BBQ area, and a cozy lounge perfect for social gatherings and relaxation. Positioned along Sheikh Zayed Road, and in close proximity to key landmarks such as Dubai Mall and Burj Khalifa, Bayz 102 is ideal for professionals and families seeking both convenience and luxury within Dubai’s vibrant city center.Bayz 102 is strategically located in the heart of Business Bay, providing easy access to major business districts and commercial centers in Dubai. Its central location makes it an attractive choice for both professionals and investors.Residents can select from a variety of premium options, including studios, one to five-bedroom apartments, as well as exclusive presidential suites and penthouses. Each unit is designed with modern elegance, featuring high-quality finishes and spacious layouts to suit diverse lifestyles."
                },
                {
                    title: 'Unmatched Amenities for Comfort',
                    content: "A wide range of luxury amenities awaits residents at Bayz 102. From the refreshing swimming pool and fully equipped fitness center to an outdoor BBQ area and lounge, the development ensures an enhanced living experience.With proximity to some of Dubai’s most iconic attractions—such as Burj Khalifa, Dubai Mall, and Dubai Canal—Bayz 102 offers residents the opportunity to enjoy a vibrant city lifestyle with all conveniences at their doorstep.Investing in Bayz 102 by Danube is not only about luxury living but also a sound financial decision. The high demand for premium apartments in Business Bay, coupled with the promising potential for property value appreciation, makes this development an attractive choice for investors."
                    
                },
                {
                    title: 'Your Gateway to Modern Elegance and Vibrant City Life',
                    content: "Located in the bustling Business Bay area, Bayz 102 provides a perfect balance between work and leisure. Its strategic positioning near Sheikh Zayed Road ensures convenient access to all parts of Dubai, making it an ideal residential address.Business Bay is renowned for its mix of luxury high-rises, world-class dining, and vibrant nightlife, all set against the backdrop of the stunning Dubai skyline."
                },
                 {
                    title: 'Key Nearby Landmarks:',
                    content: "Dubai Mall – 5 minutes,  Burj Khalifa – 7 minutes,  Dubai Canal – 3 minutes  ,Dubai International Airport – 15 minutes"
                },
                 
                
                
                 
                
            ]
        },
        features: ['Balcony',
'Burj Khalifa View',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Metro',
'Parks & Open spaces',
'Restaurants & Cafes',
'Security',
'Swimming Pool',
'View of Landmark'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'BAYZ 102 by Danube Properties at Business Bay, Dubai', 
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Business Bay'
        }
    },
    {
        id: 21,  //add image id21
      name: 'Sobha Elwood at Dubailand by SOBHA REALTY',
        location: 'Dubailand',
        price: ' 7,930,000',
        size: '4958',
        bedrooms: '4,5 & 6',
        developer: 'DAMAC',
        image: [
              '/s71.webp', '/s72.webp', '/s73.webp', '/s74.webp', '/s75.webp', '/s76.webp','/s77.webp','/s78.webp','/s79.webp','/s710.webp','/s711.webp','/s712.webp','/s713.webp','/s714.webp','/s715.webp','/s716.webp','/s717.webp','/s718.webp','/s719.webp','/s720.webp','/s721.webp','/s722.webp','/s723.webp','/s724.webp','/s725.webp','/s726.webp','/s727.webp','/s728.webp','/s729.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             { text: 'NEW LAUNCH', type: 'new_launch' }
            
          
           
        ],
        description: {
            intro: "Immerse yourself in a unique blend of luxury and nature at Sobha Elwood, Dubai’s latest off-plan development. This exquisite collection of 4, 5, and 6-bedroom villas is nestled within a serene sanctuary, offering an unparalleled living experience. Spanning 416,000 square meters, the lush community will be home to over 10,000 trees, drawing inspiration from some of the world’s largest forests.",
            sections: [
                {
                    title: 'Crafting a Lifestyle of Comfort and Elegance',
                    content: "Each villa at Sobha Elwood is meticulously designed to offer a harmonious balance of comfort and luxury. With modern layouts, premium materials, and high-end finishes throughout, these homes provide the perfect setting for families to create lasting memories. Choose the villa that best suits your lifestyle and prepare to embrace a new way of living."
                },
                {
                    title: 'Your Personal Oasis of Nature',
                    content: "Sobha Elwood offers a range of exclusive amenities that elevate the living experience. Residents can enjoy a swimming lagoon, Padel courts, a Wadi clubhouse, and expansive green spaces. Additional features include community gardens, an Elwood trail, open fitness areas, and dedicated wellness zones, all providing a peaceful retreat with convenient access to Dubai’s main attractions.."
                    
                },
                {
                    title: 'Amenities',
                    content: "Lap pool,Yoga lawn,Multi-purpose room,Fitness centre & outdoor gym,Barbecue area & multipurpose lawn"
                },
                 {
                    title: 'Prime Location with Unmatched Convenience',
                    content: "Located in Dubailand, Sobha Elwood offers easy access to some of Dubai’s key destinations:5 minutes to Dubai Rugby Sevens,8 minutes to Dubai Outlet Mall,20 minutes to Downtown Dubai,25 minutes to Dubai International Airport,30 minutes to Al Maktoum International Airport"
                },
                  {
                    title: 'Key Highlights',
                    content: "Choose from elegantly designed 4, 5, and 6-bedroom villas, each offering a seamless blend of modern sophistication and natural beauty.Spacious interiors, large windows, and earthy tones create a harmonious connection with the surrounding nature.The community features over 10,000 trees and expansive landscaped parks, providing a serene environment ideal for relaxation and outdoor activities.Residents enjoy exclusive access to a premium clubhouse with a fitness center, spa, and social spaces.Family-oriented facilities include dedicated play areas, an on-site school, clinic, and daycare.Dive into a range of water sports options, including a lap pool and a splash pad for children.Don’t miss the opportunity to secure your dream home. Contact us today to reserve your preferred unit."
                },
                 
                
                
                 
                
            ]
        },
        features: ['Balcony',
'Barbecue Area',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Jogging and Cycling Track',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Swimming Pool'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha Elwood at Dubailand by SOBHA REALTY', 
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubailand'
        }
    },
        {
        id: 22,  // add imaage
       name: 'Sobha SeaHaven at Dubai Harbour Waterfront Living',
        location: 'Dubai Harbour',
        price: '4,400,000',
        size: ' 841 ',
        bedrooms: '1,2,3 & 4',
        developer: 'DAMAC',
        image: [
              '/s81.webp', '/s82.webp', '/s83.webp', '/s84.webp', '/s85.webp', '/s86.webp','/s87.webp','/s88.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
             
            
          
           
        ],
        description: {
            intro: "Sobha SeaHaven is a premier sea-facing development located in the vibrant Dubai Harbour, offering ultra-luxury apartments with 1 to 4 bedrooms. Boasting exquisite amenities and lush green landscapes, it provides a sanctuary of elegance, tranquility, and scenic beauty. Positioned strategically at a key maritime gateway, Sobha SeaHaven allows residents to effortlessly explore the most sought-after destinations in the region.",
            sections: [
                {
                    title: 'Breathtaking Views of Iconic Landmarks',
                    content: "Nestled in the heart of Dubai Harbour, Sobha SeaHaven presents an awe-inspiring vista of some of Dubai’s most cherished landmarks, including Ain Dubai, Palm Jumeirah, the Marina skyline, and the expansive ocean horizon. These iconic views are seamlessly integrated into the luxurious living experience."
                },
                {
                    title: 'Prime Location with Iconic Connections',
                    content: "Every day begins with unparalleled views of the Palm Jumeirah, Ain Dubai, and the sparkling Marina skyline. Adding to the allure are glimpses of the iconic Burj Al Arab and the serene Arabian Gulf.This prime location ensures seamless access to a host of world-class amenities, including luxury shopping destinations, gourmet dining options, and premium entertainment venues. Here, Dubai’s most celebrated landmarks are not just nearby—they are part of your daily life."
                    
                },
                {
                    title: 'Exceptional Amenities for Modern Living',
                    content: "Sobha SeaHaven is designed with the finest details to enhance your lifestyle:Luxurious Interiors: Leatherette and rich veneer-finished wardrobes.Spacious Design: Floor-to-floor height of 3.6 meters.Smart Living: Home automation systems and flexible track lighting.State-of-the-Art Kitchens: Fully fitted kitchens equipped with premium appliances.Advanced Sanitation: Smart WC systems for added convenience."
                },
                 {
                    title: 'Unmatched Proximity to Key Destinations',
                    content: "Living at Sobha SeaHaven places you close to essential attractions and facilities:Two international airports.A retail mall and fine dining establishments.The International Cruise Terminal and Ain Dubai.Public beaches, leisure hotspots, and world-class entertainment.A fully equipped marina and harbour.Sobha SeaHaven is not just a residence; it is a lifestyle that epitomizes luxury and connectivity at its finest."
                },
                 
                
                
                 
                
            ]
        },
        features: ['Balcony',
'Childrens Play Area',
'Fitness Centre',
'Gym',
'Infinity Pool',
'Jogging and Cycling Track',
'Landscaped Greens',
'Parks & Open spaces',
'Restaurants & Cafes',
'Retail Outlets',
'Swimming Pool',
'View of Water'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha SeaHaven at Dubai Harbour Waterfront Living', 
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Dubai Harbour'
        }
    },
    {
     id: 23,
    name: 'Damac Sun City At Dubailand', //add image id23
    location: 'Dubailand',
    price: '2,250,000',
    size: '2,319',
    bedrooms: '4 & 5',
    developer: 'DAMAC',
    image: [
        '/d61.webp', '/d62.webp', '/d63.webp', '/d64.webp', '/d65.webp', '/d66.webp','/d67.webp','/d68.webp','/d69.webp','/d610.webp','/d611.webp','/d612.webp','/d613.webp','/d614.webp','/d615.webp','/d616.webp','/d617.webp','/d618.webp',
    ],
    tags: [
        { text: 'OFF PLAN', type: 'default' },
        { text: 'NEW LAUNCH', type: 'new_launch' }
    ],
    description: {
        intro: "Welcome to a realm where each day is illuminated by the gentle embrace of sunlight. DAMAC Sun City harmoniously combines luxury with wellness, presenting residences that deepen your bond with nature. Thoughtfully designed with expansive balconies and terraces, each home is intended to elevate comfort and foster outdoor living, transforming your space into a haven that nurtures health and happiness.",
        sections: [
            {
                title: 'A Commitment to Wellness',
                content: "DAMAC Sun City transcends the concept of mere housing; it represents a dedication to enriching your body, mind, and spirit. Every facet of this community, from productive workspaces to tranquil relaxation areas, is meticulously crafted with your holistic well-being in focus. Inspired by the natural beauty surrounding it and the invigorating power of the sun, this environment encourages a balanced lifestyle."
            },
            {
                title: 'A Tranquil Community',
                content: "Nestled in the heart of Dubailand, DAMAC Sun City serves as a serene escape from the frenetic pace of urban life while still providing easy access to major thoroughfares. Benefit from close proximity to Al Maktoum International Airport and a variety of local amenities that cater to your daily needs."
            },
            {
                title: 'Exceptional Amenities',
                content: "Outdoor Sauna Cabins, Fully Equipped Gym & Yoga Studio, Wild Garden Amphitheatre, Scenic Forest Hiking Trail, Tennis Court, Multi-Sport Court, Children’s Outdoor Play Area, Outdoor Camping Facilities."
            },
            {
                title: 'An Ideal Location',
                content: "10 minutes to The Village Community Mall, 18 minutes to South View School Dubai, 23 minutes to Health Connect Clinic, 23 minutes to Al Maktoum International Airport, 24 minutes to GEMS Winchester School Dubai, 28 minutes to Dubai International Airport."
            },
            {
                title: 'Key Features',
                content: "Discover a new master community development featuring a premium collection of 4 and 5-bedroom townhouses, where every moment is filled with adventure. Located at a prime hotspot in Dubailand, these homes offer seamless access to renowned landmarks and exquisite leisure venues. The townhouses embody a modern aesthetic complemented by natural materials, featuring expansive glass facades that merge indoor and outdoor environments harmoniously."
            },
            {
                title: 'Nature-Inspired Wellness',
                content: "This tranquil community is designed to enhance well-being by blending nature-inspired spaces with state-of-the-art amenities. Outdoor yoga areas, forest hiking trails, and a wild garden amphitheatre create an integrated experience of nature and luxury living."
            },
            {
                title: 'Unique Amenities For Holistic Health',
                content: "Enjoy exclusive features such as an ice bath station and outdoor sauna cabins, along with a gym that aligns with natural rhythms. Engage in dynamic workouts at the monkey bar area, an outdoor fitness space that promotes movement, agility, and comprehensive wellness."
            }
        ]
    },
    features: ['Balcony', 'Jogging and Cycling Track', 'Sauna & Steam Room', "Children's Play Area", 'Landscaped Greens', 'Yoga Studio', 'Fitness Centre', 'Meditation', 'Gym', 'Parks & Open spaces', 'Tennis Court', 'Multi-Sport Court', 'Outdoor Camping Facilities'],
    paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
    propertyId: 'Damac Sun City at Dubailand',
    propertyType: 'Townhouse',
    propertyStatus: 'Off Plan',
    lastUpdated: 'September 25, 2024 at 12:52 pm',
    address: {
        city: 'Dubai',
        area: 'Dubailand'
    }
    },
     {
        id: 24, 
       name: 'Sobha Solis by Sobha Realty at Motor City',
        location: 'Motor City',
        price: '1,070,000',
        size: ' 536 ',
        bedrooms: '1, 1.5, 2 & 3',
        developer: 'DAMAC',
        image: [
              '/s91.webp', '/s92.webp', '/s93.webp', '/s94.webp', '/s95.webp', '/s96.webp','/s97.webp','/s98.webp','/s99.webp','/s910.webp','/s911.webp','/s912.webp','/s13.webp','/s914.webp','/s915.webp','/s916.webp','/s917.webp',
        ],
        tags: [
          
            { text: 'OFF PLAN', type: 'default' },
            { text: 'NEW LAUNCH', type: 'new_launch' }
             
            
          
           
        ],
        description: {
            intro: "Discover a unique blend of luxury and adventure in this urban retreat. This exclusive community features a range of 1 to 3-bedroom residences, beautifully situated across four distinct towers. Each tower is interconnected by a shared podium, designed solely for residents. The apartments boast spacious layouts, large windows, and private balconies, filling your home with an abundance of natural light and offering captivating views. Immerse yourself in the lush greenery of vibrant gardens and the dynamic excitement of the nearby racetrack, all while enjoying the serenity of your private space.",
            sections: [
                {
                    title: 'Explore Modern Amenities',
                    content: "Indulge in a variety of world-class amenities that elevate your lifestyle. From indoor racetrack viewing decks and a lap pool to an outdoor cinema and sunken pool deck, there is something for everyone. Whether you’re looking to relax at the sports bar, entertain at the seating court, or enjoy the interactive play fountain, every detail is designed to cater to your diverse interests."
                },
                {
                    title: 'Quiet Luxury at Motor City, Dubai',
                    content: "Motor City is known for its energy and vitality, but the constant background noise can sometimes disrupt the peaceful environment you desire at home. Understanding this, Sobha Realty has collaborated with an acoustic expert to enhance the soundscape of your living space. By transforming the lively buzz of the community into a calming atmosphere, we ensure that your home becomes the tranquil refuge you deserve. Experience the serene luxury of a quiet, comfortable home, where the gentle sounds of nature replace the noise of the outside world."
                    
                },
                {
                    title: 'A Sanctuary for Wellness',
                    content: "At Sobha Solis, we cater to both the mind and spirit. Book lovers will find joy in our carefully curated library, while nature enthusiasts can unwind in our beautifully landscaped zen gardens and jogging paths. Our dedicated Yoga and Meditation Zone within the indoor gym provides a space for introspection, allowing you to reconnect with yourself and rejuvenate your soul. Whether you’re engaging in mindful practice or simply seeking peace, this tranquil environment is designed to promote balance and inner harmony."
                },
                 {
                    title: 'A Perfect Location',
                    content: "Positioned in the heart of the city, this community offers easy access to some of Dubai’s most popular destinations:1 minute to Dubai Autodrome,15 minutes to Dubai Hills Mall,20 minutes to Global Village and Mall of the Emirates,27 minutes to Palm Jumeirah,32 minutes to Dubai International Airport"
                },
                 {
                    title: 'Additional Features',
                    content: "Club lounge and creative zone,Arsenal-branded fitness centre,Retail shops and dining outlets,Kid’s play area and supermarket,Zen garden and barbecue areas,With these modern conveniences and thoughtfully designed spaces, this urban sanctuary ensures that every aspect of your lifestyle is catered to, offering a balanced and luxurious living experience."
                },
                 
                
                
                 
                
            ]
        },
        features: ['Barbecue Area',
'Clubhouse',
'Fitness Centre',
'Jogging and Cycling Track',
'Kids Play Area',
'Outdoor Cinema',
'Retail Outlets'],
        paymentPlan: { downPayment: '20%', duringConstruction: '60%', onHandover: '20%' },
        propertyId: 'Sobha Solis by Sobha Realty', 
        propertyType: 'Apartment',
        propertyStatus: 'Off Plan',
        lastUpdated: 'August 15, 2025 at 10:30 am',
        address: {
            city: 'Dubai',
            area: 'Motor City'
        }
    },
];
