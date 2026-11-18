// Chuyển trang mượt: mờ dần rồi mới sang trang mới
document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.href.indexOf('#') > -1) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function(){ window.location.href = a.href; }, 420);
});

// Quay lại bằng nút Back thì không bị kẹt ở trạng thái mờ
window.addEventListener('pageshow', function(){ document.body.classList.remove('leaving'); });
