'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const email = 'amanimohamad462@gmail.com';

const ar = {
  skip: 'انتقل إلى المحتوى', navWork: 'الأعمال', navAbout: 'عن أماني', navServices: 'الخدمات', letsTalk: 'لنتحدث',
  heroEyebrow: 'مصممة جرافيك مستقلة · السعودية', heroTitle: 'تصميم بروح.<br>وأثر <em>يدوم.</em>',
  heroDescription: 'هويات مدروسة، وتغليف جميل، ومطبوعات تعبّر عنك. أنا أماني، ويسعدني أن أحوّل فكرتك إلى هوية تنبض بالحياة.',
  explore: 'تصفّح أعمالي', heroSignature: 'كل تفصيل له معنى.', heroCaption: 'أماني ديزاينر / تصوّر لتطبيقات الهوية', scroll: 'لمحة عمّا أصمّمه',
  stripBrand: 'هويات بصرية', stripPackaging: 'تغليف بطابع خاص', stripPrint: 'مطبوعات هادفة', stripSaudi: 'من السعودية، بكل شغف',
  workLabel: '٠١ / أعمال مختارة', workNote: 'مجموعة من الهويات والتجارب الإبداعية', workTitle: 'تفاصيل صغيرة.<br>وحكايات <em>مميّزة.</em>',
  workDescription: 'من الانطباع الأول إلى كوب القهوة بين يديك. عناية بكل نقطة تلتقي فيها علامتك بجمهورها.',
  filterAll: 'كل الأعمال', filterIdentity: 'الهويات البصرية', filterPackaging: 'التغليف', filterPrint: 'الملصقات والمطبوعات',
  originalIdentity: 'هوية أصلية', originalArtwork: 'عمل أصلي', conceptStudy: 'دراسة تصوّرية', amaniCategory: 'هوية شخصية · نظام الشعار',
  laylName: 'قهوة ليل', laylCategory: 'هوية مقهى · أكواب وتغليف', bloomName: 'أفكار تتفتح', bloomCategory: 'توجيه فني · سلسلة ملصقات',
  stationeryName: 'لمسة شخصية', stationeryCategory: 'بطاقات أعمال · قرطاسية', madarName: 'مدار / منظور جديد', madarCategory: 'حملة لشركة · ملصقات ثنائية اللغة',
  marksName: 'شعار واحد بتعابير مختلفة', marksCategory: 'شعار حرفي · تنويعات لونية',
  conceptNote: 'تضم المجموعة أعمال أماني الأصلية ودراسات تصوّرية. الدراسات تجارب إبداعية لم تُنفّذ بتكليف من عملاء.',
  aboutLabel: '٠٢ / خلف التصميم', aboutTitle: 'عين للتفاصيل.<br>ولمسة <em>شخصية.</em>', aboutIntro: 'أهلًا، أنا أماني الجابري.',
  aboutDescription: 'مصممة جرافيك من أبها، المملكة العربية السعودية. تلفتني التفاصيل الصغيرة التي تمنح كل علامة طابعها الخاص.',
  aboutDescription2: 'أصمّم الشعارات وهويات المقاهي وأكواب القهوة والتغليف والملصقات. أجمع بين الخطوط الأنيقة والألوان المتناغمة والفكرة الواضحة، لتظهر قصتك بصورة متسقة أينما كانت.',
  aboutSignoff: 'فضولٌ يقودني، وعنايةٌ ترافقني.', createTogether: 'لنبتكر شيئًا معًا',
  servicesLabel: '٠٣ / كيف أساعدك', servicesNote: 'فكرة واحدة تتناغم تفاصيلها.', servicesTitle: 'من أول <em>شرارة</em><br>إلى آخر تفصيل.',
  servicesDescription: 'سواء كنت تبدأ مشروعًا جديدًا أو تجدّد علامتك، لنجعل كل قطعة جزءًا من القصة نفسها.', discussProject: 'أخبرني عن مشروعك',
  serviceBrand: 'الهوية البصرية', serviceBrandDescription: 'لغة بصرية مميّزة تبدأ من قصتك: شعارات، وألوان، وخطوط، ونظام متسق يمكنك البناء عليه.', serviceBrandTags: 'تصميم شعارات / هوية بصرية / دليل الهوية',
  serviceCoffee: 'هويات المقاهي والقهوة', serviceCoffeeDescription: 'ترحيب دافئ قبل الرشفة الأولى. تصاميم مترابطة للأكواب والأغلفة وأكياس البن والقوائم ولوحات المقاهي.', serviceCoffeeTags: 'أكواب القهوة / قوائم / تطبيقات للمقاهي',
  servicePackaging: 'التغليف والقرطاسية', servicePackagingDescription: 'قطع تستحق الاحتفاظ بها. تصاميم للأكياس والصناديق والملصقات وبطاقات الأعمال تحمل هويتك إلى التفاصيل اليومية.', servicePackagingTags: 'أكياس وصناديق / ملصقات / بطاقات أعمال',
  servicePosters: 'الملصقات والحملات', servicePostersDescription: 'رسالة واضحة بأسلوب بصري يبقى في الذاكرة. ملصقات ترويجية وحملات للشركات وتصاميم للتواصل الاجتماعي بالعربية والإنجليزية.', servicePostersTags: 'حملات مطبوعة / ملصقات / تصاميم اجتماعية',
  processLabel: 'خطوات العمل', processTitle: 'الأشياء الجميلة<br>تبدأ <em>بحوار.</em>', processDiscover: 'نكتشف', processDiscoverText: 'قصتك وجمهورك وما يميّز علامتك. نبدأ بالاستماع.',
  processDesign: 'نستكشف ونصمّم', processDesignText: 'تتحوّل الأفكار إلى اتجاه بصري، وننقّح التفاصيل معًا حتى تستقرّ على ما يناسبك.', processDeliver: 'نمنحها الحياة', processDeliverText: 'مجموعة مترابطة من التصاميم، جاهزة للأماكن التي ستظهر فيها علامتك.',
  contactLabel: '٠٤ / لنعمل على شيء له معنى', contactTitle: 'قصتك.<br>برواية <em>جميلة.</em>', contactDescription: 'لديك فكرة، أو بداية جديدة، أو علامة تستعد لفصلها القادم؟ يسعدني أن أسمع منك.',
  startProject: 'ابدأ مشروعًا', emailLabel: 'راسلني', copyEmail: 'نسخ البريد ↗', whatsappLabel: 'لنتحدث', elsewhereLabel: 'تابعني', location: 'أبها، المملكة العربية السعودية',
  copyright: '© ٢٠٢٦ أماني الجابري. صُمّم بعناية.', backTop: 'العودة للأعلى', closerLook: 'نظرة أقرب', newBeginning: 'بداية جديدة',
  inquiryTitle: 'حدّثني عن<br><em>فكرتك.</em>', inquiryDescription: 'بعض التفاصيل لبدء الحوار. ستجهّز هذه الاستمارة مسوّدة في تطبيق البريد لديك.', yourName: 'اسمك', yourEmail: 'بريدك الإلكتروني',
  projectType: 'ما نوع المشروع؟', somethingElse: 'شيء آخر', yourIdea: 'نبذة عن فكرتك', prepareEmail: 'جهّز الرسالة', directEmail: 'أو راسل أماني مباشرةً ↗'
};

