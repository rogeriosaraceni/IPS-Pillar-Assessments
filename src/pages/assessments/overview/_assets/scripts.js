$('[data-tr="parent"]').on("click", function () {
    $(this).nextUntil('[data-tr="parent"]').filter('[data-tr="child"]').toggle("fast");
    $(this).find('[data-title="accordion"]').toggleClass("show");
});

$("#toggle-all").on("click", function () {
    const childRowsAll = $('[data-tr="child"]');
    const isVisible = childRowsAll.is(":visible");
    if (isVisible) {
        childRowsAll.hide("fast");
    } else {
        childRowsAll.show("fast");
    }
    $('[data-title="accordion"]').toggleClass("show", !isVisible);
});

$("#tableHeadColFixer").tableHeadFixer({"head" : true, "left" : 3});
