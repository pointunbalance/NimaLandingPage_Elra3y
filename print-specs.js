document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("print-specs");
    if (!btn) return;

    btn.addEventListener("click", function() {
        var specs = document.getElementById("specs");
        if (!specs) { alert("المواصفات غير موجودة"); return; }

        var title = document.title.split(" - ")[0].trim();
        var cards = specs.querySelectorAll(".spec-card");
        var html = "";

        cards.forEach(function(card) {
            var h4 = card.querySelector("h4");
            var items = card.querySelectorAll(".spec-item");
            html += '<div class="card"><h4>' + (h4 ? h4.textContent : "") + '</h4>';
            items.forEach(function(item) {
                var label = item.querySelector(".spec-label");
                var value = item.querySelector(".spec-value");
                html += '<div class="row"><span class="label">' + (label ? label.textContent : "") + '</span><span class="value">' + (value ? value.textContent : "") + '</span></div>';
            });
            html += '</div>';
        });

        var popup = window.open("", "_blank", "width=800,height=900");
        popup.document.write('<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>' + title + ' - المواصفات</title><style>@import url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700&display=swap");*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Noto Kufi Arabic",Arial,sans-serif;padding:30px;background:#fff;color:#333}h1{text-align:center;font-size:22px;margin-bottom:25px;color:#1a1a2e;border-bottom:3px solid #0096D6;padding-bottom:15px}.card{background:#f8f9fa;border:1px solid #ddd;border-radius:8px;padding:15px;margin-bottom:15px}.card h4{color:#0096D6;font-size:15px;border-bottom:2px solid #0096D6;padding-bottom:8px;margin-bottom:10px}.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee}.row:last-child{border-bottom:none}.label{color:#666;font-size:13px}.value{font-weight:600;color:#333;font-size:13px;text-align:right}@media print{body{padding:15px}.card{break-inside:avoid}}</style></head><body><h1>' + title + '</h1>' + html + '<script>window.onload=function(){setTimeout(function(){window.print()},500)}<\/script></body></html>');
        popup.document.close();
    });
});
