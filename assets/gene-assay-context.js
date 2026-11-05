/* Gene-to-assay context — Stacks Advisory
 * Client-side only. Live sources, all public and keyless:
 *   - Open Targets Platform GraphQL  (gene-disease evidence)
 *   - NCBI E-utilities / PubMed      (recent epigenetic + biomarker assay literature)
 *   - ClinicalTrials.gov API v2      (trials using the gene/biomarker)
 * Editorial layer (not live): assay classes per gene, with sources named.
 * Nothing here diagnoses. Every panel links back to its source.
 */
(function () {
  'use strict';

  var OT = 'https://api.platform.opentargets.org/api/v4/graphql';
  var EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
  var CTG = 'https://clinicaltrials.gov/api/v2/studies';

  // Start set: JAK1/2 pathway. Add symbols here to extend; IDs are resolved live.
  var GENES = ['JAK2', 'JAK1', 'TYK2', 'JAK3', 'STAT3', 'STAT5B'];

  // Editorial assay map. Kept deliberately conservative: only well-established
  // gene-to-test relationships, each with the evidence type stated.
  var ASSAY_MAP = {
    JAK2: [
      { cls: 'Somatic variant (tissue / blood)', note: 'JAK2 V617F and exon 12 variants are standard work-up markers in myeloproliferative neoplasms; allele-specific PCR, ddPCR and NGS myeloid panels are the usual formats.' },
      { cls: 'Liquid biopsy variant calling', note: 'Detectable as a somatic variant in cfDNA, but clonal hematopoiesis is a confounder: a JAK2 call in plasma does not by itself localize to a solid tumor.' }
    ],
    JAK1: [
      { cls: 'Somatic variant (tumor genomic profiling)', note: 'Loss-of-function variants are studied as an immunotherapy-resistance mechanism (interferon signaling escape); gain-of-function variants occur in some leukemias. Typically captured on comprehensive genomic profiling panels.' }
    ],
    TYK2: [
      { cls: 'Germline association context', note: 'Common variants associate with autoimmune disease risk. Relevant to stratification research, not to a validated clinical assay.' }
    ],
    JAK3: [
      { cls: 'Germline / somatic variant', note: 'Germline loss-of-function causes SCID (newborn and immunodeficiency panels); somatic activating variants appear in some T-cell malignancies.' }
    ],
    STAT3: [
      { cls: 'Germline / somatic variant', note: 'Germline dominant-negative variants cause hyper-IgE syndrome; somatic activating variants occur in large granular lymphocytic leukemia and some T-cell lymphomas.' }
    ],
    STAT5B: [
      { cls: 'Somatic variant (hematologic)', note: 'Activating variants (e.g. N642H) are reported in T-cell neoplasms; usually covered by lymphoid or myeloid NGS panels.' }
    ]
  };

  var els = {};
  var state = { gene: null, token: 0 };

  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function link(href, text) {
    var a = el('a', null, text);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function setStatus(panel, msg) {
    clear(panel);
    panel.appendChild(el('p', 'gac-status', msg));
  }

  function fail(panel, what, href) {
    clear(panel);
    var p = el('p', 'gac-status gac-status--err', what + ' could not be reached just now. ');
    if (href) p.appendChild(link(href, 'Open the source directly'));
    panel.appendChild(p);
  }

  function getJSON(url, opts) {
    return fetch(url, opts).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  function gql(query, variables) {
    return getJSON(OT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query, variables: variables })
    }).then(function (j) {
      if (j.errors && j.errors.length) throw new Error(j.errors[0].message);
      return j.data;
    });
  }

  /* ---------- Panel 1: genetic evidence (Open Targets) ---------- */

  function loadEvidence(symbol, token) {
    var panel = els.evidence;
    setStatus(panel, 'Querying Open Targets for ' + symbol + '…');

    var searchQ = 'query S($q:String!){ search(queryString:$q, entityNames:["target"], page:{index:0,size:1}){ hits{ id name } } }';
    var targetQ = 'query T($id:String!){ target(ensemblId:$id){ approvedSymbol approvedName ' +
      'associatedDiseases(page:{index:0,size:8}){ count rows{ disease{ id name } score datatypeScores{ id score } } } } }';

    gql(searchQ, { q: symbol }).then(function (d) {
      var hit = d.search && d.search.hits && d.search.hits[0];
      if (!hit) throw new Error('No target match');
      return gql(targetQ, { id: hit.id }).then(function (t) { return { id: hit.id, t: t.target }; });
    }).then(function (res) {
      if (token !== state.token) return;
      var t = res.t;
      clear(panel);
      panel.appendChild(el('p', 'gac-lede', t.approvedSymbol + ' — ' + t.approvedName));
      panel.appendChild(el('p', 'gac-meta', t.associatedDiseases.count.toLocaleString() + ' associated diseases in the Open Targets Platform. Top 8 by overall association score:'));

      var table = el('table', 'gac-table');
      var head = el('tr');
      ['Disease', 'Score', 'Strongest evidence types'].forEach(function (h) { head.appendChild(el('th', null, h)); });
      table.appendChild(head);

      t.associatedDiseases.rows.forEach(function (r) {
        var tr = el('tr');
        var td = el('td');
        td.appendChild(link('https://platform.opentargets.org/evidence/' + encodeURIComponent(res.id) + '/' + encodeURIComponent(r.disease.id), r.disease.name));
        tr.appendChild(td);
        tr.appendChild(el('td', 'gac-num', r.score.toFixed(2)));
        var top = r.datatypeScores.slice().sort(function (a, b) { return b.score - a.score; })
          .slice(0, 2).map(function (d) { return d.id.replace(/_/g, ' '); }).join(', ');
        tr.appendChild(el('td', null, top));
        table.appendChild(tr);
      });
      panel.appendChild(table);
      panel.appendChild(el('p', 'gac-foot', 'Scores rank evidence strength, not clinical risk.'));
      panel.appendChild(link('https://platform.opentargets.org/target/' + encodeURIComponent(res.id), 'Full target profile on Open Targets'));
    }).catch(function () {
      if (token !== state.token) return;
      fail(panel, 'Open Targets', 'https://platform.opentargets.org/search?q=' + encodeURIComponent(symbol));
    });
  }

  /* ---------- Panel 2: assay map (editorial) + OpenOnco handoff ---------- */

  function renderAssays(symbol) {
    var panel = els.assays;
    clear(panel);
    var rows = ASSAY_MAP[symbol] || [];
    rows.forEach(function (r) {
      var item = el('div', 'gac-assay');
      item.appendChild(el('h4', null, r.cls));
      item.appendChild(el('p', null, r.note));
      panel.appendChild(item);
    });
    panel.appendChild(el('p', 'gac-foot', 'Editorial summary by Stacks Advisory from published literature. It names assay classes, not products or clinical recommendations.'));
    var p = el('p', 'gac-foot');
    p.appendChild(link('https://www.openonco.org/', 'Compare liquid biopsy tests on OpenOnco'));
    p.appendChild(document.createTextNode(' · '));
    p.appendChild(link('https://www.ncbi.nlm.nih.gov/clinvar/?term=' + encodeURIComponent(symbol + '[gene]'), 'ClinVar variants for ' + symbol));
    panel.appendChild(p);
  }

  /* ---------- Panel 3: recent epigenetic / biomarker assay literature (PubMed) ---------- */

  function loadLiterature(symbol, token) {
    var panel = els.lit;
    setStatus(panel, 'Searching PubMed for recent ' + symbol + ' assay literature…');

    var term = '(' + symbol + '[Title/Abstract]) AND (methylation[Title/Abstract] OR epigenetic[Title/Abstract] OR "cell-free DNA"[Title/Abstract] OR cfDNA[Title/Abstract]) AND (assay[Title/Abstract] OR biomarker[Title/Abstract] OR detection[Title/Abstract])';
    var s = EUTILS + 'esearch.fcgi?db=pubmed&retmode=json&retmax=6&sort=date&datetype=pdat&reldate=365&term=' + encodeURIComponent(term);

    getJSON(s).then(function (d) {
      var ids = d.esearchresult.idlist || [];
      var count = parseInt(d.esearchresult.count, 10) || 0;
      if (!ids.length) return { count: count, docs: [] };
      return getJSON(EUTILS + 'esummary.fcgi?db=pubmed&retmode=json&id=' + ids.join(',')).then(function (sm) {
        return { count: count, docs: ids.map(function (i) { return sm.result[i]; }).filter(Boolean) };
      });
    }).then(function (res) {
      if (token !== state.token) return;
      clear(panel);
      var pubmedUrl = 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(term) + '&sort=date';
      panel.appendChild(el('p', 'gac-meta', res.count + ' PubMed records in the past 12 months matching ' + symbol + ' with methylation, epigenetic or cfDNA terms. Most recent:'));
      if (!res.docs.length) {
        panel.appendChild(el('p', 'gac-status', 'Nothing in the last 12 months. That is itself a signal: no recent assay literature for this gene on these terms.'));
      }
      var list = el('ul', 'gac-list');
      res.docs.forEach(function (doc) {
        var li = el('li');
        li.appendChild(link('https://pubmed.ncbi.nlm.nih.gov/' + encodeURIComponent(doc.uid) + '/', doc.title));
        li.appendChild(el('span', 'gac-sub', (doc.source || '') + (doc.pubdate ? ' · ' + doc.pubdate : '')));
        list.appendChild(li);
      });
      panel.appendChild(list);
      panel.appendChild(el('p', 'gac-foot', 'Keyword match, not curated review. Preprints and unreviewed work can appear.'));
      panel.appendChild(link(pubmedUrl, 'See all results on PubMed'));
    }).catch(function () {
      if (token !== state.token) return;
      fail(panel, 'PubMed', 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(symbol + ' methylation cfDNA'));
    });
  }

  /* ---------- Panel 4: trials (ClinicalTrials.gov v2) ---------- */

  function loadTrials(symbol, token) {
    var panel = els.trials;
    setStatus(panel, 'Searching ClinicalTrials.gov for ' + symbol + ' biomarker studies…');

    var url = CTG + '?query.term=' + encodeURIComponent(symbol + ' AND (biomarker OR methylation OR "circulating tumor DNA")') +
      '&filter.overallStatus=' + encodeURIComponent('RECRUITING|NOT_YET_RECRUITING|ENROLLING_BY_INVITATION') +
      '&pageSize=6&countTotal=true&fields=' + encodeURIComponent('NCTId,BriefTitle,OverallStatus,Phase,Condition');

    getJSON(url).then(function (d) {
      if (token !== state.token) return;
      clear(panel);
      var total = d.totalCount != null ? d.totalCount : (d.studies || []).length;
      panel.appendChild(el('p', 'gac-meta', total + ' open or upcoming studies mention ' + symbol + ' with biomarker, methylation or ctDNA terms. Showing up to 6:'));
      var list = el('ul', 'gac-list');
      (d.studies || []).forEach(function (s) {
        var pm = s.protocolSection || {};
        var id = (pm.identificationModule || {}).nctId;
        var title = (pm.identificationModule || {}).briefTitle || id;
        var status = ((pm.statusModule || {}).overallStatus || '').replace(/_/g, ' ').toLowerCase();
        var phase = ((pm.designModule || {}).phases || []).join('/').replace(/_/g, ' ').replace(/PHASE(\d)/g, 'Phase $1').replace(/EARLY PHASE1/, 'Early Phase 1');
        var li = el('li');
        li.appendChild(link('https://clinicaltrials.gov/study/' + encodeURIComponent(id), title));
        li.appendChild(el('span', 'gac-sub', [id, status, phase].filter(Boolean).join(' · ')));
        list.appendChild(li);
      });
      panel.appendChild(list);
      panel.appendChild(el('p', 'gac-foot', 'Registry listings, not endorsements. Eligibility and availability vary.'));
    }).catch(function () {
      if (token !== state.token) return;
      fail(panel, 'ClinicalTrials.gov', 'https://clinicaltrials.gov/search?term=' + encodeURIComponent(symbol + ' biomarker'));
    });
  }

  /* ---------- wiring ---------- */

  function select(symbol) {
    state.gene = symbol;
    state.token += 1;
    var token = state.token;
    var chips = els.chips.querySelectorAll('button');
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute('aria-pressed', chips[i].textContent === symbol ? 'true' : 'false');
    }
    els.stamp.textContent = 'Queried ' + new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) + ' from live public sources';
    loadEvidence(symbol, token);
    renderAssays(symbol);
    loadLiterature(symbol, token);
    loadTrials(symbol, token);
  }

  function init() {
    els.chips = $('gac-chips');
    els.evidence = $('gac-evidence');
    els.assays = $('gac-assays');
    els.lit = $('gac-lit');
    els.trials = $('gac-trials');
    els.stamp = $('gac-stamp');
    if (!els.chips) return;

    GENES.forEach(function (g) {
      var b = el('button', 'gac-chip', g);
      b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { select(g); });
      els.chips.appendChild(b);
    });
    select(GENES[0]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
