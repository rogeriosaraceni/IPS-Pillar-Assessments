/*! --------------------------------------------------------------------
* btnToggleSidebar
* --------------------------------------------------------------------*/
const wrapperApp       = document.querySelector('#wrapperApp')
const sidebar          = document.querySelector('.sidebarApp')
const btnToggleSidebar = document.querySelector('[data-btn="toggleSidebar"]')

btnToggleSidebar?.addEventListener('click', (e) => {
    e.preventDefault()
    wrapperApp.classList.toggle('sidebarMin')
})

/*! --------------------------------------------------------------------
* changeSidebarClass
* --------------------------------------------------------------------*/
const changeSidebarClass = () => {
    let bodyWidth = document.body.clientWidth
    let maxWidth = '991'

    if (bodyWidth > maxWidth) {
        wrapperApp?.classList.remove('sidebarMin')
    } else if (bodyWidth <= maxWidth + 1) {
        wrapperApp?.classList.add('sidebarMin')
    };
}

window.addEventListener('resize', function(){
    changeSidebarClass()
})

changeSidebarClass()

/*! --------------------------------------------------------------------
* navigation-active / Jquery
* --------------------------------------------------------------------*/
const currentUrl = window.location.pathname;

//link da pagina atual recebe active
$('.navSidebarApp a[href$="'+currentUrl+'"]').parent('li').addClass('active');
//Add class active na a.nav-item filho da ul.sub-menu li.active
$('.navSidebarApp .sub-menu li.active').parents('.nav-item').addClass('active');

//Mantem submenu da li.active aberto(indo na .collapse mais próximo e add .show )
//Encontra a proxima .dropdow e atribui true na aria-expanded para a seta ficar para baixo V
$('.navSidebarApp .sub-menu li.active').parents('.collapse').addClass('show');
$('.navSidebarApp .sub-menu li.active').parents('.collapse').next('.dropdown').attr("aria-expanded", "true")

/*! --------------------------------------------------------------------
* PerfectScrollbar
* --------------------------------------------------------------------*/
const psSidebar = new PerfectScrollbar('.contentSidebarApp');
document.querySelector('.contentSidebarApp').addEventListener('touchstart', function(event) {}, { passive: true });
psSidebar.update();
