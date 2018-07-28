
export const INPUT_UPDATE = 'INPUT_UPDATE';

export const updateInput = (input) => {
    return {
        type: INPUT_UPDATE,
        input: input
    };
}