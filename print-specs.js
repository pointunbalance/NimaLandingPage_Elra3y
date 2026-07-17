document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("print-specs");
    if (!btn) return;

    btn.addEventListener("click", function() {
        var specs = document.getElementById("specs");
        if (!specs) { alert("المواصفات غير موجودة"); return; }

        btn.disabled = true;
        btn.textContent = "جاري التحميل...";

        var title = document.title.replace(/[^\w\u0600-\u06FF]+/g, "_").trim();
        var opt = {
            margin: [10, 10, 10, 10],
            filename: title + ".pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(opt).from(specs).save().then(function() {
            btn.disabled = false;
            btn.textContent = "طباعة المواصفات PDF";
        }).catch(function() {
            btn.disabled = false;
            btn.textContent = "طباعة المواصفات PDF";
            alert("حدث خطأ أثناء إنشاء الملف");
        });
    });
});
