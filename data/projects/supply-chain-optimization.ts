import { Project } from '../../types';

export const supplyChainOptimization: Project = {
  id: 'supply-chain-optimization',
  title: 'Supply Chain Optimization',
  category: 'Business Intelligence',
  imageUrl: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1024',
  description: 'Analysis of supply chain data to identify bottlenecks, reduce costs, and improve inventory management.',
  technologies: ['Python', 'Pandas', 'SQL', 'Tableau'],
  fullContent: `
      This project focused on optimizing the supply chain by analyzing historical data on inventory levels, shipping times, and supplier performance.
      Using Python for data wrangling and SQL for querying our ERP database, I built a dataset to identify key areas for improvement.
      <br/><br/>
      The findings were presented in an interactive Tableau dashboard, which highlighted opportunities to reduce carrying costs by optimizing stock levels and showed which suppliers were consistently underperforming on delivery times. The project resulted in a 5% reduction in shipping costs and a 12% improvement in on-time delivery. Although this was built in Tableau, a Power BI version is also available for demonstration.
    `,
  // powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGEyNTcxZWQtYjJkZS00Y2UxLWE3M2EtZDNjYzA1YTY1OTJjIiwidCI6IjZkY2Q1MjU5LTk0MjEtNDYyNC04ZDIzLTEwZTg2NDU2MGU2OCIsImMiOjl9'
};