// assets/ts/navigation.ts
export function moveLight(target) {
    const light = document.querySelector('.nav__light');
    light.style.left = `${target.offsetLeft - target.offsetWidth / 4}px`;
}

export function activeLink(linkActive) {
    const links = document.querySelectorAll('.nav__link');
    links.forEach((link) => {
        link.classList.remove('active');
    });
    linkActive.classList.add('active');
}

export let location: string;

if (typeof window !== "undefined") {
    location = window.location.href;
}
