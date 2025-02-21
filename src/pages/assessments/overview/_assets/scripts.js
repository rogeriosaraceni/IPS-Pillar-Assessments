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

function applySelectedClass(select) {
    const selectId = $(select).data('select')
    const tdTarget = $(`td[data-target="${selectId}"]`)

    tdTarget.removeClass(function(index, className) {
        return (className.match(/\bselected-value-\S+/g) || []).join(' ')
    })
    if (select.value !== "") {
        tdTarget.addClass(`selected-value-${select.value}`)
    }
}

$('.select-pillar').each(function() { applySelectedClass(this)})
$('.select-pillar').on('change', function() { applySelectedClass(this)})
