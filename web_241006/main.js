// 로그인 폼 제출 이벤트
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Logged in!");
    window.location.href = "main.html"; // 로그인 후 메인 페이지로 이동
});


// 프로필 사진 미리보기 기능
document.getElementById("profile-picture").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById("profile-picture-preview");

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "default-profile.svg";  // 기본 이미지로 리셋
    }
});
