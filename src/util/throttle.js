export function throttle(handlerFunc, timeout = 66) {
    let resizeTimeout;
    if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            handlerFunc();
            // The actualResizeHandler will execute at a rate of 15fps
        }, timeout);
    }
}