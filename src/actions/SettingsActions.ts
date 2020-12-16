import { actionCreatorFactory } from 'typescript-fsa';
import ISettings from '../states/ISettings';

// action creator を作成する
// 引数は、アクションのグループごとに一意
// ファイル単位で、1つの creator があれば良い
const actionCreator = actionCreatorFactory('settings-action');

// アクションの定義
// 引数は（同じ creator から生成される）アクションごとに一意
export const changeSettingsAction = actionCreator<Partial<ISettings>>(
    'change-settings',
);
