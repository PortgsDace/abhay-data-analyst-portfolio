import { useState } from 'react';
import { 
  Terminal, 
  Play, 
  Sliders, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw
} from 'lucide-react';

interface QueryPreset {
  id: string;
  name: string;
  category: string;
  sql: string;
  executionTimeMs: number;
  rowsScanned: number;
  headers: string[];
  rows: (string | number)[][];
  businessTakeaway: string;
}

const PRESET_QUERIES: QueryPreset[] = [
  {
    id: 'corridor-breach',
    name: 'Top Delayed Delivery Corridors & Breach %',
    category: 'Logistics SQL',
    sql: `WITH CleanedTransit AS (
    SELECT 
        s.shipment_id,
        h_orig.hub_name AS origin_hub,
        h_dest.hub_name AS dest_hub,
        TIMESTAMPDIFF(HOUR, s.dispatch_time, s.delivery_time) AS transit_hours,
        sla.max_allowed_transit_hours
    FROM shipments s
    JOIN hubs h_orig ON s.origin_hub_id = h_orig.hub_id
    JOIN hubs h_dest ON s.destination_hub_id = h_dest.hub_id
    JOIN slas sla ON h_orig.zone = sla.origin_zone AND h_dest.zone = sla.destination_zone
    WHERE s.status = 'DELIVERED'
)
SELECT 
    origin_hub,
    dest_hub,
    COUNT(shipment_id) AS total_orders,
    ROUND(AVG(transit_hours), 1) AS avg_hours,
    ROUND(100.0 * SUM(CASE WHEN transit_hours > max_allowed_transit_hours THEN 1 ELSE 0 END) / COUNT(shipment_id), 2) AS breach_rate_pct,
    DENSE_RANK() OVER (ORDER BY ROUND(100.0 * SUM(CASE WHEN transit_hours > max_allowed_transit_hours THEN 1 ELSE 0 END) / COUNT(shipment_id), 2) DESC) AS rank_severity
FROM CleanedTransit
GROUP BY origin_hub, dest_hub
HAVING COUNT(shipment_id) >= 150
ORDER BY breach_rate_pct DESC
LIMIT 5;`,
    executionTimeMs: 14,
    rowsScanned: 18450,
    headers: ['ORIGIN_HUB', 'DEST_HUB', 'TOTAL_ORDERS', 'AVG_HOURS', 'BREACH_RATE_PCT', 'RANK_SEVERITY'],
    rows: [
      ['Kolkata Central', 'Patna Hub', 342, 38.4, '29.60%', 1],
      ['Delhi Gateway', 'Jaipur South', 814, 26.2, '18.40%', 2],
      ['Mumbai West', 'Ahmedabad Port', 1240, 22.6, '11.80%', 3],
      ['Bengaluru Tech', 'Hyderabad Air', 950, 19.1, '7.20%', 4],
      ['Delhi Gateway', 'Chandigarh North', 1620, 14.2, '4.10%', 5]
    ],
    businessTakeaway: 'The Kolkata → Patna corridor suffers from the highest SLA breach rate (29.6%) primarily due to transit dwell times at the interchange facility.'
  },
  {
    id: 'customer-retention',
    name: '90-Day Customer Cohort Retention',
    category: 'Retail BI',
    sql: `SELECT 
    DATE_FORMAT(c.signup_date, '%Y-Q%q') AS signup_cohort,
    COUNT(DISTINCT c.customer_id) AS initial_customers,
    COUNT(DISTINCT CASE WHEN o.order_date <= DATE_ADD(c.signup_date, INTERVAL 30 DAY) THEN o.customer_id END) AS retained_30d,
    COUNT(DISTINCT CASE WHEN o.order_date <= DATE_ADD(c.signup_date, INTERVAL 60 DAY) THEN o.customer_id END) AS retained_60d,
    COUNT(DISTINCT CASE WHEN o.order_date <= DATE_ADD(c.signup_date, INTERVAL 90 DAY) THEN o.customer_id END) AS retained_90d,
    ROUND(100.0 * COUNT(DISTINCT CASE WHEN o.order_date <= DATE_ADD(c.signup_date, INTERVAL 90 DAY) THEN o.customer_id END) / COUNT(DISTINCT c.customer_id), 1) AS retention_90d_pct
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE c.signup_date >= '2025-01-01'
GROUP BY signup_cohort
ORDER BY signup_cohort ASC;`,
    executionTimeMs: 19,
    rowsScanned: 45200,
    headers: ['SIGNUP_COHORT', 'INITIAL_USERS', 'RETAINED_30D', 'RETAINED_60D', 'RETAINED_90D', 'RETENTION_90D_PCT'],
    rows: [
      ['2025-Q1', 4200, 2810, 1720, 1260, '30.0%'],
      ['2025-Q2', 4650, 3160, 1950, 1440, '31.0%'],
      ['2025-Q3', 5100, 3620, 2240, 1680, '32.9%'],
      ['2025-Q4', 5800, 4290, 2720, 2030, '35.0%']
    ],
    businessTakeaway: 'Customer retention improves each progressive quarter as loyalty onboarding initiatives took hold in 2025, reaching 35.0% 90-day retention.'
  },
  {
    id: 'financial-overdraft',
    name: 'High-Risk Account Overdraft Clustering',
    category: 'Risk Analytics',
    sql: `SELECT 
    a.account_id,
    a.account_tier,
    COUNT(t.transaction_id) AS total_tx_30d,
    SUM(CASE WHEN t.is_overdraft = 1 THEN 1 ELSE 0 END) AS overdraft_events_30d,
    ROUND(AVG(t.running_balance), 2) AS avg_balance_inr,
    CASE 
        WHEN SUM(CASE WHEN t.is_overdraft = 1 THEN 1 ELSE 0 END) >= 3 THEN 'CRITICAL_RISK'
        WHEN SUM(CASE WHEN t.is_overdraft = 1 THEN 1 ELSE 0 END) >= 1 THEN 'ELEVATED_WATCH'
        ELSE 'NORMAL'
    END AS risk_classification
FROM accounts a
JOIN transactions t ON a.account_id = t.account_id
WHERE t.transaction_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
GROUP BY a.account_id, a.account_tier
HAVING SUM(CASE WHEN t.is_overdraft = 1 THEN 1 ELSE 0 END) >= 2
ORDER BY overdraft_events_30d DESC, avg_balance_inr ASC
LIMIT 4;`,
    executionTimeMs: 22,
    rowsScanned: 32900,
    headers: ['ACCOUNT_ID', 'TIER', 'TX_COUNT', 'OVERDRAFT_30D', 'AVG_BALANCE_INR', 'RISK_STATUS'],
    rows: [
      ['ACC-90412', 'Silver', 84, 6, -1450.00, 'CRITICAL_RISK'],
      ['ACC-77189', 'Bronze', 49, 4, -820.50, 'CRITICAL_RISK'],
      ['ACC-62310', 'Gold', 112, 3, 210.00, 'CRITICAL_RISK'],
      ['ACC-41095', 'Silver', 65, 2, 450.00, 'ELEVATED_WATCH']
    ],
    businessTakeaway: 'Accounts with >=3 overdraft events represent a 4.6x higher historical probability of complete delinquency; auto-flagging allows preemptive restructuring.'
  }
];

