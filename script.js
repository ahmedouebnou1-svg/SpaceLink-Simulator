const msgRange = document.getElementById('msgRange');
const msgCountVal = document.getElementById('msgCountVal');
const runBtn = document.getElementById('runBtn');

// تحديث قيمة عدد الرسائل عند تحريك الشريط
msgRange.addEventListener('input', (e) => {
    msgCountVal.innerText = e.target.value;
});

// تنفيذ المحاكاة عند الضغط على الزر
runBtn.addEventListener('click', () => {
    const totalMessages = parseInt(msgRange.value);

    // حساب نتائج الإرسال المباشر (يتأثر بالانقطاعات)
    const directDelivered = Math.floor(totalMessages * 0.35); 
    const directDelay = (Math.random() * 3 + 10).toFixed(1);

    // حساب نتائج التخزين والإعادة (DTN - نجاح كامل بالانتظار)
    const dtnDelivered = totalMessages; 
    const dtnDelay = (Math.random() * 5 + 14).toFixed(1);

    // عرض النتائج في الصفحة
    document.getElementById('directDelivered').innerText = `${directDelivered} / ${totalMessages}`;
    document.getElementById('directDelay').innerText = directDelay;

    document.getElementById('dtnDelivered').innerText = `${dtnDelivered} / ${totalMessages}`;
    document.getElementById('dtnDelay').innerText = dtnDelay;
});
