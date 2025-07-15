
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sales-dashboard-analysis',
    title: 'Interactive Sales Dashboard',
    category: 'Business Intelligence',
    imageUrl: 'https://picsum.photos/seed/project1/1024/768',
    description: 'A comprehensive sales dashboard providing insights into regional performance, product trends, and sales representative metrics.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    fullContent: `
      This project involved creating a dynamic and interactive sales dashboard using Power BI to help stakeholders visualize and understand complex sales data. 
      The key objective was to consolidate data from multiple sources into a single, cohesive report that could provide actionable insights.
      <br/><br/>
      I was responsible for the entire BI lifecycle, from data extraction and transformation using PowerQuery to developing a robust data model and writing complex DAX measures for KPIs like Year-over-Year Growth, Quota Attainment, and Profit Margin. The final dashboard features drill-through capabilities, dynamic filters, and bookmarks to enhance user experience.
    `,
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYWY0MDlmNjktYmZhMi00NmIwLWE0NjMtY2EwNDQ1NDlmZmNkIiwidCI6ImU5YzExYzIxLWQ3NjctNDY1Yy1hYjFlLTg0M2I2NTg1MGI2OCJ9'
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    category: 'Data Analysis',
    imageUrl: 'https://picsum.photos/seed/project2/1024/768',
    description: 'An HR dashboard to track employee turnover, recruitment funnels, and workforce diversity metrics.',
    technologies: ['Power BI', 'Excel', 'Power Query'],
    fullContent: `
      The HR Analytics Dashboard was designed to give the Human Resources department a clear view of key workforce metrics. 
      By analyzing data from our HRIS, we were able to identify trends in employee attrition, evaluate the effectiveness of our recruitment strategies, and monitor progress towards our diversity and inclusion goals.
      <br/><br/>
      This dashboard includes detailed visualizations on headcount by department, voluntary vs. involuntary turnover rates, average tenure, and a complete recruitment pipeline analysis. It has become an essential tool for strategic workforce planning.
    `,
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYzY4NjE4MzItNTQ5Mi00YjYxLWE1ZTUtMjE5MDI0NzIyOGY3IiwidCI6IjZkY2Q1MjU5LTk0MjEtNDYyNC04ZDIzLTEwZTg2NDU2MGU2OCIsImMiOjl9'
  },
  {
    id: 'supply-chain-optimization',
    title: 'Supply Chain Optimization',
    category: 'Business Intelligence',
    imageUrl: 'https://picsum.photos/seed/project3/1024/768',
    description: 'Analysis of supply chain data to identify bottlenecks, reduce costs, and improve inventory management.',
    technologies: ['Python', 'Pandas', 'SQL', 'Tableau'],
    fullContent: `
      This project focused on optimizing the supply chain by analyzing historical data on inventory levels, shipping times, and supplier performance.
      Using Python for data wrangling and SQL for querying our ERP database, I built a dataset to identify key areas for improvement.
      <br/><br/>
      The findings were presented in an interactive Tableau dashboard, which highlighted opportunities to reduce carrying costs by optimizing stock levels and showed which suppliers were consistently underperforming on delivery times. The project resulted in a 5% reduction in shipping costs and a 12% improvement in on-time delivery. Although this was built in Tableau, a Power BI version is also available for demonstration.
    `,
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGEyNTcxZWQtYjJkZS00Y2UxLWE3M2EtZDNjYzA1YTY1OTJjIiwidCI6IjZkY2Q1MjU5LTk0MjEtNDYyNC04ZDIzLTEwZTg2NDU2MGU2OCIsImMiOjl9'
  }
];
