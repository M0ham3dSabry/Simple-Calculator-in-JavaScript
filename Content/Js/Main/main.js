// الوظيفة لإضافة القيم إلى شاشة العرض
function appendToDisplay(value) {
    const display = document.getElementById("display"); // اختيار العنصر عند الحاجة
    display.value += value; // إضافة القيمة إلى النص الحالي في شاشة العرض
}

// الوظيفة لمسح شاشة العرض بالكامل
function clearDisplay(value) {
    const display = document.getElementById("display");
    display.value = ""; // تعيين قيمة شاشة العرض إلى فارغة
}

// الوظيفة لحذف آخر حرف من شاشة العرض
function deleteLast(value) {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // إزالة آخر حرف من النص
}

// الوظيفة لحساب النتيجة
function calculateResult() {
    const display = document.getElementById("display");
    try {
        // استبدال eval بتحليل التعبيرات الرياضية
        const result = Function(`'use strict'; return (${display.value})`)(); // تقييم التعبير
        display.value = result;
    } catch (error) {
        display.value = "Error"; // في حالة وجود خطأ، عرض "Error"
    }
}
