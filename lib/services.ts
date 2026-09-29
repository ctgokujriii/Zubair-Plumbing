import {
  BrickWall,
  CloudRain,
  CookingPot,
  Container,
  Fan,
  Filter,
  Flame,
  ShowerHead,
  Waves,
  Wrench,
  Droplets,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

// One list for the services page, the home page highlights and the contact
// form's dropdown, so a service can't be offered in one place and missing from
// another. Wording follows how customers in Lahore actually ask for the work
// (geyser, commode, donkey pump) rather than the US terms the template shipped with.
export const services: Service[] = [
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description: 'Finding and fixing leaks before they turn into seepage, damp walls and wasted water.',
    features: [
      'Concealed and hidden pipe leaks',
      'Leaks behind walls and under floors',
      'Tap, mixer and valve leaks',
      'Main water line repairs',
      'Overflowing cisterns and tanks',
    ],
  },
  {
    icon: Wrench,
    title: 'Pipe Fitting & Replacement',
    description: 'New pipe work and replacement of old, rusted lines, concealed or exposed.',
    features: [
      'PPR, uPVC and GI pipe work',
      'Concealed and exposed pipe fitting',
      'Rusted GI pipe replacement',
      'Complete re-piping of older houses',
      'Hot and cold water lines',
      'Plumbing for new construction',
    ],
  },
  {
    icon: ShowerHead,
    title: 'Bathroom & Sanitary Fitting',
    description: 'Complete sanitary fitting for new houses, and repairs or upgrades for existing bathrooms.',
    features: [
      'Commode, WC and flush tank installation',
      'Washbasin and vanity fitting',
      'Shower, mixer and Muslim shower fitting',
      'Floor drains and traps',
      'Complete sanitary fitting for new houses',
    ],
  },
  {
    icon: CookingPot,
    title: 'Kitchen Plumbing',
    description: 'Sinks, mixers, drains and appliance connections for home and commercial kitchens.',
    features: [
      'Kitchen sink and mixer installation',
      'Blocked sink and drain clearing',
      'Washing machine and dishwasher connections',
      'Water lines for filters and fridges',
    ],
  },
  {
    icon: Container,
    title: 'Water Tanks',
    description: 'Installation, cleaning and repair of overhead and underground water tanks.',
    features: [
      'Overhead and underground tank cleaning',
      'New water tank installation',
      'Float valves and tank connections',
      'Tank leak repairs',
    ],
  },
  {
    icon: Fan,
    title: 'Water Motors & Pumps',
    description: 'Getting water where it needs to go, at the pressure you need.',
    features: [
      'Water motor installation and repair',
      'Pressure (booster) pump fitting',
      'Donkey pump and suction pump fitting',
      'Low water pressure fixes',
    ],
  },
  {
    icon: Flame,
    title: 'Geyser Services',
    description: 'Installation, repair and servicing for gas, electric and instant geysers.',
    features: [
      'Gas and electric geyser installation',
      'Instant geyser fitting',
      'Geyser repair and servicing',
      'Geyser pipe and valve connections',
      'Thermostat and safety valve replacement',
    ],
  },
  {
    icon: Waves,
    title: 'Drain & Sewer',
    description: 'Clearing blockages and fixing drainage, from a slow sink to the main sewer line.',
    features: [
      'Blocked drains, sinks and toilets',
      'Sewer and gutter line clearing',
      'Main line blockages',
      'New sewer line laying',
      'Bad smells and backflow',
    ],
  },
  {
    icon: Filter,
    title: 'Water Filters',
    description: 'Filter installation so the water coming out of the tap is water you can use.',
    features: [
      'Whole-house water filter installation',
      'RO and under-sink filter fitting',
      'Filter connections and servicing',
    ],
  },
  {
    icon: CloudRain,
    title: 'Seepage & Waterproofing',
    description: 'Stopping water getting where it shouldn\'t, and repairing the damage it left.',
    features: [
      'Wall seepage and dampness repair',
      'Roof leak waterproofing',
      'Bathroom floor waterproofing',
      'Water tank waterproofing',
    ],
  },
  {
    icon: BrickWall,
    title: 'Minor Construction & Renovation',
    description: 'The building work that comes with plumbing, handled by the same team so you don\'t need a separate mason.',
    features: [
      'Bathroom and kitchen renovation',
      'Tile fixing and replacement',
      'Brick, plaster and masonry repairs',
      'Wall and floor chasing for concealed pipes, and making good after',
      'Small civil work around the house',
    ],
  },
  {
    icon: Zap,
    title: '24/7 Emergency',
    description: 'Open around the clock, every day of the year, anywhere in Lahore.',
    features: [
      'Burst pipes and major leaks',
      'Overflowing tanks and no-water problems',
      'Blocked drains and sewer backflow',
      'Geyser and motor breakdowns',
    ],
  },
];

// Shown as full cards on the home page; the rest appear as a list under them.
export const featuredServiceTitles = [
  'Leak Detection & Repair',
  'Bathroom & Sanitary Fitting',
  'Water Tanks',
  '24/7 Emergency',
];
