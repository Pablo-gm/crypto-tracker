
// https://github.com/tradingview/lightweight-charts

export const green = {
    topColor: "rgba(16, 202, 147, 0.6)",
    bottomColor: "rgba(16, 202, 147, 0)",
    lineColor: "rgba(16, 202, 147, 1)",
}

export const red = {
    topColor: "rgba(242, 87, 103, 0.6)",
    bottomColor: "rgba(242, 87, 103, 0.0)",
    lineColor: "rgba(242, 87, 103, 1)",
}

export const smallChart = {
    mainOptions: { 
        width: 120, 
        height: 40,
        priceScale: { position: 'none'  },
        crosshair: {
            vertLine: { visible: false, labelVisible: false },
            horzLine: { visible: false, labelVisible: false }
        },
    },
    applyOptions: {
        timeScale: {
            visible: false,
        },
        grid: {
            vertLines: {
                visible: false,
            },
            horzLines: {
                visible: false,
            },
        },
        handleScroll: false,
        handleScale: false,
        layout: {
            background: {
                color: 'transparent',
            },
        },
    },
    greenArea: {
        topColor: green.topColor,
        bottomColor: green.bottomColor,
        lineColor: green.lineColor,
        lineWidth: 2,
        priceScaleId: '', priceLineVisible: false, crosshairMarkerVisible: false
    },
    redArea: {
        topColor: red.topColor,
        bottomColor: red.bottomColor,
        lineColor: red.lineColor,
        lineWidth: 2,
        priceScaleId: '', priceLineVisible: false, crosshairMarkerVisible: false
    }

}