/* =========================================================================
   Supply Chain for Managers — Midsem prep · lessons, calculators, map
   One lesson per TOPICS id. Lessons teach; the quiz checks.
   ========================================================================= */

const LESSONS={
 why:{eyebrow:'Section 01',title:'Why Managers Need Supply Chain',sub:'You may delegate execution. You cannot delegate the customer outcome.',
  steps:[
   {type:'text',title:'The definition to write in the exam',
    body:'A supply chain is the <b>connected network of organisations, people, facilities, information, money and activities</b> that converts <b>customer demand into customer fulfilment</b>. The promise is product, quantity, quality, place and time. <b>The click creates an order; the supply chain creates the ability to fulfil it.</b>'},
   {type:'table',title:'Vocabulary: one question each',head:['Term','Main question'],
    rows:[['Procurement','What do we buy, from whom, on what terms?'],['Operations','How do we convert inputs into output?'],['Logistics','How do we move and store?'],['Distribution','How do we make it available through channels?'],['Supply chain','How do all participants fulfil demand together?'],['Value chain','How does the firm create value across all activities, including marketing and service?']]},
   {type:'table',title:'What each manager role misses',head:['Role','Missing question','Consequence'],
    rows:[['Category','What is saleable and replenishable?','Stock-out, cancellations, lost visibility'],['Retail','Where will each SKU sell?','Excess and lost full-price sales together'],['Key account','What remains after fees, returns and cash delay?','Negative contribution, blocked cash']]},
   {type:'watch',title:'The trap',body:'"Inventory exists, so we can promise it." Before any commercial promise, check <b>saleable stock, committed stock, replenishment lead time, fulfilment capacity and a failure rule</b>.'}]},

 net:{eyebrow:'Section 02',title:'Network, Flows & Lead Time',sub:'The word is chain; the reality is a network.',
  steps:[
   {type:'text',title:'Nodes, links, tiers',
    body:'<b>Nodes</b> are places where product is made, stored, sold or returned. <b>Links</b> carry product, information and money. <b>Upstream</b> is towards the source, <b>downstream</b> towards the consumer, and both depend on where you stand. Tier 1 supplies you directly; Tier 2 supplies Tier 1. <b>Three Tier 1 suppliers on one Tier 2 source = one point of failure.</b>'},
   {type:'table',title:'Three flows',head:['Flow','Carries','Typical failure'],
    rows:[['Physical','Materials, WIP, finished goods, returns','Late, damaged, wrong place'],['Information','Forecasts, orders, stock records, tracking','Wrong stock record, wrong address'],['Cash','Payments, credit, commissions, refunds','Delayed settlement, refund stuck']]},
   {type:'formula',pill:'End-to-end lead time = slowest parallel path + sequential steps after it',
    legend:[['Parallel buys','take the max, not the sum'],['Dependencies','dispatch waits for quality release; delivery waits for a correct address']]},
   {type:'watch',title:'The trap',body:'<b>Inventory ≠ availability.</b> Stock may be damaged, on quality hold, reserved, expired, mis-recorded or simply in the wrong city. Availability = right product, quantity, condition, location, within the promised time.'}]},

 perf:{eyebrow:'Section 03',title:'Four Outcomes & Trade-offs',sub:'Every operating decision changes more than one outcome.',
  steps:[
   {type:'table',title:'The four outcomes',head:['Outcome','Question'],
    rows:[['Availability','Can the customer buy it where and when needed?'],['Service','Did we meet the promised quantity, condition and time?'],['Inventory','How much stock and cash sit in the network?'],['Total cost','What did the complete fulfilment cost?']]},
   {type:'text',title:'The case method (five questions)',
    body:'1. What exactly is the <b>promise</b>? 2. Which <b>constraint</b> blocks it (stock, capacity, lead time, information)? 3. What <b>options</b> exist (demand, supply, position, capacity, time)? 4. What does each do to the <b>four outcomes</b>? 5. <b>Decision rule</b>: we protect ___, we compromise ___, we manage the risk by ___.'},
   {type:'formula',pill:'OTIF = orders both on time AND in full ÷ total orders',
    legend:[['Against','the agreed promise; a split is valid only if accepted before the due time'],['Not','on-time % × in-full %; count the orders']]},
   {type:'table',title:'Caselet patterns',head:['Situation','Winning move'],
    rows:[['Demand surge, capacity short','Segment the promise; time and capacity are the buffers'],['Promotion > feasible supply','Cap at saleable + makeable; reshape the rest'],['Stock high, sizes missing','Reallocate by store-SKU sell-through before buying'],['Cheaper import, long lead','Dual source: import base, local for flex'],['Key account short','Make the trade-off explicit; agree a split in writing'],['High returns','Fix the cause and speed up disposition']]},
   {type:'watch',title:'The trap',body:'<b>Local optimisation</b>: a function hits its metric (price, batch cost, freight bill, inventory days) while the system pays in stock-outs, blocked cash or service failure.'}]},

 pil:{eyebrow:'Section 04',title:'The Four Pillars',sub:'If even one pillar fails, the customer experiences a flop.',
  steps:[
   {type:'table',title:'Pillars and their question',head:['Pillar','Question'],
    rows:[['1 · Sourcing & manufacturing','Can we source inputs and make the right quantity, quality and time?'],['2 · Demand & supply planning','Is there an agreed forecast, or just enthusiasm?'],['3 · Warehousing & inventory','What is customer-ready, not merely owned?'],['4 · Distribution & logistics','Right place, right condition, promised time?']]},
   {type:'watch',title:'The five gaps',body:'Enthusiasm ≠ forecast · Order ≠ capacity · Inventory ≠ availability · Plan ≠ customer reality · Right product ≠ right place. <b>Never stop a diagnosis at "delivery failure".</b>'}]},

 prod:{eyebrow:'Section 05',title:'Production Models',sub:'The right model fits the product, the demand pattern and how long the customer will wait.',
  steps:[
   {type:'table',title:'The continuum',head:['Model','Complete before order','After order','Main risk'],
    rows:[['MTS','Finished goods','Pick and deliver','Forecast (excess or stock-out)'],['ATO','Common modules','Configure / assemble','Component balancing'],['MTO','Materials + capacity','Manufacture','Lead time + capacity'],['ETO','Knowledge + suppliers','Design, engineer, build','Scope + project']]},
   {type:'text',title:'Push, pull, decoupling point',
    body:'<b>Push</b> = forecast releases work (exposure: excess stock). <b>Pull</b> = actual order releases work (exposure: delay). Most chains are <b>hybrid: push upstream, pull downstream</b>. The <b>customer-order decoupling point</b> is where forecast-driven work becomes order-driven work. Locate it with one question: <b>what is complete before the order arrives?</b> Moving it upstream cuts finished-goods risk but lengthens the wait.'},
   {type:'table',title:'Postponement',head:['Type','What waits'],
    rows:[['Assembly','Modules; final build after order'],['Form','Colour, flavour, cut; e.g. tinting'],['Packaging','Common product; channel or festival sleeve later'],['Fulfilment','Pooled central stock; allocate to region later']]},
   {type:'watch',title:'The trap',body:'The selling channel does not set the model: one store can sell MTS bread, ATO birthday cakes and MTO wedding cakes. And if production takes longer than the customer will wait, some work <b>must</b> happen before the order.'}]},

 chan:{eyebrow:'Section 06',title:'Channel Models',sub:'A channel decides where stock sits, who fulfils, and who carries the cost and risk.',
  steps:[
   {type:'table',title:'Five models',head:['Model','Strength','Main exposure'],
    rows:[['D2C','Data and relationship control','Acquisition + fulfilment cost'],['Retail','Trial, immediate possession','Store stock, fixed cost'],['Marketplace','Reach, demand aggregation','Fees, returns, limited control'],['FMCG distribution','Wide coverage','Multi-node visibility and execution'],['Quick commerce','Speed through proximity','Local stock, density, capacity']]},
   {type:'formula',pill:'D2C contribution = price − product − pick/pay − shipping − CAC − returns/support',
    legend:[['CAC','usually the biggest line after product cost'],['Judge','marketplaces and D2C on contribution, never gross sales']]},
   {type:'text',title:'Where should stock wait?',
    body:'<b>Pooled (central)</b>: lower safety stock, wider range, slower; suits uncertain long-tail demand. <b>Duplicated (regional, store, dark store)</b>: faster, but more cash and imbalance risk; suits dense, predictable or urgent demand. Dark stores hold deep stock of high-velocity SKUs and limit low-velocity ones.'},
   {type:'watch',title:'The trap',body:'Platform fulfilment moves stock into the platform\'s warehouse, but the <b>seller usually still funds it</b>. And distributor stock is not shelf availability: outlet execution converts reach into availability.'}]},

 dp:{eyebrow:'Section 07',title:'Demand Planning',sub:'One number leads to the next: run rate → baseline → forecast → regions → national → target gap.',
  steps:[
   {type:'formula',pill:'Run rate = relevant demand ÷ comparable time units',
    legend:[['Exclude','one-off promotions, bulk or event orders'],['Normalise','stock-out weeks: sales ÷ days available × 7']]},
   {type:'formula',pill:'Baseline = monthlyised run rate − non-repeat demand + missing repeat demand',
    legend:[['Monthlyise','weekly ÷ 7 × 30'],['Add back','only lost demand not already captured elsewhere (shifted volume is already in sales)'],['Rule','never adjust the same distortion twice']]},
   {type:'formula',pill:'Forecast = baseline × trend × seasonal × price + event',
    legend:[['Multiply','effects that move the whole base (and compound them)'],['Add','known incremental volume; weight by probability, subtract cannibalisation']]},
   {type:'calc',calc:'fc',title:'Live: build a month\'s forecast'},
   {type:'text',title:'Regions and reconciliation',
    body:'Apply each region\'s factors to <b>its own baseline</b> and sum (bottom-up); never average factors. Then reconcile: <b>add</b> demand no region owns (national e-commerce, key accounts), <b>remove</b> duplicates, sense-check against the top-down number. <b>Supply limits belong in the supply plan, not the forecast.</b>'},
   {type:'watch',title:'The trap',body:'Trend = sustained direction. Seasonality = timing. Event = temporary spike. A single hot week is not a trend, and a straight-line run-rate projection ignores phases that change pace.'}]},

 sop:{eyebrow:'Section 08',title:'S&OP & Forecast Quality',sub:'Demand planning produces a forecast. S&OP produces a decision.',
  steps:[
   {type:'formula',pill:'WAPE = Σ|F − A| ÷ ΣA      Bias = Σ(F − A) ÷ ΣA',
    legend:[['WAPE','how wrong: size of error, direction ignored'],['Bias','which way: + overforecast, − underforecast; errors can cancel'],['Zero bias','is not a good forecast if WAPE is high']]},
   {type:'calc',calc:'wape',title:'Live: WAPE and bias'},
   {type:'table',title:'Four numbers, never mixed',head:['Number','Answers','Approved?'],
    rows:[['Forecast','What is likely to sell','No; keep unbiased'],['Target','What we want','Yes, as aspiration'],['Supply plan','What ops can deliver','Yes, after constraints'],['Operating commitment','What we sell, make, buy, fund','Yes; one S&OP decision']]},
   {type:'text',title:'What a good S&OP decision contains',
    body:'Retain the unbiased forecast; commit to what serves the base case; <b>buy upside optionality</b> (e.g. contract capacity booked only if a trigger is met before its deadline); give the target gap <b>named actions</b>; give every assumption an <b>owner, evidence, impact if wrong, review date and trigger</b>.'},
   {type:'watch',title:'The trap',body:'Raising the forecast to match the target. The gap is managed work, not a relabelled number. And flexibility has a deadline: after the freeze point, changes become cancellations, expediting or excess.'}]},

 src:{eyebrow:'Section 09',title:'Sourcing & Capacity',sub:'The cheapest unit can create the most expensive system.',
  steps:[
   {type:'formula',pill:'Available capacity = effective capacity − committed load − known constraints',
    legend:[['Design','nameplate, ideal conditions'],['Effective','after planned downtime, changeovers, normal losses']]},
   {type:'formula',pill:'Landed cost = price + freight + duty + financing + quality/obsolescence',
    legend:[['Compare','landed, plus lead time and flexibility, never the quote alone']]},
   {type:'table',title:'Own, contract, import',head:['Criterion','Own','Contract','Import'],
    rows:[['Control','High','Medium','Low–medium'],['Fixed investment','High','Low','Low'],['Lead time','Shortest','Medium','Longest'],['Flexibility','Internal capacity','Optionality','Low after PO'],['Best fit','Core, stable volume','Variable volume','Cost or capability, stable demand']]},
   {type:'text',title:'MOQ vs batch size',
    body:'<b>MOQ</b> is the minimum a supplier accepts commercially; high MOQ with low demand means working-capital and obsolescence risk (MOQ ÷ monthly demand = months of stock). <b>Batch size</b> is what is made before a changeover: small batches buy flexibility at higher conversion cost. Quality is a supply-chain variable too, since yield loss consumes capacity.'},
   {type:'watch',title:'The trap',body:'"Import is cheaper on the quote." Add freight, duty, financing and quality, then check whether the lead time even meets the launch. Recommended pattern: <b>own the base, contract for flexibility, import selectively</b>.'}]},
};

