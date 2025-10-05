
import React from 'react';

const ExperienceItem: React.FC<{ title: string; company: string; date: string; points: string[] }> = ({ title, company, date, points }) => (
  <div className="relative pl-8 pb-8 last:pb-0 border-l border-lightest-navy/30">
    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green rounded-full border-4 border-navy"></div>
    <p className="text-xs font-mono text-green">{date}</p>
    <h3 className="text-lg font-bold text-lightest-slate mt-1">{title}</h3>
    <p className="text-light-slate">{company}</p>
    <ul className="mt-3 list-disc list-inside space-y-2 text-slate text-sm">
      {points.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
  </div>
);

const Section: React.FC<{title: string; children: React.ReactNode; className?: string}> = ({title, children, className}) => (
    <div className={`bg-light-navy p-6 rounded-lg ${className}`}>
        <h3 className="text-xl font-bold text-lightest-slate mb-4">{title}</h3>
        {children}
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold text-lightest-slate mb-12 flex items-center">
                About Me
                <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                     <div>
                        <h2 className="text-2xl font-bold text-lightest-slate mb-4">Professional Summary</h2>
                        <p className="text-light-slate leading-relaxed">
                            PL-300-certified Data & Business Intelligence Analyst with deep expertise in Power BI, SQL and Python, turning raw data into executive-level insights that accelerate decision-making across multiple industries. Delivered interactive Power BI dashboards that cut manual reporting by 40 percent and enabled real-time resource allocation on government and commercial projects. Skilled in advanced DAX, data modelling and ETL pipelines; comfortable mining large data sets, building predictive models and automating analytics workflows. Known for translating ambiguous business questions into clear analytical strategies and presenting complex findings to non-technical stakeholders. Seeking Data Analyst, Business Intelligence Analyst or Analytics-focused projects where I can blend technical depth and business acumen to drive measurable value.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-lightest-slate mb-6">Work Experience</h2>
                        <div className="space-y-1">
                           <ExperienceItem 
                              title="Freelance BI & Data Analyst"
                              company=""
                              date="Oct 2022 – Present"
                              points={[
                                  "Consolidated data from Excel, Google Analytics, and social media feeds in Power Query, then built interactive Power BI dashboards, reducing manual reporting by 40% and improving lead-tracking efficiency by 25%.",
                                  "Enhanced SQL and data modeling skills through self-learning and hands-on projects.",
                                  "Earned PL-300 Microsoft Certified Power BI Data Analyst Associate certification."
                              ]}
                           />
                           <ExperienceItem 
                              title="Data Analyst"
                              company="TUBITAK (The Scientific & Technological Research Council of Turkey)"
                              date="Feb 2020 – Jan 2021"
                              points={[
                                  "Leveraged SQL and Python to process 10,000+ data points, delivering insights that enhanced government policy decisions by 30%.",
                                  "Developed interactive Power BI dashboards to visualize key performance indicators.",
                                  "Automated data extraction & cleaning, reducing manual work by 40%.",
                                  "Collaborated with 10+ stakeholders, integrating data-driven insights into strategic initiatives."
                              ]}
                           />
                           <ExperienceItem 
                              title="Business Intelligence Intern"
                              company="Avitech, Istanbul"
                              date="Jun 2018 – May 2019"
                              points={[
                                  "Designed Power BI reports to track business performance and KPIs.",
                                  "Conducted data modeling and workflow optimization to improve efficiency.",
                                  "Assisted in obtaining IRIS Certification by analyzing compliance data."
                              ]}
                           />
                           <ExperienceItem 
                              title="ERP Development Intern"
                              company="GMV Sanli, Germany"
                              date="Jun 2017 – Sep 2017"
                              points={[
                                  "Developed an ERP integration system, optimizing data processes.",
                                  "Conducted time studies and process optimizations, reducing inefficiencies by 15%."
                              ]}
                           />
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8 lg:sticky top-28 h-min">
                    <Section title="Skills & Tools">
                         <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-bold text-light-slate">Data Visualization & Reporting:</p>
                                <p className="text-slate">Power BI (DAX, M, Power Query), User-Friendly Dashboards</p>
                            </div>
                            <div>
                                <p className="font-bold text-light-slate">Programming & Data Analysis:</p>
                                <p className="text-slate">Python (Pandas, NumPy, Scikit-learn), SQL, R</p>
                            </div>
                             <div>
                                <p className="font-bold text-light-slate">Machine Learning & Statistical Analysis:</p>
                                <p className="text-slate">Python, SPSS</p>
                            </div>
                            <div>
                                <p className="font-bold text-light-slate">Data Engineering & ETL:</p>
                                <p className="text-slate">Data Cleaning, Data Modeling, ETL Pipelines</p>
                            </div>
                             <div>
                                <p className="font-bold text-light-slate">Cloud & Business Intelligence:</p>
                                <p className="text-slate">Azure</p>
                            </div>
                             <div>
                                <p className="font-bold text-light-slate">Soft Skills:</p>
                                <p className="text-slate">Problem-Solving, Communication, Teamwork</p>
                            </div>
                        </div>
                    </Section>
                    
                    <Section title="Education & Certifications">
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-bold text-light-slate">University of Liverpool</p>
                                <p className="text-slate">M.S. in Computer Science (2021 – 2023)</p>
                            </div>
                             <div>
                                <p className="font-bold text-light-slate">Abdullah Gul University</p>
                                <p className="text-slate">B.Sc. in Industrial Engineering (2013 – 2019)</p>
                            </div>
                             <div className="mt-4 pt-4 border-t border-lightest-navy/20 space-y-1">
                                <p className="text-light-slate font-semibold">PL-300 Microsoft Certified Power BI Data Analyst Associate (2025)</p>
                                <p className="text-light-slate font-semibold">CompTIA Cloud Essentials+ (2023)</p>
                            </div>
                        </div>
                    </Section>

                     <Section title="Achievements">
                        <ul className="list-disc list-inside space-y-2 text-slate text-sm">
                            <li>TUBITAK Research Project Competition: 1st place (Regional), 4th place (National)</li>
                            <li>Industrial Engineering Student Project Competition (YAEM): 4th place (Turkey-wide)</li>
                            <li>Graduation Project Competition Winner (Abdullah Gul University)</li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
