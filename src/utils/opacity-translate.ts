import { animate } from "animejs";

function translate_opacity_1(element: HTMLElement, seconds: number) {
  /* interface Keyframes {
    opacity: number[];
    translate: (string | number)[];
  } */
  const keyframes: Keyframe[] = [
    { opacity: 0, translate: "-100px" },
    { opacity: 1, translate: "0px" },
  ];

  /* {opacity: [0, 1],
    translate: ["0 50px", 0],
  }; */
  const options = {
    duration: seconds * 1000,
    easing: "ease",
  };
  element.animate(keyframes, options);
}

function translate_opacity_2(element: HTMLElement, seconds: number) {
  /* interface Keyframes {
    opacity: number[];
    translate: (string | number)[];
  } */
  const keyframes: Keyframe[] = [
    { opacity: 0, translate: "100px" },
    { opacity: 1, translate: "0px" },
  ];

  /* {opacity: [0, 1],
    translate: ["0 50px", 0],
  }; */
  const options = {
    duration: seconds * 1000,
    easing: "ease",
  };
  element.animate(keyframes, options);
}
function fuyofuyo_1(element: HTMLElement, seconds: number) {
  const keyframes: Keyframe[] = [
    { borderRadius: "20% 50% 50% 70%/50% 50% 70% 50%" },
    { borderRadius: "50% 20% 50% 50%/40% 40% 60% 60%" },
    { borderRadius: "50% 40% 20% 40%/40% 50% 50% 80%" },
    { borderRadius: "50% 50% 50% 20%/40% 40% 60% 60%" },
  ];
  const options: KeyframeAnimationOptions = {
    duration: seconds * 1000,
    direction: "alternate",
    iterations: Infinity,
  };
  element.animate(keyframes, options);
}
function fuyofuyo_2(element: HTMLElement, seconds: number) {
  const keyframes: Keyframe[] = [
    { borderRadius: "20% 50% 50% 70%/50% 50% 70% 50%" },
    { borderRadius: "70% 20% 50% 50%/50% 50% 50% 70%" },
    { borderRadius: "50% 70% 20% 50%/70% 50% 50% 50%" },
    { borderRadius: "50% 50% 70% 20%/50% 70% 50% 50%" },
  ];
  const options: KeyframeAnimationOptions = {
    duration: seconds * 1000,
    direction: "alternate",
    iterations: Infinity,
  };
  element.animate(keyframes, options);
}
function verticalRotate(element: HTMLElement, text_btn_2: HTMLElement) {
  animate(element, {
    x: ["100", "0"],
    width: [75, 75],
    borderRadius: 64,
    rotate: [".75turn", "0turn"],
    easing: "easeInOutQuad",
    duration: 1000,
    onComplete: function () {
      if (text_btn_2) {
        text_btn_2.classList.remove("hidden");
      }
    },
  });
}

// Start animation
export {
  translate_opacity_1,
  translate_opacity_2,
  fuyofuyo_1,
  fuyofuyo_2,
  verticalRotate,
};
