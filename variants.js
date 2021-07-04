// Costum easing
let easing = [0.6, -0.05, 0.01, 0.99];
// Custom variants
export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const staggerFast = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};

export const fadeInSlide = {
    initial: {
        x: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};

export const imgPop = {
    initial: {
        x: 60,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    transition: {
        delay: 0.2
    }
};

export const imgSlide = {
    initial: {
        x: 200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    transition: {
        delay: 0.2
    }
};
