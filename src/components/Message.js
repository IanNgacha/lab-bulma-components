import "bulma/css/bulma.css";
const bulmaClasses = {
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger",
  isPrimary: "is-primary",
};
export default function Message(props) {
  const classNames = ["message"];

  Object.keys(props).forEach((key) => {
    if (bulmaClasses[key]) {
      classNames.push(bulmaClasses[key]);
    }
  });
  return (
    <article className={classNames.join(" ")}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
}
