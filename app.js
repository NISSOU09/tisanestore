/* ═══════════════════════════════════════════════════════════════
   PROTOTYPE PRODUCT SCRIPT (Minimal Single-Product Handler)
   ═══════════════════════════════════════════════════════════════ */
'use strict';

let unitPrice = 1800;
let quantity = 1;

function fmtPrice(amount) {
  return Number(amount).toLocaleString('ar-DZ') + ' د.ج';
}

function updateTotals() {
  const total = unitPrice * quantity;
  const totalEl = document.getElementById('summaryTotal');
  const priceEl = document.getElementById('productPrice');

  if (totalEl) totalEl.textContent = fmtPrice(total);
  if (priceEl) priceEl.textContent = fmtPrice(unitPrice);
}

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  const qtyEl = document.getElementById('qtyNum');
  if (qtyEl) qtyEl.textContent = quantity;
  updateTotals();
}

function selectVariant(price, btnElement) {
  unitPrice = price;
  document.querySelectorAll('.variant-chip').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  updateTotals();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function submitPrototypeOrder() {
  const name = (document.getElementById('clientName')?.value || '').trim();
  const phone = (document.getElementById('clientPhone')?.value || '').trim();

  if (!name || !phone) {
    showToast('⚠️ يُرجى إدخال الاسم ورقم الهاتف للمتابعة');
    return;
  }

  // Purely a client-facing visual prototype simulation
  showToast('✓ تم تأكيد تسجيل الطلب (نسخة تجريبية فقط)');
  
  // Clear inputs
  document.getElementById('clientName').value = '';
  document.getElementById('clientPhone').value = '';
  const addr = document.getElementById('clientAddress');
  if (addr) addr.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  updateTotals();
});