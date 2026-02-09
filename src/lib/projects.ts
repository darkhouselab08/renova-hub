// Sample projects data for Gallery
// In production, this will come from Supabase (Phase 2)

export interface Project {
  id: string;
  title: string;
  type: string; // Dresser, Nightstand, Desk, etc.
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  duration: string;
  theme: 'classic' | 'dark' | 'hybrid'; // Theme coherence
  color: string; // Refinishing color
  featured?: boolean;
}

export const sampleProjects: Project[] = [
  // CLASSIC LUXURY (Light/Cream aesthetic)
  {
    id: 'classic-1',
    title: 'French Provincial Dresser',
    type: 'Dresser',
    description: 'Elegant transformation in soft white chalk paint with gold hardware',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/dresser-1-after.jpg',
    technique: 'Chalk Paint + Distressed Finish',
    duration: '2 weeks',
    theme: 'classic',
    color: 'Soft White',
    featured: true
  },
  {
    id: 'classic-2',
    title: 'Antique Nightstand Pair',
    type: 'Nightstand',
    description: 'Restored in cream with hand-rubbed wax and brass hardware',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/nightstand-white-after.jpg',
    technique: 'Hand-Rubbed Wax Finish',
    duration: '1 week',
    theme: 'classic',
    color: 'Cream'
  },
  {
    id: 'classic-3',
    title: 'Victorian Writing Desk',
    type: 'Desk',
    description: 'Natural wood restoration with oil finish',
    beforeImage: '/images/gallery/table-1-before.jpg',
    afterImage: '/images/gallery/desk-natural-after.jpg',
    technique: 'Oil Finish',
    duration: '2 weeks',
    theme: 'classic',
    color: 'Natural Wood'
  },
  
  // DARK LUXURY (Navy/Dark aesthetic)
  {
    id: 'dark-1',
    title: 'Navy Blue Dresser',
    type: 'Dresser',
    description: 'Bold transformation in glossy navy blue with brass hardware',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/dresser-1-after.jpg',
    technique: 'High-Gloss Lacquer',
    duration: '2 weeks',
    theme: 'dark',
    color: 'Navy Blue',
    featured: true
  },
  {
    id: 'dark-2',
    title: 'Charcoal Gray Nightstand',
    type: 'Nightstand',
    description: 'Modern matte charcoal with gold accents',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/nightstand-charcoal-after.jpg',
    technique: 'Smooth Matte Paint',
    duration: '1 week',
    theme: 'dark',
    color: 'Charcoal Gray'
  },
  {
    id: 'dark-3',
    title: 'Forest Green Executive Desk',
    type: 'Desk',
    description: 'Sophisticated deep green with satin finish',
    beforeImage: '/images/gallery/table-1-before.jpg',
    afterImage: '/images/gallery/desk-green-after.jpg',
    technique: 'Satin Finish',
    duration: '3 weeks',
    theme: 'dark',
    color: 'Deep Forest Green'
  },
  
  // HERITAGE INNOVATION (Hybrid aesthetic)
  {
    id: 'hybrid-1',
    title: 'Sage Green Farmhouse Dresser',
    type: 'Dresser',
    description: 'Two-tone finish: sage green base with natural wood top',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/dresser-sage-after.jpg',
    technique: 'Two-Tone Mixed Finish',
    duration: '2 weeks',
    theme: 'hybrid',
    color: 'Sage Green + Wood',
    featured: true
  },
  {
    id: 'hybrid-2',
    title: 'Gray-Blue Vintage Nightstand',
    type: 'Nightstand',
    description: 'Soft gray-blue with mixed metal hardware',
    beforeImage: '/images/gallery/dresser-1-before.jpg',
    afterImage: '/images/gallery/nightstand-grayblue-after.jpg',
    technique: 'Mixed Finish',
    duration: '1 week',
    theme: 'hybrid',
    color: 'Gray-Blue'
  },
  {
    id: 'hybrid-3',
    title: 'Taupe Secretary Desk',
    type: 'Desk',
    description: 'Warm taupe base preserving natural wood elements',
    beforeImage: '/images/gallery/table-1-before.jpg',
    afterImage: '/images/gallery/desk-natural-after.jpg',
    technique: 'Preserved Elements',
    duration: '3 weeks',
    theme: 'hybrid',
    color: 'Warm Taupe'
  }
];
