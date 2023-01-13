// 在此处添加您的代码
namespace utils {


    const palette = hex`0F0D0A0B0E0408060C060B0C0F0B0C0F`

    let screenRowsBuffer : Buffer
    let maskRowsBuffer : Buffer


    export function shadeImage(target: Image, left: number, top: number, mask: Image) {
        if (!screenRowsBuffer || screenRowsBuffer.length < target.height) {
            screenRowsBuffer = pins.createBuffer(target.height);
        }
        if (!maskRowsBuffer || maskRowsBuffer.length < target.height) {
            maskRowsBuffer = pins.createBuffer(mask.height);
        }

        let targetX = left | 0;
        let targetY = top | 0;
        let y: number;
        let x: number;

        for (x = 0; x < mask.width; x++, targetX++) {
            if (targetX >= target.width) break;
            else if (targetX < 0) continue;

            mask.getRows(x, maskRowsBuffer);
            target.getRows(targetX, screenRowsBuffer);

            for (y = 0, targetY = top | 0; y < mask.height; y++, targetY++) {
                if (targetY >= target.height) break;
                else if (targetY < 0) continue;

                if (maskRowsBuffer[y]) screenRowsBuffer[targetY] = palette[screenRowsBuffer[targetY]];
            }
            target.setRows(targetX, screenRowsBuffer)
        }
    }

}