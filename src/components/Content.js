import './Content.css';

export default function Content({ video }) {
  return (
    <section className="content">
      <span className="content__video">{video}</span>
    </section>
  );
}
