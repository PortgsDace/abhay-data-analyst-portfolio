import { AnalyticsInsight } from '../types';

export const analyticsInsights: AnalyticsInsight[] = [
  {
    id: 'why-data-cleaning-matters',
    title: 'Why Data Cleaning Is 80% of Real-World Analytics',
    readTime: '4 min read',
    category: 'Data Engineering & Hygiene',
    summary: 'Why pristine benchmark datasets lie, and how dealing with real-world nulls, duplicate keys, and date skews determines analytical credibility.',
    keyTakeaway: 'Analytical models and dashboards are only as dependable as the raw transactional integrity feeding them. Clean first, calculate second.',
    content: [
      'In classroom datasets, columns arrive neatly formatted, dates adhere to uniform ISO standards, and primary keys are reliably unique. In commercial operations, however, real data is messy: duplicate barcode scans occur when warehouse scanners malfunction, timezone offsets distort daily revenue cutoffs, and null values frequently mask operational delays.',
      'During my logistics route analysis, duplicate dispatches initially showed false route frequencies. Applying window functions to partition records by courier tracking ID and timestamp before computing transit duration eliminated a 6.2% error distortion.',
      'A disciplined data analyst treats cleaning not as preliminary overhead, but as the foundational analytical step where domain anomalies are first discovered.'
    ]
  },
  {
    id: 'sql-for-business-questions',
    title: 'Translating Business Questions into SQL Queries',
    readTime: '5 min read',
    category: 'SQL & Database Design',
    summary: 'A step-by-step approach to moving from executive ambiguity ("which delivery corridors are failing?") to structured CTEs and window functions.',
    keyTakeaway: 'Break business questions into sequential Common Table Expressions (CTEs): Clean -> Aggregate -> Rank -> Filter.',
    content: [
      'Stakeholders rarely ask for an inner join or a window function; they ask questions like: "Where are we losing money on transit delays?" or "Who are our at-risk repeat customers?"',
      'The best way to answer complex questions without creating unreadable 200-line monolithic queries is modular CTEs. Step 1 cleans and isolates the relevant time period. Step 2 joins benchmark business SLAs. Step 3 calculates breach rates per corridor. Step 4 applies DENSE_RANK() to present the top offenders.',
      'Writing SQL with business clarity in mind also makes query reviews effortless for senior engineers and BI managers.'
    ]
  },
  {
    id: 'choosing-actionable-kpis',
    title: 'Actionable KPIs vs. Vanity Metrics in Dashboards',
    readTime: '4 min read',
    category: 'Business Intelligence',
    summary: 'How to avoid cluttering dashboards with passive counters and instead design metrics that trigger immediate operational decisions.',
    keyTakeaway: 'If a metric changes and nobody in the business knows what action to take, it belongs in an appendix, not on an executive dashboard.',
    content: [
      'A common pitfall in beginner dashboards is showcasing vanity totals: "Total Orders Built", "Total Page Hits", or "Total Registered Users". While satisfying to look at, these numbers are cumulative and non-actionable.',
      'In contrast, actionable metrics are rate-based, benchmarked, or time-bounded: "90-Day Cohort Retention %", "Average Transit Delay vs. Contracted SLA", or "Overdraft Frequency Velocity".',
      'When designing the Retail Customer Retention dashboard, prioritizing the 45-day post-first-purchase churn cliff gave retention teams a precise intervention deadline rather than just a passive churn percentage.'
    ]
  },
  {
    id: 'storytelling-powerbi-dax',
    title: 'Effective Storytelling with Power BI and DAX',
    readTime: '4 min read',
    category: 'Visualization & DAX',
    summary: 'Combining star-schema dimensional modeling with clean visual hierarchy to guide non-technical decision makers from high-level summary to root causes.',
    keyTakeaway: 'Great dashboards follow the 5-second rule: the primary health indicator must be obvious in 5 seconds, with drill-through available for deeper context.',
    content: [
      'An executive dashboard should answer three progressive questions: "How are we doing?" (headline KPI ribbon), "Where is the variance coming from?" (cohort matrix or category breakdown), and "What should we do next?" (drill-down into customer segments).',
      'Using clean star-schema relationships rather than flat un-normalized tables keeps DAX calculations lightning fast and avoids ambiguous filter directions.',
      'DAX measures should always be organized into dedicated metric folders with explicit commentary, making the analytical logic reproducible and auditable.'
    ]
  }
];
