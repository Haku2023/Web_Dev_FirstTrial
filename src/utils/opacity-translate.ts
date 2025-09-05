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
export { translate_opacity_1, translate_opacity_2 };
