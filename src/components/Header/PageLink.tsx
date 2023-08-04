import "./PageLink.css";

type PageLinkProps = {
  label: string;
  address: string;
};

export default function PageLink(props: PageLinkProps) {
  return (
    <>
      <div className="PageLink">
        <a href={props.address}>{props.label}</a>
      </div>
    </>
  );
}
