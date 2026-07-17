document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("print-specs");
    if (!btn) return;

    btn.addEventListener("click", function() {
        var specs = document.getElementById("specs");
        if (!specs) { alert("المواصفات غير موجودة"); return; }

        btn.disabled = true;
        btn.textContent = "جاري التحميل...";

        var clone = specs.cloneNode(true);
        clone.removeAttribute("id");
        clone.style.cssText = "direction:rtl;text-align:right;background:#fff;color:#333;padding:20px;font-family:'Noto Kufi Arabic',Arial,sans-serif;";

        var cards = clone.querySelectorAll(".spec-card");
        cards.forEach(function(card) {
            card.style.cssText = "background:#fff;border:1px solid #ddd;border-radius:8px;padding:15px;margin-bottom:15px;box-shadow:none;";
        });
        var titles = clone.querySelectorAll("h4");
        titles.forEach(function(t) {
            t.style.cssText = "color:#0096D6;border-bottom:2px solid #0096D6;padding-bottom:8px;margin-bottom:10px;font-size:14px;";
        });
        var labels = clone.querySelectorAll(".spec-label");
        labels.forEach(function(l) { l.style.cssText = "color:#666;font-size:12px;"; });
        var values = clone.querySelectorAll(".spec-value");
        values.forEach(function(v) { v.style.cssText = "font-weight:600;color:#333;font-size:12px;text-align:right;"; });
        var items = clone.querySelectorAll(".spec-item");
        items.forEach(function(i) { i.style.cssText = "display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;"; });

        var wrapper = document.createElement("div");
        wrapper.style.cssText = "position:absolute;left:-9999px;top:0;width:800px;background:#fff;";
        var h2 = document.createElement("h2");
        h2.textContent = document.title.split(" - ")[0].trim();
        h2.style.cssText = "text-align:center;color:#333;font-size:18px;margin-bottom:20px;font-family:'Noto Kufi Arabic',Arial,sans-serif;";
        wrapper.appendChild(h2);
        wrapper.appendChild(clone);
        document.body.appendChild(wrapper);

        var title = document.title.replace(/[^\w\u0600-\u06FF]+/g, "_").trim();
        var opt = {
            margin: [10, 10, 10, 10],
            filename: title + ".pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true, width: 800, windowWidth: 800 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(opt).from(wrapper).save().then(function() {
            document.body.removeChild(wrapper);
            btn.disabled = false;
            btn.textContent = "طباعة المواصفات PDF";
        }).catch(function(e) {
            document.body.removeChild(wrapper);
            btn.disabled = false;
            btn.textContent = "طباعة المواصفات PDF";
            alert("حدث خطأ أثناء إنشاء الملف");
        });
    });
});
