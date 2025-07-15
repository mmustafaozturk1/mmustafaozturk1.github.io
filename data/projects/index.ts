
import { Project } from '../../types';
import { salesDashboardAnalysis } from './sales-dashboard-analysis';
import { hrAnalyticsDashboard } from './hr-analytics-dashboard';
import { supplyChainOptimization } from './supply-chain-optimization';
import { customerSegmentation } from './customer-segmentation';
import { financialForecasting } from './financial-forecasting-model';
import { websiteTrafficAnalysis } from './website-traffic-analysis';

export const PROJECTS: Project[] = [
    salesDashboardAnalysis,
    hrAnalyticsDashboard,
    supplyChainOptimization,
    customerSegmentation,
    financialForecasting,
    websiteTrafficAnalysis,
];
