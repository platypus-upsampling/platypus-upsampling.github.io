document.addEventListener("DOMContentLoaded", function () {
	const sliderContainers = document.querySelectorAll(".slider-container");

	sliderContainers.forEach((container) => {
		let slideIndex = 0;
		const slides = container.querySelectorAll(".slide");
		const slidesWrapper = container.querySelector(".slides-wrapper");

		function showSlideInfo(index) {
			const slideInfo = slides[index].querySelector(".slide-info");
			slideInfo.style.opacity = "1";
			setTimeout(() => {
				slideInfo.style.opacity = "0";
			}, 1000); // 1.5초 후에 fade out
		}

		function updateSlidePosition() {
			slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
			showSlideInfo(slideIndex);
		}

		function changeSlide(n) {
			slideIndex += n;
			if (slideIndex >= slides.length) {
				slideIndex = 0;
			} else if (slideIndex < 0) {
				slideIndex = slides.length - 1;
			}
			updateSlidePosition();
		}

		// 화살표 버튼에 이벤트 리스너 추가
		const prevButton = container.querySelector(".prev");
		const nextButton = container.querySelector(".next");

		prevButton.addEventListener("click", () => changeSlide(-1));
		nextButton.addEventListener("click", () => changeSlide(1));

		// 초기 위치 설정 및 첫 번째 슬라이드 정보 표시
		updateSlidePosition();
	});
});
