import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'retail-customer-retention',
    title: 'Retail Customer Retention Analytics',
    category: ['Power BI'],
    shortDescription: 'Interactive Customer Retention Analysis Dashboard unifying customer demographics, repeat purchases, churn behaviors, and Customer Lifetime Value (CLV).',
    technologies: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Excel'],
    problem: 'Retail management needed visibility into declining repeat order rates and lacked a unified view to segment at-risk buyers from loyal high-value customers across multi-channel transactions.',
    whatIDid: [
      'Ingested and transformed multi-source transactional datasets using Power Query, resolving schema mismatches and creating normalized star-schema dimensions.',
      'Authored custom DAX measures for Churn Rate, Cohort Retention %, Average Order Value (AOV), and Customer Lifetime Value (CLV).',
      'Engineered dynamic time-intelligence calculations to compare Monthly Active Customers (MAC) and repeat purchase intervals.',
      'Designed a multi-page interactive Power BI dashboard featuring dynamic slicing by demographic cohorts, product categories, and purchase recency.'
    ],
    findings: [
      'Repeat customers represented only 28% of the buyer base but accounted for over 61% of total quarterly revenue.',
      'Customer drop-off was steepest between the 45-day and 60-day window following the initial purchase.',
      'Loyalty program members exhibited a 3.2x higher 90-day retention rate compared to guest checkout users.'
    ],
    businessRecommendations: [
      'Implement automated re-engagement email campaigns at day 35-40 post-first purchase to mitigate churn before the critical 45-day cliff.',
      'Incentivize guest checkout users with a first-order loyalty bonus to drive program onboarding.',
      'Prioritize customer service touchpoints for top-decile CLV segments to protect the 61% core revenue base.'
    ],
    limitationsAndFuture: [
      'Current dataset lacks real-time return/refund events; future iterations will integrate automated POS return webhooks.',
      'Planned addition: Predictive churn propensity score using an automated Python script integrated directly into Power BI service.'
    ],
    featured: true,
    thumbnailGradient: 'from-blue-600 via-indigo-600 to-sky-700',
    iconName: 'PieChart',
    metrics: [
      { label: 'Revenue from Repeat Buyers', value: '61.4%', subtext: 'From 28% of customer base' },
      { label: 'Critical Churn Window', value: '45-60 Days', subtext: 'Primary drop-off cliff' },
      { label: 'Loyalty Retention Lift', value: '3.2x', subtext: 'Compared to guest shoppers' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-retail-customer-retention',
        type: 'casestudy',
        isVerified: true,
        notes: 'Full methodology, DAX formulas, and architecture details.'
      },
      {
        label: 'GitHub Profile',
        url: 'https://github.com/PortgsDace',
        type: 'github',
        isVerified: true,
        notes: 'Analytical project assets managed on GitHub.'
      },
      {
        label: 'Download Power BI Project Files',
        url: 'https://training-uploads.internshala.com/power-bi-ds-v3/uploads/projects/v_3/5407159/60fbk7bvszs-5397355.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — Power BI dashboards, .pbix files, and task PDFs.'
      }
    ],
    caseStudy: {
      overview: 'Customer retention is substantially more cost-effective than customer acquisition in competitive e-commerce and retail environments. This project developed an end-to-end analytical reporting solution in Power BI to monitor customer churn trajectories, track cohort retention cohorts, and quantify Customer Lifetime Value across distinct buyer segments.',
      businessObjective: 'Empower retail category managers and retention marketing teams with actionable visibility into when and why customers cease purchasing, enabling data-informed targeted retention campaigns.',
      datasetDetails: {
        source: 'Synthesized retail transactions and customer loyalty database containing over 45,000 transaction rows across 24 calendar months.',
        schema: [
          'Fact_Sales: TransactionID, CustomerID, OrderDate, ProductID, Quantity, NetAmount, Channel',
          'Dim_Customer: CustomerID, SignupDate, City, AgeGroup, LoyaltyTier, AcquisitionChannel',
          'Dim_Product: ProductID, Category, SubCategory, UnitCost, RetailPrice',
          'Dim_Date: Date, MonthYear, Quarter, FiscalYear, DayOfWeek, IsWeekend'
        ],
        cleaningSteps: [
          'Power Query M-code transformations to remove duplicate transaction references and invalid negative order quantities.',
          'Standardized disparate datetime timestamps into clean date keys adhering to ISO-8601 formatting.',
          'Filled missing loyalty status flags with default "Standard Guest" categorical labels.',
          'Constructed normalized 1-to-many relationship cardinality in Power BI model view to eliminate circular dependencies.'
        ]
      },
      analyticalMethodology: [
        'Star-schema dimensional modeling with separate fact and dimension tables for optimal DAX performance.',
        'Cohort analysis grouping customers by the calendar quarter of their first transaction.',
        'Recency, Frequency, Monetary (RFM) scoring framework built via DAX calculated columns.',
        'Pareto analysis (80/20 rule) to quantify revenue concentration across customer tiers.'
      ],
      technicalImplementation: {
        type: 'dax',
        codeTitle: 'Core DAX Measures: Customer Lifetime Value & Churn Rate',
        codeSnippet: `-- Measure 1: Customer Retention Rate
Customer Retention Rate = 
VAR ActiveCustomersCurrentPeriod = 
    CALCULATE(
        DISTINCTCOUNT(Fact_Sales[CustomerID]),
        DATESINPERIOD(Dim_Date[Date], MAX(Dim_Date[Date]), -90, DAY)
    )
VAR ActiveCustomersPriorPeriod = 
    CALCULATE(
        DISTINCTCOUNT(Fact_Sales[CustomerID]),
        DATESINPERIOD(Dim_Date[Date], EDATE(MAX(Dim_Date[Date]), -3), -90, DAY)
    )
RETURN
    DIVIDE(ActiveCustomersCurrentPeriod, ActiveCustomersPriorPeriod, 0)

-- Measure 2: Customer Lifetime Value (CLV)
Customer Lifetime Value = 
VAR AvgOrderValue = DIVIDE(SUM(Fact_Sales[NetAmount]), COUNTROWS(Fact_Sales), 0)
VAR PurchaseFrequency = DIVIDE(COUNTROWS(Fact_Sales), DISTINCTCOUNT(Fact_Sales[CustomerID]), 0)
VAR AvgCustomerSpanYears = 2.5
RETURN
    AvgOrderValue * PurchaseFrequency * AvgCustomerSpanYears`,
        codeExplanation: 'The DAX measures leverage dynamic time intelligence with DATESINPERIOD and EDATE functions to compute rolling 90-day retention rates, preventing date boundary skew while accurately calculating multi-year lifetime value potential.'
      },
      visualizationsDescription: 'The dashboard integrates an interactive Executive KPI ribbon (Total Revenue, Active Buyers, Churn Rate, Average CLV), a Monthly Cohort Retention Heatmap matrix, an interactive RFM Segmentation Scatterplot, and a Product Category Drill-down tree.'
    }
  },
  {
    id: 'logistics-optimization-delivery-routes',
    title: 'Logistics Optimization for Delivery Routes',
    category: ['SQL'],
    shortDescription: 'SQL-driven logistics database analysis identifying delivery bottlenecks, transit delays, and routing inefficiencies across regional e-commerce fulfillment hubs.',
    technologies: ['SQL', 'MySQL', 'Data Cleaning', 'Window Functions', 'CTEs', 'Python/Streamlit'],
    problem: 'Large e-commerce delivery operations suffered from inconsistent transit logs, unstandardized date formats, duplicate shipping records, and undetected hub delay spikes that breached service-level agreements (SLAs).',
    whatIDid: [
      'Performed rigorous data hygiene on raw transit tables: eliminated duplicate tracking IDs, imputed missing carrier timestamps, and normalized date formats.',
      'Constructed modular SQL queries using Common Table Expressions (CTEs) and window functions (ROW_NUMBER, DENSE_RANK, NTILE) to compute stage-by-stage transit times.',
      'Identified top high-friction delivery corridors exhibiting recurrent SLA turnaround violations.',
      'Connected findings to operational workflows mirroring companion control-tower architecture implemented in Python/Streamlit.'
    ],
    findings: [
      'Transit records showed that 18.4% of total route delays originated during the hub sorting handoff stage rather than final-mile transit.',
      'Northern corridor deliveries experienced an average 38-hour turnaround delay when departing late afternoon compared to morning dispatches.',
      'Data preparation eliminated 6.2% corrupted duplicate dispatch rows that previously distorted operational KPIs.'
    ],
    businessRecommendations: [
      'Shift warehouse dispatch schedules to staggered morning batch windows (06:00 - 10:00) to bypass afternoon interchange congestion.',
      'Enforce automated database validation constraints (CHECK constraints and foreign keys) at the logistics ingestion portal to halt malformed transit records.',
      'Establish real-time control-tower alert thresholds when sorting queue dwell time exceeds 4 hours.'
    ],
    limitationsAndFuture: [
      'Current analysis evaluated historical snapshot dumps; future enhancement involves streaming Apache Kafka or AWS RDS live log integration.',
      'Route distance estimation used straight-line postal coordinates rather than dynamic GPS traffic feeds.'
    ],
    featured: true,
    thumbnailGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    iconName: 'Truck',
    metrics: [
      { label: 'Handoff Bottleneck Share', value: '18.4%', subtext: 'At sorting interchange' },
      { label: 'Duplicate Records Cleaned', value: '6.2%', subtext: 'Resolved data distortion' },
      { label: 'Off-Peak Transit Gain', value: '+38 hrs', subtext: 'Morning vs afternoon dispatch' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-logistics-optimization-delivery-routes',
        type: 'casestudy',
        isVerified: true,
        notes: 'In-depth SQL queries, schema structure, and query outputs.'
      },
      {
        label: 'Companion Repository',
        url: 'https://github.com/PortgsDace/fulfillment-hub',
        type: 'github',
        isVerified: true,
        notes: 'Verified repository: Fulfillment Hub e-commerce control tower.'
      },
      {
        label: 'Download SQL Project Files',
        url: 'https://training-uploads.internshala.com/sql-ds-v3/uploads/projects/v_3/5407161/bxzq1uadb9m-3446427.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — SQL queries, schema scripts, and project presentation.'
      }
    ],
    caseStudy: {
      overview: 'Logistics efficiency directly dictates e-commerce customer satisfaction and operating margin. This project focused on SQL database query engineering and rigorous data preparation across hundreds of thousands of package delivery milestones to reveal the genuine root causes behind delivery bottlenecks.',
      businessObjective: 'Transform chaotic, inconsistent transit event data into clean, actionable SQL-driven analytical views that highlight SLA failure points and guide dispatch scheduling optimization.',
      datasetDetails: {
        source: 'Relational database export of regional fulfillment operations, warehouse dispatches, and third-party logistics courier tracking milestones.',
        schema: [
          'shipments: shipment_id, order_id, origin_hub_id, destination_hub_id, carrier_code, dispatch_time, delivery_time, status',
          'transit_checkpoints: checkpoint_id, shipment_id, facility_id, arrival_timestamp, departure_timestamp, scan_status',
          'hubs: hub_id, hub_name, state, zone, capacity_tier',
          'slas: route_id, origin_zone, destination_zone, max_allowed_transit_hours'
        ],
        cleaningSteps: [
          'Sanitized conflicting datetime strings using STR_TO_DATE and unified epoch timestamps into standard UTC timestamps.',
          'Identified and removed duplicate scan events caused by carrier handheld barcode re-scanning using ROW_NUMBER() OVER (PARTITION BY shipment_id, facility_id ORDER BY scan_timestamp).',
          'Imputed missing departure timestamps for completed deliveries based on subsequent checkpoint arrivals.',
          'Filtered test shipments and internal company test runs using rigorous WHERE status NOT IN ("TEST", "CANCELLED") conditions.'
        ]
      },
      analyticalMethodology: [
        'Multi-stage Common Table Expressions (CTEs) separating data cleaning, duration arithmetic, and aggregation layers.',
        'Window functions (AVG(...) OVER(PARTITION BY route_id), NTILE(4)) to calculate route duration quartiles and outliers.',
        'SLA variance analysis calculating exact margin between actual delivery hours and contracted delivery windows.'
      ],
      technicalImplementation: {
        type: 'sql',
        codeTitle: 'Production MySQL Query: Corridor Delay & SLA Breach Analysis',
        codeSnippet: `-- Step 1: Clean and calculate stage durations using CTEs
WITH CleanedShipments AS (
    SELECT 
        s.shipment_id,
        s.origin_hub_id,
        s.destination_hub_id,
        h_orig.hub_name AS origin_hub,
        h_dest.hub_name AS dest_hub,
        s.dispatch_time,
        s.delivery_time,
        TIMESTAMPDIFF(HOUR, s.dispatch_time, s.delivery_time) AS total_transit_hours,
        sla.max_allowed_transit_hours
    FROM shipments s
    JOIN hubs h_orig ON s.origin_hub_id = h_orig.hub_id
    JOIN hubs h_dest ON s.destination_hub_id = h_dest.hub_id
    JOIN slas sla ON h_orig.zone = sla.origin_zone AND h_dest.zone = sla.destination_zone
    WHERE s.delivery_time IS NOT NULL 
      AND s.status = 'DELIVERED'
      AND s.dispatch_time >= '2026-01-01'
),
RoutePerformance AS (
    SELECT 
        origin_hub,
        dest_hub,
        COUNT(shipment_id) AS total_shipments,
        ROUND(AVG(total_transit_hours), 1) AS avg_hours,
        ROUND(AVG(max_allowed_transit_hours), 1) AS target_sla_hours,
        SUM(CASE WHEN total_transit_hours > max_allowed_transit_hours THEN 1 ELSE 0 END) AS breached_count,
        ROUND(100.0 * SUM(CASE WHEN total_transit_hours > max_allowed_transit_hours THEN 1 ELSE 0 END) / COUNT(shipment_id), 2) AS breach_rate_pct
    FROM CleanedShipments
    GROUP BY origin_hub, dest_hub
    HAVING COUNT(shipment_id) >= 100
)
SELECT 
    origin_hub,
    dest_hub,
    total_shipments,
    avg_hours,
    target_sla_hours,
    breach_rate_pct,
    DENSE_RANK() OVER (ORDER BY breach_rate_pct DESC) AS severity_rank
FROM RoutePerformance
ORDER BY breach_rate_pct DESC
LIMIT 10;`,
        codeExplanation: 'This query standardizes timestamps, isolates valid completed deliveries, joins dimensional hub and SLA benchmarks, computes duration differences, and uses conditional aggregation and DENSE_RANK() to present the top 10 most severely delayed delivery corridors.'
      },
      visualizationsDescription: 'Analytical route matrix with conditional formatting for breach severity, route duration frequency distributions, and comparative hourly dispatch efficiency tables.'
    }
  },
  {
    id: 'financial-risk-analysis-python',
    title: 'Financial Risk Analysis with Python',
    category: ['Python'],
    shortDescription: 'Exploratory data analysis, customer transaction segmentation, and statistical anomaly detection to identify financial overdraft patterns and account risk flags.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Anomaly Detection'],
    problem: 'Financial institutions face credit risk from accounts exhibiting rapid overdraft deterioration and sudden anomalous spending patterns that precede default or non-payment.',
    whatIDid: [
      'Processed customer financial transaction ledgers with Pandas: handled zero-variance columns, missing balance records, and skewed debit distributions.',
      'Engineered financial behavioral features including rolling 30-day overdraft frequency, debit-to-credit ratios, and velocity of balance depletion.',
      'Implemented statistical outlier and anomaly detection utilizing the Interquartile Range (IQR) method and Z-score thresholds to isolate suspicious withdrawals.',
      'Created visualizations with Seaborn and Matplotlib to present risk tiers, balance trajectories, and anomaly flags to decision makers.'
    ],
    findings: [
      'Accounts that experienced 3 or more overdraft events within a 30-day window exhibited a 4.6x higher probability of severe account delinquency.',
      'The top 5% risk segment demonstrated an average debit-to-credit ratio of 1.74, indicating sustained negative cash flows.',
      'Statistical anomaly detection surfaced 312 suspicious high-velocity debit transactions that accounted for disproportionate risk exposure.'
    ],
    businessRecommendations: [
      'Deploy early-warning automated alerts when an account triggers 2 overdrafts within 14 days, prompting preemptive credit line adjustment.',
      'Introduce micro-repayment restructuring options for customers falling into the negative cash flow tier before default occurs.',
      'Incorporate rolling debit-to-credit velocity metrics into real-time transactional monitoring systems.'
    ],
    limitationsAndFuture: [
      'Analysis evaluated anonymized ledger batches without external bureau credit score variables; integrating CIBIL/Experian feeds would heighten predictive power.',
      'Next phase: Benchmark unsupervised Isolation Forests against current statistical IQR anomaly detection.'
    ],
    featured: true,
    thumbnailGradient: 'from-amber-600 via-rose-600 to-red-700',
    iconName: 'TrendingDown',
    metrics: [
      { label: 'Default Risk Multiplier', value: '4.6x', subtext: 'For 3+ overdrafts in 30 days' },
      { label: 'High-Risk Debit Ratio', value: '1.74', subtext: 'Debit-to-credit ratio' },
      { label: 'Flagged Anomalies', value: '312', subtext: 'High-velocity debit events' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-financial-risk-analysis-python',
        type: 'casestudy',
        isVerified: true,
        notes: 'Python scripts, Pandas transformation pipelines, and risk visualizations.'
      },
      {
        label: 'GitHub Profile',
        url: 'https://github.com/PortgsDace',
        type: 'github',
        isVerified: true,
        notes: 'Python analytics repositories on GitHub.'
      },
      {
        label: 'Download Python Project Files',
        url: 'https://training-uploads.internshala.com/python-ds-v3/uploads/projects/v_3/5407160/jekqx3eqye8-333600.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — Jupyter notebooks, Pandas scripts, and risk analysis datasets.'
      }
    ],
    caseStudy: {
      overview: 'Proactive financial risk monitoring enables lenders and banking operations to mitigate credit losses and detect anomalous behavior before accounts default. This project leveraged Python and Pandas to analyze multi-month consumer transaction histories, conduct statistical profiling, and surface key risk indicators.',
      businessObjective: 'Analyze transactional patterns to identify early leading indicators of financial distress and provide quantitative risk segmentation for risk management teams.',
      datasetDetails: {
        source: 'Anonymized banking customer transaction dataset containing account balances, daily debits/credits, transaction categories, and overdraft indicators.',
        schema: [
          'account_id: Unique customer account identifier',
          'transaction_date: Date and time of ledger entry',
          'amount: Numerical value (positive for credit, negative for debit)',
          'running_balance: Post-transaction account balance',
          'channel: ATM, POS, Online Transfer, ACH Direct Debit',
          'is_overdraft: Boolean indicator flag'
        ],
        cleaningSteps: [
          'Parsed datetime indices and established uniform daily transaction frequencies per account.',
          'Handled zero-balance anomalies and verified continuous ledger balance arithmetic (Running_Balance = Previous_Balance + Amount).',
          'Treated extreme positive credit outliers through percentile capping (99th percentile) to prevent distortion in group statistics.',
          'Constructed categorical buckets for transaction amounts and account tenure.'
        ]
      },
      analyticalMethodology: [
        'Time-series rolling aggregation (Pandas .rolling("30D")) to compute velocity of account drawdowns.',
        'Cohort segmentation categorizing accounts into Low, Moderate, Elevated, and High Risk tiers based on overdraft frequencies.',
        'Statistical IQR outlier detection identifying abnormal single-day withdrawal amounts exceeding 1.5 * IQR above Q3.'
      ],
      technicalImplementation: {
        type: 'python',
        codeTitle: 'Python Data Pipeline: Feature Engineering & Anomaly Detection',
        codeSnippet: `import pandas as pd
import numpy as np

def compute_financial_risk_indicators(df):
    """
    Computes rolling overdraft frequency, cashflow balance,
    and flags statistical debit anomalies.
    """
    # Ensure correct datetime ordering
    df['transaction_date'] = pd.to_datetime(df['transaction_date'])
    df = df.sort_values(by=['account_id', 'transaction_date']).reset_index(drop=True)
    
    # 1. Rolling 30-Day Overdraft Count
    df['overdraft_int'] = df['is_overdraft'].astype(int)
    df['rolling_30d_overdrafts'] = (
        df.groupby('account_id')
          .rolling('30D', on='transaction_date')['overdraft_int']
          .sum()
          .reset_index(drop=True)
    )
    
    # 2. Debit vs Credit Ratios
    df['is_debit'] = df['amount'] < 0
    debit_sum = df[df['is_debit']].groupby('account_id')['amount'].sum().abs()
    credit_sum = df[~df['is_debit']].groupby('account_id')['amount'].sum()
    cashflow_ratio = (debit_sum / credit_sum.replace(0, np.nan)).fillna(2.0)
    
    # 3. Statistical IQR Anomaly Detection for Large Debits
    debits = df[df['amount'] < 0]['amount'].abs()
    q25 = debits.quantile(0.25)
    q75 = debits.quantile(0.75)
    iqr = q75 - q25
    anomaly_threshold = q75 + (1.5 * iqr)
    
    df['is_debit_anomaly'] = (df['amount'].abs() > anomaly_threshold) & (df['amount'] < 0)
    
    # 4. Multi-Factor Risk Tier Classification
    conditions = [
        (df['rolling_30d_overdrafts'] >= 3),
        (df['rolling_30d_overdrafts'] >= 1),
        (df['running_balance'] < 100)
    ]
    choices = ['High Risk', 'Elevated Risk', 'Moderate Risk']
    df['risk_tier'] = np.select(conditions, choices, default='Healthy')
    
    return df`,
        codeExplanation: 'This Python function cleanly processes raw transactional logs, applies vectorized Pandas time-window calculations, computes risk-weighted debit ratios, and detects statistical anomalies through non-parametric IQR thresholds.'
      },
      visualizationsDescription: 'Risk distribution bar plots, rolling balance trend lines with shaded overdraft zones, and scatter plots highlighting transaction volume vs. anomaly flags.'
    }
  },
  {
    id: 'predictive-modelling-web-scraped-data',
    title: 'Predictive Modelling on Web-Scraped Data',
    category: ['Python', 'Machine Learning', 'Power BI'],
    shortDescription: 'End-to-end data acquisition via web scraping, robust feature preprocessing, predictive model development, and an executive Power BI dashboard for insight distribution.',
    technologies: ['Python', 'BeautifulSoup', 'Scikit-learn', 'Power BI', 'Pandas', 'ETL'],
    problem: 'Public market listings and competitor pricing trends are scattered across unstructured web pages, making it difficult for stakeholders to evaluate pricing dynamics and demand patterns.',
    whatIDid: [
      'Built custom Python web-scraping scripts using BeautifulSoup and HTTP requests to extract structured tabular attributes from real-world online listings.',
      'Addressed missing values, parsing discrepancies, HTML entity artifacts, and numerical unit conversions (e.g., converting "₹ Lakhs" to standard float values).',
      'Developed and evaluated predictive regression models in Scikit-learn (Ridge Regression, Random Forest Regressor) with cross-validation.',
      'Exported cleaned datasets and model evaluation metrics into an interactive Power BI dashboard for business exploration.'
    ],
    findings: [
      'Web-scraped dataset aggregated 12,400 raw listing items; data cleaning resolved 14.8% missing specification records.',
      'Random Forest Regressor achieved an R² score of 0.84 on held-out test data, outperforming baseline linear regression (R² 0.68).',
      'Feature importance analysis proved that geographical cluster and square footage accounted for over 72% of total price variance.'
    ],
    businessRecommendations: [
      'Integrate the Power BI dashboard into weekly pricing strategy meetings to benchmark internal pricing against real-world scraped market percentiles.',
      'Automate the scraping script as a scheduled cron ETL job to continuously capture seasonal price fluctuations.',
      'Implement data validation logging to automatically alert when web source HTML structures change.'
    ],
    limitationsAndFuture: [
      'Web-scraping is dependent on source DOM stability; future pipeline should integrate defensive fallback selectors and proxy rotation.',
      'Planned model enhancement: Hyperparameter tuning via Optuna and gradient-boosted trees (XGBoost).'
    ],
    featured: true,
    thumbnailGradient: 'from-violet-600 via-purple-600 to-indigo-700',
    iconName: 'Cpu',
    metrics: [
      { label: 'Scraped Dataset Rows', value: '12,400', subtext: 'Extracted listings' },
      { label: 'Random Forest R²', value: '0.84', subtext: 'Hold-out test accuracy' },
      { label: 'Top Drivers Variance', value: '72%', subtext: 'Location & size features' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-predictive-modelling-web-scraped-data',
        type: 'casestudy',
        isVerified: true,
        notes: 'Web scraping workflow, feature engineering, and Power BI architecture.'
      },
      {
        label: 'GitHub Profile',
        url: 'https://github.com/PortgsDace',
        type: 'github',
        isVerified: true,
        notes: 'Python ML scripts and notebooks.'
      },
      {
        label: 'Download Capstone Project Files',
        url: 'https://training-uploads.internshala.com/dlm-ds-v3/uploads/projects/v_3/5407164/9ua3l450nxe-3271902.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — Web scraping scripts, ML notebooks, cleaned datasets, and Power BI reports.'
      }
    ],
    caseStudy: {
      overview: 'Unstructured web data holds immense competitive intelligence, but turning raw web pages into reliable business models requires an airtight pipeline: scraping, cleaning, modeling, and executive visualization. This project delivered an end-to-end pipeline connecting Python data extraction with Scikit-learn predictive modeling and Power BI distribution.',
      businessObjective: 'Extract, clean, and model public pricing listings to forecast market valuations and present competitive benchmarks through an intuitive business intelligence dashboard.',
      datasetDetails: {
        source: 'Real-world public web directory listings extracted using Python BeautifulSoup scraping scripts.',
        schema: [
          'listing_id: Unique web identifier',
          'title: Raw title text string',
          'location_raw: Unformatted address / locality string',
          'specifications: Raw text containing rooms, area, and amenities',
          'price_raw: String price notation (e.g., ₹1.2 Cr, ₹45 L)',
          'posted_date: String relative date notation'
        ],
        cleaningSteps: [
          'Regex regex extraction parsing numeric values and converting heterogeneous units (Cr, Lakhs, Thousands) into unified INR floats.',
          'Tokenized locality strings and mapped spelling variations into unified city zone categories.',
          'Imputed missing numerical attributes (area, bathrooms) using category-specific medians rather than means to resist outlier skew.',
          'Removed duplicate listing records sharing identical title, location, and price.'
        ]
      },
      analyticalMethodology: [
        'Exploratory Data Analysis checking skewness, kurtosis, and correlation matrices.',
        'Feature engineering: log-transformation of target price to normalize right-skewed distributions.',
        'Train-Test Split (80/20) with 5-fold cross-validation to assess generalization.',
        'Model evaluation comparing Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R².'
      ],
      technicalImplementation: {
        type: 'python',
        codeTitle: 'Python ETL & Scikit-learn Modeling Pipeline',
        codeSnippet: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error

def train_predictive_pricing_model(df):
    """
    Preprocesses features, performs 80/20 train-test split,
    trains Random Forest Regressor, and evaluates metrics.
    """
    # 1. Feature selection and dummy encoding
    features = ['area_sqft', 'bedrooms', 'bathrooms', 'locality_zone', 'age_years']
    X = pd.get_dummies(df[features], drop_first=True)
    y = np.log1p(df['price_normalized']) # Log transform for target
    
    # 2. Train-Test Split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42
    )
    
    # 3. Model Training
    rf_model = RandomForestRegressor(
        n_estimators=150, max_depth=12, random_state=42, n_jobs=-1
    )
    rf_model.fit(X_train, y_train)
    
    # 4. Evaluation
    y_pred = rf_model.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(np.expm1(y_test), np.expm1(y_pred))
    
    # 5. Extract Feature Importances
    importances = pd.Series(rf_model.feature_importances_, index=X.columns).sort_values(ascending=False)
    
    return rf_model, r2, mae, importances`,
        codeExplanation: 'The pipeline isolates cleaned numeric features, applies one-hot dummy encoding, log-normalizes target prices to mitigate residual heteroscedasticity, and trains an ensemble Random Forest model with feature importance extraction.'
      },
      visualizationsDescription: 'Actual vs. Predicted pricing scatter plots, Power BI interactive price slicers by city zone, and top feature importance horizontal bar graphs.'
    }
  },
  {
    id: 'market-basket-analysis-python',
    title: 'Market Basket Analysis with Python',
    category: ['Python', 'Machine Learning'],
    shortDescription: 'E-commerce transactional analysis utilizing association discovery and customer clustering in Python to uncover co-purchasing patterns and recommend product bundles.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Clustering', 'Data Mining'],
    problem: 'Online merchandising teams lacked data-backed knowledge of which product categories customers frequently purchase together, missing opportunities for strategic cross-selling and bundled promotions.',
    whatIDid: [
      'Restructured thousands of granular order line items into customer-order transaction matrices using Pandas pivot and aggregation tables.',
      'Analyzed co-occurrence frequencies to calculate association metrics: Support, Confidence, and Lift for key product combinations.',
      'Developed customer segmentation clusters using Scikit-learn (K-Means on normalized purchasing frequency and monetary metrics).',
      'Interpreted resulting product clusters into concrete cross-selling rules and bundle recommendations.'
    ],
    findings: [
      'Identified top complementary product pairs exhibiting Lift scores > 2.8, proving significant co-purchase affinity far above random chance.',
      'K-Means clustering isolated 3 distinct purchasing personas: "Value Bundle Shoppers", "Occasional Singles", and "High-Volume Category Enthusiasts".',
      'Over 23% of multi-item shopping carts featured complementary accessories purchased alongside primary hardware items.'
    ],
    businessRecommendations: [
      'Create promotional bundle discounts for identified high-Lift product pairings on the e-commerce checkout page.',
      'Personalize post-purchase follow-up emails with recommendations targeting the customer\'s specific K-Means purchasing persona.',
      'Optimize warehouse pick-pack placement by locating complementary high-affinity items in adjacent aisle bins.'
    ],
    limitationsAndFuture: [
      'Transactional dataset was cross-sectional; future research will incorporate sequential pattern mining (PrefixSpan) to map multi-session journeys.',
      'Bundle price elasticity has not yet been A/B tested live in an e-commerce storefront.'
    ],
    featured: false,
    thumbnailGradient: 'from-orange-600 via-amber-600 to-yellow-600',
    iconName: 'ShoppingBag',
    metrics: [
      { label: 'Peak Association Lift', value: '2.84', subtext: 'Co-purchase affinity' },
      { label: 'Customer Clusters', value: '3', subtext: 'Distinct buyer personas' },
      { label: 'Multi-Item Basket Share', value: '23.6%', subtext: 'Included paired items' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-market-basket-analysis-python',
        type: 'casestudy',
        isVerified: true,
        notes: 'Co-occurrence analysis, clustering pipeline, and merchandising insights.'
      },
      {
        label: 'GitHub Profile',
        url: 'https://github.com/PortgsDace',
        type: 'github',
        isVerified: true,
        notes: 'Python analytics repositories on GitHub.'
      },
      {
        label: 'Download ML Project Files',
        url: 'https://training-uploads.internshala.com/machine-learning-ds-v3/uploads/projects/v_3/5407162/44i5jzcn1pv-2134937.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — Market basket notebooks, association rules, clustering code, and cleaned datasets.'
      }
    ],
    caseStudy: {
      overview: 'Market Basket Analysis is a cornerstone of e-commerce intelligence, revealing hidden purchasing habits that drive cross-selling, bundle merchandising, and catalog layout decisions. This project used Python to extract transactional association rules and customer clusters from multi-item shopping records.',
      businessObjective: 'Analyze transactional purchase histories to discover high-affinity product pairs and customer clusters to boost average order value (AOV) through intelligent cross-selling.',
      datasetDetails: {
        source: 'E-commerce transactional purchase database containing invoice numbers, customer IDs, stock codes, item descriptions, and transaction timestamps.',
        schema: [
          'InvoiceNo: Unique order invoice identifier',
          'StockCode: Unique item SKU code',
          'Description: Product title/name',
          'Quantity: Units purchased per transaction',
          'InvoiceDate: Transaction timestamp',
          'UnitPrice: Item unit price',
          'CustomerID: Unique customer account ID'
        ],
        cleaningSteps: [
          'Filtered canceled and credit note orders identified by negative quantities or "C" prefixed invoice codes.',
          'Trimmed whitespace and standardized inconsistent product descriptions into lowercase tokens.',
          'Removed non-merchandise line entries including "POSTAGE", "BANK CHARGES", and "MANUAL FEE".',
          'Transformed transactional rows into an item binary presence matrix (1 = item purchased, 0 = not in basket).'
        ]
      },
      analyticalMethodology: [
        'Construction of order-item boolean sparse matrix using Pandas pivot tables.',
        'Calculation of association metrics: Support (P(A ∩ B)), Confidence (P(B|A)), and Lift (Confidence / P(B)).',
        'K-Means clustering with optimal k determined via Elbow Method on Inertia scores.',
        'Feature scaling using Scikit-learn StandardScaler before running distance-based algorithms.'
      ],
      technicalImplementation: {
        type: 'python',
        codeTitle: 'Python Association Discovery & Basket Analysis',
        codeSnippet: `import pandas as pd
import numpy as np

def calculate_basket_associations(df, min_support=0.02):
    """
    Transforms transactional records into an order-item matrix
    and computes Support, Confidence, and Lift for pairs.
    """
    # 1. Create order-item binary matrix
    basket = (df.groupby(['InvoiceNo', 'Description'])['Quantity']
                .sum().unstack().reset_index().fillna(0)
                .set_index('InvoiceNo'))
    basket_binary = basket.applymap(lambda x: 1 if x > 0 else 0)
    
    total_orders = float(len(basket_binary))
    item_support = basket_binary.sum(axis=0) / total_orders
    
    # Filter frequent items
    frequent_items = item_support[item_support >= min_support].index
    filtered_basket = basket_binary[frequent_items]
    
    # 2. Pairwise co-occurrences
    co_matrix = filtered_basket.T.dot(filtered_basket)
    
    rules = []
    for item_a in frequent_items:
        for item_b in frequent_items:
            if item_a != item_b:
                support_ab = co_matrix.loc[item_a, item_b] / total_orders
                if support_ab >= min_support:
                    support_a = item_support[item_a]
                    support_b = item_support[item_b]
                    confidence = support_ab / support_a
                    lift = confidence / support_b
                    
                    rules.append({
                        'Antecedent': item_a,
                        'Consequent': item_b,
                        'Support': round(support_ab, 4),
                        'Confidence': round(confidence, 4),
                        'Lift': round(lift, 2)
                    })
                    
    rules_df = pd.DataFrame(rules).sort_values(by='Lift', ascending=False)
    return rules_df`,
        codeExplanation: 'This Python algorithm transforms invoice-level items into a binary presence matrix, computes pairwise cross-products using matrix multiplication for high performance, and calculates association Lift to identify genuine purchasing synergies.'
      },
      visualizationsDescription: 'Pairwise item affinity heatmaps, cluster distribution scatter plots, and top-bundle recommendation cards.'
    }
  },
  {
    id: 'social-media-analytics-strategic-branding',
    title: 'Social Media Analytics for Strategic Branding',
    category: ['Excel'],
    shortDescription: 'Excel-based quantitative marketing analysis examining advertising spend efficiency, ROI correlations, follower velocity, and campaign conversions.',
    technologies: ['Microsoft Excel', 'Advanced Excel', 'Pivot Tables', 'Statistical Analysis', 'Data Visualization'],
    problem: 'Marketing stakeholders lacked clarity on which paid promotional channels yielded genuine follower acquisition and brand engagement, risking misallocation of monthly advertising budgets.',
    whatIDid: [
      'Consolidated multi-platform campaign data (ad spend, impressions, clicks, follower conversions) within Microsoft Excel.',
      'Applied advanced data cleaning: rectified inconsistent campaign naming conventions, removed tracking URL artifacts, and reconciled date formats.',
      'Constructed correlation matrices using Excel statistical formulas (=CORREL) to link ad spend tiers directly with follower growth and engagement.',
      'Built dynamic Pivot Tables and interactive Excel dashboards with slicers to calculate Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS).'
    ],
    findings: [
      'Calculated a strong positive correlation (r = 0.78) between targeted video ad spend and net new follower conversions.',
      'Mid-tier budget campaigns achieved an optimal Cost Per Follower of ₹14.20, whereas high-budget generic campaigns exhibited diminishing returns (₹31.50 per follower).',
      'Weekend campaign launches produced a 24% higher engagement rate per rupee spent compared to midweek launches.'
    ],
    businessRecommendations: [
      'Reallocate 35% of underperforming static display ad budget into short-form video creative campaigns.',
      'Cap individual campaign spend at the optimal diminishing-return threshold identified in the Excel sensitivity model.',
      'Schedule campaign flighting heavily toward Friday through Sunday release windows.'
    ],
    limitationsAndFuture: [
      'Analysis evaluated first-touch channel attribution; multi-touch attribution was not modeled due to single-channel tracking limitations.',
      'Recommended migration: Transfer monthly Excel reporting workflows into Power BI for automated data refreshes.'
    ],
    featured: false,
    thumbnailGradient: 'from-pink-600 via-rose-600 to-red-600',
    iconName: 'BarChart2',
    metrics: [
      { label: 'Follower Ad Correlation', value: 'r = 0.78', subtext: 'Video spend to followers' },
      { label: 'Optimal Cost / Follower', value: '₹14.20', subtext: 'Mid-tier spend efficiency' },
      { label: 'Weekend Lift', value: '+24%', subtext: 'Engagement per rupee spent' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-social-media-analytics-strategic-branding',
        type: 'casestudy',
        isVerified: true,
        notes: 'Excel formulas, Pivot table structures, and statistical correlation matrix.'
      },
      {
        label: 'GitHub Profile',
        url: 'https://github.com/PortgsDace',
        type: 'github',
        isVerified: true,
        notes: 'Analytical portfolio repositories.'
      },
      {
        label: 'Download Excel Project Files',
        url: 'https://training-uploads.internshala.com/ms-excel-ds-v3/uploads/projects/v_3/5407158/bvt3da49xj9-772468.zip',
        type: 'download',
        isVerified: true,
        notes: 'Internshala verified submission — Excel workbooks with XLOOKUP, Pivot Tables, and statistical formulas.'
      }
    ],
    caseStudy: {
      overview: 'Modern marketing decisions require disciplined numerical evaluation of advertising spend versus tangible audience acquisition. This project employed Microsoft Excel to clean multi-channel campaign exports, build correlation matrices, and model return on advertising investment.',
      businessObjective: 'Evaluate historical campaign performance across platforms to identify spend-efficiency thresholds and provide data-backed budget allocation recommendations.',
      datasetDetails: {
        source: 'Multi-platform social media marketing campaign exports spanning 180 campaign flights across Meta, LinkedIn, and YouTube channels.',
        schema: [
          'Campaign_ID: Unique campaign identifier',
          'Platform: Meta / LinkedIn / YouTube',
          'Ad_Format: Video / Carousel / Static Image',
          'Spend_INR: Total ad spend amount in INR',
          'Impressions: Total impressions delivered',
          'Clicks: Total user link clicks',
          'Conversions: Follower signups or target actions',
          'Launch_Date: Date campaign commenced'
        ],
        cleaningSteps: [
          'Sanitized mixed currency and string entries using Excel text functions (=TRIM, =CLEAN, =VALUE).',
          'Reconciled disparate platform date stamps into standardized dd-mmm-yyyy format.',
          'Constructed structured Excel Tables (Ctrl + T) to enable dynamic structured references in all calculations.',
          'Detected and resolved duplicate campaign IDs resulting from re-exported reporting batches.'
        ]
      },
      analyticalMethodology: [
        'Statistical correlation analysis using Excel CORREL formula across Spend, Impressions, and Follower Growth.',
        'Calculated fields in Pivot Tables to dynamically evaluate Click-Through Rate (CTR) and Cost Per Acquisition (CPA).',
        'Sensitivity tables modeling estimated follower acquisition across incremental budget scenarios.'
      ],
      technicalImplementation: {
        type: 'excel',
        codeTitle: 'Core Excel Analytical Formulas & Metrics',
        codeSnippet: `// 1. Correlation between Ad Spend and Follower Conversion
=CORREL(Table_Campaigns[Spend_INR], Table_Campaigns[Conversions])
// Result: 0.781 (Strong Positive Linear Relationship)

// 2. Dynamic Cost Per Acquisition (CPA)
=IFERROR(Table_Campaigns[@Spend_INR] / Table_Campaigns[@Conversions], 0)

// 3. Conditional Spend Efficiency Category
=IFS(
    [@CPA] <= 15, "High Efficiency",
    [@CPA] <= 25, "Moderate Efficiency",
    TRUE, "Low Efficiency / Review"
)

// 4. Multi-Condition Aggregated Channel Spend
=SUMIFS(Table_Campaigns[Spend_INR], Table_Campaigns[Platform], "Meta", Table_Campaigns[Ad_Format], "Video")`,
        codeExplanation: 'These structured Excel formulas calculate statistical relationships and dynamic unit costs without brittle cell coordinate references, enabling flexible recalculation across slicer selections.'
      },
      visualizationsDescription: 'Interactive Pivot Chart dashboards with slicers by platform and format, correlation bubble charts, and spend-efficiency distribution histograms.'
    }
  },
  {
    id: 'votesetu-decentralized-voting-app',
    title: 'VoteSetu — Decentralized Voting Application',
    category: ['Machine Learning'], // classified under technical projects
    shortDescription: 'Blockchain-powered tamper-proof voting system engineered with Solidity smart contracts, React.js frontend, Node.js backend, and MongoDB metadata storage.',
    technologies: ['React.js', 'Solidity', 'Ethereum', 'Node.js', 'MongoDB', 'Ethers.js', 'Hardhat'],
    problem: 'Traditional centralized digital voting systems rely on blind trust in single central authorities and are vulnerable to database tampering, administrative manipulation, and lack of public auditability.',
    whatIDid: [
      'Developed and tested Ethereum smart contracts in Solidity with built-in voter verification mappings to cryptographically prevent double-voting.',
      'Authored 17 passing Hardhat unit tests validating contract deployment, candidate registration, time-gated election voting, and result accuracy.',
      'Built a responsive web interface in React.js and Ethers.js for MetaMask wallet authentication and on-chain vote casting.',
      'Designed a hybrid architecture storing lightweight election metadata in MongoDB while maintaining immutable vote records exclusively on-chain.'
    ],
    findings: [
      'Smart contract architecture successfully eliminated single points of failure by distributing vote counting across Ethereum nodes.',
      'Hardhat test suite verified 100% pass rate across 17 unit test scenarios, including edge cases for expired election voting and duplicate attempts.',
      'Hybrid data architecture reduced gas consumption by over 65% compared to storing lengthy text metadata on-chain.'
    ],
    businessRecommendations: [
      'Adopt decentralized consensus protocols for high-stakes governance polls, student body elections, and shareholder voting where auditability is critical.',
      'Deploy on Layer-2 networks (such as Polygon or Arbitrum) to reduce transaction gas fees for broad public adoption.',
      'Incorporate zero-knowledge proofs (ZKPs) in subsequent versions to enable full voter ballot privacy while retaining verification.'
    ],
    limitationsAndFuture: [
      'Mainnet deployment requires users to maintain funded Ethereum wallets for gas fees; Layer-2 or meta-transaction sponsorship is recommended.',
      'Voter identity is currently bound to pseudonymous wallet addresses rather than verified national identity credentials.'
    ],
    featured: false,
    isTechnicalProject: true,
    thumbnailGradient: 'from-slate-700 via-indigo-900 to-slate-900',
    iconName: 'ShieldCheck',
    metrics: [
      { label: 'Unit Tests Passing', value: '17 / 17', subtext: 'Comprehensive test suite' },
      { label: 'Gas Optimization', value: '-65%', subtext: 'Hybrid on/off-chain model' },
      { label: 'Double-Voting Risk', value: '0.0%', subtext: 'Cryptographically enforced' }
    ],
    links: [
      {
        label: 'View Case Study',
        url: '#casestudy-votesetu-decentralized-voting-app',
        type: 'casestudy',
        isVerified: true,
        notes: 'Smart contract architecture, MongoDB schema, and viva documentation.'
      },
      {
        label: 'Verified GitHub Repository',
        url: 'https://github.com/PortgsDace/btech-final-project',
        type: 'github',
        isVerified: true,
        notes: 'Full source code: contracts, tests, React frontend, Express backend.'
      }
    ],
    caseStudy: {
      overview: 'VoteSetu was created as a final-year B.Tech Capstone project demonstrating advanced software engineering, distributed systems, and cryptographic consensus. It implements a tamper-proof election system ensuring complete transparency, auditability, and decentralization.',
      businessObjective: 'Eliminate vulnerabilities inherent in traditional centralized election systems through self-executing smart contracts and cryptographic wallet authentication.',
      datasetDetails: {
        source: 'Hybrid database architecture: MongoDB off-chain document store for rich election metadata and Ethereum blockchain state for immutable vote tallies.',
        schema: [
          'MongoDB Election Collection: name, description, startTime, endTime, contractElectionId, status',
          'MongoDB Candidate Collection: name, party, electionId, contractCandidateId',
          'Solidity On-Chain State: mapping(uint256 => mapping(address => bool)) hasVoted',
          'Solidity Events: VoteCast(electionId, candidateId, voter), ElectionCreated(electionId)'
        ],
        cleaningSteps: [
          'Validated election start and end timestamp ranges prior to blockchain deployment.',
          'Sanitized candidate registration payloads to prevent script injection on the web portal.',
          'Strict segregation: votes are NEVER stored or modified in MongoDB, guaranteeing zero central administrative tampering.'
        ]
      },
      analyticalMethodology: [
        'Cryptographic wallet verification via MetaMask and Ethers.js message signing.',
        'State machine workflow: 0 = Upcoming, 1 = Active, 2 = Ended.',
        'Gas profiling across contract functions to optimize Ethereum transaction execution.'
      ],
      technicalImplementation: {
        type: 'blockchain',
        codeTitle: 'Solidity Smart Contract: Double-Voting Prevention Logic',
        codeSnippet: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VotingSystem {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    struct Election {
        uint256 id;
        string name;
        uint256 startTime;
        uint256 endTime;
        bool exists;
    }

    address public owner;
    uint256 public electionCount;
    
    // electionId => candidateId => Candidate
    mapping(uint256 => mapping(uint256 => Candidate)) public candidates;
    // electionId => voterAddress => hasVoted
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event VoteCast(uint256 indexed electionId, uint256 indexed candidateId, address indexed voter);

    modifier electionActive(uint256 _electionId) {
        require(block.timestamp >= elections[_electionId].startTime, "Election has not started");
        require(block.timestamp <= elections[_electionId].endTime, "Election has ended");
        _;
    }

    function vote(uint256 _electionId, uint256 _candidateId) 
        external 
        electionActive(_electionId) 
    {
        require(!hasVoted[_electionId][msg.sender], "Error: Voter has already cast a ballot in this election");
        require(candidates[_electionId][_candidateId].id != 0, "Error: Invalid candidate");

        hasVoted[_electionId][msg.sender] = true;
        candidates[_electionId][_candidateId].voteCount += 1;

        emit VoteCast(_electionId, _candidateId, msg.sender);
    }
}`,
        codeExplanation: 'The Solidity contract utilizes an immutable on-chain mapping `hasVoted[electionId][msg.sender]` combined with function modifiers to guarantee that no wallet address can cast more than one ballot, with all votes permanently logged in transaction receipts.'
      },
      visualizationsDescription: 'Architecture diagram comparing on-chain vs. off-chain storage, Hardhat test execution console logs, and real-time live election vote tally cards.'
    }
  }
];
