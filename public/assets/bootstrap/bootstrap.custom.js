"use strict";

/** ////////////////////////////////////////////////////////////////////
 *
 * - initTooltips
 * - initPopovers
 * -
--------------------------------------------------------------------- */

/** --------------------------------------------------------------------
 * initTooltips
--------------------------------------------------------------------- */
function initTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}
initTooltips()

/** --------------------------------------------------------------------
 * initPopovers
--------------------------------------------------------------------- */
function initPopovers() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    return popoverList
}
initPopovers()
