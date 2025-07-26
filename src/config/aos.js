import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
    AOS.init({
        duration: 1000, // вақти анимация (ихтиёрӣ)
        once: true,     // танҳо як маротиба аниматсия мешавад
    });
};