
import { Project } from '../../types';

export const financialForecasting: Project = {
  id: 'financial-forecasting-model',
  title: 'Financial Forecasting Model',
  category: 'Data Analysis',
  imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1024&auto=format&fit=crop',
  description: 'Developed a time-series model to forecast quarterly revenue, improving financial planning and resource allocation.',
  technologies: ['Python', 'Statsmodels', 'Pandas', 'Power BI'],
  fullContent: `
      The goal of this project was to create a reliable model for forecasting future revenue streams. Using several years of historical sales data, I developed and compared multiple time-series forecasting models, including ARIMA and Exponential Smoothing.
      <br/><br/>
      The final selected model demonstrated a Mean Absolute Percentage Error (MAPE) of less than 8%, providing the finance department with a robust tool for budget planning. The forecasts were integrated into a Power BI dashboard for easy visualization and scenario analysis, allowing leadership to make more informed strategic decisions.
    `,
  // powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGEyNTcxZWQtYjJkZS00Y2UxLWE3M2EtZDNjYzA1YTY1OTJjIiwidCI6IjZkY2Q1MjU5LTk0MjEtNDYyNC04ZDIzLTEwZTg2NDU2MGU2OCIsImMiOjl9'
};