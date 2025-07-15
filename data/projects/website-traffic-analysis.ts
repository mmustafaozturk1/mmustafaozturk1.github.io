
import { Project } from '../../types';

export const websiteTrafficAnalysis: Project = {
  id: 'website-traffic-analysis',
  title: 'Website Traffic Analysis',
  category: 'Web Analytics',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1024&auto=format&fit=crop',
  description: 'Analyzed Google Analytics data to identify user behavior patterns and optimize the conversion funnel.',
  technologies: ['Google Analytics', 'SQL', 'Power BI', 'Data Studio'],
  fullContent: `
      This deep-dive analysis of website traffic data focused on understanding the user journey from landing page to conversion. By leveraging Google Analytics and querying raw data exports with SQL, I identified key drop-off points in the user funnel.
      <br/><br/>
      The insights were compiled into a Power BI dashboard that visualized traffic sources, user demographics, page performance, and conversion rates. Based on the findings, we recommended A/B tests for critical landing pages, which led to a 20% improvement in the overall conversion rate.
    `,
    // powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYzY4NjE4MzItNTQ5Mi00YjYxLWE1ZTUtMjE5MDI0NzIyOGY3IiwidCI6IjZkY2Q1MjU5LTk0MjEtNDYyNC04ZDIzLTEwZTg2NDU2MGU2OCIsImMiOjl9'
};