const cases = {
  amani: {
    title: ['Amani Designer', 'أماني ديزاينر'], kind: 'identity',
    desc: ['A personal identity built around the interlocking A and D. Deep plum sets a confident tone; blush and flowing curves soften the expression across print, signage, and packaging.', 'هوية شخصية تتمحور حول تداخل الحرفين A وD. يمنحها الأرجواني العميق طابعًا واثقًا، فيما يضفي الوردي والمنحنيات لمسة ناعمة على المطبوعات واللافتات والتغليف.'],
    scope: ['Monogram, colour palette, typography, and visual identity board.', 'شعار حرفي، ولوحة ألوان، وخطوط، ولوحة للهوية البصرية.'],
    detail: ['The original board shows Cormorant Garamond and Cairo paired with a four-point star and layered curves.', 'تجمع اللوحة الأصلية خطّي Cormorant Garamond وCairo مع النجمة الرباعية والمنحنيات المتداخلة.'],
    image: ['brand-board.jpg', 'Amani Designer original visual identity board'], board: true
  },
  layl: {
    title: ['Layl Coffee', 'قهوة ليل'], kind: 'concept',
    desc: ['A concept for a Saudi specialty coffee shop with a quieter mood. A crescent and a fine serif wordmark give the packaging an identity that works across cups and coffee bags.', 'تصوّر لمقهى قهوة مختصّة سعودي بطابع هادئ. يرسم الهلال والخط الأنيق هوية تمتدّ من الأكواب إلى أكياس البن.'],
    scope: ['Café wordmark, takeaway cups, and retail coffee packaging.', 'شعار المقهى، وأكواب الطلبات الخارجية، وتغليف أكياس البن.'],
    detail: ['Alternating blush and plum makes the two cup sizes easy to distinguish while keeping the set cohesive.', 'التناوب بين الوردي والأرجواني يميّز مقاسي الكوب ويحافظ على انسجام المجموعة.'],
    image: ['coffee.webp', 'Layl cup and coffee bag mockup']
  },
  bloom: {
    title: ['Ideas in Bloom', 'أفكار تتفتح'], kind: 'concept',
    desc: ['A pair of campaign posters that plays with the energy of a single idea. The headline moves between bold and delicate, echoed by a ribbon unfolding into a flower.', 'ملصقان لحملة تدور حول طاقة الفكرة. يتنقّل العنوان بين الجرأة والرقة، ويرافقه شريط يتفتّح كزهرة.'],
    scope: ['Campaign art direction, typographic layout, and a two-poster print series.', 'توجيه فني للحملة، وتنسيق طباعي، وسلسلة من ملصقين.'],
    detail: ['Reversing the colours between layouts lets the two posters sit together while each holds its own.', 'عكس الألوان بين التصميمين يجعل الملصقين متناسقين مع احتفاظ كل منهما بشخصيته.'],
    image: ['posters.webp', 'Two typographic campaign poster mockups']
  },
  stationery: {
    title: ['The personal touch', 'لمسة شخصية'], kind: 'original',
    desc: ['The original Amani Designer business cards in two colourways. One side leads with the monogram; the other sets the Arabic name and contact details in an open, legible layout.', 'بطاقات أعمال أماني الأصلية بلونين. يتصدّر الشعار أحد الوجهين، بينما يعرض الوجه الآخر الاسم بالعربية وبيانات التواصل بتنسيق واضح.'],
    scope: ['Four business card faces: two fronts and two backs.', 'أربعة أوجه لبطاقات الأعمال: وجهان أماميان ووجهان خلفيان.'],
    detail: ['Curved details extend the identity across both sides and connect the plum and blush versions.', 'تمتدّ المنحنيات على الوجهين لتربط بين النسختين الأرجوانية والوردية.'],
    gallery: 'card', pdf: true
  },
  madar: {
    title: ['Madar / A new perspective', 'مدار / منظور جديد'], kind: 'concept',
    desc: ['A bilingual company campaign concept that invites a change in perspective. Arabic leads the composition, with a secondary English line and an orbit that picks up the movement in the typography.', 'تصوّر لحملة شركة ثنائية اللغة تدعو إلى النظر من زاوية مختلفة. تتصدّر العربية التكوين، ويكملها سطر إنجليزي ومدار يواكب حركة الخط.'],
    scope: ['Bilingual company poster, campaign typography, and a visual motif.', 'ملصق لشركة باللغتين، وخطوط للحملة، وعنصر بصري.'],
    detail: ['A restrained orbit keeps the message in focus and gives the series a repeatable graphic element.', 'يحافظ المدار البسيط على وضوح الرسالة ويمنح السلسلة عنصرًا بصريًا قابلًا للتكرار.'],
    poster: true
  },
  marks: {
    title: ['One mark, many expressions', 'شعار واحد بتعابير مختلفة'], kind: 'original',
    desc: ['Four supplied colour versions of the same AD monogram. Each keeps the shared silhouette while shifting the contrast to suit different backgrounds.', 'أربع نسخ لونية أصلية للشعار الحرفي AD. تحافظ كل نسخة على الشكل نفسه وتعدّل التباين بما يناسب الخلفيات المختلفة.'],
    scope: ['Four AD logo variants with plum, blush, and white combinations.', 'أربع نسخ للشعار بتوليفات من الأرجواني والوردي والأبيض.'],
    detail: ['The shared structure allows the mark to stay recognizable across light and dark applications.', 'يحافظ البناء المشترك على سهولة التعرّف على الشعار عند استخدامه على خلفيات فاتحة وداكنة.'],
    gallery: 'logo'
  }
};

