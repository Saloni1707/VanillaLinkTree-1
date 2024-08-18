
document.querySelectorAll('i.fa-ellipsis-vertical').forEach(el => {
  const parentLink = el.parentNode.closest('a');
  const link = parentLink.getAttribute('href');
  console.log(link)
});

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    document.querySelector('.modal')?.remove();
  }
});

document.querySelectorAll('i.fa-ellipsis-vertical').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'modal', 'z-20', 'h-[100%]');
    const menu = document.createElement('ul');
    menu.classList.add('bg-[#2226]', 'rounded', 'p-2');
    menu.innerHTML = `
        <h2> Share The Link! </h2>
        <li><i class="fa-brands fa-x"></i><a href="https://x.com/intent/tweet?text=Checkout " class="modal-share">Share via X</a></li>
        <li><i class="fa-brands fa-snapchat" class="text-[#fdfd69]"></i><a href="snapchat://add" class="modal-share">Share via Snapchat</a></li>
        <li><i class="fa-brands fa-linkedin"></i><a href="linkedin://sharing/share-offsite" class="modal-share">Share via LinkedIn</a></li>
        <li><i class="fa-solid fa-envelope"></i><a href="mailto:?subject=Checkout This Link!" class="modal-share">Share via Email</a></li>
        <li><i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/?text=Check This Link!" class="modal-share">Share via WhatsApp</a></li>
        <li><i class="fa-solid fa-share"></i><button class="modal-share" onclick="if (navigator.clipboard) { navigator.clipboard.writeText(window.location.href); this.innerText = 'Copied!'; setTimeout(() => { this.innerText = 'Copy Link'; }, 2000); } else { alert('Your browser does not have support for the Clipboard API'); }">Copy Link</button></li>
      `;
    modal.appendChild(menu);
    document.body.appendChild(modal);
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  });
});