const CALCS={
 fc:{hint:'Move the factors and watch the difference between multiplying and adding.',
  ins:[{k:'b',nm:'Baseline',type:'number',def:2000},
       {k:'tr',nm:'Trend %',type:'range',min:-10,max:20,step:1,def:10},
       {k:'se',nm:'Seasonal %',type:'range',min:-20,max:30,step:1,def:20},
       {k:'pr',nm:'Price effect %',type:'range',min:-15,max:10,step:1,def:-10},
       {k:'ev',nm:'Event units',type:'number',def:150}],
  run:v=>{
   const m=(1+v.tr/100)*(1+v.se/100)*(1+v.pr/100), f=v.b*m+ +v.ev, a=v.b*(1+(v.tr+v.se+v.pr)/100)+ +v.ev;
   return 'Forecast = '+v.b+' × '+(1+v.tr/100).toFixed(2)+' × '+(1+v.se/100).toFixed(2)+' × '+(1+v.pr/100).toFixed(2)+' + '+v.ev+
    '<span class="big">'+Math.round(f).toLocaleString('en-IN')+'</span>'+
    '<span class="vd">Adding the percentages instead would give '+Math.round(a).toLocaleString('en-IN')+'; a gap of '+Math.round(a-f)+' from ignoring compounding.</span>';}},
 wape:{hint:'Type four forecasts against an actual of 100 each. Watch errors cancel in bias but not in WAPE.',
  ins:[{k:'f1',nm:'Forecast M1',type:'number',def:120},{k:'f2',nm:'Forecast M2',type:'number',def:90},
       {k:'f3',nm:'Forecast M3',type:'number',def:110},{k:'f4',nm:'Forecast M4',type:'number',def:100}],
  run:v=>{
   const F=[+v.f1,+v.f2,+v.f3,+v.f4], e=F.map(x=>x-100), abs=e.reduce((s,x)=>s+Math.abs(x),0), net=e.reduce((s,x)=>s+x,0);
   const w=abs/400*100, b=net/400*100;
   const d=b>2?['warn','Positive bias: leaning to overforecast; excess stock and blocked cash.']:b<-2?['bad','Negative bias: leaning to underforecast; stock-outs and expediting.']:['ok','Near-zero bias, but check WAPE before calling it good.'];
   return 'errors (F − A): '+e.join(', ')+'\nWAPE = '+abs+' ÷ 400   Bias = '+net+' ÷ 400'+
    '<span class="big">WAPE '+w.toFixed(1)+'% · Bias '+(b>0?'+':'')+b.toFixed(1)+'%</span>'+
    '<span class="vd '+d[0]+'">'+d[1]+'</span>';}},
};