let lang = 'en';
let filter = 'all';
let activeCase = null;
const english = new Map($$('[data-i18n], [data-i18n-html]').map(el => [el, el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent]));
const languageButton = $('.language');
const menuButton = $('.menu-toggle');
const mobileNav = $('#mobile-nav');
const projectDialog = $('#project-dialog');
const inquiryDialog = $('#inquiry-dialog');
const filterButtons = $$('[data-filter]');
const projectCards = $$('[data-project]');
const pick = values => values[lang === 'ar' ? 1 : 0];

function menu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', pick(open ? ['Close navigation', 'أغلق القائمة'] : ['Open navigation', 'افتح القائمة']));
  mobileNav.hidden = !open;
}

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = pick(['Amani Designer — Brand Identity, Packaging & Print', 'أماني الجابري — هويات بصرية وتغليف ومطبوعات']);
  for (const [el, initial] of english) {
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    const value = lang === 'ar' ? ar[key] : initial;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
    else el.textContent = value;
  }
  languageButton.textContent = pick(['العربية', 'English']);
  languageButton.lang = pick(['ar', 'en']);
  languageButton.setAttribute('aria-label', pick(['Switch to Arabic', 'Switch to English']));
  $('.brand').setAttribute('aria-label', pick(['Amani Designer home', 'الصفحة الرئيسية لأماني ديزاينر']));
  $('.desktop-nav').setAttribute('aria-label', pick(['Main navigation', 'القائمة الرئيسية']));
  mobileNav.setAttribute('aria-label', pick(['Mobile navigation', 'قائمة التنقل']));
  $('.filters').setAttribute('aria-label', pick(['Filter projects', 'تصفية المشاريع']));
  $('.close-dialog', projectDialog).setAttribute('aria-label', pick(['Close project', 'أغلق المشروع']));
  $('.close-dialog', inquiryDialog).setAttribute('aria-label', pick(['Close inquiry', 'أغلق الاستفسار']));
  projectCards.forEach(card => $('.project-open', card).setAttribute('aria-label', pick(['View project: ', 'عرض المشروع: ']) + pick(cases[card.dataset.project].title)));
  menu(false);
  setFilter(filter, false);
  if (activeCase) renderCase(activeCase);
  try { localStorage.setItem('amani-language', lang); } catch { /* Language still works in private browsing. */ }
}

