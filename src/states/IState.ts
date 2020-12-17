import IUser from './IUser';
import ISettings from './ISettings';

export interface IState {
    user: IUser;
    settings: ISettings;
    // state が増えたら ここに追加する。
}
