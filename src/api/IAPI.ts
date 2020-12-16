export default interface IAPI {
    sample: (arg: string) => void;
    hello: () => void;
}
// window オブジェクトに、core の定義を追加する。
declare global {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface Window {
        api: IAPI;
    }
}