function setFilter(value, announce = true) {
  filter = value;
  let count = 0;
  for (const card of projectCards) {
    card.hidden = value !== 'all' && !card.dataset.category.split(' ').includes(value);
    if (!card.hidden) count++;
  }
  for (const button of filterButtons) {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  if (announce) $('#filter-status').textContent = pick([`${count} ${count === 1 ? 'project' : 'projects'} shown`, `عدد المشاريع المعروضة: ${count}`]);
}

function renderCase(id) {
  const project = cases[id];
  const kind = project.kind === 'concept' ? pick(['Concept study', 'دراسة تصوّرية']) : pick(['Original Amani artwork', 'من أعمال أماني الأصلية']);
  const gallery = project.gallery ? `<div class="case-gallery">${[1, 2, 3, 4].map(i => `<figure ${project.gallery === 'logo' ? 'class="variant"' : ''}><img src="assets/${project.gallery}-${i}.webp" alt="${pick([project.gallery === 'logo' ? 'AD logo variant ' : 'Business card design ', 'التصميم رقم '])}${i}"></figure>`).join('')}</div>` : '';
  const boardNote = project.board ? `<figcaption>${pick(['This original board includes sample details. See the contact section for Amani’s business contacts.', 'تتضمّن اللوحة الأصلية بيانات توضيحية. بيانات أماني المهنية في قسم التواصل.'])}</figcaption>` : '';
  const media = project.image ? `<figure class="case-figure"><img class="case-art" src="assets/${project.image[0]}" alt="${project.image[1]}">${boardNote}</figure>` : '';
  let poster = '';
  if (project.poster) {
    const original = $('.madar-art').cloneNode(true);
    $('.image-tag', original).remove();
    poster = `<div class="case-figure">${original.outerHTML}</div>`;
  }
  $('#project-content').innerHTML = `
    <p class="case-label">${kind}</p><h2 id="project-dialog-title">${pick(project.title)}</h2>
    <p class="description">${pick(project.desc)}</p>${media}${gallery}${poster}
    <div class="case-details"><div><h3>${pick(['The scope', 'نطاق العمل'])}</h3><p>${pick(project.scope)}</p></div>
    <div><h3>${pick(['Design direction', 'اتجاه التصميم'])}</h3><p>${pick(project.detail)}</p></div></div>
    ${project.pdf || project.board ? `<div class="case-links">${project.pdf ? `<a class="text-link" href="assets/amani-business-cards.pdf" target="_blank" rel="noopener">${pick(['View original card PDF ↗', 'عرض ملف البطاقات الأصلي ↗'])}</a>` : `<a class="text-link" href="assets/brand-board.jpg" target="_blank" rel="noopener">${pick(['Open full identity board ↗', 'افتح لوحة الهوية بالحجم الكامل ↗'])}</a>`}</div>` : ''}
  `;
}

let opener = null;
function showDialog(dialog, button) {
  opener = button;
  dialog.scrollTop = 0;
  dialog.showModal();
  $('.close-dialog', dialog).focus({preventScroll: true});
}

for (const card of projectCards) {
  const button = $('.project-open', card);
  button.addEventListener('click', () => {
    activeCase = card.dataset.project;
    renderCase(activeCase);
    showDialog(projectDialog, button);
  });
}
for (const dialog of [projectDialog, inquiryDialog]) {
  $('.close-dialog', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    opener?.focus({preventScroll: true});
    opener = null;
    if (dialog === projectDialog) activeCase = null;
  });
}

