export const brand = {
  name: 'Petal & Pup',
  logoSrc: '/petal-logo.svg',
  freeShippingThreshold: 80,
  tagline: 'On-trend fashion for every day',
};

const daisyMeadowImages = [
  { src: '/images/petal/claire-1.jpg', alt: 'Claire Romper in Daisy Meadow', showBadge: true },
  { src: '/images/petal/claire-2.jpg', alt: 'Claire Romper Daisy Meadow front' },
  { src: '/images/petal/claire-3.jpg', alt: 'Claire Romper Daisy Meadow detail' },
  { src: '/images/petal/claire-4.jpg', alt: 'Claire Romper Daisy Meadow back' },
  { src: '/images/petal/claire-5.jpg', alt: 'Claire Romper Daisy Meadow side' },
  { src: '/images/petal/claire-6.jpg', alt: 'Claire Romper Daisy Meadow lifestyle' },
];

const springFloralImages = [
  { src: '/images/petal/spring/claire-1.jpg', alt: 'Claire Romper in Spring Floral', showBadge: true },
  { src: '/images/petal/spring/claire-2.jpg', alt: 'Claire Romper Spring Floral front' },
  { src: '/images/petal/spring/claire-3.jpg', alt: 'Claire Romper Spring Floral detail' },
  { src: '/images/petal/spring/claire-4.jpg', alt: 'Claire Romper Spring Floral back' },
  { src: '/images/petal/spring/claire-5.jpg', alt: 'Claire Romper Spring Floral side' },
  { src: '/images/petal/spring/claire-6.jpg', alt: 'Claire Romper Spring Floral lifestyle' },
];

export const product = {
  title: 'Claire Romper',
  subtitle: 'Playsuit · Daisy Meadow',
  badge: 'New',
  rating: 5,
  reviewCount: 86,
  description:
    'A breezy Claire romper with a flattering square neckline and adjustable straps. Soft silhouette with an easy fit — made for sunny days, weekends away, and everything in between.',
  serving: 'Playsuit · Floral print · Easy everyday wear',
  images: daisyMeadowImages,
  colors: [
    { id: 'daisy-meadow', label: 'Daisy Meadow', hex: '#f7533f', images: daisyMeadowImages },
    { id: 'spring-floral', label: 'Spring Floral', hex: '#f5bc9f', images: springFloralImages },
  ],
  sizes: [
    { id: 'xs', label: 'XS', price: 79 },
    { id: 's', label: 'S', price: 79 },
    { id: 'm', label: 'M', price: 79 },
    { id: 'l', label: 'L', price: 79 },
    { id: 'xl', label: 'XL', price: 79 },
  ],
  frequencies: [],
  benefits: [
    'Soft everyday romper fit',
    'Daisy Meadow floral print',
    'Easy to dress up or down',
    'Updated sizing — see size guide',
    'Free shipping on orders over $80*',
  ],
  ingredients: 'Please see garment care label for fabric composition.',
  howToUse: 'Cold gentle wash. Line dry. Do not bleach. Cool iron if needed.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'LA Studio', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.3 mi' },
  { name: 'NYC Pop-up', address: '120 Broadway, New York, NY 10271', dist: '0.4 mi' },
  { name: 'SF Locker', address: '500 Pine St, San Francisco, CA 94108', dist: '0.5 mi' },
];

export const timeSlots = ['9am-10am', '10am-11am', '11am-12pm', '1pm-2pm', '2pm-3pm'];

export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
