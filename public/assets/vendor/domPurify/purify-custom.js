/** --------------------------------------------------------------------
 * DOMPurif protect xss
--------------------------------------------------------------------- */
const sanitize = (string) => DOMPurify.sanitize(string);
let inputsApp = document.querySelectorAll(".form-control");
inputsApp.forEach((item) => {
    item.addEventListener("change", (e) => {
        const result = sanitize(e.target.value);
        console.log(result);
    });
});
