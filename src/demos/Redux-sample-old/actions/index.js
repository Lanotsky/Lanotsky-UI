export const flipColor = (value) => ({
    type: 'FLIP_COLOR',
    isDefault: value,
});

export const logText = (value) => ({
    type: 'LOG',
    text: value
});