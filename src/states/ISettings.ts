import { Theme } from '@material-ui/core';

// export const Theme = {
//     Light: 'Light',
//     Dark: 'Dark',
// } as const;

// // 以下は type Card = "clubs" | "diamonds" | "hearts" | "spades" と同じ
// type Theme = typeof Theme[keyof typeof Theme];

export default interface ISettings {
    theme: Theme;
}
