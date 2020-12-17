import React, { useMemo, useCallback } from 'react';

interface IProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    onChangeText: (value: string) => void;
}

const TextBox: React.FC<IProps> = props => {
    // -(c)
    // ラベルコンポーネントをメモ化して毎回判定しないようにする
    const label = useMemo(() => {
        // -(d)
        // ラベルが設定されていない場合は、 label を出力しない
        return !!props.label ? <label>{props.label}</label> : null;
    }, [props.label]);
    const onValueChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            // --(e)
            const value = e.currentTarget.value;
            props.onChangeText(value);
        },
        [props.onChangeText],
    );
    return (
        <span>
            {label /* --(f) */}
            <input
                name="username"
                type={props.type /* --(g)*/}
                value={props.value /* --(h) */}
                onChange={onValueChange}
            />
        </span>
    );
};

export default TextBox;
