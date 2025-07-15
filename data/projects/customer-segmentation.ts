
import { Project } from '../../types';

export const customerSegmentation: Project = {
  id: 'customer-segmentation-analysis',
  title: 'Customer Segmentation Analysis',
  category: 'Machine Learning',
  imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1024&auto=format&fit=crop',
  description: 'Used K-Means clustering to segment customers based on purchasing behavior, enabling targeted marketing campaigns.',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  fullContent: `
      This project aimed to uncover distinct customer groups within a retail dataset to enable personalized marketing strategies.
      By applying the K-Means clustering algorithm on features like purchase frequency, monetary value, and product category preferences, we identified four key customer segments: High-Value Loyalists, Budget-Conscious Shoppers, New Customers, and At-Risk Customers.
      <br/><br/>
      The insights derived from this segmentation allowed the marketing team to tailor their communication and promotional offers, resulting in a 15% increase in campaign response rates and a 10% uplift in customer retention for the 'At-Risk' segment.
    `
};
