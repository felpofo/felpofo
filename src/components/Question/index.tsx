import cx from "classnames";

import "./styles.scss";

interface QuestionProps extends React.HTMLAttributes<HTMLElement> {
  value?: string;
  setvalue?: React.Dispatch<React.SetStateAction<string>>;
  handlekeydown?: React.KeyboardEventHandler<HTMLElement>;
  textarea?: boolean;
}

export function Question(props: QuestionProps) {
  return (
    <div className={cx("question", props.className)}>
      <div className="text">{props.children}</div>
      {props.value !== undefined &&
          props.setvalue !== undefined &&
          props.handlekeydown !== undefined &&
          (props.textarea ? (
            <textarea
              value={props.value}
              onChange={(event) => props.setvalue!(event.target.value)}
              onKeyDown={props.handlekeydown}
            />
          ) : (
            <input
              autoFocus
              type="text"
              value={props.value}
              onChange={(event) => props.setvalue!(event.target.value)}
              onKeyDown={props.handlekeydown}
            />
          ))}
    </div>
  );
}