export const AnalyticsSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sql' | 'dax'>('sql');
  const [selectedPreset, setSelectedPreset] = useState<QueryPreset>(PRESET_QUERIES[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(true);

  // DAX Simulator state
  const [aov, setAov] = useState<number>(1850);
  const [purchaseFreq, setPurchaseFreq] = useState<number>(4.2);
  const [retentionPct, setRetentionPct] = useState<number>(32);
  const [spanYears, setSpanYears] = useState<number>(2.5);

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasExecuted(true);
    }, 400);
  };

  // DAX Calculation
  const clv = Math.round(aov * purchaseFreq * spanYears * (retentionPct / 100));
  const estimatedAnnualValue = Math.round(aov * purchaseFreq);

  return (
    <section id="sandbox" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wide uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Analytical Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Live SQL & Metric Explorer
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Test how I structure relational queries and engineer DAX business metrics. Execute sample queries or adjust cohort parameters to see simulated outputs.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        {/* Outer Sandbox Card */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Subheader Switcher */}
          <div className="px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('sql')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'sql'
                    ? 'bg-slate-900 text-white dark:bg-brand-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Interactive SQL Query Runner</span>
              </button>
              <button
                onClick={() => setActiveTab('dax')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'dax'
                    ? 'bg-slate-900 text-white dark:bg-brand-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Power BI DAX Metric Simulator</span>
              </button>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-500" />
              <span>Simulated Operational Datasets</span>
            </div>
          </div>

          {/* TAB 1: SQL QUERY RUNNER */}
          {activeTab === 'sql' && (
            <div className="p-6 space-y-6">
              
              {/* Query Preset Selectors */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 block">
                  Select Business Question to Run:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {PRESET_QUERIES.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedPreset(preset);
                        setHasExecuted(true);
                      }}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedPreset.id === preset.id
                          ? 'bg-brand-50/80 dark:bg-brand-950/60 border-brand-500 dark:border-brand-600 shadow-sm'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {preset.category}
                        </span>
                        {selectedPreset.id === preset.id && (
                          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                        {preset.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SQL Code Box with Run Action */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 font-mono ml-2">MySQL 8.0 Engine</span>
                  </div>

                  <button
                    onClick={handleRunQuery}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-sm transition-all disabled:opacity-50"
                  >
                    <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Running...' : 'Execute Query'}</span>
                  </button>
                </div>

                <div className="p-4 font-mono text-xs text-slate-200 overflow-x-auto max-h-60">
                  <pre className="whitespace-pre">{selectedPreset.sql}</pre>
                </div>
              </div>

              {/* Results Console & Table */}
              {hasExecuted && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Query Succeeded
                      </span>
                      <span>Execution: <strong className="text-slate-700 dark:text-slate-300">{selectedPreset.executionTimeMs}ms</strong></span>
                      <span>Rows Scanned: <strong className="text-slate-700 dark:text-slate-300">{selectedPreset.rowsScanned.toLocaleString()}</strong></span>
                    </div>
                    <span className="text-[11px] font-mono">Status: 200 OK</span>
                  </div>

                  {/* Tabulated Output Table */}
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto shadow-sm">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          {selectedPreset.headers.map((header: string) => (
                            <th key={header} className="px-4 py-2.5 font-mono">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                        {selectedPreset.rows.map((row: (string | number)[], idx: number) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors">
                            {row.map((cell: string | number, cIdx: number) => (
                              <td key={cIdx} className="px-4 py-2.5 text-slate-800 dark:text-slate-200 whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Business Interpretation Callout */}
                  <div className="p-3.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-teal-800 dark:text-teal-300 block mb-0.5">
                        Analytical Takeaway for Decision Makers:
                      </span>
                      {selectedPreset.businessTakeaway}
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: POWER BI DAX SIMULATOR */}
          {activeTab === 'dax' && (
            <div className="p-6 space-y-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Interactive Controls (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Adjust Customer Lifetime Value (CLV) Parameters
                    </h4>
                    <p className="text-xs text-slate-500">
                      Observe how retention lift, frequency, and basket size compound into multi-year customer value.
                    </p>
                  </div>

                  {/* Slider 1: Average Order Value */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">Average Order Value (AOV):</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">₹{aov.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="6000"
                      step="50"
                      value={aov}
                      onChange={(e) => setAov(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>₹500</span>
                      <span>₹6,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Annual Purchase Frequency */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">Annual Purchase Frequency:</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{purchaseFreq} orders / yr</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="10.0"
                      step="0.1"
                      value={purchaseFreq}
                      onChange={(e) => setPurchaseFreq(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>1 order</span>
                      <span>10 orders</span>
                    </div>
                  </div>

                  {/* Slider 3: 90-Day Retention % */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">90-Day Retention Cohort Rate:</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{retentionPct}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      step="1"
                      value={retentionPct}
                      onChange={(e) => setRetentionPct(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>10% (High Churn)</span>
                      <span>90% (Sticky Loyalty)</span>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={() => {
                      setAov(1850);
                      setPurchaseFreq(4.2);
                      setRetentionPct(32);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Baseline Defaults</span>
                  </button>
                </div>

                {/* Right: Calculated KPI Summary (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Power BI Simulated DAX Output
                    </span>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-brand-600 to-teal-600 text-white space-y-1">
                      <span className="text-xs text-white/80 font-medium">Estimated Customer Lifetime Value</span>
                      <div className="text-3xl font-extrabold tracking-tight">₹{clv.toLocaleString()}</div>
                      <span className="text-[11px] text-white/90">Modeled across 2.5-year retention lifecycle</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs">
                        <span className="text-slate-500 block">Annual Spend</span>
                        <strong className="text-sm font-bold text-slate-900 dark:text-white">₹{estimatedAnnualValue.toLocaleString()}</strong>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs">
                        <span className="text-slate-500 block">Implied Churn</span>
                        <strong className="text-sm font-bold text-rose-600">{(100 - retentionPct)}%</strong>
                      </div>
                    </div>

                    {/* The Underlying DAX Measure */}
                    <div className="p-3 rounded-xl bg-slate-950 font-mono text-[10px] text-slate-300 space-y-1 overflow-x-auto">
                      <div className="text-slate-500 font-sans font-bold">DAX Measure Implemented:</div>
                      <div>CLV = [AOV] * [PurchaseFrequency] * 2.5 * ([RetentionRate])</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