const CMAP=[
 {h:'★ Every formula in one place',
  note:'If a question hands you numbers, it wants one of these.',
  rows:[
   ['Saleable stock','<b>recorded − holds − damaged − reserved − wrong location</b>','8,000 − 1,500 − 900 = <b>5,600</b>'],
   ['OTIF','<b>orders on time AND in full ÷ orders</b>','count orders; never multiply the two rates'],
   ['Lead time','<b>max(parallel paths) + sequential steps</b>','max(14, 9) + 14 = <b>28 days</b>'],
   ['Run rate','<b>comparable demand ÷ comparable periods</b>','stock-out week: sales ÷ days × 7'],
   ['Baseline','<b>monthlyised − non-repeat + missing repeat</b>','lost × (1 − shifted %) only'],
   ['Forecast','<b>base × trend × season × price + event</b>','2,000 × 1.1 × 1.2 × 0.9 + 150 = <b>2,526</b>'],
   ['Probable event','<b>potential × probability − cannibalised</b>','80 × 75% − 15 = <b>45</b>'],
   ['WAPE / Bias','<b>Σ|F−A| ÷ ΣA</b> · <b>Σ(F−A) ÷ ΣA</b>','+ bias = overforecast'],
   ['Available capacity','<b>effective − committed − constraints</b>','50k − 6k − 6k − 3k = <b>35k</b>'],
   ['Landed cost','<b>price + freight + duty + finance + quality</b>','compare landed, not quotes'],
   ['D2C contribution','<b>price − COGS − pick/pay − ship − CAC − returns</b>','']]},
 {h:'Foundations (1A · Deck III · Deck II)',
  note:'Definitions and the gaps managers miss.',
  rows:[
   ['Supply chain','connected network converting demand into fulfilment',''],
   ['Upstream / downstream','relative to the focal firm','Tier 2 supplies Tier 1'],
   ['Hidden risk','several Tier 1 on one Tier 2','single point of failure'],
   ['Three flows','physical · information · cash (+ reverse)','info fast only helps if accurate and acted on'],
   ['Four pillars','source & make · plan · hold · deliver','one pillar fails → customer flop'],
   ['Local optimisation','function wins, system loses','judge on total cost + customer impact']]},
 {h:'Performance & trade-offs (1B)',
  note:'Read all four outcomes, every time.',
  rows:[
   ['Four outcomes','availability · service · inventory · total cost',''],
   ['Surge > capacity','segment the promise','time and capacity are the buffers'],
   ['Promo > supply','cap at saleable + makeable','reshape the rest'],
   ['Stock high, sizes missing','reallocate first','transfer if margin > transfer cost'],
   ['Split shipment','valid only if agreed before due time','else OTIF fail'],
   ['Returns','hidden inventory in the reverse pipeline','fix cause, speed disposition']]},
 {h:'Models (2A · 2B)',
  note:'Production model, demand trigger and channel are three separate choices.',
  rows:[
   ['MTS / ATO / MTO / ETO','FG · modules · materials · capability wait for the order','forecast · balancing · lead time · scope risk'],
   ['Decoupling point','what is complete before the order?','upstream = less FG risk, longer wait'],
   ['Push / pull','forecast vs actual order','excess stock vs delay'],
   ['Postponement','assembly · form · packaging · fulfilment','needs fast, reliable delayed stage'],
   ['Pooled vs duplicated','cash and range vs speed','long tail → central'],
   ['Platform fulfilment','platform executes, seller funds stock','']]},
 {h:'Exam-day block',
  note:'The sentences that earn the last mark.',
  rows:[
   ['Decision rule','we protect ___, we compromise ___, we manage the risk by ___'],
   ['Forecast vs target','keep the forecast unbiased; give the gap owned actions'],
   ['S&OP output','decisions, owners, dates and triggers, not a meeting'],
   ['Sourcing','own the base, contract for flexibility, import selectively'],
   ['Availability','customers buy a specific SKU in a reachable location, not national inventory']]},
];
