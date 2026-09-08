(() => {
  const data = window.APP_DATA;
  const candidateById = Object.fromEntries(data.candidates.map(c => [c.id, c]));
  const topicOrder = ['salaire','retraites','immigration','impots','energie','education','securite','innovation'];
  const aliases = {
    salaire: ['salaire','smic','paie','paye','revenu','travail','gagner','net','brut'],
    retraites: ['retraite','retraites','âge','age','pension','cotisation','partir'],
    immigration: ['immigration','migrant','migrants','étranger','etranger','frontière','frontiere','asile','oqtf'],
    impots: ['impôt','impots','impôts','taxe','taxes','fiscal','fiscalité','fiscalite','héritage','heritage'],
    energie: ['énergie','energie','nucléaire','nucleaire','renouvelable','renouvelables','éolien','eolien','solaire'],
    education: ['éducation','education','école','ecole','enseignant','lycée','lycee'],
    securite: ['sécurité','securite','police','justice','délinquance','delinquance','prison'],
    innovation: ['ia','intelligence artificielle','technologie','recherche','université','universite','innovation']
  };
  let currentTopic = 'salaire';
  let displayMode = 'cards';
  let compareFilter = 'declared';
  let peopleFilter = 'all';
  let recordFilter = 'all';
  let recordQuery = '';

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  // V7 · consentement, publicité et détection d'adblock.
  // Aucun script publicitaire tiers n'est chargé ici : ces fonctions servent de garde-fou
  // pour qu'une future régie ne soit activée qu'en fonction du choix du visiteur.
  const CONSENT_KEY = 'presidentielle_simple_consent_v1';
  const CONSENT_VERSION = 1;
  let accessForceChoice = false;

  function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }
  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (_) { return false; }
  }
  function safeStorageRemove(key) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  function consentExpiryFromNow() {
    const d = new Date();
    d.setMonth(d.getMonth() + 6);
    return d.getTime();
  }

  function readConsent() {
    const raw = safeStorageGet(CONSENT_KEY);
    if (!raw) return null;
    try {
      const c = JSON.parse(raw);
      if (c.version !== CONSENT_VERSION || !c.expiresAt || Date.now() >= c.expiresAt) {
        safeStorageRemove(CONSENT_KEY);
        return null;
      }
      return c;
    } catch (_) {
      safeStorageRemove(CONSENT_KEY);
      return null;
    }
  }

  function writeConsent({personalized=false, analytics=false, mode='contextual'}) {
    const c = {
      version: CONSENT_VERSION,
      personalized: !!personalized,
      analytics: !!analytics,
      mode: personalized ? 'personalized' : 'contextual',
      chosenAt: Date.now(),
      expiresAt: consentExpiryFromNow()
    };
    safeStorageSet(CONSENT_KEY, JSON.stringify(c));
    return c;
  }

  function applyConsent(c) {
    window.PSConsent = Object.freeze({
      advertisingPersonalization: !!c.personalized,
      consentedAudienceMeasurement: !!c.analytics,
      adMode: c.personalized ? 'personalized' : 'contextual'
    });
    document.body.dataset.adMode = window.PSConsent.adMode;
    document.body.classList.remove('privacy-gated');
    const gate = $('#accessGate');
    if (gate) {
      gate.classList.add('hidden');
      gate.setAttribute('aria-hidden','true');
    }
    // Point d'accroche pour une future CMP/régie. Ne jamais transmettre les réponses du quiz.
    window.dispatchEvent(new CustomEvent('ps:consentchange', {detail: window.PSConsent}));
    accessForceChoice = false;
  }

  async function detectAdBlock() {
  const bait = document.createElement('div');

  bait.className =
    'adsbox ad-banner ad-unit pub_300x250 text-ad adsbygoogle';

  bait.setAttribute('aria-hidden', 'true');

  bait.style.cssText =
    'position:absolute!important;' +
    'left:-10000px!important;' +
    'top:-10000px!important;' +
    'width:10px!important;' +
    'height:10px!important;' +
    'display:block!important;' +
    'visibility:visible!important;' +
    'pointer-events:none!important;';

  document.body.appendChild(bait);

  await new Promise(resolve => setTimeout(resolve, 150));

  const css = getComputedStyle(bait);

  const blocked =
    bait.offsetHeight === 0 ||
    bait.offsetWidth === 0 ||
    css.display === 'none' ||
    css.visibility === 'hidden';

  bait.remove();

  return blocked;
  }

  function showAdblockState(blocked) {
    const dot = $('#adblockDot'), title = $('#adblockTitle'), text = $('#adblockText');
    const recheck = $('#recheckAdblock'), consent = $('#consentGateBlock');
    dot.classList.remove('ok','blocked');
    if (blocked) {
      dot.classList.add('blocked');
      title.textContent = 'Bloqueur de publicité détecté';
      text.textContent = 'Désactive-le pour ce site, puis clique sur « Vérifier ». La version gratuite a besoin que les emplacements publicitaires puissent s’afficher.';
      recheck.classList.remove('hidden');
      consent.classList.add('hidden');
    } else {
      dot.classList.add('ok');
      title.textContent = 'Les emplacements publicitaires peuvent s’afficher';
      text.textContent = 'Tu peux maintenant choisir le niveau de confidentialité des publicités.';
      recheck.classList.add('hidden');
      consent.classList.remove('hidden');
    }
  }

  async function prepareAccessGate({forceChoice=false}={}) {
    accessForceChoice = !!forceChoice;
    const gate = $('#accessGate');
    if (!gate) return;
    document.body.classList.add('privacy-gated');
    gate.classList.remove('hidden');
    gate.removeAttribute('aria-hidden');
    const blocked = await detectAdBlock();
    showAdblockState(blocked);
    if (blocked) return;
    const saved = readConsent();
    if (saved && !forceChoice) {
      applyConsent(saved);
      return;
    }
    const prefs = $('#gatePreferences');
    if (prefs) prefs.classList.add('hidden');
    if (saved) {
      $('#consentPersonalized').checked = !!saved.personalized;
      $('#consentAnalytics').checked = !!saved.analytics;
    }
  }

  function openConsentManager() {
    prepareAccessGate({forceChoice:true});
  }

  function escapeHtml(value='') {
    return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }


  function getAnswer(topic, candidate) {
    return topic.answers[candidate.id] || {
      headline: 'Proposition pas encore chargée',
      simple: 'Cette personne est bien suivie dans la base, mais nous n’avons pas encore une proposition suffisamment vérifiée et comparable sur ce thème.',
      details: ['La candidature et le parcours peuvent déjà être consultés.', 'La case sera remplie uniquement avec une source attribuable et datée.'],
      evidence: 'En cours de vérification',
      kind: 'missing',
      sourceLabel: '',
      source: ''
    };
  }

  function powerBadge(candidate, compact=false) {
    const yes = candidate.power === 'yes';
    const label = yes ? 'A déjà gouverné' : 'Jamais au gouvernement';
    const detail = candidate.powerDetail || label;
    return `<span class="power-badge ${yes ? 'power-yes' : 'power-no'} ${compact ? 'compact' : ''}" title="${escapeHtml(detail)}">${yes ? '◆' : '○'} ${escapeHtml(label)}</span>`;
  }

  function filterCandidates(filter) {
    if (filter === 'declared') return data.candidates.filter(c => c.candidacyClass === 'declared');
    if (filter === 'primary') return data.candidates.filter(c => c.candidacyClass === 'primary');
    if (filter === 'potential') return data.candidates.filter(c => c.candidacyClass === 'potential');
    if (filter === 'power') return data.candidates.filter(c => c.power === 'yes');
    if (filter === 'nopower') return data.candidates.filter(c => c.power !== 'yes');
    return data.candidates;
  }

  function renderCompareFilters() {
    const defs = [
      ['declared','Candidatures déclarées'],
      ['primary','Primaires'],
      ['potential','Hypothèses'],
      ['all','Tous suivis'],
      ['power','Déjà gouverné'],
      ['nopower','Jamais au gouvernement']
    ];
    $('#compareFilters').innerHTML = defs.map(([id,label]) => {
      const count = filterCandidates(id).length;
      return `<button class="filter-btn ${compareFilter===id?'active':''}" data-compare-filter="${id}">${escapeHtml(label)} <span>${count}</span></button>`;
    }).join('');
    $$('[data-compare-filter]').forEach(btn => btn.addEventListener('click', () => {
      compareFilter = btn.dataset.compareFilter;
      renderCompareFilters();
      renderCards(currentTopic);
      renderTable(currentTopic);
    }));
  }

  function renderPeopleFilters() {
    const defs = [
      ['all','Tout le monde'],
      ['declared','Déclarés'],
      ['primary','Primaires'],
      ['potential','Hypothèses'],
      ['power','Déjà gouverné'],
      ['nopower','Jamais au gouvernement']
    ];
    $('#peopleFilters').innerHTML = defs.map(([id,label]) => {
      const count = filterCandidates(id).length;
      return `<button class="filter-btn ${peopleFilter===id?'active':''}" data-people-filter="${id}">${escapeHtml(label)} <span>${count}</span></button>`;
    }).join('');
    $$('[data-people-filter]').forEach(btn => btn.addEventListener('click', () => {
      peopleFilter = btn.dataset.peopleFilter;
      renderPeopleFilters();
      renderPeople();
    }));
  }

  function renderTopicChips() {
    $('#topicChips').innerHTML = topicOrder.map(id => {
      const t = data.topics[id];
      return `<button class="topic-card ${id===currentTopic?'active':''}" data-topic="${id}">
        <span class="topic-icon">${t.icon}</span>
        <strong>${escapeHtml(t.label)}</strong>
        <small>${escapeHtml(t.homeHint || t.question)}</small>
      </button>`;
    }).join('');
    $$('#topicChips .topic-card').forEach(btn => btn.addEventListener('click', () => selectTopic(btn.dataset.topic, true)));
    const select = $('#topicSelect');
    if (select) {
      select.innerHTML = topicOrder.map(id => `<option value="${id}" ${id===currentTopic?'selected':''}>${escapeHtml(data.topics[id].label)}</option>`).join('');
    }
  }

  function badge(answer) {
    return `<span class="badge ${answer.kind}">${escapeHtml(answer.evidence)}</span>`;
  }

  function adInterstitial(slotId, note='Publicité séparée du contenu politique') {
    return `<aside class="ad-slot ad-interstitial" data-ad-slot="${escapeHtml(slotId)}" aria-label="Emplacement publicitaire">
      <span class="ad-label">Publicité</span>
      <div class="ad-placeholder"><strong>Emplacement publicitaire</strong><small>${escapeHtml(note)}</small></div>
    </aside>`;
  }

  function sourceActions(candidate, answer, topicId) {
    const parts = [];
    if (answer.source) {
      parts.push(`<a class="source-btn" href="${escapeHtml(answer.source)}" target="_blank" rel="noopener">Source ↗</a>`);
    }
    const history = data.history[candidate.id]?.[topicId];
    if (history) {
      parts.push(`<button class="history-btn" data-history-candidate="${candidate.id}" data-history-topic="${topicId}">Voir l’évolution</button>`);
    } else {
      parts.push(`<button class="history-btn disabled" disabled title="Pas d’ancienne présidentielle comparable chargée">Pas d’historique présidentiel</button>`);
    }
    if (answer.crosscheck) {
      parts.push(`<div class="crosscheck">Recoupement disponible : <a href="${escapeHtml(answer.crosscheck)}" target="_blank" rel="noopener">voir</a></div>`);
    }
    return parts.join('');
  }

  function renderCards(topicId) {
    const topic = data.topics[topicId];
    const candidates = filterCandidates(compareFilter);
    $('#cardsMode').innerHTML = candidates.map((candidate,index) => {
      const a = getAnswer(topic, candidate);
      const card = `<article class="candidate-card">
        <div class="candidate-head">
          <div class="person-mini">
            <div class="avatar" aria-hidden="true">${escapeHtml(candidate.initials)}</div>
            <div><h3>${escapeHtml(candidate.name)}</h3><small>${escapeHtml(candidate.status)}</small></div>
          </div>
          ${badge(a)}
        </div>
        <div class="power-line">${powerBadge(candidate,true)}<span>${escapeHtml(candidate.powerDetail || '')}</span></div>
        <span class="fast-label">En une phrase</span>
        <h4 class="policy-headline">${escapeHtml(a.headline)}</h4>
        ${topicId === 'energie' && a.energy ? `<div class="energy-stance"><div><span>☢ Nucléaire</span><strong class="stance ${a.energy.nuclearClass || ''}">${escapeHtml(a.energy.nuclear)}</strong></div><div><span>☀ Renouvelables</span><strong class="stance ${a.energy.renewablesClass || ''}">${escapeHtml(a.energy.renewables)}</strong></div></div>` : ''}
        <p class="policy-simple">${escapeHtml(a.simple)}</p>
        ${a.details?.length ? `<details class="candidate-more"><summary>Voir le détail</summary><ul class="detail-list">${a.details.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul></details>` : ''}
        <div class="card-actions">${sourceActions(candidate,a,topicId)}</div>
      </article>`;
      const ad = (index===7 || index===19) ? adInterstitial(`compare-${index+1}`, 'Une pause publicitaire entre deux groupes de candidats') : '';
      return card + ad;
    }).join('');
    $$('[data-history-candidate]').forEach(btn => btn.addEventListener('click', () => openHistory(btn.dataset.historyCandidate, btn.dataset.historyTopic)));
  }

  function renderTable(topicId) {
    const topic = data.topics[topicId];
    $('#tableMode').innerHTML = `<table>
      <thead><tr><th>Personne</th><th>En très simple</th><th>Nature</th><th>Source</th><th>Historique</th></tr></thead>
      <tbody>${filterCandidates(compareFilter).map(candidate => {
        const a = getAnswer(topic, candidate);
        const hasHistory = !!data.history[candidate.id]?.[topicId];
        return `<tr>
          <td><strong>${escapeHtml(candidate.name)}</strong><br>${powerBadge(candidate,true)}</td>
          <td><strong>${escapeHtml(a.headline)}</strong><br><span style="color:var(--muted)">${escapeHtml(a.simple)}</span></td>
          <td>${badge(a)}</td>
          <td>${a.source ? `<a class="profile-link" href="${escapeHtml(a.source)}" target="_blank" rel="noopener">Ouvrir ↗</a>` : '—'}</td>
          <td>${hasHistory ? `<button class="history-btn" data-history-candidate="${candidate.id}" data-history-topic="${topicId}">Voir</button>` : 'Première présidentielle suivie / non chargé'}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
    $$('[data-history-candidate]').forEach(btn => btn.addEventListener('click', () => openHistory(btn.dataset.historyCandidate, btn.dataset.historyTopic)));
  }

  function renderBaseline(topicId) {
    const box = $('#baselineBox');
    if (topicId !== 'salaire') {
      box.classList.add('hidden');
      box.innerHTML = '';
      return;
    }
    box.classList.remove('hidden');
    box.innerHTML = `<div><div class="eyebrow" style="color:#b9b9b9">POINT DE DÉPART · AUJOURD’HUI</div><strong>SMIC : ${escapeHtml(data.baseline.smicGross)} · ${escapeHtml(data.baseline.smicNet)}</strong><div class="muted-white">${escapeHtml(data.baseline.since)} · valeur de référence, pas une proposition politique</div></div><a href="${escapeHtml(data.baseline.source)}" target="_blank" rel="noopener">Source officielle ↗</a>`;
  }

  function selectTopic(topicId, scroll=false) {
    if (!data.topics[topicId]) return;
    currentTopic = topicId;
    const topic = data.topics[topicId];
    $('#topicTitle').textContent = topic.question;
    $('#topicExplainer').textContent = topic.explainer;
    renderTopicChips();
    renderBaseline(topicId);
    renderCompareFilters();
    renderCards(topicId);
    renderTable(topicId);
    applyDisplayMode();
    if (scroll) $('#comparisonSection').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function applyDisplayMode() {
    $('#cardsMode').classList.toggle('hidden', displayMode !== 'cards');
    $('#tableMode').classList.toggle('hidden', displayMode !== 'table');
    $$('.toggle-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === displayMode));
  }

  function openHistory(candidateId, topicId) {
    const h = data.history[candidateId]?.[topicId];
    if (!h) return;
    const c = candidateById[candidateId];
    $('#historyContent').innerHTML = `<div class="history-inner">
      <div class="eyebrow">ÉVOLUTION DES PROPOSITIONS</div>
      <h2>${escapeHtml(c.name)} · ${escapeHtml(data.topics[topicId].label)}</h2>
      <div class="history-observation"><strong>Ce qu’on observe :</strong><br>${escapeHtml(h.observation)}</div>
      <div class="history-caveat">${escapeHtml(h.caveat)}</div>
      <div class="timeline">${h.entries.map(e => `<article class="timeline-item">
        <div class="timeline-year">${escapeHtml(e.year)} · ${escapeHtml(e.type)}</div>
        <h3>${escapeHtml(e.amount)}</h3>
        <p>${escapeHtml(e.note)}</p>
        ${e.source ? `<a href="${escapeHtml(e.source)}" target="_blank" rel="noopener">Source de cette année ↗</a>` : ''}
      </article>`).join('')}</div>
    </div>`;
    const dialog = $('#historyDialog');
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open','');
  }

  function renderPeople() {
    const candidates = filterCandidates(peopleFilter);
    $('#peopleGrid').innerHTML = candidates.map((c,index) => {
      const card = `<article class="person-card ${c.power==='yes'?'has-power':''}">
      <div class="person-card-top">
        <div class="avatar">${escapeHtml(c.initials)}</div>
        <div class="person-title-wrap">
          <div class="person-title-line"><h2>${escapeHtml(c.name)}</h2>${powerBadge(c)}</div>
          <div class="status-line">${escapeHtml(c.status)}</div>
        </div>
      </div>
      <p>${escapeHtml(c.short)}</p>
      <div class="power-card ${c.power==='yes'?'yes':'no'}">
        <div class="power-card-label">${c.power==='yes'?'EXPÉRIENCE EXÉCUTIVE NATIONALE':'AUCUNE FONCTION GOUVERNEMENTALE'}</div>
        <strong>${escapeHtml(c.powerDetail)}</strong>
        ${c.powerSource ? `<a href="${escapeHtml(c.powerSource)}" target="_blank" rel="noopener">Vérifier la fonction ↗</a>` : ''}
      </div>
      <div class="fast-facts">
        <div class="fact"><span>Déjà président ?</span><strong>${escapeHtml(c.president)}</strong></div>
        <div class="fact"><span>Déjà Premier ministre ?</span><strong>${escapeHtml(c.pm)}</strong></div>
        <div class="fact"><span>Déjà ministre ?</span><strong>${escapeHtml(c.minister)}</strong></div>
        <div class="fact"><span>Déjà parlementaire ?</span><strong>${escapeHtml(c.parliament)}</strong></div>
        <div class="fact" style="grid-column:1/-1"><span>Présidentielles déjà disputées</span><strong>${escapeHtml(c.runs)}</strong></div>
      </div>
      <div class="bio-block"><div class="bio-label">Métier / parcours</div><p>${escapeHtml(c.job)}</p></div>
      <div class="bio-block"><div class="bio-label">Études / diplôme vérifié</div><p>${escapeHtml(c.diploma)}</p></div>
      <div class="profile-actions">
        <a class="profile-link" href="${escapeHtml(c.profileSource)}" target="_blank" rel="noopener">Source du parcours ↗</a>
        ${c.candidacySource ? `<a class="profile-link muted-link" href="${escapeHtml(c.candidacySource)}" target="_blank" rel="noopener">Source candidature ↗</a>` : ''}
      </div>
    </article>`;
      const ad = (index===7 || index===19) ? adInterstitial(`people-${index+1}`, 'Publicité entre deux groupes de parcours, jamais dans une fiche') : '';
      return card + ad;
    }).join('');
  }


  function recordTypeLabel(type) {
    const map = {
      programme:'Programme / campagne', project:'Projet', declaration:'Position publique', status:'État du programme', missing:'Pas encore documenté',
      'ancien-programme':'Ancien programme', first:'Première présidentielle', executive:'Action exécutive', vote:'Vote public', parliament:'Travail parlementaire', local:'Pouvoir local', none:'Pas de bilan national'
    };
    return map[type] || type;
  }

  function recordBadge(type) {
    return `<span class="record-kind ${escapeHtml(type)}">${escapeHtml(recordTypeLabel(type))}</span>`;
  }

  function currentVerified(candidateId) {
    const out = [];
    topicOrder.forEach(id => {
      const a = data.topics[id]?.answers?.[candidateId];
      if (a && a.kind !== 'missing' && a.source) out.push({topic:id, label:data.topics[id].label, ...a});
    });
    return out;
  }

  function recordCategory(candidate, record) {
    if (candidate.power === 'yes') return 'power';
    if ((candidate.parliament || '').toLowerCase().startsWith('oui')) return 'parliament';
    if ((record.actions || []).some(a => ['vote','parliament'].includes(a.type))) return 'parliament';
    return 'none';
  }

  function filterRecordCandidates() {
    const q = recordQuery.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    return data.candidates.filter(c => {
      const r = data.records[c.id];
      if (!r) return false;
      if (recordFilter !== 'all' && recordCategory(c,r) !== recordFilter) return false;
      if (!q) return true;
      const hay = [c.name,c.status,c.short,r.today?.text,...(r.past||[]).map(x=>x.text),...(r.actions||[]).map(x=>x.text)].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      return hay.includes(q);
    });
  }

  function countRecordSources(record, candidateId) {
    const sources = new Set();
    if (record.today?.source) sources.add(record.today.source);
    (record.past||[]).forEach(x=>x.source&&sources.add(x.source));
    (record.actions||[]).forEach(x=>x.source&&sources.add(x.source));
    currentVerified(candidateId).forEach(x=>x.source&&sources.add(x.source));
    return sources.size;
  }

  function renderRecordFilters() {
    const defs = [['all','Tous les dossiers'],['power','A déjà gouverné'],['parliament','Parlement sans gouvernement'],['none','Pas de bilan national comparable']];
    const counts = Object.fromEntries(defs.map(([id]) => [id, data.candidates.filter(c => id==='all' || recordCategory(c,data.records[c.id])===id).length]));
    $('#recordFilters').innerHTML = defs.map(([id,label]) => `<button class="filter-btn ${recordFilter===id?'active':''}" data-record-filter="${id}">${escapeHtml(label)} <span>${counts[id]}</span></button>`).join('');
    $$('[data-record-filter]').forEach(btn => btn.addEventListener('click', () => { recordFilter=btn.dataset.recordFilter; renderRecordFilters(); renderRecords(); }));
  }

  function recordColumn(title, kicker, item, emptyText='Aucune donnée comparable chargée.') {
    if (!item) return `<div class="record-col"><div class="record-col-kicker">${escapeHtml(kicker)}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(emptyText)}</p></div>`;
    return `<div class="record-col">
      <div class="record-col-kicker">${escapeHtml(kicker)}</div>
      <div class="record-col-badge">${recordBadge(item.type)}</div>
      <h3>${escapeHtml(item.label || item.title || item.year || title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      ${item.source ? `<a href="${escapeHtml(item.source)}" target="_blank" rel="noopener">${escapeHtml(item.sourceLabel || 'Source')} ↗</a>` : ''}
    </div>`;
  }

  function renderRecords() {
    const candidates = filterRecordCandidates();
    const powerCount = data.candidates.filter(c=>recordCategory(c,data.records[c.id])==='power').length;
    const parliamentCount = data.candidates.filter(c=>recordCategory(c,data.records[c.id])==='parliament').length;
    const noneCount = data.candidates.length-powerCount-parliamentCount;
    $('#recordsSummary').innerHTML = `<span><strong>${data.candidates.length}</strong> dossiers suivis</span><span><strong>${powerCount}</strong> avec expérience gouvernementale</span><span><strong>${parliamentCount}</strong> avec bilan parlementaire sans gouvernement</span><span><strong>${noneCount}</strong> sans bilan national comparable</span>`;
    $('#recordsGrid').innerHTML = candidates.map((c,index) => {
      const r=data.records[c.id];
      const verified=currentVerified(c.id);
      const current = verified.length ? {type:verified[0].kind,label:`${verified[0].label} · ${verified[0].evidence}`,text:verified[0].simple,source:verified[0].source,sourceLabel:verified[0].sourceLabel||'Source'} : r.today;
      const past=(r.past||[])[0];
      const act=(r.actions||[])[0];
      const cat=recordCategory(c,r);
      return `<article class="record-card ${cat}">
        <header class="record-head"><div class="avatar">${escapeHtml(c.initials)}</div><div><h2>${escapeHtml(c.name)}</h2><div class="status-line">${escapeHtml(c.status)}</div></div><div class="record-power">${powerBadge(c,true)}</div></header>
        <div class="record-source-count">${countRecordSources(r,c.id)} source${countRecordSources(r,c.id)>1?'s':''} chargée${countRecordSources(r,c.id)>1?'s':''} dans ce dossier</div>
        <div class="record-three">
          ${recordColumn('Aujourd’hui','1 · AUJOURD’HUI',current)}
          ${recordColumn('Avant','2 · AVANT',past)}
          ${recordColumn('Votes / actes','3 · VOTES / ACTES',act)}
        </div>
        <button class="record-open" data-record-open="${c.id}">Voir le dossier complet et toutes les preuves</button>
      </article>`;
      const ad = (index===5 || index===15) ? adInterstitial(`records-${index+1}`, 'Publicité séparée des dossiers Promesses → actes') : '';
      return card + ad;
    }).join('') || `<div class="empty-records">Aucun dossier ne correspond à cette recherche.</div>`;
    $$('[data-record-open]').forEach(btn=>btn.addEventListener('click',()=>openRecord(btn.dataset.recordOpen)));
  }

  function openRecord(candidateId) {
    const c=candidateById[candidateId], r=data.records[candidateId];
    if(!c||!r) return;
    const current=currentVerified(candidateId);
    const currentHtml = current.length ? current.map(x=>`<article class="proof-item"><div>${recordBadge(x.kind)} <strong>${escapeHtml(x.label)}</strong></div><h3>${escapeHtml(x.headline)}</h3><p>${escapeHtml(x.simple)}</p><a href="${escapeHtml(x.source)}" target="_blank" rel="noopener">${escapeHtml(x.sourceLabel||'Source originale')} ↗</a></article>`).join('') : `<article class="proof-item">${recordBadge(r.today.type)}<h3>${escapeHtml(r.today.label)}</h3><p>${escapeHtml(r.today.text)}</p>${r.today.source?`<a href="${escapeHtml(r.today.source)}" target="_blank" rel="noopener">${escapeHtml(r.today.sourceLabel||'Source')} ↗</a>`:''}</article>`;
    $('#recordContent').innerHTML = `<div class="history-inner record-detail">
      <div class="eyebrow">DOSSIER PROMESSES → ACTES</div>
      <div class="record-dialog-head"><div class="avatar large">${escapeHtml(c.initials)}</div><div><h2>${escapeHtml(c.name)}</h2><p>${escapeHtml(c.short)}</p>${powerBadge(c)}</div></div>
      <div class="record-method-note"><strong>Règle :</strong> on compare des faits de nature différente sans les confondre. Une promesse reste une promesse. Une décision gouvernementale est collective. Un vote public est un vote, pas un résumé moral de la personne.</div>
      <section><div class="eyebrow">1 · AUJOURD’HUI</div><h2>Ce qui est actuellement documenté</h2><div class="proof-list">${currentHtml}</div></section>
      <section><div class="eyebrow">2 · AVANT</div><h2>Ce qu’elle proposait lors d’anciennes présidentielles</h2><div class="proof-list">${(r.past||[]).map(x=>`<article class="proof-item">${recordBadge(x.type)}<h3>${escapeHtml(x.year)}</h3><p>${escapeHtml(x.text)}</p>${x.source?`<a href="${escapeHtml(x.source)}" target="_blank" rel="noopener">${escapeHtml(x.sourceLabel||'Source de l’époque')} ↗</a>`:''}</article>`).join('')}</div></section>
      <section><div class="eyebrow">3 · VOTES / ACTES</div><h2>Ce qu’on peut vérifier dans l’exercice du pouvoir ou d’un mandat</h2><div class="proof-list">${(r.actions||[]).map(x=>`<article class="proof-item">${recordBadge(x.type)}<h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.text)}</p>${x.source?`<a href="${escapeHtml(x.source)}" target="_blank" rel="noopener">${escapeHtml(x.sourceLabel||'Source officielle')} ↗</a>`:''}</article>`).join('')}</div></section>
      <div class="record-method-note soft"><strong>Ce que ce dossier ne permet pas de conclure :</strong> qu’une promesse sera tenue ; qu’un vote isolé résume une idéologie ; qu’une personne sans expérience gouvernementale ferait mieux ou moins bien ; qu’un membre d’un gouvernement était personnellement l’auteur de toutes ses mesures.</div>
    </div>`;
    const dialog=$('#recordDialog');
    if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
  }

  function fmtPct(v){ return String(v).replace('.',',')+' %'; }

  function justiceBadge(entry) {
    const label = entry?.status || 'Aucun dossier ajouté à cette base';
    const cls = entry?.statusClass || 'none';
    return `<span class="justice-badge ${escapeHtml(cls)}">${escapeHtml(label)}</span>`;
  }

  function renderJustice() {
    const J = data.justice || {entries:{},updated:data.updated};
    const documented = data.candidates.filter(c => (J.entries[c.id] || []).length).length;
    $('#justiceSummary').innerHTML = `<strong>${documented}</strong> personne${documented>1?'s':''} avec au moins une situation judiciaire documentée dans cette base · <strong>${data.candidates.length}</strong> personnes affichées au total · vérification du ${escapeHtml(J.updated || data.updated)}.`;
    $('#justiceGrid').innerHTML = data.candidates.map((c,index) => {
      const entries = J.entries[c.id] || [];
      const events = entries.length ? entries.map(e => `<article class="justice-event">
        <div class="justice-event-head">${justiceBadge(e)}<time>${escapeHtml(e.date || '')}</time></div>
        <h3>${escapeHtml(e.title)}</h3>
        <p>${escapeHtml(e.summary)}</p>
        <div class="justice-sources"><a href="${escapeHtml(e.source)}" target="_blank" rel="noopener">${escapeHtml(e.sourceLabel || 'Source')} ↗</a>${e.source2 ? `<a href="${escapeHtml(e.source2)}" target="_blank" rel="noopener">${escapeHtml(e.source2Label || 'Deuxième source')} ↗</a>` : ''}</div>
      </article>`).join('') : `<div class="justice-empty"><strong>Aucun dossier judiciaire ajouté à cette base</strong><p>Ce libellé ne permet pas de conclure qu’il n’existe aucun contentieux concernant cette personne.</p></div>`;
      const card = `<section class="justice-person-card">
        <div class="candidate-head"><div class="person-mini"><div class="avatar" aria-hidden="true">${escapeHtml(c.initials)}</div><div><h2>${escapeHtml(c.name)}</h2><small>${escapeHtml(c.status)}</small></div></div></div>
        <div class="justice-events">${events}</div>
      </section>`;
      const ad = (index===7 || index===15 || index===23) ? adInterstitial(`justice-${index+1}`, 'Publicité entre deux groupes de dossiers · jamais dans une information judiciaire') : '';
      return card + ad;
    }).join('');
  }

  function renderPolls() {
    const P=data.polls, latest=P.latest, c17=P.cluster17, h=P.harris, e=P.elabe;
    $('#pollQuality').innerHTML = `<div class="poll-quality-card"><div><div class="eyebrow">CRITÈRES D’ENTRÉE</div><h2>Ce que le site exige avant d’afficher un sondage</h2></div><div class="quality-pills"><span>Institut identifié</span><span>Dates de terrain</span><span>Échantillon</span><span>Scénario exact</span><span>Méthode</span><span>Notice publique</span></div><a href="${escapeHtml(P.commission.source)}" target="_blank" rel="noopener">Consulter la Commission des sondages ↗</a></div>`;
    $('#latestPollMeta').innerHTML = [
      ['Institut',latest.institute],['Terrain',latest.field],['Échantillon',latest.sample],['Méthode',latest.method]
    ].map(([a,b])=>`<div><span>${escapeHtml(a)}</span><strong>${escapeHtml(b)}</strong></div>`).join('');
    $('#latestScenarioTitle').innerHTML = `<strong>${escapeHtml(latest.exactScenario)}</strong><span>${escapeHtml(latest.base)}</span><small>${escapeHtml(latest.warning)}</small>`;
    const max=Math.max(...latest.values.map(x=>x[1]));
    const june=Object.fromEntries(latest.june.map(x=>[x[0],x[1]]));
    $('#latestPollChart').innerHTML = latest.values.map(([name,val,margin],i)=>{
      const old=june[name], delta=old===undefined?null:+(val-old).toFixed(1);
      const deltaTxt=delta===null?'':`${delta>0?'+':''}${String(delta).replace('.',',')} pt vs juin`;
      return `<div class="poll-row"><div class="poll-rank">${i+1}</div><div class="poll-name"><strong>${escapeHtml(name)}</strong><small>${deltaTxt}</small></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(1,val/max*100)}%"></div></div><div class="poll-score"><strong>${fmtPct(val)}</strong><small>± ${String(margin).replace('.',',')} pt</small></div></div>`;
    }).join('') + `<div class="poll-links"><a href="${escapeHtml(latest.source)}" target="_blank" rel="noopener">Page de l’institut ↗</a><a href="${escapeHtml(latest.report)}" target="_blank" rel="noopener">Rapport complet ↗</a><a href="${escapeHtml(latest.notice)}" target="_blank" rel="noopener">Notice Commission ↗</a></div>`;

    $('#cluster17Meta').innerHTML = [
      ['Institut',c17.institute],['Terrain',c17.field],['Échantillon',c17.sample],['Méthode',c17.method]
    ].map(([a,b])=>`<div><span>${escapeHtml(a)}</span><strong>${escapeHtml(b)}</strong></div>`).join('');
    $('#cluster17Scenarios').innerHTML = c17.scenarios.map(sc=>`<article class="scenario-card"><div class="scenario-card-head"><strong>${escapeHtml(sc.title)}</strong><small>${escapeHtml(sc.base)}</small></div><div class="mini-poll-list">${sc.values.map(([name,val],i)=>`<div><span><b>${i+1}</b>${escapeHtml(name)}</span><strong>${fmtPct(val)}</strong></div>`).join('')}</div></article>`).join('') + `<div class="poll-links scenario-links"><a href="${escapeHtml(c17.source)}" target="_blank" rel="noopener">Article Le Point ↗</a><a href="${escapeHtml(c17.notice)}" target="_blank" rel="noopener">Notice complète Commission ↗</a><span>${escapeHtml(c17.margin)}</span></div>`;

    const hMap=Object.fromEntries(h.values.map(x=>[x[0],x[1]]));
    $('#sameScenarioTable').innerHTML = `<div class="same-head"><span>Personne</span><span>Ipsos<br><small>31 août–2 sept.</small></span><span>Harris<br><small>18–19 août</small></span><span>Écart brut*</span></div>${latest.values.map(([name,iv])=>{const hv=hMap[name]; const d=+(iv-hv).toFixed(1); return `<div class="same-row"><strong>${escapeHtml(name)}</strong><span>${fmtPct(iv)}</span><span>${fmtPct(hv)}</span><span>${d>0?'+':''}${String(d).replace('.',',')} pt</span></div>`}).join('')}<p class="table-caveat">*L’écart brut ne mesure pas une « progression certaine » : les dates, échantillons et instituts diffèrent. Aucune moyenne n’est calculée.</p><div class="poll-links"><a href="${escapeHtml(h.source)}" target="_blank" rel="noopener">Toluna Harris ↗</a><a href="${escapeHtml(h.report)}" target="_blank" rel="noopener">Rapport Harris ↗</a></div>`;

    $('#elabeStats').innerHTML = `<div class="interest-card"><div class="interest-number">${e.interest.all}%</div><div><strong>des Français interrogés se disent intéressés par la campagne</strong><p>${e.interest.very}% très intéressés · ${e.interest.rather}% plutôt intéressés.</p></div></div><div class="elabe-ranges">${e.ranges.map(([name,val])=>`<div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(val)}</span></div>`).join('')}</div><div class="poll-links"><a href="${escapeHtml(e.source)}" target="_blank" rel="noopener">Elabe ↗</a><a href="${escapeHtml(e.report)}" target="_blank" rel="noopener">Rapport complet ↗</a><a href="${escapeHtml(e.notice)}" target="_blank" rel="noopener">Commission ↗</a></div>`;

    $('#pollNotices').innerHTML = `<div class="notice-list">${P.commission.latestNotices.map(x=>`<div>✓ ${escapeHtml(x)}</div>`).join('')}</div><p>${escapeHtml(P.commission.text)}</p><a class="primary-link" href="${escapeHtml(P.commission.source)}" target="_blank" rel="noopener">Ouvrir toutes les notices officielles ↗</a>`;
  }


  function renderQuiz() {
    const answers = {};
    const profiles = data.quizProfiles || {};
    const candidateByIdLocal = Object.fromEntries(data.candidates.map(c => [c.id,c]));

    const labelAnswer = v => v === 'agree' ? 'D’accord' : v === 'disagree' ? 'Pas d’accord' : 'Je ne sais pas';
    const initialsFor = id => candidateByIdLocal[id]?.initials || (profiles[id]?.label || '?').split(/\s+/).map(x=>x[0]).slice(0,2).join('');
    const candidateStatus = id => candidateByIdLocal[id]?.status || profiles[id]?.status || '';
    const candidateClass = id => candidateByIdLocal[id]?.candidacyClass || 'declared';

    $('#quizList').innerHTML = data.quiz.map((q,i) => {
      const item = `<article class="quiz-item" data-qid="${q.id}">
        <div class="quiz-item-top"><span class="quiz-num">${i+1}</span><span class="quiz-topic">${escapeHtml(q.topic || '')}</span></div>
        <p>${escapeHtml(q.text)}</p>
        <div class="quiz-buttons">
          <button class="answer-btn" data-answer="agree">🟢 D’accord</button>
          <button class="answer-btn" data-answer="disagree">🔴 Pas d’accord</button>
          <button class="answer-btn" data-answer="unknown">🤷 Je ne sais pas</button>
        </div>
      </article>`;
      return item + (i===3 ? adInterstitial('quiz-middle','Publicité indépendante de tes réponses et du calcul') : '');
    }).join('');

    function computeResults() {
      const answeredIds = data.quiz.filter(q => answers[q.id] && answers[q.id] !== 'unknown').map(q=>q.id);
      return Object.entries(profiles)
        .filter(([id]) => candidateClass(id) === 'declared')
        .map(([id,p]) => {
          let agreements = 0, disagreements = 0, comparable = 0, uncertain = 0;
          const details = [];
          answeredIds.forEach(qid => {
            const pos = p.positions?.[qid];
            const q = data.quiz.find(x=>x.id===qid);
            if (!pos || pos.value === 'unknown') {
              uncertain++;
              details.push({qid, q, pos:pos || {value:'unknown',note:'Position non documentée dans le test.'}, match:'unknown'});
              return;
            }
            comparable++;
            const match = pos.value === answers[qid];
            if (match) agreements++; else disagreements++;
            details.push({qid, q, pos, match:match ? 'agree' : 'disagree'});
          });
          const ratio = comparable ? agreements / comparable : 0;
          const coverage = answeredIds.length ? comparable / answeredIds.length : 0;
          // The ranking rewards agreement and documentary coverage. Displayed percentage remains the plain comparable agreement rate.
          const rank = ratio * (0.62 + 0.38 * coverage);
          return {id,p,agreements,disagreements,comparable,uncertain,ratio,coverage,rank,details};
        })
        .filter(r => r.comparable >= Math.min(3, Math.max(1, answeredIds.length - 1)))
        .sort((a,b) => b.rank-a.rank || b.agreements-a.agreements || b.comparable-a.comparable);
    }

    function renderResult() {
      const doneTotal = Object.keys(answers).length;
      const opinionCount = Object.values(answers).filter(v=>v !== 'unknown').length;
      const progress = Math.round(doneTotal / data.quiz.length * 100);
      $('#quizProgressText').textContent = `${doneTotal} / ${data.quiz.length} répondu${doneTotal>1?'s':''}`;
      $('#quizProgressBar').style.width = `${progress}%`;

      if (doneTotal < 4 || opinionCount < 3) {
        $('#quizProgressHint').textContent = doneTotal < 4
          ? 'Réponds à au moins 4 questions pour voir un premier aperçu.'
          : 'Choisis au moins 3 fois “d’accord” ou “pas d’accord” pour calculer une proximité.';
        $('#quizResult').classList.add('hidden');
        $('#quizSummary').textContent = `${doneTotal} réponse${doneTotal>1?'s':''} sur ${data.quiz.length}. Les “je ne sais pas” ne favorisent aucun candidat.`;
        return;
      }

      const results = computeResults();
      if (!results.length) {
        $('#quizResult').classList.add('hidden');
        $('#quizSummary').textContent = 'Pas encore assez de positions comparables pour produire un résultat fiable.';
        return;
      }

      const top = results[0];
      const final = doneTotal === data.quiz.length;
      const pct = Math.round(top.ratio * 100);
      const confidence = top.coverage >= .9 ? 'Couverture documentaire forte' : top.coverage >= .7 ? 'Couverture documentaire correcte' : 'Couverture documentaire partielle';

      $('#quizProgressHint').textContent = final
        ? 'Résultat final sur les 8 questions.'
        : 'Aperçu en direct · réponds aux 8 questions pour finaliser.';
      $('#quizResult').classList.remove('hidden');

      $('#quizResultMain').innerHTML = `<div class="quiz-winner">
        <div class="avatar">${escapeHtml(initialsFor(top.id))}</div>
        <div>
          <div class="eyebrow">${final?'LE PLUS PROCHE SUR CE TEST':'APERÇU · LE PLUS PROCHE POUR L’INSTANT'}</div>
          <h2>${escapeHtml(top.p.label)}</h2>
          <p>${top.agreements} accord${top.agreements>1?'s':''} · ${top.disagreements} désaccord${top.disagreements>1?'s':''} · ${top.uncertain} position${top.uncertain>1?'s':''} non classée${top.uncertain>1?'s':''}</p>
          <span class="quiz-confidence">${escapeHtml(confidence)}</span>
        </div>
        <div class="quiz-score"><strong>${pct}%</strong><span>d’accord sur ${top.comparable} position${top.comparable>1?'s':''} comparable${top.comparable>1?'s':''}</span></div>
      </div>`;

      const alts = results.slice(1,3);
      $('#quizAlternatives').innerHTML = alts.length ? `<div class="quiz-alt-title">Deux autres profils proches</div><div class="quiz-alts">${
        alts.map(r=>`<div class="quiz-alt"><div><strong>${escapeHtml(r.p.label)}</strong><small>${r.agreements} accord${r.agreements>1?'s':''} sur ${r.comparable} comparables</small></div><div class="quiz-alt-score">${Math.round(r.ratio*100)}%</div></div>`).join('')
      }</div>` : '';

      const detailByQ = Object.fromEntries(top.details.map(d=>[d.qid,d]));
      const rows = data.quiz.filter(q=>answers[q.id] && answers[q.id] !== 'unknown').map(q => {
        const d = detailByQ[q.id];
        if (!d || d.match === 'unknown') {
          const note = d?.pos?.note || 'Position trop incertaine pour la classer.';
          const src = d?.pos?.source ? `<a href="${escapeHtml(d.pos.source)}" target="_blank" rel="noopener">Source ↗</a>` : '';
          return `<div class="quiz-match-row"><div class="quiz-match-icon">◌</div><div class="quiz-match-topic">${escapeHtml(q.topic)}</div><div class="quiz-match-note"><strong>Non classé.</strong> ${escapeHtml(note)}</div>${src}</div>`;
        }
        const ok = d.match === 'agree';
        const src = d.pos.source ? `<a href="${escapeHtml(d.pos.source)}" target="_blank" rel="noopener">Source ↗</a>` : '';
        return `<div class="quiz-match-row"><div class="quiz-match-icon">${ok?'✅':'❌'}</div><div class="quiz-match-topic">${escapeHtml(q.topic)}</div><div class="quiz-match-note"><strong>${ok?'Même réponse':'Réponse différente'}.</strong> ${escapeHtml(d.pos.note || '')}</div>${src}</div>`;
      }).join('');

      $('#quizBreakdown').innerHTML = `<h3 class="quiz-breakdown-title">Pourquoi ${escapeHtml(top.p.label)} ressort ?</h3>
        <div class="quiz-breakdown">${rows}</div>
        <div class="quiz-result-note"><strong>À lire correctement :</strong> ce résultat ne mesure pas une “compatibilité politique totale”. Il compare uniquement tes réponses aux ${data.quiz.length} questions de ce test. Une position incertaine n’est jamais transformée artificiellement en accord ou en désaccord. Les programmes 2027 peuvent encore évoluer.</div>`;

      $('#quizSummary').textContent = final
        ? `Test terminé : ${top.p.label} ressort comme le profil déclaré le plus proche parmi les candidatures suffisamment documentées dans ce module.`
        : `Aperçu après ${doneTotal} réponses : le classement peut encore changer.`;
    }

    $$('.quiz-item').forEach(item => item.addEventListener('click', e => {
      const btn = e.target.closest('.answer-btn');
      if (!btn) return;
      item.querySelectorAll('.answer-btn').forEach(x=>x.classList.remove('selected'));
      btn.classList.add('selected');
      item.classList.add('answered');
      answers[item.dataset.qid] = btn.dataset.answer;
      renderResult();
    }));

    $('#quizReset')?.addEventListener('click', () => {
      Object.keys(answers).forEach(k=>delete answers[k]);
      $$('.quiz-item').forEach(item => {
        item.classList.remove('answered');
        item.querySelectorAll('.answer-btn').forEach(x=>x.classList.remove('selected'));
      });
      $('#quizResult').classList.add('hidden');
      $('#quizProgressText').textContent = `0 / ${data.quiz.length} répondu`;
      $('#quizProgressHint').textContent = 'Réponds à au moins 4 questions pour voir un premier aperçu.';
      $('#quizProgressBar').style.width = '0%';
      $('#quizSummary').textContent = 'Aucune réponse pour le moment.';
      window.scrollTo({top:$('#view-quiz').offsetTop - 70,behavior:'smooth'});
    });

    $('#quizShare')?.addEventListener('click', async () => {
      const status = $('#quizShareStatus');
      const url = location.href.split('#')[0] + '#quiz';
      const shareData = {title:'Mes idées · Présidentielle 2027',text:'Réponds à 8 questions simples et compare tes réponses aux positions documentées des candidats.',url};
      try {
        if (navigator.share) await navigator.share(shareData);
        else if (navigator.clipboard) { await navigator.clipboard.writeText(url); if(status) status.textContent='Lien copié.'; }
        else if(status) status.textContent='Copie l’adresse de la page pour partager le test.';
      } catch(e) {
        if(status && e?.name !== 'AbortError') status.textContent='Le partage n’a pas pu être ouvert.';
      }
    });
  }

  function renderLegend() {
    const items = [
      ['programme','Programme officiel','Mesure écrite dans un programme de campagne ou document officiel actuel.'],
      ['project','Projet politique','Projet publié, mais pouvant encore évoluer avant le programme présidentiel final.'],
      ['declaration','Déclaration / orientation','Proposition ou orientation exprimée publiquement, sans forcément être dans un programme final.'],
      ['missing','Pas encore vérifié','On préfère laisser la case vide plutôt que d’inventer ou de déduire.']
    ];
    $('#legend').innerHTML = items.map(([kind,label,txt]) => `<div class="badge ${kind}" title="${escapeHtml(txt)}">${escapeHtml(label)}</div>`).join('');
  }

  const viewTitles = {
    compare:'Présidentielle 2027 : compare les candidats simplement',
    records:'Promesses et actes · Présidentielle, simplement.',
    people:'Qui sont-ils ? · Présidentielle, simplement.',
    justice:'Justice et procédures · Présidentielle, simplement.',
    polls:'Sondages 2027 · Présidentielle, simplement.',
    quiz:'Mes idées · Présidentielle, simplement.',
    support:'Soutenir le site · Présidentielle, simplement.',
    special:'Forgotten Source · Publicité maison',
    method:'Méthode et sources · Présidentielle, simplement.',
    legal:'Mentions légales · Présidentielle, simplement.',
    privacy:'Confidentialité · Présidentielle, simplement.',
    cookies:'Cookies · Présidentielle, simplement.'
  };

  function switchView(view, updateHash=true) {
    const target = $(`#view-${view}`);
    if (!target) return;
    $$('.view').forEach(v=>v.classList.remove('active'));
    target.classList.add('active');
    $$('.nav-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===view));
    document.title = viewTitles[view] || viewTitles.compare;
    if (updateHash && history.replaceState) history.replaceState(null,'',view==='compare' ? location.pathname + location.search : `#${view}`);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  $$('[data-view]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); switchView(btn.dataset.view); }));
  $$('[data-express="topics"]').forEach(btn => btn.addEventListener('click', () => {
    $('#topicsStart')?.scrollIntoView({behavior:'smooth',block:'start'});
  }));

  const shareSiteButton = $('#shareSiteButton');
  if (shareSiteButton) shareSiteButton.addEventListener('click', async () => {
    const shareData = {title:'Présidentielle 2027 : compare les candidats simplement', text:'Choisis un sujet, compare les propositions et ouvre les sources seulement si tu veux aller plus loin.', url:location.href.split('#')[0]};
    const status = $('#shareSiteStatus');
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) { await navigator.clipboard.writeText(shareData.url); if(status) status.textContent='Lien copié.'; }
      else if(status) status.textContent='Copie l’adresse de la page pour la partager.';
    } catch(e) { if(status && e?.name !== 'AbortError') status.textContent='Le partage n’a pas pu être ouvert.'; }
  });

  const openMangaSite = $('#openMangaSite');
  if (openMangaSite) openMangaSite.addEventListener('click', () => {
    const status = $('#mangaPromoStatus');
    status.textContent = 'Le bouton est prêt. Dès que ton site Forgotten Source a son adresse publique, on la branche ici.';
  });
  const shareMangaButton = $('#shareMangaButton');
  if (shareMangaButton) shareMangaButton.addEventListener('click', async () => {
    const status = $('#mangaPromoStatus');
    const url = location.href.split('#')[0] + '#special';
    try {
      if (navigator.share) await navigator.share({title:'Forgotten Source',text:'Découvre le projet Forgotten Source : manga, animation et MMORPG.',url});
      else if (navigator.clipboard) { await navigator.clipboard.writeText(url); status.textContent='Lien de la page spéciale copié.'; }
    } catch(e) { if(e?.name !== 'AbortError') status.textContent='Le partage n’a pas pu être ouvert.'; }
  });

  const initialHash = (location.hash || '').replace('#','');
  if (initialHash && $(`#view-${initialHash}`)) switchView(initialHash,false);
  $$('.toggle-btn').forEach(btn => btn.addEventListener('click', () => { displayMode=btn.dataset.mode; applyDisplayMode(); }));
  $('.history-close').addEventListener('click', () => $('#historyDialog').close());
  $('#historyDialog').addEventListener('click', e => { if(e.target === $('#historyDialog')) $('#historyDialog').close(); });
  $('.record-close').addEventListener('click', () => $('#recordDialog').close());
  $('#recordDialog').addEventListener('click', e => { if(e.target === $('#recordDialog')) $('#recordDialog').close(); });
  $('#recordSearch').addEventListener('input', e => { recordQuery=e.target.value; renderRecords(); });
  const topicSelect = $('#topicSelect');
  if (topicSelect) topicSelect.addEventListener('change', e => selectTopic(e.target.value, false));

  // Accès publicitaire et gestion du consentement
  const recheckAdblock = $('#recheckAdblock');
  if (recheckAdblock) recheckAdblock.addEventListener('click', async () => {
    recheckAdblock.disabled = true;
    recheckAdblock.textContent = 'Vérification…';
    const blocked = await detectAdBlock();
    showAdblockState(blocked);
    recheckAdblock.disabled = false;
    recheckAdblock.textContent = 'J’ai désactivé mon bloqueur · Vérifier';
    if (!blocked) {
      const saved = readConsent();
      if (saved && !accessForceChoice) applyConsent(saved);
    }
  });

  const personalizedBtn = $('#acceptPersonalizedAds');
  if (personalizedBtn) personalizedBtn.addEventListener('click', () => {
    applyConsent(writeConsent({personalized:true, analytics:true, mode:'personalized'}));
  });

  const contextualBtn = $('#acceptContextualAds');
  if (contextualBtn) contextualBtn.addEventListener('click', () => {
    applyConsent(writeConsent({personalized:false, analytics:false, mode:'contextual'}));
  });

  const customizeBtn = $('#customizeConsent');
  if (customizeBtn) customizeBtn.addEventListener('click', () => {
    const prefs = $('#gatePreferences');
    const saved = readConsent();
    if (saved) {
      $('#consentPersonalized').checked = !!saved.personalized;
      $('#consentAnalytics').checked = !!saved.analytics;
    }
    prefs.classList.toggle('hidden');
  });

  const savePrefs = $('#saveConsentPreferences');
  if (savePrefs) savePrefs.addEventListener('click', () => {
    const personalized = !!$('#consentPersonalized').checked;
    const analytics = !!$('#consentAnalytics').checked;
    applyConsent(writeConsent({personalized, analytics, mode: personalized ? 'personalized' : 'contextual'}));
  });

  $$('.manage-cookies').forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    openConsentManager();
  }));

  const donateButton = $('#donateButton');
  if (donateButton) donateButton.addEventListener('click', () => {
    const status = $('#donateStatus');
    status.textContent = 'Le bouton est prêt : ajoute plus tard ton lien Ko-fi, PayPal, Stripe ou autre solution de don.';
    status.classList.add('support-status-active');
  });

  const watchAdButton = $('#watchAdButton');
  if (watchAdButton) watchAdButton.addEventListener('click', () => {
    const message = $('#rewardedVideoMessage');
    message.textContent = 'Aucune régie vidéo n’est encore connectée dans cette version. L’emplacement est prêt, mais aucune vue publicitaire ne génère encore de revenu.';
    $('#rewardedVideoZone').scrollIntoView({behavior:'smooth',block:'center'});
  });

  $('#updatedDate').textContent = data.updated;
  $('#candidateCount').textContent = data.candidates.length;
  renderPeopleFilters(); renderPeople(); renderRecordFilters(); renderRecords(); renderJustice(); renderPolls(); renderQuiz(); renderLegend(); selectTopic('salaire');
  prepareAccessGate();
})();
