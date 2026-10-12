(() => {
  const buttons = [
    {button: document.querySelector('.nav-toggle'),nav: document.getElementById('site-nav'),text: document.querySelector('.nav-toggle-text')},
    {button: document.querySelector('.demo-menu'),nav: document.getElementById('demo-nav'),text: null}
  ];
  buttons.forEach(({button,nav,text}) => {
    if (!button || !nav) return;
    const close = (restore=false) => {
      const wasOpen = nav.classList.contains('open');
      nav.classList.remove('open');
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label',button.classList.contains('demo-menu')?'Open menu':'Open navigation');
      if (text) text.textContent='Menu';
      if (restore && wasOpen) button.focus();
    };
    button.addEventListener('click',() => {
      const isOpen = nav.classList.toggle('open');
      button.setAttribute('aria-expanded',String(isOpen));
      button.setAttribute('aria-label',isOpen?'Close menu':'Open menu');
      if (text) text.textContent=isOpen?'Close':'Menu';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click',()=>close()));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')close(true)});
    document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!button.contains(event.target))close()});
    window.addEventListener('resize',()=>{if(window.innerWidth>1050)close()});
  });
  const form=document.getElementById('inquiry-form');
  if (!form) return;
  const params=new URLSearchParams(location.search);
  for (const field of ['template','package']) {
    const choice=params.get(field);
    if (choice && form.elements[field] && [...form.elements[field].options].some(option => option.value===choice)) form.elements[field].value=choice;
  }
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values=new FormData(form);
    const subject='GIC website inquiry — '+(values.get('business')||'New project');
    const body=[
      'Name: '+values.get('name'),
      'Business: '+values.get('business'),
      'Email: '+values.get('email'),
      'Industry: '+(values.get('industry')||'Not specified'),
      'Template: '+(values.get('template')||'Not selected'),
      'Package: '+(values.get('package')||'Help me choose'),
      '',
      'Project details:',
      values.get('message')
    ].join('\n');
    const mailto='mailto:cory.tortorici@globalintentcompany.space?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    document.getElementById('form-status').textContent='Your email application should open. Review and send the message there.';
    window.location.href=mailto;
  });
})();