filterButtons.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
languageButton.addEventListener('click', () => setLanguage(lang === 'en' ? 'ar' : 'en'));
menuButton.addEventListener('click', () => menu(mobileNav.hidden));
$$('a', mobileNav).forEach(link => link.addEventListener('click', () => menu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !mobileNav.hidden) { menu(false); menuButton.focus(); }
});

const copyButton = $('.copy-email');
let copyTimer;
copyButton.addEventListener('click', async () => {
  const status = $('.copy-status');
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = pick(['Copied ✓', 'تم النسخ ✓']);
    status.textContent = pick(['Email address copied.', 'تم نسخ البريد الإلكتروني.']);
  } catch {
    const emailLink = $('a[href^="mailto:"]', $('.contact-links'));
    const range = document.createRange();
    range.selectNodeContents(emailLink);
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = pick(['Email selected', 'تم تحديد البريد']);
    status.textContent = pick(['Email address selected. Use your device’s copy command.', 'تم تحديد البريد. استخدم أمر النسخ في جهازك.']);
  }
  copyTimer = setTimeout(() => { copyButton.textContent = lang === 'ar' ? ar.copyEmail : english.get(copyButton); }, 2400);
});

$('.start-project').addEventListener('click', event => showDialog(inquiryDialog, event.currentTarget));
$('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const service = $('select', event.currentTarget).selectedOptions[0].textContent;
  const subject = pick(['Design inquiry: ', 'استفسار تصميم: ']) + service;
  const greeting = pick(['Hello Amani,', 'مرحبًا أماني،']);
  const body = `${greeting}\r\n\r\n${fields.get('brief').trim()}\r\n\r\n${pick(['Project', 'المشروع'])}: ${service}\r\n${pick(['Name', 'الاسم'])}: ${fields.get('name').trim()}\r\n${pick(['Email', 'البريد'])}: ${fields.get('email').trim()}`;
  $('#inquiry-status').textContent = pick(['Your draft is ready to open in your email app. You can also email Amani directly below.', 'المسوّدة جاهزة للفتح في تطبيق البريد. يمكنك أيضًا مراسلة أماني مباشرةً من الرابط أدناه.']);
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

try { if (localStorage.getItem('amani-language') === 'ar') setLanguage('ar'); } catch { /* Default to English. */ }
