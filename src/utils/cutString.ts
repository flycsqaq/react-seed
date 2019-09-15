/** @format */

interface Ellipsis {
    DOM: HTMLElement;
    text: string;
    lines?: number;
    suffix?: string;
}

interface Cut {
    totalHeight: number;
    totalText: string;
    step: number;
    text: string;
}

interface CutDom extends Cut {
    DOM: HTMLElement;
    suffix: string;
}

interface CutString extends Cut {
    matchHeight: number;
}

const createHiddenDid = () => {
    const emptyElement = document.createElement('div');
    emptyElement.style.visibility = 'hidden';
    emptyElement.style.zIndex = '-999';
    emptyElement.style.opacity = '0';
    return emptyElement;
};

const handleCutString = ({
    totalHeight,
    matchHeight,
    totalText,
    step,
    text,
}: CutString) => {
    if (matchHeight <= totalHeight && step === 1) {
        return {
            text,
            step,
            isEnd: true,
        };
    }
    const nextStep = Math.ceil(step / 2);
    const matchText = totalText.substring(
        0,
        matchHeight <= totalHeight
            ? text.length + nextStep
            : text.length - nextStep,
    );
    if (text === matchText) {
        return {
            text: matchText,
            step: nextStep,
            isEnd: true,
        };
    }
    return {
        text: matchText,
        step: nextStep,
        isEnd: false,
    };
};

const handleCut = ({
    DOM,
    totalText,
    totalHeight,
    suffix,
    text,
    step,
}: CutDom): string => {
    const matchHeight = (DOM as HTMLElement).offsetHeight;
    const result = handleCutString({
        totalHeight,
        matchHeight,
        totalText,
        step,
        text,
    });
    if (result.isEnd) {
        return result.text;
    } else {
        DOM.innerHTML = `${result.text}${suffix}`;
        return handleCut({
            DOM,
            totalText,
            totalHeight,
            suffix,
            text: result.text,
            step: result.step,
        });
    }
};

export const handleEllipsis = ({
    DOM,
    text,
    lines = 1,
    suffix = '...',
}: Ellipsis): string => {
    if (!DOM || !text) return '';
    const lineHeight = Number.parseInt(
        getComputedStyle(DOM).lineHeight as string,
        10,
    );
    const totalHeight = lineHeight * (lines > 0 ? lines : 0);
    let el: HTMLElement | null = createHiddenDid();
    el.innerHTML = text;
    DOM.appendChild(el);
    const matchHeight: number = el.offsetHeight;
    if (matchHeight <= totalHeight) {
        DOM.removeChild(el);
        return text;
    }
    el.innerHTML = '';
    DOM.appendChild(el);
    let step = Math.ceil(text.length / 2);
    let matchText = text.substring(0, step);
    el.innerHTML = `${matchText}${suffix}`;
    const result = handleCut({
        DOM: el,
        totalHeight,
        totalText: text,
        step,
        text: matchText,
        suffix,
    });
    DOM.removeChild(el);
    el = null;
    return `${result}${suffix}`;
};
