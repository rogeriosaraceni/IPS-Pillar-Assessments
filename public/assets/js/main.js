"use strict";

/** ////////////////////////////////////////////////////////////////////
 *
 * - mainAppMarginTop
 * - showCurrentYear
 * - initNavigationsActive
 * - fancybox
 * - data-row="delete"
 * - closeModalIfInside
 * -
--------------------------------------------------------------------- */

/** --------------------------------------------------------------------
 * mainAppMarginTop
--------------------------------------------------------------------- */
const mainAppMarginTop = () => {
    const header = document.querySelector('[data-el="top-fixed"]')
    const mainApp = document.querySelector('[data-el="main-app"]')

    if(header && mainApp){
        const headerHeight = header.clientHeight + 'px'
        if(mainApp){
            mainApp.style.marginTop = headerHeight
        }
    }
}
mainAppMarginTop()

/** --------------------------------------------------------------------
 * showCurrentYear
--------------------------------------------------------------------- */
const showCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    const divCurrentYear = document.querySelectorAll('[data-js="currentYear"]')
    if (divCurrentYear) {
        divCurrentYear.forEach((item) => {
            item.textContent = currentYear
        })
    }
}
showCurrentYear()

/** --------------------------------------------------------------------
 * initNavigationsActive
--------------------------------------------------------------------- */
const initNavigationsActive = () => {
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll(`.navbar-nav .nav-item a[href$="${currentUrl}"]`)

    navLinks.forEach(function (link) {
        link.classList.add("active")

        const dropdownParent = link.closest(".nav-item.dropdown")
        dropdownParent?.classList.add("active")
    });
}
initNavigationsActive()

/** --------------------------------------------------------------------
 * fancybox
 * https://fancyapps.com/fancybox/plugins/html/#iframes
--------------------------------------------------------------------- */
function initFancybox() {
    const fancyboxElement = document.querySelector("[data-fancybox]")
    if (fancyboxElement) {
        Fancybox.bind("[data-fancybox]", {});
    }

    //console.log('ativado fancybox');
}
initFancybox()

/** --------------------------------------------------------------------
 * data-row="delete"
--------------------------------------------------------------------- */
function initDeleteRow() {
    $('[data-row="delete"]').on('click', function () {
        if (!confirm("Você tem certeza que deseja excluir?")) {
            return false;
        }
    });
}
initDeleteRow()

/** --------------------------------------------------------------------
 * closeModalIfInside
 * Fecha o modal se o botão estiver dentro de um modal
--------------------------------------------------------------------- */
function closeModalIfInside(btn) {
    if (btn.getAttribute('data-modal') !== 'close') {
        return;
    }

    const form = btn.closest('form')
    const modal = form.closest('.modal')
    if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal)
        if (modalInstance) {
            modalInstance.hide()
        }
    }
}
